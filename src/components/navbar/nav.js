import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, XCircle, Instagram, Facebook, Twitter } from 'react-feather';
import { menuList } from "./navLinks";
import "./nav.css";
import logo from "../../../src/media/icons/logo.png"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navItems">
     
      <h1 className="navLogo">
      <img src={logo} alt="logo"/>
        Las<i className="reColor">Vegas</i>{" "}
      </h1>

      <div className="menuIcon" onClick={toggleMenu}>
        {isMenuOpen ? <XCircle /> : <Menu />}
      </div>

      <ul className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
        {menuList.map((item, index) => {
          const isActive = location.pathname === item.url;
          const itemClassName = `${item.cName} ${isActive ? 'activeItem' : ''}`;

          return (
            <li key={index} className={itemClassName}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
       <ul className="socials">
        <li><a href="https://www.instagram.com/thelasvegasgh/"><Instagram/></a></li>
        <li><a href="https://web.facebook.com/profile.php?id=100069316577278"><Facebook/></a></li>
        <li><a href="https://twitter.com/LasLeisure2804"><Twitter/></a></li>
      </ul>
      </ul>

     
    </nav>
  );
}

export default NavBar;
