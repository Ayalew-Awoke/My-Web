import React, { useEffect } from 'react';
import { X, Download, ExternalLink, ZoomIn } from 'lucide-react';

export default function ImageViewerModal({ imageUrl, title, onClose }) {
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

  if (!imageUrl) return null;

  return (
    <div className="modal-backdrop image-viewer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        <div className="image-viewer-top">
          <span className="image-viewer-title">{title || 'Document Preview'}</span>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-tech"
              title="Open full resolution in new tab"
            >
              <ExternalLink size={15} />
              <span>Full Size</span>
            </a>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="image-viewer-body">
          <img src={imageUrl} alt={title} className="image-viewer-img" />
        </div>
      </div>
    </div>
  );
}
