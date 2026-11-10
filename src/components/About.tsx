import React from 'react';
import { Target, Layers, Database, ShieldCheck, Clock, Languages, Zap } from 'lucide-react';
import { ProfileInfo } from '../types';
import { CORE_STRENGTHS } from '../data/portfolioData';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: Zap,
      title: 'High-Volume Data Processing (80+ WPM)',
      description:
        'Touch-typing speed exceeding 80+ words per minute with 99%+ accuracy. Specialized in rapid numeric keying, transactional data entry, and audit reconciliations under tight operational turnarounds.',
    },
    {
      icon: Layers,
      title: 'Power BI & Advanced Excel Modeling',
      description:
        'Architecting interactive multi-page Power BI dashboards with DAX calculated measures, star-schema data modeling, Power Query automated ETL pipelines, and advanced Excel formulas (XLOOKUP, Dynamic Arrays).',
    },
    {
      icon: Database,
      title: 'OCR Digitization & Data Auditing',
      description:
        'Digitizing unstructured physical document logs, invoices, and forms into normalized tabular databases, maintaining a verified 99.4% quality score and eliminating duplicate entries.',
    },
    {
      icon: Clock,
      title: '24/7 Shift Readiness & SLA Governance',
      description:
        'Immediate joiner with high adaptability to 24/7/365 corporate and BPO/KPO rotational shifts, strict SLA adherence, confidential PII data governance (GDPR compliance awareness), and cross-functional reporting.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Professional Profile & Operational Benchmarks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            About Me & Operational Readiness
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Analytical, detail-oriented graduate with professional certification in Office Management,
            delivering high-speed data integrity, Power BI visualization, and reliable 24/7 back-office operational execution.
          </p>
        </div>

        {/* Narrative & Career Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am a <strong>Data Analyst, MIS Executive, and Back-Office Operations Specialist</strong> based in Kolkata, West Bengal (ready for on-site roles in Sector V, New Town, or remote/hybrid engagements).
              I hold a Bachelor of Arts in History (Cum Laude, Academic Research Thesis) from University of Kalyani alongside a professional <strong>Diploma in Office Management (DOM)</strong> from Rashtriya Sarva Shiksha Abhiyan (RSSA).
            </p>
            <p>
              My professional edge combines rapid transactional speed—proven at <strong>80+ WPM with 99%+ accuracy</strong>—with modern Business Intelligence capabilities in <strong>Microsoft Power BI Desktop, DAX, Power Query ETL, SQL</strong>, and advanced Excel modeling.
              Whether extracting dirty datasets, digitizing physical archives via OCR with 99.4% audit quality, or tracking 38M+ simulated revenue metrics in multi-branch dashboards, I deliver audit-grade accuracy on every task.
            </p>
            <div className="pt-2 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Career Objective & Operational Availability
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Seeking a full-time <strong>Data Analyst, MIS Executive, or Back-Office Operations</strong> role where my high-speed data processing, analytical problem-solving, and Business Intelligence skillset can drive operational efficiency.
                Available as an <strong>Immediate Joiner</strong> with full willingness for <strong>24/7/365 rotational shifts</strong>.
              </p>
            </div>

            {/* Language & Readiness Strip */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>Languages Spoken:</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Bengali (Native / Fluent) · English (Professional Working) · Hindi (Professional Working)
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Shift Flexibility:</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Ready for 24/7/365 Rotational Corporate & BPO/KPO Shifts
                </p>
              </div>
            </div>
          </div>

          {/* Right: Core Strengths Breakdown from CV */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Core Competencies & ATS Benchmarks
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Key operational competencies validated by direct project outcomes & certifications:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {CORE_STRENGTHS.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 w-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">Kolkata, West Bengal (Sector V / New Town)</span>
              </div>
              <div className="flex justify-between">
                <span>Joining Status:</span>
                <span className="font-medium text-emerald-700 dark:text-emerald-400">Immediate Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Operational Pillars from CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-100">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
