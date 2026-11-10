import React from 'react';
import { ArrowRight, FileDown, Linkedin, Github, Mail, BarChart3, CheckCircle2, Phone, MapPin } from 'lucide-react';
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
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">Professional Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Data Analytics & MIS</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Immediate Joiner | 24/7 Rotational</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15] text-balance">
              Transforming High-Volume Data into Executive Power BI Dashboards & Actionable MIS
            </h1>

            {/* Professional Title & Sub-kicker */}
            <div className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200">
              <span className="font-bold text-slate-950 dark:text-slate-50">{profile.name}</span>
              <span className="mx-2 text-slate-400">|</span>
              <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Data Analyst · MIS Executive · Back-Office Specialist
              </span>
            </div>

            {/* Concise professional summary */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Analytical and detail-oriented graduate with professional certification in Office Management.
              Proven expertise in high-volume transaction processing (<strong>80+ WPM at 99%+ accuracy</strong>),
              Microsoft Power BI dashboard development, SQL, advanced Excel data modeling, and automated data validation workflows.
              Adept at cleaning raw datasets, generating actionable MIS reports, maintaining strict SLA governance,
              and supporting 24/7 enterprise back-office operations in Kolkata (Sector V / New Town ready).
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/aistudio/Sandip_Mondal_CV_2920864b.pdf"
                download="Sandip_Mondal_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors whitespace-nowrap"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <span>View Full CV</span>
              </button>

              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all whitespace-nowrap"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>MIS Simulator</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900">
              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kolkata, WB (Sector V Ready)</span>
              </span>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{profile.phone}</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
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
                />
              </div>

              {/* Verified Professional Credential Card */}
              <div className="mt-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Diploma in Office Management (DOM)</div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">Rashtriya Sarva Shiksha Abhiyan (RSSA) · 80+ WPM</div>
                  </div>
                </div>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">Certified</span>
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
