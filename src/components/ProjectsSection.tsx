import React, { useState, useMemo } from 'react';
import { ArrowRight, ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects } from '../utils/filterAndSearch';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenSimulator: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenSimulator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'MIS & Reporting', label: 'MIS & Reporting' },
    { id: 'Data Analysis', label: 'Data Analysis' },
    { id: 'Database Management', label: 'Database Systems' },
    { id: 'Operations', label: 'Supply Chain & Operations' },
    { id: 'Process Optimization', label: 'Process Automation' },
  ];

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS_DATA, selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Case Studies & Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Featured Projects & Operational Models
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Architectural case studies demonstrating advanced Excel modeling, automated ETL workflows,
            relational database governance, and high-impact operational systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {project.liveInteractive && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/90 text-white dark:bg-white/90 dark:text-slate-900 text-[11px] font-semibold tracking-wide backdrop-blur-sm">
                      Interactive Model
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  {/* Category unboxed text */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Executive Case Study</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 leading-snug">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Problem Solved Snapshot */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Problem Addressed: </span>
                    <span className="text-slate-600 dark:text-slate-400">{project.problemSolved}</span>
                  </div>

                  {/* Key Features (first 2) */}
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100 hover:underline"
                  >
                    <span>View Case Study Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveInteractive && (
                    <button
                      onClick={onOpenSimulator}
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      <span>Simulate in Cockpit</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
