import React from 'react';
import { Template } from '../Components/Template';
import SignupImg from '../assets/signup.png';

export const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with Study Notion for free"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={SignupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}
