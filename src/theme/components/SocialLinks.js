import React from 'react';
import './SocialLinks.css';

export default function SocialLinks({ links = [] }) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="yun-social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          className="yun-social-link"
          style={{ color: link.color }}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
        >
          {link.icon && <span className="yun-social-icon">{link.icon}</span>}
          <span className="yun-social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
