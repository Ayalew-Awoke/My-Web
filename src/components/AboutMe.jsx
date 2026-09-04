import React from 'react';
import { Compass, Sparkles, BookOpen, Layers, Target, CheckCircle2 } from 'lucide-react';
import { aboutMeData } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="section-container about-section">
      <div className="section-inner max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <Compass size={16} />
            <span>Biography &amp; Foundations</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Connecting the physical principles of engineering with computational possibilities.
          </p>
        </div>

        {/* Narrative Flow - Continuous, Uncolumned, Highly Legible per DOCX specifications */}
        <div className="about-narrative-card">
          {/* 1. Introduction */}
          <article className="narrative-block">
            <div className="narrative-heading">
              <span className="narrative-pill">01</span>
              <h3>Introduction</h3>
            </div>
            <div className="narrative-body">
              <p>{aboutMeData.introduction}</p>
            </div>
          </article>

          {/* 2. My Journey */}
          <article className="narrative-block">
            <div className="narrative-heading">
              <span className="narrative-pill">02</span>
              <h3>My Journey</h3>
            </div>
            <div className="narrative-body">
              {aboutMeData.myJourney.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>

          {/* 3. What I’m Interested In */}
          <article className="narrative-block">
            <div className="narrative-heading">
              <span className="narrative-pill">03</span>
              <h3>What I’m Interested In</h3>
            </div>
            <div className="narrative-body">
              {aboutMeData.whatImInterestedIn.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>

          {/* 4. What I Bring */}
          <article className="narrative-block">
            <div className="narrative-heading">
              <span className="narrative-pill">04</span>
              <h3>What I Bring</h3>
            </div>
            <div className="narrative-body">
              {aboutMeData.whatIBring.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>

          {/* 5. Where I’m Going */}
          <article className="narrative-block">
            <div className="narrative-heading">
              <span className="narrative-pill">05</span>
              <h3>Where I’m Going</h3>
            </div>
            <div className="narrative-body">
              {aboutMeData.whereImGoing.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
