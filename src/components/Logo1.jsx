import React from 'react';
import logo from '../assets/logos/logo2.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/"> 
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </div>
  );
};

export default Logo;
