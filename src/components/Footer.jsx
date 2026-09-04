import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, BriefcaseBusiness, Code, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner max-w-7xl">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <span className="logo-initials-small">AA</span>
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Electrical and Computer Engineering Graduate (Computer Engineering Stream)
            </p>
          </div>

          <button
            type="button"
            className="btn btn-outline-tech btn-sm"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Ayalew Awoke Bitew. All rights reserved.
          </p>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <Code size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <BriefcaseBusiness size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} title="Email" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
