import React from 'react';
import logo from '../../assets/logo.svg';
import Navigation from './Navigation';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" />
    <Navigation />
  </div>
);

export default Header;
