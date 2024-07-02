import React, { useState } from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  return (
    <nav className="flex justify-between items-center h-20 px-4 absolute top-0 left-0 z-10 w-full text-white">
      <img className="mt-16" src={logo} width={200} height={100} />
      <ul className="hidden rounded-2xl md:flex">
        <li>
          <div class="dropdown">
            <button class="dropbtn font-bold">
              Domestic
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Himachal Pradesh</a>
              <a href="#">Rajasthan</a>
              <a href="#">Kerela</a>
              <a href="#">Leh</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn font-bold">
              International
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="#">Europe</a>
              <a href="#">Dubai</a>
              <a href="#">Thailand</a>
              <a href="#">Singapore</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn font-bold">
              Beaches
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Bali</a>
              <a href="#">Maldives</a>
              <a href="#">Mauritius</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn font-bold">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="hidden md:flex"></div>
      {!navIsShown && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 md:hidden'
          onClick={toggleNavIsShown}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
          />
        </svg>
      )}
      {navIsShown && (
        <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
          <div className='flex justify-between'>
            <h1>Beaches.</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
              onClick={toggleNavIsShown}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <ul className=' mb-4'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Destinations</a>
            </li>
            <li>
              <a href=''>Travel</a>
            </li>
            <li>
              <a href=''>Views</a>
            </li>
            <li>
              <a href=''>Book</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
