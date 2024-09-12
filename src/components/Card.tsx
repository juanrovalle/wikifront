// src/components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  excerpt: string;
  thumbnail?: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, excerpt, thumbnail, url }) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {thumbnail && <img src={thumbnail} alt={title} />}
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </a>
    </div>
  );
};

export default Card;
