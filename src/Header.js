import React from 'react';

import './App.scss';
import InputBox from './inputBox'

function Header() {

  return (

    <nav className="navbar is-transparent is-fixed-top headerBg">
  <div className="navbar-brand">
    <p className="navbar-item has-text-white">
     US News
    </p>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    
    <div className="navbar-end">
      <div className="navbar-item">
      <InputBox/>
      
      </div>
    </div>
  </div>
</nav>

  );
}

export default Header;
