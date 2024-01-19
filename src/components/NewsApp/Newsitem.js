import React from 'react';
import fallbackImage from '../../components/news24.png'; // Import the fallback image

const Newsitem = ({ title, description, img, url }) => {
  return (
    <li className='news-item'>
      <div className='news-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          Read More
        </a>
      </div>
      <div className='image-container'>
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <img src={fallbackImage} alt={title} />
        )}
      </div>
    </li>
  );
};

export default Newsitem;
