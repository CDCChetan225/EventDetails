// Navbar.js

// import React, { useState } from 'react';
// import SideNav from './SideNav';
// import CustomContainer from './CustomContainer';
// import Card from './Card';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
        <nav className="bg-white-800 text-black p-4 h-20 w-full">
          <div className="container mx-auto flex justify-between items-center">  
            <div className="font-bold flex items-center md:text-xl ">
              <div>
                <img src="../..//public/inspiration-logo.png" className='h-10' alt="" />
              </div>
              <div className='ml-6'>
              Insipiration App
              </div>
            </div>
            <div className="flex gap-2">
              <button href="#" className="  hover:bg-[#00a4e556] transition-all duration-400 rounded-md border-2 border-transparent  p-2 w-32">
                Home
              </button>
              <Link to='/requestEvent'>
              <button href="#" className="  border-transparent   hover:bg-[#00a4e556] transition-all duration-400 rounded-md border-2  p-2 w-32  ">
                Request Event
              </button>
              </Link>
              <button className="bg-[#00a4e5d6] hover:bg-[#] transition-all duration-500 hover:text-black text-white border-transparent font-normal text-sm md:text-base leading-normal tracking-wider flex-shrink-0 fill-current text-black-500 mix-blend-darken rounded-md rgba(136, 54, 255, 0.59); md:p-1 md:px-2 p-0.25 px-0.5">
                Login/SignUp
              </button>
            </div>
          </div>
        </nav>
  )
};

export default Navbar;
