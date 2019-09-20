import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';

const Navabar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='city tours company' />
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='/' className='nav-link active'>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navabar;
