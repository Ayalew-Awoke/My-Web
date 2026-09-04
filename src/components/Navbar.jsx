import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenCV }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'recommendations', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Expertise', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Recommendations', href: '#recommendations', id: 'recommendations' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner max-w-7xl">
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="logo-badge" aria-hidden="true">
            <span className="logo-initials">AA</span>
          </div>
          <div className="logo-text-group">
            <span className="logo-name">Ayalew Awoke</span>
            <span className="logo-sub">ECE Graduate • Computer Stream</span>
          </div>
        </a>

        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="btn btn-outline-tech btn-sm navbar-cv-btn"
            onClick={onOpenCV}
            title="View & Download Curriculum Vitae"
          >
            <FileText size={16} aria-hidden="true" />
            <span>CV</span>
          </button>
          <a
            href="#contact"
            className="btn btn-primary-tech btn-sm navbar-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <Send size={15} aria-hidden="true" />
            <span>Get in Touch</span>
          </a>
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="logo-badge" aria-hidden="true">
                <span className="logo-initials">AA</span>
              </div>
              <div className="mobile-menu-brand">
                <div className="font-semibold text-tech-900">Ayalew Awoke</div>
                <div className="text-xs text-tech-500">ECE · Computer Stream</div>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-items">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <button
                type="button"
                className="btn btn-outline-tech w-full"
                onClick={() => {
                  setIsOpen(false);
                  onOpenCV();
                }}
              >
                <FileText size={16} />
                <span>View / Download CV</span>
              </button>
              <a
                href="#contact"
                className="btn btn-primary-tech w-full"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                <Send size={16} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
