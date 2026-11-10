import React from 'react';
import { Target, Layers, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ProfileInfo } from '../types';
import { CORE_STRENGTHS } from '../data/portfolioData';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: Layers,
      title: 'Back-Office Operations Governance',
      description:
        'Standardizing daily operational execution across high-volume transaction centers. Structuring rigorous SOP workflows and SLA escalation protocols that eliminate execution delays.',
    },
    {
      icon: Database,
      title: 'Data Architecture & Integrity',
      description:
        'Enforcing stringent validation rules (Poka-Yoke error proofing) and three-way reconciliation models that ensure 99.85%+ audit accuracy between ERP general ledgers and operational logs.',
    },
    {
      icon: Target,
      title: 'Automated MIS & Decision Support',
      description:
        'Architecting automated Power Query ETL pipelines and dynamic Excel cockpits that consolidate disparate branch data in seconds, delivering clear visibility to leadership.',
    },
    {
      icon: ShieldCheck,
      title: 'Cost Optimization & Root Cause Audits',
      description:
        'Pinpointing operational bottlenecks, inventory carrying dead-stock, and vendor variance anomalies to recover lost working capital and streamline expenditures.',
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
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            About Me & Operational Philosophy
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Delivering audit-grade reporting, eliminating manual toil through automated pipelines,
            and establishing operational clarity across multi-branch enterprise environments.
          </p>
        </div>

        {/* Narrative & Career Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am an Operations & MIS Professional with over six years of dedicated experience
              in corporate reporting frameworks, high-throughput back-office data management, and
              process engineering. My career has focused on resolving the critical friction point where
              raw operational data meets executive strategy.
            </p>
            <p>
              Too often, growing organizations struggle with disparate legacy spreadsheets, error-prone
              copy-paste habits, and delayed reporting cycles. My approach pairs deep technical mastery of
              advanced Microsoft Excel (Dynamic Arrays, Power Query M-code, VBA macros) and relational databases (SQL, MS Access)
              with pragmatic operational workflows. By turning fragmented transactional files into single-click automated models,
              I provide leadership teams with timely, trusted figures they can bank on.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                Career Objective
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                To steer enterprise-scale Operations, MIS reporting infrastructure, or centralized Data Governance
                teams where high-velocity accuracy, process optimization, and automated reporting systems drive
                tangible cost savings and operational excellence.
              </p>
            </div>
          </div>

          {/* Right: Core Strengths Breakdown */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Core Competencies & Strengths
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Key domains of operational expertise supported by direct enterprise track record:
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

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Technical Interests:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Power Query ETL · VBA · SQL Analytics
              </span>
            </div>
          </div>
        </div>

        {/* 4 Operational Pillars */}
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
