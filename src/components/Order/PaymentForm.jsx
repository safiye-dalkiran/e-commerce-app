import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCard, updateCard } from '../../store/actions/clientActions';

const PaymentForm = ({ setShowForm, editCard }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (editCard) {
            setValue('card_no', editCard.card_no);
            setValue('expire_month', editCard.expire_month);
            setValue('expire_year', editCard.expire_year);
            setValue('name_on_card', editCard.name_on_card);
        }
    }, [editCard, setValue]);

    const onSubmit = (data) => {
        const { cvv, ...rest } = data;
        const cardData = {
            ...rest,
            expire_month: parseInt(rest.expire_month),
            expire_year: parseInt(rest.expire_year)
        };

        if (editCard) {
            dispatch(updateCard({ ...cardData, id: editCard.id }))
                .then(() => setShowForm(false));
        } else {
            dispatch(addCard(cardData))
                .then(() => setShowForm(false));
        }
    };

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#252B42] mb-6">Kart Bilgileri</h3>

            <div className="mb-4">
                <label className="block text-sm font-bold text-[#252B42] mb-2">Kart Numarası</label>
                <div className="relative">
                    <input
                        type="text"
                        {...register("card_no", {
                            required: "Kart numarası gereklidir",
                            minLength: { value: 16, message: "Kart numarası 16 hane olmalıdır" },
                            maxLength: { value: 16, message: "Kart numarası 16 hane olmalıdır" }
                        })}
                        className={`w-full border ${errors.card_no ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-gray-50`}
                    />
                    {errors.card_no && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.card_no.message}</span>}
                    <div className="absolute right-3 top-3 h-6 w-1 bg-red-400 rounded-full opacity-50"></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">Son Kullanma Tarihi</label>
                    <div className="flex gap-2">
                        <select
                            {...register("expire_month", { required: true })}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-gray-50"
                        >
                            <option value="">Ay</option>
                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <select
                            {...register("expire_year", { required: true })}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-gray-50"
                        >
                            <option value="">Yıl</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                    {(errors.expire_month || errors.expire_year) && <span className="text-xs text-red-500">Tarih gereklidir</span>}
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2 flex justify-between">
                        CVV
                        <i className="fas fa-info-circle text-gray-400 text-xs cursor-help" title="Kartın arkasındaki 3 haneli kod"></i>
                    </label>
                    <input
                        type="text"
                        {...register("cvv", {
                            required: "CVV gereklidir",
                            minLength: { value: 3, message: "3 hane olmalı" },
                            maxLength: { value: 4, message: "3-4 hane olmalı" }
                        })}
                        placeholder=""
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-gray-50"
                    />
                    {errors.cvv && <span className="text-xs text-red-500">{errors.cvv.message}</span>}
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-[#252B42] mb-2">Kart Üzerindeki İsim</label>
                <input
                    type="text"
                    {...register("name_on_card", { required: "Kart üzerindeki isim gereklidir" })}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-gray-50"
                />
            </div>

            <div className="flex items-center gap-2 mb-6">
                <input type="checkbox" id="3d-secure" className="w-5 h-5 border-gray-300 rounded text-[#23A6F0] focus:ring-[#23A6F0]" />
                <label htmlFor="3d-secure" className="text-sm font-bold text-[#252B42]">3D Secure ile ödemek istiyorum</label>
            </div>

            <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">Vazgeç</button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-[#23A6F0] text-white rounded font-bold hover:bg-blue-600 disabled:opacity-50">
                    {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                </button>
            </div>
        </form>
    );
};

export default PaymentForm;
