import React from 'react';
import Article from '../../components/article/Article';
import vid1 from '../../media/hair/h17.jpg';
import vid2 from '../../media/hair/h5.jpg';
import vid3 from '../../media/hair/h6.jpg';
import vid4 from '../../media/hair/h7.jpg';
import vid5 from '../../media/hair/h8.jpg';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">E- learning wig styling or<br /> representation.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={vid1} date="Layering & colouring" text="Master the interplay of layers and colors" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={vid2} date="Single/double frontal updo’s" text="Discover the art of updo's with our specialized classes" />
        <Article imgUrl={vid3} date="Traditional ponytail " text="From foundational techniques to advanced methods" />
        <Article imgUrl={vid4} date="Single and Double ponytail" text="Dive into techniques." />
        <Article imgUrl={vid5} date="Frontal installation" text="Embark on your journey to master the art of frontal installation with our comprehensive e-learning course" />
      </div>
    </div>
  </div>
);

export default Blog;
