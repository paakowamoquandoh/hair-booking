import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import ginger from '../../media/icons/ginger.jpg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <img src={ginger} alt='icon' />
          <h1>itmustbe<i className='goldText'>ginger</i></h1>
        </div>
        <div className="mediaNavbar-links_container">
         
          <p><a href="#wgpt3">All Classes</a></p>
          <p><a href="#prospects">Services</a></p>
          <p><a href="#features">Booking</a></p>
          <p><a href="#blog">Contact Us</a></p>
        </div>
      </div>
      <div className="mediaNavbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="mediaNavbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mediaNavbar-menu_container scale-up-center">
          <div className="mediaNavbar-menu_container-links">
          
          <p><a href="#wgpt3">All Classes</a></p>
          <p><a href="#prospects">Services</a></p>
          <p><a href="#features">Booking</a></p>
          <p><a href="#blog">Contact Us</a></p>
          </div>
          <div className="mediaNavbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
