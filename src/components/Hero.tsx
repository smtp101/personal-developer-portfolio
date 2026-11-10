import React from 'react';
import { ArrowRight, FileDown, Linkedin, Github, Mail, BarChart3, CheckCircle2 } from 'lucide-react';
import { ProfileInfo, MetricStat } from '../types';

interface HeroProps {
  profile: ProfileInfo;
  metrics: MetricStat[];
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, metrics, onOpenResume }) => {
  return (
    <section id="home" className="pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Left typographic hierarchy, Right executive portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">Executive Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Operations & MIS Architecture</span>
              <span aria-hidden="true">·</span>
              <span>{profile.yearsOfExperience}+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15] text-balance">
              Transforming Operational Data into Executive Clarity & Automated Reporting
            </h1>

            {/* Professional Title & Sub-kicker */}
            <div className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
              <span>{profile.name}</span>
              <span className="mx-2 text-slate-400">|</span>
              <span className="text-slate-600 dark:text-slate-400">{profile.title}</span>
            </div>

            {/* Concise professional summary */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Specialized in end-to-end back-office operations governance, advanced Microsoft Excel modeling,
              and automated MIS architecture. I bridge raw transactional data and leadership decision-making by
              eliminating manual reporting bottlenecks, enforcing 99.85%+ audit accuracy, and scaling standardized
              reporting workflows across regional business units.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:underline transition-all whitespace-nowrap"
              >
                <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Launch MIS Live Simulator</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900">
              <span className="font-medium text-slate-700 dark:text-slate-300">Direct Connect:</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5 cols with Executive Portrait & Verification Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-lg aspect-square">
                <img
                  src="/src/assets/images/hero_executive_portrait_1794293747687.jpg"
                  alt={`${profile.name} - ${profile.title}`}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container in case image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-white text-center">
                          <div class="text-3xl font-bold mb-2">${profile.name}</div>
                          <div class="text-sm text-slate-300">${profile.title}</div>
                        </div>`;
                    }
                  }}
                />
              </div>

              {/* Verified Professional Credential Card */}
              <div className="mt-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Microsoft Certified Excel Expert</div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">Credential ID: MSFT-EX-8492041</div>
                  </div>
                </div>
                <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Metric Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums tracking-tight">
                  {metric.value}
                </span>
                {metric.change && (
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
                    {metric.change}
                  </span>
                )}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
