import React from 'react';
import Feature from '../../components/feature/Feature';
import "./whyus.css";
import LogoFeature from '../../components/feature/LogoFeature';
import advertImg from '../../media/hair/h16.jpg';
import advertImg1 from '../../media/hair/h3.jpg'
import advertImg2 from '../../media/hair/paul-siewert-dnpa8k6TGRE-unsplash.jpg'
import advertImg3 from '../../media/hair/h15.jpg';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';

const WhyUs = () => {
  return (
    <div className="whyMedia section__margin" id="wgpt3">
    <div className="whyMedia-feature">
      <LogoFeature title="itmustbeginger" text="Discover the art of hairstyling with ease! Welcome to our premier hair classes booking service. Elevate your skills, explore new techniques, and unleash your creativity with our expert-led classes." />
      <img src={advertImg} alt=''/>
    </div>
    <div className="whyMedia-heading">
      <h1 className="gradient__text">Join us today and unlock your potential in the world of hairdressing!</h1>
      
      <span className='icons'>
          <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/ItmustbeGinger">
            <RiFacebookFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/">
            <RiInstagramFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@WendySomuah">
            <RiYoutubeFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/">
            <RiWhatsappFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ginger_makeupGH">
            <RiTwitterFill size={30}/>
          </a>
        </span>
      
    </div>
    <div className="whyMedia-container">
      <Feature img={advertImg1} title="Bridal services" text="Build yourself and reflect your values to attract the right responses from your audience." />
      <Feature img={advertImg2} title="Wig services" text="Providing Custom digital experiences." />
      <Feature img={advertImg3} title="General salon services" text="Optimise your online using all types of digital media not limited to websites, banners and search engine." />
    </div>
  </div>
  )
}

export default WhyUs
