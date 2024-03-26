import React, { useState } from 'react';
// import ai from '../../media/hair/h14.jpg';
import emailjs from '@emailjs/browser';
import './header.css';
import SwiperMain from '../../components/Swiper/Swiper';


const Header = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_5ev9f0z';
    const templateId = 'template_7ep6any';
    const publicKey = 'UvMkb3OmZ1HVfa3oK';

    const templateParams = {
      from_email : email,
      to_name : 'itmustbeginger'
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      alert('Request sent successfully!', response);
      setEmail('');
    })
    .catch((error) => {
      alert('Error sending request, please try again!', error)
    })
  }
  return (    
  <div className="mediaHeader section__padding" id="home">
  <div className="mediaHeader-content">
    <h1 className="gradient__text">Welcome to <i className='nameStyle'>itmustbeginger!</i></h1>
    <p>Say goodbye to long waits and last-minute appointments. Explore a range of classes taught by industry experts, from cutting-edge techniques to timeless styles. Join us today and elevate your skills in the art of hairdressing!</p>

    <form onSubmit={handleSubmit} className="mediaHeader-content__input">
      <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit">Get Started</button>
    </form>
  </div>

  <div className="mediaHeader-image">
    <SwiperMain/>
  </div>
</div>
  )
  };

export default Header;