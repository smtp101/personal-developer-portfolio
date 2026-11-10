import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Education & Industry Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Rigorous academic foundation paired with continuous specialized credentials in Microsoft Excel, database design, and process optimization.
          </p>
        </div>

        {/* 2-Column Split: Left Education, Right Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Formal Education</span>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4"
              >
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                    {edu.year} · {edu.location}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {edu.field}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {edu.institution}
                  </div>
                  {edu.honors && (
                    <div className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      ★ {edu.honors}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Core Academic Curriculum:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {edu.coreSubjects.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="text-slate-400 select-none">•</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Professional Certifications & Training</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span>{cert.year}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {cert.name}
                    </h3>

                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {cert.issuer}
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
