import React from 'react';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const FooterLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/" onClick={scrollToTop} className="">
        Home
      </Link>
      <Link to="/about" onClick={scrollToTop} className="hover:text-gray-300">
        About
      </Link>
      <Link to="/contact" onClick={scrollToTop} className="hover:text-gray-300">
        Contact
      </Link>
    </div>
  );
};

export default FooterLinks;

