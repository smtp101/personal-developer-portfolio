import React, { useState } from 'react';
import { X, Check, RotateCcw, UserCheck, Sparkles } from 'lucide-react';
import { ProfileInfo } from '../types';
import { INITIAL_PROFILE } from '../data/portfolioData';

interface PersonalizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onUpdateProfile: (updated: ProfileInfo) => void;
}

export const PersonalizeDrawer: React.FC<PersonalizeDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [draft, setDraft] = useState<ProfileInfo>({ ...profile });
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(draft);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    setDraft({ ...INITIAL_PROFILE });
    onUpdateProfile({ ...INITIAL_PROFILE });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="personalize-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Portfolio Personalizer</span>
            </div>
            <h2 id="personalize-title" className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Customize Your Personal Information
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          The master prompt specifies <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">Name: [Your Full Name]</code>.
          You can personalize your name, job title, and contact links below. Changes update across the website, navigation, hero, resume, and contact channels instantly.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={draft.name}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={draft.email}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Professional Title
            </label>
            <input
              type="text"
              name="title"
              value={draft.title}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={draft.phone}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Location & Mode
              </label>
              <input
                type="text"
                name="location"
                value={draft.location}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                name="linkedin"
                value={draft.linkedin}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                GitHub Profile URL
              </label>
              <input
                type="text"
                name="github"
                value={draft.github}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Executive Bio / Summary
            </label>
            <textarea
              name="summary"
              rows={3}
              value={draft.summary}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm"
            >
              {savedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Apply Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
