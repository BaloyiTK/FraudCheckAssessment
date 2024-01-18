import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isMobile, menuOpen }) => {
  return (
<>
  <div className={`${
    menuOpen && isMobile ? 'block absolute right-0 top-[20%] p-4 z-50' : !isMobile ? 'block' :'hidden'
  }`}>
    {isMobile ? (
      <nav className="bg-orange-500 text-white p-4 rounded-md shadow-md">
        <ul className='list-none'>
          <li className='mb-2'>
            <Link to="/" className="hover:text-gray-300 transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="/about" className="hover:text-gray-300 transition duration-300 ease-in-out">
              About
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="/contact" className="hover:text-gray-300 transition duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    ) : (
      <nav className="nav">
        <ul className='list-none'>
          <li className='mb-2'>
            <Link to="/" className="hover:text-gray-700 hover:font-bold transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="/about" className="hover:text-gray-700 hover:font-bold transition duration-300 ease-in-out">
              About
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="/contact" className="hover:text-gray-700 hover:font-bold transition duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )}
  </div>
</>

  );
};

export default Navbar;
