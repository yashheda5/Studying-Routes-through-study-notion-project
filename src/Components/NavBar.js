import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NavBar = ({ isLoggedIn, setIsLoggedIn }) => { // Ensure consistent casing
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Logged out');
  };

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
      </Link>
      <nav>
        <ul className='flex text-richblack-100  gap-3'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
      <div className='flex items-center gap-x-4'>
        {!isLoggedIn && <Link to="/login"><button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button></Link>}
        {!isLoggedIn && <Link to="/signup"><button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Signup</button></Link>}
        {isLoggedIn && <Link to="/"><button onClick={handleLogout}                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Logout</button></Link>}
        {isLoggedIn && <Link to="/dashboard"><button                      className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button></Link>}
      </div>
      <ToastContainer />
    </div>
  );
};
