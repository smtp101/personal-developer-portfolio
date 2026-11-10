import React, { useState } from 'react';
import { Moon, Sun, Menu, X, FileDown, Settings } from 'lucide-react';
import { ProfileInfo } from '../types';

interface NavbarProps {
  profile: ProfileInfo;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenPersonalize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDark,
  onToggleTheme,
  onOpenResume,
  onOpenPersonalize,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand wordmark (single text element) */}
          <a
            href="#home"
            className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-slate-700 dark:hover:text-slate-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>{profile.name}</span>
            <span className="hidden sm:inline text-xs font-normal text-slate-500 dark:text-slate-400">
              · Operations & MIS
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + theme toggle + edit profile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenPersonalize}
              aria-label="Customize profile details"
              title="Customize Name & Details"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 transition-colors whitespace-nowrap"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-4 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPersonalize();
                }}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <Settings className="w-4 h-4" />
                <span>Customize Profile Details</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
