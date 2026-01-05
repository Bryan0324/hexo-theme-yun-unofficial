import React from 'react';
import './CreativeCommons.css';

const LICENSE_INFO = {
  'by': 'Attribution',
  'by-nc': 'Attribution-NonCommercial',
  'by-nc-nd': 'Attribution-NonCommercial-NoDerivatives',
  'by-nc-sa': 'Attribution-NonCommercial-ShareAlike',
  'by-nd': 'Attribution-NoDerivatives',
  'by-sa': 'Attribution-ShareAlike',
  'zero': 'CC0 Public Domain',
};

export default function CreativeCommons({ 
  license = 'by-nc-sa',
  language = 'deed.en',
  post = true,
  showIcon = true 
}) {
  if (!post || !license) {
    return null;
  }

  const licenseUrl = license === 'zero' 
    ? `https://creativecommons.org/publicdomain/zero/1.0/${language}`
    : `https://creativecommons.org/licenses/${license}/4.0/${language}`;

  const licenseName = LICENSE_INFO[license] || license.toUpperCase();

  return (
    <div className="yun-creative-commons">
      <div className="yun-cc-content">
        {showIcon && (
          <a 
            href={licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="yun-cc-icon"
          >
            <span className="yun-cc-symbol">CC</span>
          </a>
        )}
        <div className="yun-cc-text">
          <p>
            This work is licensed under a{' '}
            <a 
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="yun-cc-link"
            >
              Creative Commons {licenseName} 4.0 International License
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
