import React from 'react';
import { Award, Zap, TrendingUp, Users } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Automation: Zap,
    'Data Governance': Award,
    'Cost Reduction': TrendingUp,
    Mentorship: Users,
  };

  return (
    <section id="achievements" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Key Accomplishments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Measurable Operational Achievements
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Quantified milestones demonstrating real efficiency dividends, audit precision, and cross-departmental value.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => {
            const Icon = iconMap[ach.category] || Award;
            return (
              <div
                key={ach.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {ach.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  {ach.context}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
