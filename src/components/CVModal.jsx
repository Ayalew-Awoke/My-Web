import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CVModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container cv-modal-container max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar">
          <div className="modal-top-meta">
            <FileText size={18} className="text-accent" />
            <span className="font-semibold text-tech-900">Curriculum Vitae — {personalInfo.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.cvPath}
              download="Ayalew_awoke_Bitew_CV.pdf"
              className="btn btn-sm btn-primary-tech"
              title="Download CV PDF"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-tech"
              title="Open in new browser tab"
            >
              <ExternalLink size={15} />
              <span>New Tab</span>
            </a>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close CV modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="cv-iframe-wrap">
          <iframe
            src={`${personalInfo.cvPath}#toolbar=1&navpanes=0`}
            title="Curriculum Vitae of Ayalew Awoke Bitew"
            className="cv-iframe"
          />
        </div>

        {/* Fallback Notice */}
        <div className="cv-fallback-bar">
          <span>Having trouble viewing the PDF preview in your browser?</span>
          <a
            href={personalInfo.cvPath}
            download="Ayalew_awoke_Bitew_CV.pdf"
            className="btn btn-sm btn-outline-tech"
          >
            <Download size={14} />
            <span>Download Ayalew_awoke_Bitew_CV.pdf directly</span>
          </a>
        </div>
      </div>
    </div>
  );
}
