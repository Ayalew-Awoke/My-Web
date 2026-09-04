import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, ChevronRight, Layers, ArrowLeft, ArrowRight, Eye, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailModal({ project, onClose, onSelectProject, onOpenImage }) {
  const [activeTab, setActiveTab] = useState('overview');
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    setActiveTab('overview');
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  if (!project) return null;

  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="modal-container project-modal-container max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar">
          <div className="modal-top-meta">
            <span className="modal-number-tag">Project {project.number}</span>
            <span className="modal-category-tag">{project.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-scroll-region" ref={scrollRef}>
          <div className="modal-header-block">
            <h2 id="project-modal-title" className="modal-title">{project.title}</h2>
            <div className="modal-context-row">
              <span><strong>Scope:</strong> {project.scope}</span>
              {project.team && <span>· <strong>Team / Role:</strong> {project.team}</span>}
              {project.date && <span>· <strong>Period:</strong> {project.date}</span>}
            </div>

            <div className="modal-stats-row">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="modal-stat-box">
                  <span className="modal-stat-val">{stat.value}</span>
                  <span className="modal-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-tabs" role="tablist" aria-label="Project detail sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'overview'}
              className={`modal-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview &amp; Architecture
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'results'}
              className={`modal-tab ${activeTab === 'results' ? 'active' : ''}`}
              onClick={() => setActiveTab('results')}
            >
              Results &amp; Screenshots
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'technologies'}
              className={`modal-tab ${activeTab === 'technologies' ? 'active' : ''}`}
              onClick={() => setActiveTab('technologies')}
            >
              Technologies &amp; Craft
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'learnings'}
              className={`modal-tab ${activeTab === 'learnings' ? 'active' : ''}`}
              onClick={() => setActiveTab('learnings')}
            >
              Impact &amp; Learnings
            </button>
          </div>

          <div className="modal-body-scroll">
          {activeTab === 'overview' && (
            <div className="tab-pane">
              {/* Challenge & Solution Cards */}
              <div className="grid-2-col mb-6">
                <div className="card-soft border-red">
                  <div className="card-badge-header text-red">
                    <span className="badge-dot bg-red" />
                    <span>The Challenge</span>
                  </div>
                  <p className="card-content-text">{project.challenge}</p>
                </div>

                <div className="card-soft border-green">
                  <div className="card-badge-header text-green">
                    <span className="badge-dot bg-green" />
                    <span>The Solution</span>
                  </div>
                  <p className="card-content-text">{project.solution}</p>
                </div>
              </div>

              {/* What I Built */}
              <div className="detail-section mb-6">
                <h4 className="detail-section-title">
                  <Layers size={18} />
                  <span>What I Built / System Components</span>
                </h4>
                <div className="grid-2-col gap-4">
                  {project.whatIBuilt.map((comp, idx) => (
                    <div key={idx} className="built-subcard">
                      <h5 className="built-subcard-title">{comp.title}</h5>
                      <ul className="built-subcard-list">
                        {comp.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <ChevronRight size={14} className="bullet-arrow" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Innovation */}
              {project.keyInnovation && (
                <div className="innovation-box mb-6">
                  <div className="innovation-box-header">
                    <Sparkles size={20} className="text-accent" />
                    <h4>Key Innovation: {project.keyInnovation.title}</h4>
                  </div>
                  <p>{project.keyInnovation.desc}</p>
                </div>
              )}

              {/* How It Works Steps */}
              {project.howItWorksSteps && (
                <div className="detail-section">
                  <h4 className="detail-section-title">
                    <Terminal size={18} />
                    <span>How It Works / System Execution Pipeline</span>
                  </h4>
                  <div className="workflow-steps-list">
                    {project.howItWorksSteps.map((st, idx) => (
                      <div key={idx} className="workflow-step-item">
                        <div className="step-number-circle">{st.step}</div>
                        <div className="step-content">
                          <span className="step-title">{st.title}</span>
                          <p className="step-desc">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'results' && (
            <div className="tab-pane">
              {/* Quantitative Results List */}
              <div className="results-box mb-6">
                <h4 className="detail-section-title">
                  <CheckCircle2 size={18} className="text-green" />
                  <span>Quantitative Results &amp; Validation</span>
                </h4>
                <ul className="results-checklist">
                  {project.resultsList.map((res, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots Gallery */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="detail-section">
                  <h4 className="detail-section-title">
                    <Eye size={18} />
                    <span>Authentic Project Visuals &amp; Artifacts</span>
                  </h4>
                  <div className="screenshots-grid">
                    {project.screenshots.map((img, idx) => (
                      <div
                        key={idx}
                        className="screenshot-card"
                        onClick={() => onOpenImage(img.url, `${project.shortTitle} - ${img.title}`)}
                      >
                        <div className="screenshot-img-wrap">
                          <img src={img.url} alt={img.title} loading="lazy" />
                          <div className="screenshot-hover-prompt">
                            <span>Click to Zoom</span>
                          </div>
                        </div>
                        <div className="screenshot-meta">
                          <div className="screenshot-title">{img.title}</div>
                          <p className="screenshot-caption">{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-docs-bar mt-6">
                {project.wokwiUrl && (
                  <a
                    href={project.wokwiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary-tech"
                  >
                    <ExternalLink size={18} />
                    <span>Simulate on Wokwi Cloud</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-tech"
                  >
                    <span>View Ayalew's GitHub Repository</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          )}

          {activeTab === 'technologies' && (
            <div className="tab-pane">
              <h4 className="detail-section-title mb-4">
                <Layers size={18} />
                <span>Technologies &amp; Architecture Stack</span>
              </h4>
              <div className="tech-table-wrapper">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Component / Layer</th>
                      <th>Technology Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.technologies.map((t, idx) => (
                      <tr key={idx}>
                        <td className="tech-col-component"><strong>{t.component}</strong></td>
                        <td className="tech-col-tech">{t.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'learnings' && (
            <div className="tab-pane">
              <div className="grid-2-col gap-6">
                <div className="card-soft">
                  <h4 className="detail-section-title text-accent">
                    <span>Why It Matters</span>
                  </h4>
                  <ul className="bullet-list-custom">
                    {project.whyItMatters.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-soft">
                  <h4 className="detail-section-title text-accent">
                    <span>What I Learned</span>
                  </h4>
                  <ul className="bullet-list-custom">
                    {project.whatILearned.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.nextSteps && (
                <div className="card-soft mt-6">
                  <h4 className="detail-section-title text-tech-800">
                    <span>Next Steps &amp; Future Work</span>
                  </h4>
                  <ul className="bullet-list-custom">
                    {project.nextSteps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        </div>

        <div className="modal-footer-nav">
          <div>
            {prevProject && (
              <button
                type="button"
                className="btn btn-outline-tech btn-sm"
                onClick={() => {
                  onSelectProject(prevProject);
                  setActiveTab('overview');
                }}
              >
                <ArrowLeft size={16} />
                <span>Prev: {prevProject.shortTitle}</span>
              </button>
            )}
          </div>
          <div>
            {nextProject && (
              <button
                type="button"
                className="btn btn-outline-tech btn-sm"
                onClick={() => {
                  onSelectProject(nextProject);
                  setActiveTab('overview');
                }}
              >
                <span>Next: {nextProject.shortTitle}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
