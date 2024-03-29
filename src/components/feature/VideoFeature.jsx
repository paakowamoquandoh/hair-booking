import React from "react";
import "./feature.css";

const VideoFeature = ({ title, text, vid }) => (
  <div className="gpt3__features-container__feature">
    <div>
      <a href="/services" className="article">
        <video
          src={vid}
          autoPlay
          loop
          muted
          controls
        ></video>
      </a>
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

export default VideoFeature;
