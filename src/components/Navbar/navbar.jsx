import React from 'react';
import './Navbar.css';
import { Heading1, Heading2 } from '..';
import logo from '../../../public/Component6.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Stats</a></li>
          <li><a href="#">Timeline</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="register-button">
        <a href="#">Register</a>
      </div>
    </div>
  );
}

export default Navbar;
