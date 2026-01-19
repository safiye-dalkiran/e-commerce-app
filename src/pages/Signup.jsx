import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../store/actions/clientActions';
import { AxiosInstance } from '../api/axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const roles = useSelector((state) => state.client.roles);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: "all",
    defaultValues: { role_id: "3" }
  });

  const selectedRoleId = watch("role_id");


  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const onSubmit = (data) => {
    setLoading(true);

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.store_tax_no,
        bank_account: data.store_bank_account
      };
    }

    AxiosInstance.post('/signup', payload)
      .then(() => {
        toast.success("You need to click link in email to activate your account!");
        navigate("/");
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "Kayıt hatası!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-xl mx-auto my-16 p-8 bg-white shadow-2xl rounded-2xl font-montserrat">
      <h2 className="text-3xl font-bold text-[#252B42] mb-8 text-center uppercase">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name: Min 3 karakter */}
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">Name *</label>
          <input
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
            className={`w-full p-4 border rounded-md outline-none ${errors.name ? 'border-red-500' : 'border-[#BDBDBD]'}`}
          />
          {errors.name && <p className="text-red-500 text-xs font-bold mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Validation */}
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">Email *</label>
          <input type="email" {...register("email", { required: "Email required", pattern: /^\S+@\S+$/i })}
            className="w-full p-4 border border-[#BDBDBD] rounded-md" />
        </div>

        {/* Password Rules */}
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">Password *</label>
          <input type="password"
            {...register("password", {
              required: "Required",
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })}
            className="w-full p-4 border border-[#BDBDBD] rounded-md" />
        </div>

        {/* Password Match */}
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">Confirm Password *</label>
          <input type="password" {...register("confirm_password", { validate: v => v === watch("password") || "Match error" })}
            className="w-full p-4 border border-[#BDBDBD] rounded-md" />
        </div>

        {/* Role Select */}
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">Role</label>
          <select {...register("role_id")} className="w-full p-4 border border-[#BDBDBD] rounded-md bg-white">
            {roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)}
          </select>
        </div>

        {/* Store Fields (Dinamik) */}
        {selectedRoleId === "2" && (
          <div className="p-6 bg-[#FAFAFA] rounded-md border-l-4 border-[#23A6F0] space-y-4">
            <input placeholder="Store Name" {...register("store_name", { required: true, minLength: 3 })} className="w-full p-3 border rounded" />
            <input placeholder="Store Phone (+90...)" {...register("store_phone", { required: true, pattern: /^(\+90|0)?5\d{9}$/ })} className="w-full p-3 border rounded" />
            <input placeholder="Tax ID (TXXXXVXXXXXX)" {...register("store_tax_no", { required: true, pattern: /^T\d{4}V\d{6}$/ })} className="w-full p-3 border rounded" />
            <input placeholder="IBAN (26 chars)" {...register("store_bank_account", { required: true, minLength: 26 })} className="w-full p-3 border rounded" />
          </div>
        )}

        <button type="submit" disabled={!isValid || loading} className="w-full py-4 bg-[#23A6F0] text-white font-bold rounded-md flex justify-center items-center gap-3 disabled:bg-[#BDBDBD]">
          {loading && <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>}
          {loading ? "REGISTERING..." : "SIGN UP"}
        </button>
      </form>
    </div>
  );
};

export default Signup;