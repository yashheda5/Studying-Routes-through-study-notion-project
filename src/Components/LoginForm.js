import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault(); // Corrected the typo here
    setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter email id'
           className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </label>
      <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder='Enter Password'
                          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setPassword(prev => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
        </span>
        <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p></Link>
      </label>
      <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign in</button>
    </form>
  );
}
