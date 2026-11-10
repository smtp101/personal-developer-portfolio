import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, BarChart2, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenSimulator: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenSimulator,
}) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-8 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study & Architecture</span>
          </div>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
            {project.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Visual Thumbnail */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-video max-h-72 bg-slate-100 dark:bg-slate-950">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Problem Solved */}
        <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300">
            The Operational Challenge & Problem Solved
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
            Engineered Capabilities & Key Features
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quantifiable Results Achieved */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Business Results & Operational Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.metricsAchieved.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-xs font-medium text-emerald-900 dark:text-emerald-300"
              >
                ✓ {metric}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">Tools Used:</span>
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {project.liveInteractive && (
            <button
              onClick={() => {
                onClose();
                onOpenSimulator();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors"
            >
              <span>Test in Live Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
