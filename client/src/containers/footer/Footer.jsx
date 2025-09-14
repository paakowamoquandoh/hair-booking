import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">With hassle-free booking, Learn anytime, anywhere, at your own pace</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p><i>itmustbeginger</i> Accra, Ghana <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Services</p>
        <p>All Classes</p>
        <p>Make-Up</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><i>itmustbeginger</i> Accra,Ghana</p>
        <p>0209077790</p>
        <p>itmustbeginger.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 <i>itmustbeginger</i>. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;