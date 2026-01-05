import React, { useState } from 'react';
import './Reward.css';

export default function Reward({ 
  enable = true,
  icon = '💰',
  comment = "I'm so cute. Please give me money.",
  methods = []
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!enable || methods.length === 0) {
    return null;
  }

  return (
    <div className="yun-reward">
      <button 
        className="yun-reward-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Show reward options"
      >
        <span className="yun-reward-icon">{icon}</span>
        <span className="yun-reward-text">{comment}</span>
      </button>

      {isOpen && (
        <div className="yun-reward-methods">
          {methods.map((method, index) => (
            <div key={index} className="yun-reward-method">
              {method.path ? (
                <div className="yun-reward-qrcode">
                  <img src={method.path} alt={method.name} />
                  <p style={{ color: method.color }}>{method.name}</p>
                </div>
              ) : method.link ? (
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yun-reward-link"
                  style={{ color: method.color }}
                >
                  {method.icon && <span className="yun-reward-method-icon">{method.icon}</span>}
                  <span>{method.name}</span>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
