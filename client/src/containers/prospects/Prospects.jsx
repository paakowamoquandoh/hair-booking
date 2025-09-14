import React from 'react';
import possibilityImage from '../../media/ginger/g2.JPG';
import "./prospects.css";

const Prospects = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Choose your plan to Get Started</h4>
      <h1 className="gradient__text">Join our community of <br />  passionate stylists and embark on a journey to mastering the art of bridal beauty</h1>
      <p>Make bridal dreams come true with our top-rated hair and makeup classes! Delve into the world of bridal styling and learn from industry-leading experts who are dedicated to helping you succeed.</p>
      <h4>Choose your plan to Get Started</h4>
    </div>
  </div>
  )
}

export default Prospects
