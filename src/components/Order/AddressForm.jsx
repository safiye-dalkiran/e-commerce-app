import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddress, updateAddress } from '../../store/actions/clientActions';

const AddressForm = ({ setShowForm, editAddress }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (editAddress) {
            setValue('title', editAddress.title);
            setValue('name', editAddress.name);
            setValue('surname', editAddress.surname);
            setValue('phone', editAddress.phone);
            setValue('city', editAddress.city);
            setValue('district', editAddress.district);
            setValue('neighborhood', editAddress.neighborhood);
            setValue('address', editAddress.address);
        }
    }, [editAddress, setValue]);

    const onSubmit = (data) => {
        if (editAddress) {
            dispatch(updateAddress({ ...data, id: editAddress.id }))
                .then(() => setShowForm(false));
        } else {
            dispatch(addAddress(data))
                .then(() => setShowForm(false));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-6 rounded-md border border-gray-200 mb-6">
            <h3 className="text-lg font-bold text-[#252B42] mb-4">{editAddress ? 'Update Address' : 'Add New Address'}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Address Title</label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                        placeholder="e.g. Home, Office"
                    />
                    {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Phone</label>
                    <input
                        {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]+$/, message: "Phone number is invalid" } })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                        placeholder="05..."
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Surname</label>
                    <input
                        {...register("surname", { required: "Surname is required" })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                    />
                    {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">City</label>
                    <select
                        {...register("city", { required: "City is required" })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                    >
                        <option value="">Select City</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">Izmir</option>
                    </select>
                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">District</label>
                    <input
                        {...register("district", { required: "District is required" })}
                        className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                    />
                    {errors.district && <span className="text-red-500 text-xs">{errors.district.message}</span>}
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-bold text-[#252B42] mb-1">Neighborhood</label>
                <input
                    {...register("neighborhood", { required: "Neighborhood is required" })}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0]"
                />
                {errors.neighborhood && <span className="text-red-500 text-xs">{errors.neighborhood.message}</span>}
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-[#252B42] mb-1">Address Details</label>
                <textarea
                    {...register("address", { required: "Address detail is required" })}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-[#23A6F0] min-h-[80px]"
                    placeholder="Street, building and door numbers..."
                ></textarea>
                {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}
            </div>

            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700 font-bold"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#23A6F0] text-white px-6 py-2 rounded font-bold hover:bg-[#1a8cd8] transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? 'Saving...' : 'Save Address'}
                </button>
            </div>
        </form>
    );
};

export default AddressForm;
