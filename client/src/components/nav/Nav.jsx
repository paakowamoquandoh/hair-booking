import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './nav.css';
import ginger from '../../media/icons/ginger.jpeg'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <img src={ginger} alt='icon' />
          <Link to="/">
          <h1>itmustbe<i className='goldText'>ginger</i></h1>
          </Link>
        </div>
        <div className="mediaNavbar-links_container">
          <p><a href="/allclasses">All Classes</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/booking">Booking</a></p>
          <p><a href="/contactus">Contact Us</a></p>
        </div>
      </div>
      <div className="mediaNavbar-sign">
        {/* <p>Sign in</p>
        <button type="button">Sign up</button> */}
        {user ? user.username : (
          <div className="navItems">
            <p className="">Register</p>
            <button className="navButton">Login</button>
          </div>
            )}
      </div>
      <div className="mediaNavbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mediaNavbar-menu_container scale-up-center">
          <div className="mediaNavbar-menu_container-links">
          <p><a href="/allclasses">All Classes</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/booking">Booking</a></p>
          <p><a href="/contactus">Contact Us</a></p>
          </div>
          <div className="mediaNavbar-menu_container-links-sign">
            {/* <p>Sign in</p>
            <button type="button">Sign up</button> */}
            {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
            )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
