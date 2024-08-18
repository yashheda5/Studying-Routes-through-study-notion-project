import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function togglePasswordVisibility(field) {
    setShowPassword(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = { ...formData };
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className='flex  bg-richblack-800 p-1 gap-x-1 my-2 -translate-y-1 rounded-full max-w-max'>
        <button
          className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.0rem]'>
              First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder='Enter First Name'
              required
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.0rem]'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder='Enter Last Name'
              required
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>

        <div className='mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.0rem]'>
              Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>

        <div className='w-full flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword.password ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword.password ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {showPassword.confirmPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>
        </div>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Create Account
        </button>
      </form>
    </div>
  );
}
