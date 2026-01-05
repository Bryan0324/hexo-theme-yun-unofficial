import React from 'react';
import Footer from '@theme-original/Footer';
import './Footer.css';

export default function FooterWrapper(props) {
  const currentYear = new Date().getFullYear();
  const startYear = 2019; // From theme config

  return (
    <div className="yun-footer-wrapper">
      <Footer {...props} />
      <div className="yun-footer-extra">
        <div className="yun-footer-copyright">
          <span className="yun-footer-year">
            {startYear === currentYear ? startYear : `${startYear} - ${currentYear}`}
          </span>
          <span className="yun-footer-icon animated">☁️</span>
          <span className="yun-footer-text">云游君的小站</span>
        </div>
        <div className="yun-footer-powered">
          <span>Powered by </span>
          <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">
            Docusaurus
          </a>
          <span> with </span>
          <a href="https://github.com/Bryan0324/hexo-theme-yun-unofficial" target="_blank" rel="noopener noreferrer">
            Theme Yun
          </a>
        </div>
      </div>
    </div>
  );
}
