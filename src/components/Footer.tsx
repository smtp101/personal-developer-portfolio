import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <div className="text-base font-bold text-slate-900 dark:text-slate-100">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {profile.title}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects</a>
            <a href="#simulator" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">MIS Simulator</a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contact</a>
          </nav>

          {/* Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Strip: Copyright & Channels */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} {profile.name}. All rights reserved. Professional Operations & MIS Portfolio.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
