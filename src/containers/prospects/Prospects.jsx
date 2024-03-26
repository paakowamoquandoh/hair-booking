import React from 'react';
import possibilityImage from '../../media/hair/h13.jpg';
import "./prospects.css";

const Prospects = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Join our community of <br />  passionate stylists and embark on a journey to mastering the art of bridal beauty</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Prospects
