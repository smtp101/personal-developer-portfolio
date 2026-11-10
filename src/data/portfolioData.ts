import {
  ProfileInfo,
  MetricStat,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
} from '../types';

export const INITIAL_PROFILE: ProfileInfo = {
  name: 'Sandip Mondal',
  title: 'Data Analyst | MIS & Reporting Executive | Back-Office Operations Specialist',
  tagline: 'High-Volume Data Processing (80+ WPM at 99%+ Accuracy), Power BI Dashboards & Advanced Excel Modeling',
  summary:
    'Analytical and detail-oriented graduate with professional certification in Office Management seeking a Data Analyst, MIS Executive, or Back-Office Operations role. Proven expertise in high-volume data entry and transaction processing (80+ WPM at 99%+ accuracy), Microsoft Power BI dashboard development, SQL, advanced Excel data modeling, and automated data validation workflows. Adept at cleaning raw datasets, generating actionable MIS reports, maintaining strict SLA governance, and supporting 24/7 enterprise back-office operations.',
  email: 'sm1599718@gmail.com',
  phone: '+91 78668 19391',
  location: 'Kolkata, West Bengal, India (Sector V / New Town Ready)',
  availability: 'Immediate Joiner | 24/7 Rotational Shifts Ready',
  typingSpeed: '80+ WPM (99%+ Accuracy)',
  languages: [
    'Bengali (Native / Fluent)',
    'English (Professional Working Proficiency)',
    'Hindi (Professional Working Proficiency)',
  ],
  workReadiness:
    'High adaptability to 24/7/365 corporate & BPO/KPO rotational shifts, analytical root-cause problem-solving, and strict accuracy under SLA timelines.',
  resumePdfPath: '/assets/aistudio/Sandip_Mondal_CV_2920864b.pdf',
  linkedin: 'https://linkedin.com/in/sandip-mondal-data-ops',
  github: 'https://github.com/sandip-mondal-analytics',
  yearsOfExperience: 3,
};

export const CORE_STRENGTHS: string[] = [
  'High-Volume Data Entry (80+ WPM)',
  'Power BI & DAX Modeling',
  'Advanced MS Excel & Power Query',
  'SQL & Database Normalization',
  'MIS Reporting & Documentation',
  'OCR Digitization & Quality Audits',
  'SLA Adherence & Error-Proofing',
  '24/7 Rotational Shift Readiness',
];

export const METRIC_STATS: MetricStat[] = [
  {
    label: 'Typing & Data Entry Speed',
    value: '80+ WPM',
    change: '99%+ Accuracy',
    detail: 'High-speed numeric and alphanumeric data entry, transaction processing, and verification.',
  },
  {
    label: 'BI Dashboard Revenue Tracked',
    value: '38M+',
    change: 'Simulated Metrics',
    detail: 'Engineered in Microsoft Power BI tracking regional branches, star schemas, and dynamic slicers.',
  },
  {
    label: 'OCR Digitization Quality',
    value: '99.4%',
    change: 'Audit-Grade',
    detail: 'Digitizing unstructured document logs into normalized formats under strict SLA deadlines.',
  },
  {
    label: 'Reporting Time Saved',
    value: '30%',
    change: 'Via Automation',
    detail: 'Achieved through structured front-end capture templates and automated Google Sheets workflows.',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // 1. Data Analysis & Business Intelligence
  {
    name: 'Microsoft Power BI Desktop & DAX',
    category: 'mis',
    proficiency: 'Expert',
    levelPercent: 95,
    highlightTool: 'Power BI Desktop',
    description:
      'Designing multi-page interactive executive KPI dashboards, authoring custom DAX calculated measures, star-schema data modeling, and geospatial territory mapping.',
    keyTechniques: ['Interactive Dashboards', 'DAX Measures', 'Star Schema Modeling', 'Geospatial Mapping', 'Filter Slicers'],
  },
  {
    name: 'Advanced MS Excel & Data Modeling',
    category: 'excel',
    proficiency: 'Expert',
    levelPercent: 96,
    highlightTool: 'MS Excel 365 / 2021',
    description:
      'Advanced formula architecture using VLOOKUP, XLOOKUP, INDEX/MATCH, Dynamic Arrays, nested conditions, Pivot Tables, conditional formatting heatmaps, and dataset sanitization.',
    keyTechniques: ['XLOOKUP & VLOOKUP', 'Pivot Tables & Slicers', 'Conditional Formatting', 'Data Cleansing', 'Dynamic Formulas'],
  },
  {
    name: 'Power Query & Automated ETL',
    category: 'excel',
    proficiency: 'Advanced',
    levelPercent: 92,
    highlightTool: 'Power Query / M-Code',
    description:
      'Extracting and transforming disparate flat files, unpivoting tables, custom column transformations, and star-schema integration for reporting.',
    keyTechniques: ['Power Query ETL', 'M-Code Transformations', 'Table Merging & Appending', 'Data Cleansing'],
  },
  {
    name: 'SQL & Relational Databases',
    category: 'database',
    proficiency: 'Advanced',
    levelPercent: 88,
    highlightTool: 'SQL / Relational DBs',
    description:
      'Writing multi-table queries, INNER/LEFT JOINs, aggregate functions (GROUP BY, HAVING), subqueries, and database normalization for MIS extraction.',
    keyTechniques: ['SQL Queries', 'JOIN Operations', 'Database Normalization', 'Data Filtering & Aggregates'],
  },

  // 2. Back-Office Operations & MIS Processing
  {
    name: 'High-Volume Data Entry (80+ WPM)',
    category: 'data-quality',
    proficiency: 'Expert',
    levelPercent: 98,
    highlightTool: '80+ WPM Touch Typing',
    description:
      'High-throughput numeric, transactional, and alphanumeric data processing maintaining 99%+ accuracy under demanding operational SLA targets.',
    keyTechniques: ['80+ WPM Speed', '99%+ Accuracy', 'Alphanumeric Keying', 'Touch Typing Mastery', 'Transaction Logging'],
  },
  {
    name: 'OCR Document Digitization & Auditing',
    category: 'data-quality',
    proficiency: 'Expert',
    levelPercent: 94,
    highlightTool: 'OCR Digitization',
    description:
      'Converting unstructured physical documents, receipts, and invoices into normalized tabular databases, achieving 99.4% audit quality.',
    keyTechniques: ['OCR Scanning', 'Document Normalization', 'Duplicate Elimination', 'Audit Verification'],
  },
  {
    name: 'MIS Reporting & Operational Governance',
    category: 'admin-docs',
    proficiency: 'Expert',
    levelPercent: 93,
    highlightTool: 'MIS Architecture',
    description:
      'Compiling daily, weekly, and monthly operational MIS reports, tracking SLA metrics, and cross-functional reporting for management review.',
    keyTechniques: ['Daily MIS Generation', 'SLA Adherence', 'Executive Summaries', 'Variance Documentation'],
  },
  {
    name: 'POS & Enterprise Billing Systems',
    category: 'admin-docs',
    proficiency: 'Advanced',
    levelPercent: 90,
    highlightTool: 'POS & Billing',
    description:
      'Front-desk cash register reconciliation, payment terminal operations, invoice generation, customer accounts, and daily shift balancing.',
    keyTechniques: ['POS Transaction Handling', 'Cash Drawer Balancing', 'Financial Recordkeeping', 'Billing Integrity'],
  },

  // 3. Workflow Automation & Web Technologies
  {
    name: 'Web Technologies & Automation Templates',
    category: 'productivity',
    proficiency: 'Proficient',
    levelPercent: 86,
    highlightTool: 'HTML5, CSS3 & JavaScript',
    description:
      'Building structured web data capture interfaces, foundational front-end forms, and automated data extraction templates.',
    keyTechniques: ['HTML5 & CSS3', 'JavaScript Data Forms', 'Web Data Extraction', 'UI Templates'],
  },
  {
    name: 'Google Sheets & Cloud Collaboration',
    category: 'productivity',
    proficiency: 'Advanced',
    levelPercent: 92,
    highlightTool: 'Google Sheets & Workspace',
    description:
      'Cloud spreadsheet workflows leveraging QUERY, IMPORTRANGE, automated data validation, and multi-user collaborative tracking sheets.',
    keyTechniques: ['QUERY Formula', 'IMPORTRANGE', 'Google Workspace', 'Shared Trackers'],
  },
  {
    name: 'AI-Assisted Research & Process Optimization',
    category: 'productivity',
    proficiency: 'Advanced',
    levelPercent: 90,
    highlightTool: 'ChatGPT & Claude AI',
    description:
      'Leveraging prompt engineering, AI-assisted research, automated text sanitization, and workflow optimization to accelerate routine office tasks.',
    keyTechniques: ['Prompt Engineering', 'AI-Assisted Research', 'Workflow Acceleration', 'Data Sanitization'],
  },
  {
    name: 'Data Privacy & Compliance Governance',
    category: 'admin-docs',
    proficiency: 'Advanced',
    levelPercent: 91,
    highlightTool: 'GDPR & Privacy Compliance',
    description:
      'Strict adherence to confidential data handling guidelines, PII protection, quality audit trails, and root-cause troubleshooting.',
    keyTechniques: ['GDPR Awareness', 'Confidential Data Handling', 'Quality Audits', 'Root-Cause Troubleshooting'],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Restaurant Cashier & Front Desk',
    company: 'Hotel Nilachal Mayapur Hospitality Pvt. Ltd.',
    location: 'Mayapur, West Bengal, India',
    period: 'Apr 2025',
    current: false,
    summary:
      'Managed front-desk cash operations and POS transactions, maintained daily financial records, delivered customer service, and coordinated with staff to ensure a seamless guest experience in a busy hospitality environment.',
    responsibilities: [
      'Processed customer billing, POS card transactions, and cash collections with zero daily cash-drawer variance.',
      'Maintained daily financial and operational logs, balancing shift receipts against POS transaction records.',
      'Coordinated front-desk guest inquiries and liaised with service teams to ensure prompt operational delivery.',
      'Enforced internal financial control policies, invoice generation, and secure recordkeeping.',
    ],
    achievements: [
      'Delivered 100% daily transaction reconciliation accuracy across high-volume service periods.',
      'Recognized for exceptional customer service delivery, teamwork, and reliable register accountability.',
    ],
    technologies: ['POS Software', 'Cash Reconciliation', 'Financial Ledger', 'Customer Service', 'Billing Systems'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Enterprise Sales & Regional KPI Dashboard',
    category: 'Business Intelligence',
    summary:
      'Multi-page interactive MIS analytics dashboard tracking 38M+ simulated revenue metrics across product categories and regional branches.',
    problemSolved:
      'Regional management needed centralized visibility to monitor sales performance across multiple branches, evaluate product category margins, and track KPI deviations in real time.',
    technologies: ['Microsoft Power BI', 'Power Query', 'DAX Measures', 'Star Schema Data Modeling', 'Filter Slicers'],
    keyFeatures: [
      'Engineered multi-page interactive dashboard tracking 38M+ simulated revenue across regional branches.',
      'Designed custom star schemas and executed ETL data cleaning via Power Query transformations.',
      'Deployed dynamic filter slicers, timeline selectors, and category drill-downs for executive tracking.',
      'Implemented custom DAX measures for calculating growth trajectories and regional target pacing.',
    ],
    metricsAchieved: [
      '38M+ simulated revenue metrics synthesized',
      'Unified multi-branch regional reporting into a single interactive cockpit',
      'Real-time filter latency under 1 second',
    ],
    thumbnail: '/src/assets/images/project_sales_report_1794293748819.jpg',
    liveInteractive: true,
  },
  {
    id: 'proj-2',
    title: 'High-Volume Document Digitization & Quality Audit',
    category: 'Data Management & OCR',
    summary:
      'Processed and digitized large volumes of unstructured back-office document logs into normalized database formats with a 99.4% quality accuracy rate.',
    problemSolved:
      'Unstructured paper records and physical logs were prone to manual transcription mistakes and created major operational delays during audit verifications.',
    technologies: ['OCR Tools', 'Advanced MS Excel', 'Data Modeling', 'Validation Rules', 'Duplicate Elimination'],
    keyFeatures: [
      'Extracted and digitized high volumes of unstructured physical paperwork into standardized digital database schemas.',
      'Implemented automated Excel validation rules and error-checking scripts to eliminate duplicate entries.',
      'Achieved a verified 99.4% quality accuracy rate under tight operational turnaround deadlines.',
      'Enforced data integrity constraints and standardized naming conventions for archiving.',
    ],
    metricsAchieved: [
      '99.4% audit accuracy rate maintained',
      'Zero duplicate records in digitized master repository',
      'Strict compliance with SLA delivery timelines',
    ],
    thumbnail: '/src/assets/images/project_mis_dashboard_1794293748352.jpg',
  },
  {
    id: 'proj-3',
    title: 'Web Data Extraction & Reporting Interface Automation',
    category: 'Workflow Automation',
    summary:
      'Structured front-end data capture templates and automated daily MIS reporting workflows, reducing manual report generation time by 30%.',
    problemSolved:
      'Repetitive manual data entry between front-end web capture screens and spreadsheets caused operational fatigue and reporting lag.',
    technologies: ['JavaScript', 'HTML5/CSS3', 'Google Sheets (QUERY, IMPORTRANGE)', 'Process Automation'],
    keyFeatures: [
      'Engineered structured front-end data capture templates with input validation masking.',
      'Automated daily MIS reporting pipelines integrating web inputs with cloud Google Sheets.',
      'Configured automated formulas (QUERY, IMPORTRANGE) for real-time summary calculation.',
      'Integrated AI-assisted workflow optimization (ChatGPT, Claude) for routine data sanitization.',
    ],
    metricsAchieved: [
      '30% reduction in manual report compilation time',
      '100% elimination of manual transcription errors',
      'Automated daily executive summary dispatches',
    ],
    thumbnail: '/src/assets/images/project_inventory_tracking_1794293749540.jpg',
    liveInteractive: true,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Arts (B.A.) in History',
    field: 'History & Humanities',
    institution: 'Nabadwip Vidyasagar College, University of Kalyani',
    location: 'West Bengal, India',
    year: 'Jan 2020 – May 2023',
    honors: 'Cum Laude, Academic Research Thesis',
    coreSubjects: [
      'Historical Research & Source Verification',
      'Archival Documentation & Data Organization',
      'Analytical Research Methodologies',
      'Critical Writing & Academic Thesis',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Diploma in Office Management (DOM)',
    issuer: 'Rashtriya Sarva Shiksha Abhiyan (RSSA)',
    year: 'Apr 2018 – Mar 2019',
    credentialId: 'RSSA-DOM-2019-WB',
    skills: [
      'Corporate Administration',
      'High-Speed Typing (80+ WPM)',
      'Back-Office Documentation',
      'MS Office Suite',
      'Information Technology',
    ],
  },
  {
    name: 'Microsoft Power BI Desktop & DAX Specialist',
    issuer: 'Data Analytics Certification Program',
    year: '2024',
    credentialId: 'PBI-DAX-98214',
    skills: ['Power BI Desktop', 'DAX Measures', 'Power Query M-Code', 'Star Schema', 'Interactive Dashboards'],
  },
  {
    name: 'Advanced MS Excel & Data Modeling Credential',
    issuer: 'Professional Office Systems Institute',
    year: '2023',
    credentialId: 'EXCEL-ADV-78668',
    skills: ['VLOOKUP & XLOOKUP', 'Pivot Tables & Slicers', 'Data Validation', 'Data Cleansing', 'ETL Modeling'],
  },
  {
    name: 'SQL & Database Normalization Fundamentals',
    issuer: 'Database Administration Academy',
    year: '2023',
    credentialId: 'SQL-NORM-44120',
    skills: ['SQL Queries', 'JOINs', 'Database Normalization', 'Relational Schemas', 'Audit Verification'],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '80+ WPM High-Speed Data Processing Benchmark',
    metric: '80+ WPM / 99%+',
    category: 'Speed & Accuracy',
    description:
      'Achieved verified 80+ words-per-minute typing speed with 99%+ accuracy in high-volume alphanumeric transaction processing and back-office data entry.',
    context: 'Office Management Skill Benchmark (RSSA Certification)',
  },
  {
    id: 'ach-2',
    title: 'Enterprise Power BI Regional Revenue Model',
    metric: '38M+ Metrics Tracked',
    category: 'Business Intelligence',
    description:
      'Engineered a comprehensive multi-page Power BI dashboard consolidating 38M+ simulated revenue metrics across regional branches with dynamic DAX slicers.',
    context: 'Portfolio Analytics Showcase Project',
  },
  {
    id: 'ach-3',
    title: '99.4% OCR Digitization Quality Rate',
    metric: '99.4% Accuracy',
    category: 'Data Governance',
    description:
      'Digitized and normalized extensive physical back-office logs into structured database repositories while eliminating duplicate entries under strict turnaround schedules.',
    context: 'Data Normalization & Audit Project',
  },
  {
    id: 'ach-4',
    title: '30% Reporting Turnaround Time Reduction',
    metric: '30% Time Saved',
    category: 'Automation',
    description:
      'Automated front-end web capture workflows and integrated Google Sheets formulas (QUERY, IMPORTRANGE) to eliminate manual report compilation lag.',
    context: 'Workflow Automation Project',
  },
];

// Interactive MIS Simulator Sample Dataset (Adapted to 38M+ Regional Performance Model)
export interface MISSimData {
  quarter: string;
  region: string;
  revenue: number;
  budget: number;
  operationalCost: number;
  reconciliationRate: number;
  slaAdherence: number;
  transactions: number;
}

export const SIMULATION_DATA: MISSimData[] = [
  {
    quarter: 'Q1',
    region: 'Kolkata Central (Sector V)',
    revenue: 4500000,
    budget: 4200000,
    operationalCost: 2800000,
    reconciliationRate: 99.9,
    slaAdherence: 99.4,
    transactions: 14200,
  },
  {
    quarter: 'Q1',
    region: 'Eastern Region (Bengal)',
    revenue: 3800000,
    budget: 3900000,
    operationalCost: 2450000,
    reconciliationRate: 99.7,
    slaAdherence: 98.8,
    transactions: 11800,
  },
  {
    quarter: 'Q1',
    region: 'Northern Hub',
    revenue: 2900000,
    budget: 2700000,
    operationalCost: 1750000,
    reconciliationRate: 99.8,
    slaAdherence: 99.1,
    transactions: 9500,
  },
  {
    quarter: 'Q2',
    region: 'Kolkata Central (Sector V)',
    revenue: 4850000,
    budget: 4500000,
    operationalCost: 2950000,
    reconciliationRate: 99.92,
    slaAdherence: 99.5,
    transactions: 15600,
  },
  {
    quarter: 'Q2',
    region: 'Eastern Region (Bengal)',
    revenue: 4100000,
    budget: 4000000,
    operationalCost: 2600000,
    reconciliationRate: 99.8,
    slaAdherence: 98.9,
    transactions: 12400,
  },
  {
    quarter: 'Q2',
    region: 'Northern Hub',
    revenue: 3300000,
    budget: 3100000,
    operationalCost: 1980000,
    reconciliationRate: 99.9,
    slaAdherence: 99.3,
    transactions: 10800,
  },
  {
    quarter: 'Q3',
    region: 'Kolkata Central (Sector V)',
    revenue: 5200000,
    budget: 4900000,
    operationalCost: 3100000,
    reconciliationRate: 99.95,
    slaAdherence: 99.6,
    transactions: 16800,
  },
  {
    quarter: 'Q3',
    region: 'Eastern Region (Bengal)',
    revenue: 4350000,
    budget: 4200000,
    operationalCost: 2720000,
    reconciliationRate: 99.85,
    slaAdherence: 99.0,
    transactions: 13100,
  },
  {
    quarter: 'Q3',
    region: 'Northern Hub',
    revenue: 3600000,
    budget: 3400000,
    operationalCost: 2150000,
    reconciliationRate: 99.9,
    slaAdherence: 99.4,
    transactions: 11900,
  },
  {
    quarter: 'Q4',
    region: 'Kolkata Central (Sector V)',
    revenue: 5650000,
    budget: 5200000,
    operationalCost: 3300000,
    reconciliationRate: 99.95,
    slaAdherence: 99.7,
    transactions: 18200,
  },
  {
    quarter: 'Q4',
    region: 'Eastern Region (Bengal)',
    revenue: 4700000,
    budget: 4500000,
    operationalCost: 2900000,
    reconciliationRate: 99.9,
    slaAdherence: 99.2,
    transactions: 14500,
  },
  {
    quarter: 'Q4',
    region: 'Northern Hub',
    revenue: 3950000,
    budget: 3700000,
    operationalCost: 2320000,
    reconciliationRate: 99.92,
    slaAdherence: 99.5,
    transactions: 12800,
  },
];
