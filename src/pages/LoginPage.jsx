import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        // Thunk action dispatch
        dispatch(loginUser(data, navigate));
    };

    return (
        <div className="max-w-md mx-auto my-16 p-8 bg-white shadow-2xl rounded-2xl font-montserrat">
            <h2 className="text-3xl font-bold text-[#252B42] mb-8 text-center uppercase">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">Email *</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className={`w-full p-4 border rounded-md outline-none ${errors.email ? 'border-red-500' : 'border-[#BDBDBD]'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">Password *</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className={`w-full p-4 border rounded-md outline-none ${errors.password ? 'border-red-500' : 'border-[#BDBDBD]'}`}
                    />
                    {errors.password && <p className="text-red-500 text-xs font-bold mt-1">{errors.password.message}</p>}
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="remember"
                        {...register("remember")}
                        className="w-4 h-4"
                    />
                    <label htmlFor="remember" className="text-[#737373] font-bold text-sm cursor-pointer">Remember me</label>
                </div>

                <button type="submit" className="w-full py-4 bg-[#23A6F0] text-white font-bold rounded-md hover:bg-[#1a8cd8] transition">
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
