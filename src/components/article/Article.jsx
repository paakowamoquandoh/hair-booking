import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <Link to="/allclasses">
          <p style={{ color: 'crimson' }}>Watch Now!</p>
        </Link>
    </div>
  </div>
);

export default Article;