// Footer.js
import React from 'react';
import Logo from './Logo2';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white body-font">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Logo />
          <FooterLinks />
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">&copy; 2024 VIRTUAL VISAGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
