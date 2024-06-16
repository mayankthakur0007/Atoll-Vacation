import React from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-20 px-4 absolute top-0 left-0 z-10 w-full text-white bg-transparent'>
      <img src={logo} width={300} height={150} className="absolute top-0 my-4" />
      <h5 className=' absolute right-0 m-2 p-3 text-2xl top-0 font-bold'>Phone: +91-7973358026</h5>
    </nav>
  );
};

export default Navbar;
