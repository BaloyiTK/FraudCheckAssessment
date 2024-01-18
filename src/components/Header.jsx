import React, { useState, useEffect } from 'react';
import Logo from './Logo1';
import Navbar from './Navbar';
//import '../styles/Header.css'; // Include your additional CSS for non-layout styling

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold based on your design
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<header className={`flex justify-between items-center bg-gradient-to-r from-white via-white to-orange-500 shadow-md h-[100px] md:bg-gradient-to-r md:from-white md:via-white md:to-orange-500 md:bg-white`}>
  <Logo />
  
  {isMobile &&   
    <div className="mobile-menu">
      <button className="mobile-menu-icon text-black" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  }

  <Navbar isMobile={isMobile} menuOpen={menuOpen} />
</header>




  );
};

const MenuIcon = () => (
  <div className="menu-icon">
    {/* Insert your menu icon component or SVG here */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
   
  </div>
);

const CloseIcon = () => (
  <div className="close-icon">
    {/* Insert your close icon component or SVG here */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7a1 1 0 1 0-1.42 1.42L10.59 12 5.7 16.88a1 1 0 0 0 1.42 1.42L12 13.41l4.88 4.88a1 1 0 0 0 1.42-1.42L13.41 12l4.88-4.88a1 1 0 0 0 0-1.41z" />
    </svg>
   
  </div>
);

export default Header;
