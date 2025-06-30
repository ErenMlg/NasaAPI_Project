import React from 'react';
import '../styles/components/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>🚀 Solar System © {new Date().getFullYear()} - All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">NASA API</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
