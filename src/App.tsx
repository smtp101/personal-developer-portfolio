/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { InteractiveMISSimulator } from './components/InteractiveMISSimulator';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { PersonalizeDrawer } from './components/PersonalizeDrawer';
import { INITIAL_PROFILE, METRIC_STATS } from './data/portfolioData';
import { ProfileInfo, ProjectItem } from './types';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Profile data state (defaults directly to Sandip Mondal's verified CV)
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_profile');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.name === INITIAL_PROFILE.name) {
            return parsed;
          }
        } catch {
          // fallback
        }
      }
    }
    return INITIAL_PROFILE;
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState<boolean>(false);

  // Sync dark class on html root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleUpdateProfile = (updated: ProfileInfo) => {
    setProfile(updated);
    localStorage.setItem('portfolio_profile', JSON.stringify(updated));
  };

  const handleOpenSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-slate-200 dark:selection:bg-slate-800">
      {/* Navigation Header */}
      <Navbar
        profile={profile}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero
          profile={profile}
          metrics={METRIC_STATS}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* B. About Me Section */}
        <About profile={profile} />

        {/* C. Live Interactive MIS Demonstration Cockpit */}
        <InteractiveMISSimulator />

        {/* D. Technical Skills Section */}
        <SkillsSection />

        {/* E. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* F. Projects Portfolio Section */}
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenSimulator={handleOpenSimulator}
        />

        {/* G. Education & Certifications */}
        <EducationCertifications />

        {/* H. Measurable Achievements */}
        <AchievementsSection />

        {/* I. Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* J. Footer */}
      <Footer profile={profile} />

      {/* Modals & Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSimulator={handleOpenSimulator}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      <PersonalizeDrawer
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}
