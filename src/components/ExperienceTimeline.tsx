import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Progressive operational tenure across enterprise logistics, corporate financial services, and multi-branch organizations.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-10">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{item.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                    {item.current && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold font-mono text-[11px]">
                          Current Role
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                    {item.role}
                  </h3>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="pt-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Responsibilities & Achievements 2-Column Split */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Operational Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-slate-400 dark:text-slate-500 mt-1 select-none">›</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Key Quantifiable Achievements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium text-slate-800 dark:text-slate-200">
                          {ach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Tools & Systems:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
