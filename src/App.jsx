import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import RecommendationsSection from './components/RecommendationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import ImageViewerModal from './components/ImageViewerModal';
import { personalInfo } from './data/portfolioData';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null); // { url, title }

  const handleOpenImage = (url, title) => {
    setActiveImage({ url, title });
  };

  const handleOpenPortrait = () => {
    setActiveImage({
      url: personalInfo.profilePhoto,
      title: `${personalInfo.name} — B.Sc. Graduation Portrait`
    });
  };

  return (
    <div className="portfolio-app-root">
      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenCV={() => setIsCvOpen(true)}
      />

      <main>
        {/* Profile / Hero Area with real photo, CV triggers, and project jump */}
        <HeroHeader
          onOpenCV={() => setIsCvOpen(true)}
          onOpenPortrait={handleOpenPortrait}
        />

        {/* Continuous, Uncolumned, Highly Readable About Me */}
        <AboutMe />

        {/* 4 Major University & Internship Projects with Detailed Modal */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Technical Capabilities under the heading 'Expertise' */}
        <SkillsSection />

        {/* Official Degree & Verified Udacity Nanodegrees */}
        <CertificationsSection
          onOpenImage={handleOpenImage}
        />

        {/* Genuine Endorsements from Department Head & Faculty */}
        <RecommendationsSection
          onOpenImage={handleOpenImage}
        />

        {/* Contact Information & Real Working Contact Form */}
        <ContactSection />
      </main>

      {/* Engineering Footer */}
      <Footer />

      {/* Deep-Dive Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenImage={handleOpenImage}
        />
      )}

      {/* Official CV PDF Viewer Modal */}
      {isCvOpen && (
        <CVModal
          onClose={() => setIsCvOpen(false)}
        />
      )}

      {/* Full-Resolution Document & Image Lightbox */}
      {activeImage && (
        <ImageViewerModal
          imageUrl={activeImage.url}
          title={activeImage.title}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
}
