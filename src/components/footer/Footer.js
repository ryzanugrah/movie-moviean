import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/list-movies">List Movies</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <p>Copyright © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
