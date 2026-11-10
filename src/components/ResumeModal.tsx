import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { ProfileInfo } from '../types';
import { EXPERIENCE_DATA, SKILLS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, PROJECTS_DATA } from '../data/portfolioData';
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
    link.download = `${profile.name.replace(/\s+/g, '_')}_CV.md`;
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
              {profile.name} — Curriculum Vitae
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Official PDF Download */}
            <a
              href="/assets/aistudio/Sandip_Mondal_CV_2920864b.pdf"
              download="Sandip_Mondal_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

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
              <FileText className="w-3.5 h-3.5" />
              <span>.MD</span>
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
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet matching Sandip Mondal's exact CV */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-100 dark:bg-slate-950/80">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-sm border border-slate-200 dark:border-transparent space-y-7 font-sans">
            {/* Header matching PDF */}
            <div className="border-b border-slate-900 pb-5 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {profile.name}
              </h1>
              <div className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wide">
                {profile.title}
              </div>
              <div className="text-xs text-slate-600 space-y-1 pt-1">
                <div>
                  <span className="font-semibold text-slate-800">Location:</span> {profile.location}
                  <span className="mx-2">|</span>
                  <span className="font-semibold text-slate-800">Phone:</span> {profile.phone}
                  <span className="mx-2">|</span>
                  <span className="font-semibold text-slate-800">Email:</span> {profile.email}
                </div>
              </div>
            </div>

            {/* Professional Summary & Operational Benchmarks */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
                Professional Summary & Operational Benchmarks
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                {profile.summary}
              </p>

              {/* 4 Benchmarks Table from CV */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center font-sans">
                <div className="p-2.5 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] font-bold uppercase text-slate-600">Typing & Data Entry Speed</div>
                  <div className="text-xs font-extrabold text-slate-950 mt-1">80+ WPM (99%+ Accuracy)</div>
                </div>
                <div className="p-2.5 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] font-bold uppercase text-slate-600">BI & Data Analysis Stack</div>
                  <div className="text-xs font-extrabold text-slate-950 mt-1">Power BI, Power Query, DAX, Excel</div>
                </div>
                <div className="p-2.5 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] font-bold uppercase text-slate-600">Back-Office & Data Ops</div>
                  <div className="text-xs font-extrabold text-slate-950 mt-1">OCR Digitization, SQL, Auditing</div>
                </div>
                <div className="p-2.5 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] font-bold uppercase text-slate-600">Shift & Joining Readiness</div>
                  <div className="text-xs font-extrabold text-slate-950 mt-1">Immediate | 24/7 Rotational</div>
                </div>
              </div>
            </div>

            {/* Technical Competencies & Core ATS Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
                Technical Competencies & Core ATS Skills
              </h2>
              <div className="border border-slate-200 rounded overflow-hidden text-xs">
                <div className="grid grid-cols-12 bg-slate-100 font-bold text-slate-800 p-2 border-b border-slate-200 text-[11px] uppercase">
                  <div className="col-span-4">Competency Domain</div>
                  <div className="col-span-8">Tools, Technologies & Operational Capabilities</div>
                </div>
                <div className="divide-y divide-slate-200 text-xs text-slate-700">
                  <div className="grid grid-cols-12 p-2.5 gap-2">
                    <div className="col-span-4 font-semibold text-slate-900">Data Analysis & Business Intelligence</div>
                    <div className="col-span-8">Microsoft Power BI Desktop (Interactive KPI Dashboards, Power Query M-Code, DAX Measures, Star Schema Data Modeling, Geospatial Mapping), SQL, Advanced MS Excel (VLOOKUP, XLOOKUP, Pivot Tables, Conditional Formatting, Data Cleaning), Google Sheets (QUERY, IMPORTRANGE)</div>
                  </div>
                  <div className="grid grid-cols-12 p-2.5 gap-2 bg-slate-50/50">
                    <div className="col-span-4 font-semibold text-slate-900">Back-Office Operations & MIS Processing</div>
                    <div className="col-span-8">High-Volume Data Entry (80+ WPM), MIS Reporting & Documentation, OCR Document Digitization, Automated Data Validation, Database Normalization, MS Office Suite, Google Workspace, POS & Enterprise Billing Systems</div>
                  </div>
                  <div className="grid grid-cols-12 p-2.5 gap-2">
                    <div className="col-span-4 font-semibold text-slate-900">Workflow Automation & Web Technologies</div>
                    <div className="col-span-8">Report Automation Templates, HTML5, CSS3, JavaScript (Foundational UI & Web Data Extraction), AI-Assisted Research, Prompt Engineering & Process Optimization (ChatGPT, Claude)</div>
                  </div>
                  <div className="grid grid-cols-12 p-2.5 gap-2 bg-slate-50/50">
                    <div className="col-span-4 font-semibold text-slate-900">Enterprise Governance & Quality Assurance</div>
                    <div className="col-span-8">Service Level Agreement (SLA) Adherence, Quality Audit & Root-Cause Troubleshooting, Confidential Data Handling (GDPR & Data Privacy Compliance Awareness), Cross-Functional Stakeholder Reporting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
                Work Experience
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.role}, {exp.company}</span>
                    <span className="font-mono text-slate-600">{exp.period}</span>
                  </div>
                  <p className="leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 pt-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Portfolio Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
                Data Analysis & Back-Office Portfolio Projects
              </h2>
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs text-slate-700">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="font-mono text-blue-700 text-[11px] font-semibold">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education, Certifications & Operational Readiness */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
                Education, Certifications & Operational Readiness
              </h2>
              <div className="space-y-3 text-xs text-slate-700">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">{edu.degree} — {edu.institution}</span>
                      <span className="font-mono text-slate-600">{edu.year}</span>
                    </div>
                    <div className="text-slate-600">{edu.location} | Honors: {edu.honors}</div>
                  </div>
                ))}

                {CERTIFICATIONS_DATA.slice(0, 1).map((cert, idx) => (
                  <div key={idx} className="space-y-0.5 pt-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">{cert.name} — {cert.issuer}</span>
                      <span className="font-mono text-slate-600">{cert.year}</span>
                    </div>
                    <div className="text-slate-600">Core Focus: Corporate Administration, Back-Office Documentation & Information Technology</div>
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                  <div>
                    <span className="font-bold text-slate-900">Languages: </span>
                    <span>{profile.languages?.join(' | ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Work Environment Readiness: </span>
                    <span>{profile.workReadiness}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
