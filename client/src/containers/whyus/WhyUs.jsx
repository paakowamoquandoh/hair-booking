import React from 'react';
import Feature from '../../components/feature/Feature';
import "./whyus.css";

const WhyUs = () => {
  return (
    <div className="whyMedia section__margin" id="wgpt3">
    <div className="whyMedia-feature">
      <Feature title="MediaRebrand" text="We help you reach your audience in the right places at the right frequency at the right price. From Traditional media to digital media or an integrated mix." />
    </div>
    <div className="whyMedia-heading">
      <h1 className="gradient__text">Choose our revolutionary Digital experiences.</h1>
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
