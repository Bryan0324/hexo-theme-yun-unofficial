import React from 'react';
import './Banner.css';

export default function Banner({ title, subtitle, backgroundImage }) {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className="yun-banner" 
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="yun-banner-content">
        {/* Cloud decoration */}
        <div className="yun-banner-clouds">
          <div className="yun-cloud yun-cloud-1">☁️</div>
          <div className="yun-cloud yun-cloud-2">☁️</div>
          <div className="yun-cloud yun-cloud-3">☁️</div>
        </div>

        <h1 className="yun-banner-title">{title || '云游君的小站'}</h1>
        {subtitle && <p className="yun-banner-subtitle">{subtitle}</p>}
      </div>

      <button 
        className="yun-banner-go-down" 
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        ⬇️
      </button>
    </div>
  );
}
