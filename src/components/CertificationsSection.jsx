import React from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, FileCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function CertificationsSection({ onOpenImage }) {
  return (
    <section id="certifications" className="section-container certs-section">
      <div className="section-inner max-w-7xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <FileCheck size={16} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description max-w-3xl">
            {certificationsData.intro}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid">
          {certificationsData.items.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div
                className="cert-card-img-wrap"
                onClick={() => onOpenImage(cert.image, cert.title)}
                title="Click to view full certificate"
              >
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="cert-img-overlay">
                  <span className="btn btn-sm btn-light">
                    <Eye size={15} />
                    <span>Inspect Document</span>
                  </span>
                </div>
                <div className="cert-badge-tag">
                  <span>{cert.badge}</span>
                </div>
              </div>

              <div className="cert-card-content">
                <h3 className="cert-card-title">{cert.title}</h3>
                {cert.stream && <div className="cert-stream">{cert.stream}</div>}
                <div className="cert-card-issuer">
                  <span><strong>Issuer:</strong> {cert.issuer}</span>
                  <span>· {cert.date}</span>
                </div>

                {cert.grade && (
                  <div className="cert-grade-banner">
                    <CheckCircle2 size={16} className="text-green" />
                    <span>{cert.grade}</span>
                  </div>
                )}

                <p className="cert-card-desc">{cert.description}</p>

                <div className="cert-card-actions">
                  <button
                    type="button"
                    className="btn btn-outline-tech btn-sm credential-view-btn"
                    onClick={() => onOpenImage(cert.image, cert.title)}
                  >
                    <Eye size={15} />
                    <span>View Certificate</span>
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary-tech btn-sm credential-view-btn"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
