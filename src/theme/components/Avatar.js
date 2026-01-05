import React from 'react';
import './Avatar.css';

export default function Avatar({ 
  url = '/yun.png', 
  rounded = true, 
  opacity = 1,
  status = null,
  alt = 'Avatar'
}) {
  return (
    <div className="yun-avatar-container">
      <img
        src={url}
        alt={alt}
        className={`yun-avatar ${rounded ? 'yun-avatar-rounded' : ''}`}
        style={{ opacity }}
      />
      {status && status.enable && (
        <div className="yun-avatar-status">
          <span className="yun-avatar-status-emoji">{status.emoji || '😊'}</span>
          {status.message && (
            <div className="yun-avatar-status-message">{status.message}</div>
          )}
        </div>
      )}
    </div>
  );
}
