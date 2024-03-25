import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './images';
import './brand.css';

const Brand = () => (
  <div>
    <div>
      <h1>Our features</h1>
    </div>
    <div className="mediaBrand section__padding">
    <div>
      <img alt='brand1' src={google} />
    </div>
    <div>
      <img alt='brand2' src={slack} />
    </div>
    <div>
      <img alt='brand3' src={atlassian} />
    </div>
    <div>
      <img alt='brand4' src={dropbox} />
    </div>
    <div>
      <img alt='brand5' src={shopify} />
    </div>
  </div>
  </div>
);

export default Brand;