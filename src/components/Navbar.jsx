import React, { useState } from 'react';

const Navbar = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  return (
    <nav className='flex justify-between items-center h-20 px-4 absolute top-0 left-0 z-10 w-full text-white bg-transparent'>
      <h1>Atoll Vacations</h1>
    </nav>
  );
};

export default Navbar;
