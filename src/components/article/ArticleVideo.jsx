import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const ArticleVideo = ({ videoUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-video">
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default ArticleVideo;
