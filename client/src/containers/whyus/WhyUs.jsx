import React from 'react';
import Feature from '../../components/feature/Feature';
import "./whyus.css";
import LogoFeature from '../../components/feature/LogoFeature';

const WhyUs = () => {
  return (
    <div className="whyMedia section__margin" id="wgpt3">
    <div className="whyMedia-feature">
      <LogoFeature title="itmustbeginger" text="Discover the art of hairstyling with ease! Welcome to our premier hair classes booking service. Elevate your skills, explore new techniques, and unleash your creativity with our expert-led classes." />
    </div>
    <div className="whyMedia-heading">
      <h1 className="gradient__text">Join us today and unlock your potential in the world of hairdressing!</h1>
      <p>-Social Media Icons-</p>
    </div>
    <div className="whyMedia-container">
      <Feature title="Brand Identity" text="Build yourself and reflect your values to attract the right responses from your audience." />
      <Feature title="Media Buy" text="Providing Custom digital experiences." />
      <Feature title="Digital Marketing" text="Optimise your online using all types of digital media not limited to websites, banners and search engine." />
    </div>
  </div>
  )
}

export default WhyUs
