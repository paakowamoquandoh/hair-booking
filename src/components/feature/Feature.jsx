import React from 'react';
import './feature.css';

const Feature = ({ title, text, img }) => (
  <div className="gpt3__features-container__feature">
    <div>
      <img src={img} alt="" />
    </div>
    <div>
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
    </div>
  </div>
);

export default Feature;