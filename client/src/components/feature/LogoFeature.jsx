import React from 'react';
import './logoFeature.css';

const LogoFeature = ({ title, text }) => (
  <div className="gpt__features-container__feature">
    <div className="gpt__features-container__feature-title">
      <div />
      <h1><i>{title}</i></h1>
    </div>
    <div className="gpt__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default LogoFeature;