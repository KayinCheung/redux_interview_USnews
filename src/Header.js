import React from 'react';
import InputBox from './inputBox'

function Header() {

  return (

    <nav className="navbar is-transparent is-fixed-top headerBg level">
    <div className="navbar-brand headerBg">
      <h1 className="navbar-item has-text-white">
      US News
      </h1>
      
    </div>
    <div className="navbar-menu is-active headerBg">
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

/*
*/