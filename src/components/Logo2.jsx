// Logo.js
import React from 'react';
import logo from '../assets/logos/logo1.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="h-36 w-36 object-contain" />
      <span className="text-xl font-bold ml-2">VIRTUAL VISAGE</span>
    </div>
  );
};

export default Logo;
