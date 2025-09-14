import React from 'react';
import Feature from '../../components/feature/Feature';
import "./whyus.css";
import LogoFeature from '../../components/feature/LogoFeature';
import advertImg from '../../media/ginger/car5.jpg';
import advertImg1 from '../../media/ginger/classVid2.MOV'
import advertImg2 from '../../media/ginger/classVid1.MOV'
import advertImg3 from '../../media/ginger/classVid.MOV';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';

const WhyUs = () => {
  return (
    <div className="whyMedia section__margin" id="wgpt3">
    <div className="whyMedia-feature">
      <LogoFeature title="itmustbeginger" text="Discover the art of hairstyling with ease! Welcome to our premier hair booking service. Elevate your skills, explore new techniques, and unleash your creativity with our expert-led classes." />
      <img src={advertImg} alt=''/>
    </div>
    <div className="whyMedia-heading">
      <h1 className="gradient__text">Join us today and unlock your potential in the world of hairdressing!</h1>
      
      <span className='icons'>
          <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/ItmustbeGinger">
            <RiFacebookFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/it_must_be_ginger">
            <RiInstagramFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@WendySomuah">
            <RiYoutubeFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/ATQTGUSUE3QXG1">
            <RiWhatsappFill size={30}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ginger_makeupGH">
            <RiTwitterFill size={30}/>
          </a>
        </span>
      
    </div>
    <div className="whyMedia-container">
      <Feature vid={advertImg1} title="Bridal services" text="Build yourself and reflect your values to attract the right responses from your audience." />
      <Feature vid={advertImg2} title="Wig services" text="Providing Custom digital experiences." />
      <Feature vid={advertImg3} title="General salon services" text="Optimise your online using all types of digital media not limited to websites, banners and search engine." />
    </div>
  </div>
  )
}

export default WhyUs
