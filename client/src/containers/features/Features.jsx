import React from 'react';
import FeaturesFeature from '../../components/feature/FeaturesFeature';
import './features.css';

const featuresData = [
  {
    title: 'Physical classes',
    text: 'Experience personalized learning with our one-on-one physical hair classes. Our expert instructors provide tailored guidance and hands-on training, ensuring you master the art of hairstyling at your own pace.',
  },
  {
    title: 'Virtual or Online Classes',
    text: 'Embark on an enriching journey from the comfort of your own space with our online hair classes. Our virtual platform offers interactive sessions led by industry experts, providing guidance and comprehensive instruction.',
  },
  {
    title: 'Short courses ',
    text: 'Discover the perfect blend of efficiency and expertise with our short hair courses. Designed to fit seamlessly into your schedule, these sessions offer focused instruction on specific techniques and styles.',
  },
  {
    title: 'One-on-one ',
    text: 'Experience personalized mastery with our one-on-one hair classes.',
  },
];

const Features = () => (
  <div className="mediafeatures section__padding" id="features">
    <div className="mediafeatures-heading">
      <h1 className="gradient__text">Check out our selection of classes taught by professionals.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="mediafeatures-container">
      {featuresData.map((item, index) => (
        <FeaturesFeature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;