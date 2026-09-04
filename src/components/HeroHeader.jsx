import React from 'react';
import { FileText, Download, ArrowDown, MapPin, Mail, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function HeroHeader({ onOpenCV, onOpenPortrait }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="hero-content-wrapper max-w-7xl">
        <div className="hero-grid">
          <div className="hero-image-col">
            <div className="hero-avatar-frame">
              <div className="avatar-tech-ring" aria-hidden="true" />
              <img
                src={personalInfo.profilePhoto}
                alt="Ayalew Awoke Bitew graduation portrait"
                className="hero-avatar-img"
                onClick={onOpenPortrait}
                title="Click to view full portrait"
              />
              <div className="avatar-status-pill">
                <span className="status-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="quick-credentials-strip">
              <div className="cred-item">
                <span className="cred-val">3.84</span>
                <span className="cred-lbl">CGPA / 4.00</span>
              </div>
              <div className="cred-divider" />
              <div className="cred-item">
                <span className="cred-val">77.5%</span>
                <span className="cred-lbl">Exit Exam</span>
              </div>
              <div className="cred-divider" />
              <div className="cred-item">
                <span className="cred-val">2026</span>
                <span className="cred-lbl">B.Sc. Graduate</span>
              </div>
            </div>
          </div>

          <div className="hero-text-col">
            <div className="hero-eyebrow">
              <Sparkles size={16} className="text-accent" aria-hidden="true" />
              <span>Electrical &amp; Computer Engineering Portfolio</span>
            </div>

            <h1 className="hero-title">
              {personalInfo.name}
            </h1>

            <p className="hero-subtitle">
              {personalInfo.fullBioHeadline}
            </p>

            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            <div className="hero-meta-badges">
              <div className="meta-badge">
                <MapPin size={15} aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="meta-badge">
                <Award size={15} aria-hidden="true" />
                <span>Debre Tabor University</span>
              </div>
              <div className="meta-badge">
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>INSA Internship Alum</span>
              </div>
            </div>

            <div className="hero-action-buttons">
              <div className="cv-btn-container">
                <div className="btn-group-combo">
                  <button
                    type="button"
                    className="btn btn-primary-tech hero-cv-btn"
                    onClick={onOpenCV}
                    title="View CV in browser"
                  >
                    <FileText size={18} aria-hidden="true" />
                    <span>View CV</span>
                  </button>
                  <a
                    href={personalInfo.cvPath}
                    download="Ayalew_awoke_Bitew_CV.pdf"
                    className="btn btn-primary-tech-download"
                    title="Download CV PDF directly"
                  >
                    <Download size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-secondary-tech"
              >
                <span>View Projects</span>
                <ArrowDown size={18} className="bounce-anim" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn btn-outline-tech"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="hero-direct-links">
              <a href={`mailto:${personalInfo.email}`} className="hero-contact-chip">
                <Mail size={15} aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                GitHub ↗
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
