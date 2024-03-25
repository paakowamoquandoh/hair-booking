import React from 'react';
import ai from '../../media/hair/h14.jpg';
import './header.css';


const Header = () => (
  <div className="mediaHeader section__padding" id="home">
    <div className="mediaHeader-content">
      <h1 className="gradient__text">Welcome to <i className='nameStyle'>itmustbeginger!</i></h1>
      <p>Say goodbye to long waits and last-minute appointments. Explore a range of classes taught by industry experts, from cutting-edge techniques to timeless styles. Join us today and elevate your skills in the art of hairdressing!</p>

      <div className="mediaHeader-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="mediaHeader-image">
      <img alt='ai' src={ai} />
    </div>
  </div>
);

export default Header;