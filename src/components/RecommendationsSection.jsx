import React from 'react';
import { Users, Quote, Mail, Phone, Globe, ExternalLink, Eye, Award } from 'lucide-react';
import { recommendationsData } from '../data/portfolioData';

export default function RecommendationsSection({ onOpenImage }) {
  return (
    <section id="recommendations" className="section-container recs-section">
      <div className="section-inner max-w-7xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <Users size={16} />
            <span>Academic &amp; Departmental Endorsements</span>
          </div>
          <h2 className="section-title">Recommendations</h2>
          <p className="section-description max-w-3xl">
            Official written letters of recommendation from department leadership and university faculty,
            reflecting my academic excellence, leadership in capstone projects, and technical discipline.
          </p>
        </div>

        {/* Recommendations Cards */}
        <div className="recs-grid">
          {recommendationsData.map((rec) => (
            <div key={rec.id} className="rec-card">
              <div className="rec-badge-strip">
                <Award size={16} className="text-accent" />
                <span>{rec.badge}</span>
              </div>

              <div className="rec-quote-body">
                <Quote size={32} className="quote-watermark" />
                <p className="rec-quote-highlight">
                  "{rec.quote}"
                </p>
                <p className="rec-full-context">
                  {rec.fullText}
                </p>
              </div>

              <div className="rec-author-block">
                <div className="rec-author-info">
                  <h4 className="rec-author-name">{rec.author}</h4>
                  <div className="rec-author-role">{rec.role}</div>
                  <div className="rec-author-org">{rec.organization}</div>
                </div>
              </div>

              {/* Verified Contact Details & Document Action */}
              <div className="rec-footer-block">
                <div className="rec-contact-info">
                  <div className="rec-contact-item">
                    <Mail size={14} />
                    <span>{rec.email}</span>
                  </div>
                  {rec.phone && (
                    <div className="rec-contact-item">
                      <Phone size={14} />
                      <span>{rec.phone}</span>
                    </div>
                  )}
                  {rec.website && (
                    <div className="rec-contact-item">
                      <Globe size={14} />
                      <a href={rec.website} target="_blank" rel="noopener noreferrer">
                        {rec.website} ↗
                      </a>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="btn btn-outline-tech btn-sm"
                  onClick={() => onOpenImage(rec.image, `Recommendation: ${rec.author}`)}
                >
                  <Eye size={15} />
                  <span>View Signed Letter</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
