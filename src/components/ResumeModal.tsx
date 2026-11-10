import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { ProfileInfo } from '../types';
import { EXPERIENCE_DATA, SKILLS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { generateResumeText } from '../utils/filterAndSearch';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeText = generateResumeText(profile, EXPERIENCE_DATA, SKILLS_DATA);

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownloadMD = () => {
    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume_Operations_MIS.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            <h2 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-slate-100">
              Executive Resume & Credentials
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadMD}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .MD</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-100 dark:bg-slate-950/80">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-sm border border-slate-200 dark:border-transparent space-y-8 font-sans">
            {/* Header */}
            <div className="border-b border-slate-200 pb-6 text-center space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {profile.name}
              </h1>
              <div className="text-sm font-semibold text-slate-700">
                {profile.title}
              </div>
              <div className="text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1 font-mono">
                <span>{profile.email}</span>
                <span>•</span>
                <span>{profile.phone}</span>
                <span>•</span>
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Executive Summary
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                {profile.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Core Competencies & Key Tools
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-700">
                <div>• Advanced MS Excel (Dynamic Arrays, XLOOKUP, VBA)</div>
                <div>• Management Information Systems (MIS) Architecture</div>
                <div>• Power Query Automated ETL & Data Profiling</div>
                <div>• Relational Database Governance & SQL Querying</div>
                <div>• Zero-Defect Reconciliation & Audit Protocols</div>
                <div>• Standard Operating Procedure (SOP) Engineering</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Professional Experience
              </h2>

              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs font-mono text-slate-600">{exp.period}</span>
                  </div>
                  <div className="text-xs italic text-slate-600">
                    {exp.company} — {exp.location}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-normal">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                    {exp.achievements.slice(0, 2).map((a, aIdx) => (
                      <li key={aIdx} className="font-medium text-slate-900">
                        Achievement: {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                  Education
                </h2>
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="text-xs text-slate-700 space-y-0.5">
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div>{edu.field}</div>
                    <div className="text-slate-500">{edu.institution} ({edu.year})</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                  Certifications
                </h2>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {CERTIFICATIONS_DATA.map((cert, idx) => (
                    <div key={idx}>
                      <span className="font-semibold">{cert.name}</span>
                      <span className="text-slate-500 font-mono text-[11px]"> ({cert.issuer}, {cert.year})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
