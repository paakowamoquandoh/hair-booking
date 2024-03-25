import React from 'react';
import ai from '../../media/icons/media2.webp';
import './header.css';

const Header = () => (
  <div className="mediaHeader section__padding" id="home">
    <div className="mediaHeader-content">
      <h1 className="gradient__text">Partner with our leading digital marketing agency<i>!</i></h1>
      <p>Make your Brand recognisable, differentiated and appealing to the target audience with styles to tone your voice.</p>

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