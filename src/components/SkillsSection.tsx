import React, { useState, useMemo } from 'react';
import { Search, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';
import { SKILLS_DATA } from '../data/portfolioData';
import { filterSkills } from '../utils/filterAndSearch';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'excel', label: 'Advanced Excel & Modeling' },
    { id: 'mis', label: 'MIS Reporting & Analytics' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'data-quality', label: 'Data Quality & Validation' },
    { id: 'admin-docs', label: 'Operations & SOPs' },
    { id: 'productivity', label: 'Productivity & BI Tools' },
  ];

  const filteredSkills = useMemo(() => {
    return filterSkills(SKILLS_DATA, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
              Categorized Technical Competencies
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every skill listed is grounded in direct daily back-office execution, verified enterprise reporting models,
              and professional certifications.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, formulas, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented filter buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
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

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No skills match your filter "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-slate-900 dark:text-slate-100 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Header: unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {skill.highlightTool}
                    </span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      {skill.proficiency} · {skill.levelPercent}%
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Key Techniques List */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Methods & Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {skill.keyTechniques.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
