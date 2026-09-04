import React from 'react';
import { FolderGit2, ArrowUpRight, CheckCircle2, Cpu, Database, Sparkles, FileText } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-inner max-w-7xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <FolderGit2 size={16} />
            <span>From Ideas to Impact</span>
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-description max-w-3xl">
            A collection of university and internship projects where I turned engineering knowledge,
            technical curiosity, and emerging technologies into practical systems—exploring ideas,
            building solutions, and learning through real implementation.
          </p>
        </div>

        {/* Narrative Introduction from DOCX */}
        <div className="project-intro-callout">
          <div className="intro-callout-icon">
            <Sparkles size={24} />
          </div>
          <div className="intro-callout-text">
            <p>
              My university journey provided me with the opportunity to transform academic knowledge into
              purposeful, real-world solutions. Through a range of technical projects, I explored the
              intersection of engineering and modern technology, working across software development,
              artificial intelligence, natural language processing, speech technologies, web systems,
              electronics, RFID, and system simulation.
            </p>
            <p className="mt-2 text-sm text-tech-600">
              Each project challenged me to engage with the complete process of development from identifying a
              problem and conceptualizing a solution to designing, implementing, testing, and refining a functional system.
            </p>
          </div>
        </div>

        {/* 4 Major Projects Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image-wrap" onClick={() => onSelectProject(project)}>
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-card-badge">
                  <span>Project {project.number}</span>
                </div>
                <div className="project-card-overlay">
                  <span className="btn btn-sm btn-light">View Full Project Details</span>
                </div>
              </div>

              <div className="project-card-content">
                <div className="project-card-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-scope">{project.scope}</span>
                </div>

                <h3 className="project-card-title">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="project-title-btn"
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="project-card-summary">
                  {project.summary}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="project-card-stats">
                  {project.stats.slice(0, 3).map((st, sIdx) => (
                    <div key={sIdx} className="stat-pill">
                      <span className="stat-pill-label">{st.label}:</span>
                      <span className="stat-pill-val">{st.value}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary-tech btn-sm w-full project-view-btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
