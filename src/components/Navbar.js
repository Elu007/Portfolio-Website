import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-50 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-16">
            <img className='h-10 w-10' src="/images/SEALogo.gif" alt="logo" />
            <h4 className='ml-2'>Sk Elaf Ahmed</h4>
          <div className="flex mt-4 md:mt-0 space-x-4 text-white">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Experience</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
