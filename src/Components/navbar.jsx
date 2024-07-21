


import React, { useState } from 'react';
import Navlogo from '../Assets/navlogo.png';
import UserIcon from '../Assets/UserIcon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="bg-slate-50 relative h-[60px]">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-15 py-2">
          <img className="w-16 md:w-20 lg:w-28 ml-12" src={Navlogo} alt="Logo" />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex md:gap-6 lg:gap-10 text-slate-500 font-[outfit] text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Get the app</a></li>
            <li><a href="#">Add lab</a></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
          <div className="hidden md:flex gap-4 items-center">
            <h1 className="text-sm lg:text-base"><a href="#">Login/Sign up</a></h1>
            <img src={UserIcon} alt="User Icon" className="w-8 lg:w-10" />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
            <ul className="flex flex-col gap-2 text-slate-500 font-[outfit] text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Get the app</a></li>
              <li><a href="#">Add lab</a></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><a href="#">Login/Sign up</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

