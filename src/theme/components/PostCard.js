import React from 'react';
import Link from '@docusaurus/Link';
import './PostCard.css';

export default function PostCard({ 
  title, 
  description, 
  permalink, 
  date, 
  tags = [],
  readingTime,
  thumbnail 
}) {
  return (
    <article className="yun-post-card">
      {thumbnail && (
        <Link to={permalink} className="yun-post-card-thumbnail">
          <img src={thumbnail} alt={title} loading="lazy" />
        </Link>
      )}
      
      <div className="yun-post-card-content">
        <Link to={permalink} className="yun-post-card-title-link">
          <h2 className="yun-post-card-title">{title}</h2>
        </Link>
        
        {description && (
          <p className="yun-post-card-description">{description}</p>
        )}
        
        <div className="yun-post-card-meta">
          {date && (
            <time className="yun-post-card-date" dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          
          {readingTime && (
            <span className="yun-post-card-reading-time">
              {Math.ceil(readingTime)} min read
            </span>
          )}
        </div>
        
        {tags && tags.length > 0 && (
          <div className="yun-post-card-tags">
            {tags.map((tag, index) => (
              <Link 
                key={index}
                to={`/tags/${tag}`}
                className="yun-post-card-tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
        
        <Link to={permalink} className="yun-post-card-read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
}
