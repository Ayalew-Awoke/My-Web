import React from 'react';
import { Award, Code2, Globe, Cpu, Wrench, Terminal, Bot, CircuitBoard, Sparkles } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-software': return <Code2 size={22} className="text-accent" />;
      case 'web-development': return <Globe size={22} className="text-accent" />;
      case 'ai-data': return <Bot size={22} className="text-accent" />;
      case 'ai-frameworks': return <Terminal size={22} className="text-accent" />;
      case 'electronics-electrical': return <CircuitBoard size={22} className="text-accent" />;
      case 'embedded-systems': return <Cpu size={22} className="text-accent" />;
      case 'tools-professional': return <Wrench size={22} className="text-accent" />;
      default: return <Sparkles size={22} className="text-accent" />;
    }
  };

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-inner max-w-7xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <Award size={16} />
            <span>Technical Capabilities</span>
          </div>
          {/* Main Heading strictly "Expertise" per DOCX */}
          <h2 className="section-title">Expertise</h2>
          <p className="section-description max-w-3xl">
            A comprehensive foundation spanning software engineering, computational artificial intelligence,
            electronics, and embedded hardware systems.
          </p>
        </div>

        {/* 7 Categories Grid */}
        <div className="skills-category-grid">
          {skillsCategories.map((category) => (
            <div key={category.id} className="skills-card">
              <div className="skills-card-header">
                <div className="skills-icon-wrap">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="skills-category-title">{category.title}</h3>
                </div>
              </div>

              {/* Exact Category Introduction from DOCX */}
              <p className="skills-category-intro">
                {category.intro}
              </p>

              {/* Subheading: Expertise */}
              <div className="skills-subheading-group">
                <span className="skills-subheading-label">Expertise:</span>
              </div>

              {/* Badges / Chips */}
              <div className="skills-badges-wrap">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
