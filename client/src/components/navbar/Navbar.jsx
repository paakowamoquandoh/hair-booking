import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <h1>Media<i className='goldText'>Rebrand</i></h1>
        </div>
        <div className="mediaNavbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Why Us</a></p>
          <p><a href="#prospects">Prospects</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>
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
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Why Us</a></p>
          <p><a href="#prospects">Prospects</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>
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
