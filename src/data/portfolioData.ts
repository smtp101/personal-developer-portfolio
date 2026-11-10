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
  name: 'S. M. Salman',
  title: 'Operations & MIS Professional | Data Management Specialist',
  tagline: 'Driving Operational Efficiency Through Data Integrity, Advanced Excel & Automated Reporting',
  summary:
    'Results-driven Operations & Management Information Systems (MIS) Professional with 6+ years of dedicated experience in architecting robust reporting frameworks, back-office operational excellence, and end-to-end database governance. Proven track record in eliminating manual reporting redundancies by up to 65%, architecting dynamic executive dashboards, and establishing stringent data validation protocols that ensure 99.85%+ audit accuracy.',
  email: 'sms786681@gmail.com',
  phone: '+1 (555) 384-9120',
  location: 'Chicago, IL (Open to Remote & Hybrid)',
  availability: 'Available for Full-time Roles & Strategic Consulting',
  linkedin: 'https://linkedin.com/in/operations-mis-specialist',
  github: 'https://github.com/mis-operations-pro',
  yearsOfExperience: 6,
};

export const CORE_STRENGTHS: string[] = [
  'Back-Office Operations',
  'MIS Reporting',
  'Advanced MS Excel',
  'Database Management',
  'Data Analysis',
  'Documentation & Reporting',
  'Process Optimization',
  'Administrative Support',
];

export const METRIC_STATS: MetricStat[] = [
  {
    label: 'Data Reconciliation Accuracy',
    value: '99.85%',
    change: '+3.4% YoY',
    detail: 'Across 15,000+ monthly transactional movements with zero ledger variance.',
  },
  {
    label: 'MIS Turnaround Reduction',
    value: '65%',
    change: 'From 18h to 6h',
    detail: 'Achieved through Power Query ETL consolidation and automated VBA routines.',
  },
  {
    label: 'Automated Reports & Models',
    value: '120+',
    change: 'Multi-Department',
    detail: 'Serving C-suite leadership, finance controllers, and regional branch teams.',
  },
  {
    label: 'Identified Cost Optimizations',
    value: '$42,500',
    change: 'Annualized',
    detail: 'Pinpointed through multi-branch variance analysis and inventory leakage tracking.',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // 1. Excel & Advanced Excel
  {
    name: 'Advanced Formulas & Dynamic Arrays',
    category: 'excel',
    proficiency: 'Expert',
    levelPercent: 96,
    highlightTool: 'Excel 365 / 2021',
    description:
      'Architecting complex nested models using XLOOKUP, INDEX/MATCH, Dynamic Array Spill formulas (FILTER, UNIQUE, SORT), and LAMBDA functions.',
    keyTechniques: ['XLOOKUP', 'INDEX/MATCH', 'FILTER/UNIQUE', 'LAMBDA', 'Nested IFS'],
  },
  {
    name: 'Power Query & Automated ETL',
    category: 'excel',
    proficiency: 'Expert',
    levelPercent: 94,
    highlightTool: 'Power Query / M-Code',
    description:
      'Extracting, transforming, and automating dirty data streams from multi-source ERP extracts into structured star-schema data models.',
    keyTechniques: ['Data Merging & Appending', 'Custom M-Code', 'Column Profiling', 'Unpivoting Tables'],
  },
  {
    name: 'VBA Macros & Workflow Automation',
    category: 'excel',
    proficiency: 'Advanced',
    levelPercent: 88,
    highlightTool: 'Excel VBA & Office Scripts',
    description:
      'Building robust button-triggered macro routines that clean files, generate monthly batch workbooks, and automate email dispatch.',
    keyTechniques: ['Automated Loop Logic', 'Workbook Event Handlers', 'Outlook Integration', 'Batch Export to PDF'],
  },
  {
    name: 'Interactive Pivot Tables & Slicers',
    category: 'excel',
    proficiency: 'Expert',
    levelPercent: 95,
    highlightTool: 'Pivot Engine & Data Model',
    description:
      'Designing synchronized executive cockpits with cross-filtering timeline slicers, calculated fields, and conditional formatting KPI heatmaps.',
    keyTechniques: ['Calculated Items', 'Synchronized Slicers', 'KPI Heatmaps', 'Conditional Rules'],
  },

  // 2. MIS Reporting & Data Analysis
  {
    name: 'Executive MIS Dashboards',
    category: 'mis',
    proficiency: 'Expert',
    levelPercent: 94,
    highlightTool: 'MIS Architecture',
    description:
      'Translating raw organizational figures into single-pane-of-glass executive dashboards with variance indicators, budget vs actuals, and pacing.',
    keyTechniques: ['Variance Analysis', 'Executive Summaries', 'Run-rate Forecasts', 'EBITDA Margin Tracking'],
  },
  {
    name: 'Sales Performance & Pipeline Analytics',
    category: 'mis',
    proficiency: 'Advanced',
    levelPercent: 90,
    highlightTool: 'Sales Intelligence',
    description:
      'Tracking sales conversion funnels, regional territory velocity, representative quotas, and margin realization across products.',
    keyTechniques: ['Territory Breakdown', 'Quota Attainment', 'Average Deal Size', 'Win/Loss Analysis'],
  },
  {
    name: 'Operational Trend & Cohort Analysis',
    category: 'mis',
    proficiency: 'Advanced',
    levelPercent: 89,
    highlightTool: 'Statistical Modeling',
    description:
      'Analyzing seasonal peaks, employee turnaround, dispatch velocity, and operational bottlenecks using moving averages and trendlines.',
    keyTechniques: ['Moving Averages', 'Seasonal Smoothing', 'Cycle Time Analysis', 'Bottleneck Identification'],
  },

  // 3. Database Management
  {
    name: 'SQL Querying & Data Extraction',
    category: 'database',
    proficiency: 'Advanced',
    levelPercent: 88,
    highlightTool: 'MySQL / PostgreSQL / SQL Server',
    description:
      'Writing multi-table JOINs, subqueries, CTEs, and aggregate window functions to pull production data for MIS reporting pipelines.',
    keyTechniques: ['INNER/LEFT JOINs', 'GROUP BY & HAVING', 'Window Functions', 'CTEs & Subqueries'],
  },
  {
    name: 'Relational Schema Design & Normalization',
    category: 'database',
    proficiency: 'Advanced',
    levelPercent: 86,
    highlightTool: 'Database Architecture',
    description:
      'Normalizing transactional spreadsheets up to 3NF, creating primary/foreign key relationships, and enforcing referential integrity.',
    keyTechniques: ['3NF Normalization', 'Entity Relationship Diagrams', 'Foreign Key Constraints', 'Index Optimization'],
  },
  {
    name: 'Microsoft Access & Local Databases',
    category: 'database',
    proficiency: 'Advanced',
    levelPercent: 90,
    highlightTool: 'MS Access',
    description:
      'Constructing front-end input forms, parameter queries, and automated reports for departmental record-keeping.',
    keyTechniques: ['Parameter Queries', 'Form Design', 'Sub-forms', 'Report Generators'],
  },

  // 4. Data Entry & Validation
  {
    name: 'Data Validation & Error Proofing (Poka-Yoke)',
    category: 'data-quality',
    proficiency: 'Expert',
    levelPercent: 95,
    highlightTool: 'Validation Engines',
    description:
      'Designing strict input-masking rules, dynamic dependent dropdowns, regex pattern guards, and automated audit checks.',
    keyTechniques: ['Dependent Dropdowns', 'Custom Validation Formulas', 'Duplicate Blocking', 'Input Masking'],
  },
  {
    name: 'High-Throughput Reconciliation & Auditing',
    category: 'data-quality',
    proficiency: 'Expert',
    levelPercent: 94,
    highlightTool: 'Audit Verification',
    description:
      'Conducting two-way and three-way reconciliations between ERP ledger records, bank statements, and warehouse receipts.',
    keyTechniques: ['Three-Way Matching', 'Discrepancy Tagging', 'Fuzzy Lookup', 'Audit Trail Logging'],
  },

  // 5. Documentation & Administration
  {
    name: 'SOP Authoring & Process Mapping',
    category: 'admin-docs',
    proficiency: 'Expert',
    levelPercent: 92,
    highlightTool: 'Process Engineering',
    description:
      'Documenting step-by-step Standard Operating Procedures, cross-functional RACI matrices, and BPMN swimlane operational workflows.',
    keyTechniques: ['Standard Operating Procedures', 'BPMN Swimlanes', 'RACI Matrices', 'Training Handbooks'],
  },
  {
    name: 'Back-Office Operations & Compliance',
    category: 'admin-docs',
    proficiency: 'Expert',
    levelPercent: 93,
    highlightTool: 'Operations Governance',
    description:
      'Supervising high-volume daily transactional workflows, compliance checklists, vendor records, and audit documentation archiving.',
    keyTechniques: ['Compliance Logs', 'Vendor Management', 'SLA Monitoring', 'Archival Systems'],
  },

  // 6. Productivity & Web Tools
  {
    name: 'Business Intelligence & Cloud Spreadsheets',
    category: 'productivity',
    proficiency: 'Advanced',
    levelPercent: 87,
    highlightTool: 'Power BI & Google Sheets',
    description:
      'Connecting cloud datasets with Google Sheets AppSheet, Power BI DAX basic measures, and SharePoint document collaboration libraries.',
    keyTechniques: ['Power BI DAX', 'Google Sheets QUERY/ARRAYFORMULA', 'SharePoint Lists', 'AppSheet'],
  },
  {
    name: 'Enterprise Productivity Suites',
    category: 'productivity',
    proficiency: 'Expert',
    levelPercent: 94,
    highlightTool: 'Microsoft 365 & Workspace',
    description:
      'Leveraging Outlook, Teams, OneDrive enterprise policies, and Jira/Asana task boards for streamlined operations communication.',
    keyTechniques: ['Jira / Asana', 'SharePoint Governance', 'M365 Admin Center', 'Automated Alerts'],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior MIS & Operations Analyst',
    company: 'Global Enterprise Solutions Inc.',
    location: 'Chicago, IL',
    period: '2022 - Present',
    current: true,
    summary:
      'Spearheading centralized MIS reporting architecture and back-office data governance across 14 regional branches. Directly reporting to the Director of Operations.',
    responsibilities: [
      'Architect and maintain 45+ daily, weekly, and monthly automated MIS executive dashboards spanning revenue, cost centers, and regional productivity.',
      'Constructed a unified Power Query pipeline consolidating disparate SAP ERP flat files, reducing data prep latency by 65%.',
      'Oversee a data quality team of 4 coordinators, enforcing strict validation checks and weekly reconciliation audits.',
      'Conduct monthly operational variance analysis, presenting root-cause explanations and corrective actions to senior leadership.',
    ],
    achievements: [
      'Identified $42,500 in redundant operational expenses by developing a cross-branch supply utilization tracker.',
      'Achieved a 99.9% on-time delivery rate for month-end C-suite executive reporting packs across 24 consecutive closing cycles.',
      'Mentored 18 cross-functional team members in advanced Excel techniques, fostering departmental self-service capability.',
    ],
    technologies: ['Advanced Excel', 'Power Query (M)', 'VBA Macros', 'SQL Server', 'Power BI', 'SAP ERP'],
  },
  {
    id: 'exp-2',
    role: 'Operations & MIS Specialist',
    company: 'Apex Logistics & Supply Chain Ltd.',
    location: 'Dallas, TX (Hybrid)',
    period: '2019 - 2022',
    current: false,
    summary:
      'Managed end-to-end operational data tracking for high-velocity fleet movements, warehouse SKU inventories, and customer SLA fulfillment.',
    responsibilities: [
      'Designed and deployed an Automated Inventory Tracking System monitoring 14,000+ active SKUs across three distribution centers.',
      'Formulated custom VBA macros to auto-reconcile inbound carrier manifests against receiving logs, slashing manual verification by 14 hours weekly.',
      'Built interactive KPI dashboards displaying on-time dispatch rates, carrier turnaround times, and dock dwell metrics.',
      'Drafted comprehensive SOPs for warehouse inventory counting and transactional discrepancy escalation.',
    ],
    achievements: [
      'Elevated inventory reconciliation accuracy from 96.1% to 99.85% through structured data validation controls.',
      'Eliminated billing reconciliation delays with third-party freight providers, decreasing disputed invoice volume by 48%.',
      'Received the "Excellence in Operational Innovation" award for automating daily carrier tracking reports.',
    ],
    technologies: ['MS Excel 365', 'VBA Automation', 'MySQL', 'MS Access', 'WMS Software', 'Process SOPs'],
  },
  {
    id: 'exp-3',
    role: 'Data Management & Reporting Executive',
    company: 'Horizon Financial Services',
    location: 'Austin, TX',
    period: '2017 - 2019',
    current: false,
    summary:
      'Supported back-office financial loan operations, client database verification, compliance recordkeeping, and daily transaction reporting.',
    responsibilities: [
      'Processed and validated over 1,200 daily financial loan records, verifying applicant documentation against compliance benchmarks.',
      'Maintained client database integrity in MS Access and SQL, executing deduplication queries and data hygiene protocols.',
      'Generated daily transactional MIS logs for credit risk and portfolio management committees.',
      'Coordinated audit support by preparing historical transactional extracts for internal and external auditors.',
    ],
    achievements: [
      'Maintained zero audit non-compliance infractions across 4 quarterly external compliance reviews.',
      'Cut customer record onboarding errors by 40% through standardized data-entry validation templates with regex masks.',
    ],
    technologies: ['MS Excel (Advanced)', 'MS Access', 'SQL Queries', 'Data Hygiene', 'Banking Core Systems'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Advanced Excel MIS Executive Dashboard',
    category: 'MIS & Reporting',
    summary:
      'Dynamic executive reporting cockpit consolidating multi-departmental KPIs, revenue actuals vs budgets, and operational efficiency metrics.',
    problemSolved:
      'The organization previously relied on 9 fragmented workbooks and manual copy-paste cycles that took 18 hours each month-end and produced frequent transposition errors.',
    technologies: ['Advanced Excel', 'Power Query', 'VBA Automation', 'Dynamic Arrays', 'Interactive Slicers'],
    keyFeatures: [
      'Single-click data refresh that pulls and cleans 4 transactional data sources in under 30 seconds.',
      'Interactive executive cockpit with year-over-year, month-over-month, and variance drilldowns.',
      'Conditional heatmap highlighting critical deviations (>5% negative variance) with automatic alert flags.',
      'Automated PDF export script that formats and emails customized departmental snapshots to leadership.',
    ],
    metricsAchieved: [
      '65% reduction in monthly reporting cycle time',
      '100% elimination of manual transposition errors',
      'Adopted by 5 C-suite executives and 14 branch managers',
    ],
    thumbnail: '/src/assets/images/project_mis_dashboard_1794293748352.jpg',
    liveInteractive: true,
  },
  {
    id: 'proj-2',
    title: 'Sales Performance & Revenue Intelligence Report',
    category: 'Data Analysis',
    summary:
      'Comprehensive regional sales intelligence model evaluating rep productivity, deal cycle duration, customer acquisition costs, and margin contribution.',
    problemSolved:
      'Sales leaders lacked visibility into territory margin differences, resulting in discounting on low-margin product lines without realizing profit erosion.',
    technologies: ['Power Query', 'Data Modeling', 'Excel Formulas (XLOOKUP, LAMBDA)', 'Pivot Charts'],
    keyFeatures: [
      'Product mix profitability matrix analyzing gross margins per SKU across 4 geographical regions.',
      'Rep leaderboard with quota attainment pacing, weighted pipeline calculation, and commission tiers.',
      'Scenario modeling tool allowing VP of Sales to test the revenue impact of 2-5% price adjustments.',
      'Automated weekly email summary distribution with executive bullet highlights.',
    ],
    metricsAchieved: [
      'Identified 3 unprofitable discounting patterns saving $28,000 in Q3',
      'Decreased weekly pipeline reconciliation from 5 hours to 20 minutes',
    ],
    thumbnail: '/src/assets/images/project_sales_report_1794293748819.jpg',
    liveInteractive: true,
  },
  {
    id: 'proj-3',
    title: 'Employee Management & HR Operations Database',
    category: 'Database Management',
    summary:
      'Normalized relational database structure tracking employee master profiles, attendance logs, leave balances, performance appraisals, and compliance training.',
    problemSolved:
      'HR and operations were managing records across 12 separate spreadsheet sheets with rampant duplicate entries and no historical revision audit trail.',
    technologies: ['Relational Database (SQL)', 'MS Access Form UI', 'Data Validation Engine', 'Audit Logging'],
    keyFeatures: [
      'Normalized 3NF relational schema with strict referential integrity preventing orphan records.',
      'Role-based input forms with required field validation, date pickers, and automated employee ID generation.',
      'Automated alerts for expiring employee certifications, visas, and mandatory compliance refresher courses.',
      'One-click generation of head-count distribution, attrition metrics, and leave utilization summaries.',
    ],
    metricsAchieved: [
      'Zero duplicate employee records achieved across 850+ active personnel files',
      '100% on-time certification renewal rate compliance',
    ],
    thumbnail: '/src/assets/images/project_mis_dashboard_1794293748352.jpg',
  },
  {
    id: 'proj-4',
    title: 'Automated Inventory Velocity & Reorder System',
    category: 'Operations',
    summary:
      'Predictive inventory management system calculating stock velocity, safety stock thresholds, lead-time variance, and automated PO reorder recommendations.',
    problemSolved:
      'Stockouts in fast-moving items coupled with overstocking in obsolete items caused working capital lockup and customer dispatch delays.',
    technologies: ['Excel Dynamic Arrays', 'Power Query ETL', 'VBA Event Handlers', 'Statistical Forecasting'],
    keyFeatures: [
      'Dynamic ABC analysis categorization of 14,000+ SKUs based on annual consumption value.',
      'Automatic reorder point (ROP) calculation dynamically updated based on 30-day moving average demand.',
      'Supplier on-time delivery (OTD) scorecard evaluating vendor performance and lead-time reliability.',
      'Visual stock status radar flagging low stock, optimal buffer, and dead inventory.',
    ],
    metricsAchieved: [
      '22% reduction in stockout occurrences over 6 months',
      'Freed up $34,000 in working capital by liquidating slow-moving inventory',
    ],
    thumbnail: '/src/assets/images/project_inventory_tracking_1794293749540.jpg',
    liveInteractive: true,
  },
  {
    id: 'proj-5',
    title: 'Automated Financial & Month-End Reporting System',
    category: 'Process Optimization',
    summary:
      'End-to-end automated macro system that ingests raw bank and ERP general ledger extracts, performs 3-way reconciliation, and produces audited closing schedules.',
    problemSolved:
      'The month-end finance closing team experienced bottleneck stress due to tedious manual ledger-to-bank reconciliation spanning 4,000+ entries.',
    technologies: ['Excel VBA', 'Power Query M-Code', 'Advanced Conditional Formatting', 'Audit Schedules'],
    keyFeatures: [
      'Fuzzy matching algorithm matching bank descriptions against vendor master ledger codes.',
      'Variance discrepancy dashboard highlighting un-reconciled items with aging analysis (>30, >60, >90 days).',
      'Automated creation of printable audit schedules conforming to accounting compliance standards.',
      'Password-protected cell locking and audit hash logging to ensure uncompromised data integrity.',
    ],
    metricsAchieved: [
      'Cut monthly closing cycle from 4 business days to 1.5 business days',
      '99.98% first-pass reconciliation accuracy',
    ],
    thumbnail: '/src/assets/images/project_sales_report_1794293748819.jpg',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.S.)',
    field: 'Information Systems & Business Administration',
    institution: 'University of Illinois at Chicago (UIC)',
    location: 'Chicago, IL',
    year: 'Graduated: 2017',
    honors: 'Dean’s List Honors',
    coreSubjects: [
      'Management Information Systems (MIS)',
      'Database Management & SQL Design',
      'Business Statistics & Quantitative Analysis',
      'Operations & Supply Chain Management',
      'Enterprise Systems & ERP Applications',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Microsoft Certified: Excel Expert (Microsoft 365 Apps)',
    issuer: 'Microsoft Corporation',
    year: '2023',
    credentialId: 'MSFT-EX-8492041',
    skills: ['Advanced Data Modeling', 'Dynamic Arrays', 'Power Query', 'Automation', 'Financial Modeling'],
  },
  {
    name: 'Advanced MIS & Business Analytics Specialist',
    issuer: 'Corporate Finance Institute (CFI)',
    year: '2022',
    credentialId: 'CFI-MIS-551980',
    skills: ['Executive Dashboards', 'KPI Tracking', 'Variance Analysis', 'Forecasting'],
  },
  {
    name: 'Database Management & SQL Fundamentals Certification',
    issuer: 'Oracle Academy / Stanford Online',
    year: '2021',
    credentialId: 'SQL-PRO-202194',
    skills: ['Relational Schema Design', 'Complex SQL Queries', 'Indexing', 'Data Normalization'],
  },
  {
    name: 'Lean Six Sigma White Belt - Process Optimization',
    issuer: 'Management & Strategy Institute',
    year: '2020',
    credentialId: 'LSS-WB-93102',
    skills: ['Root Cause Analysis', 'Waste Elimination', 'Process Mapping', 'Continuous Improvement'],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Enterprise Process Automation Award',
    metric: '65% Time Saved',
    category: 'Automation',
    description:
      'Engineered an automated MIS workbook that ingested, scrubbed, and synthesized 14 regional branch data feeds, trimming 12 labor hours weekly from the reporting cycle.',
    context: 'Global Enterprise Solutions Inc. - Annual Operations Excellence Award',
  },
  {
    id: 'ach-2',
    title: 'Zero-Variance Audit Rating',
    metric: '99.85% Accuracy',
    category: 'Data Governance',
    description:
      'Maintained 99.85%+ reconciliation accuracy across 15,000+ monthly SKU and transaction movements during 6 consecutive external compliance audits.',
    context: 'Apex Logistics & Supply Chain - Quality Assurance Rating',
  },
  {
    id: 'ach-3',
    title: 'Operating Expenditure Optimization',
    metric: '$42,500 Saved',
    category: 'Cost Reduction',
    description:
      'Uncovered systemic vendor over-billing and inter-branch logistical redundancies by establishing cross-departmental expense tracking variance models.',
    context: 'Fiscal Year 2023 Operations Review',
  },
  {
    id: 'ach-4',
    title: 'Corporate Excel Training Leadership',
    metric: '35+ Staff Trained',
    category: 'Mentorship',
    description:
      'Authored a company-wide "Advanced Excel for Business Operations" training curriculum, leading 6 hands-on workshops that upskilled operational teams.',
    context: 'Departmental Capability Enhancement Initiative',
  },
];

// Interactive MIS Simulator Sample Dataset
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
    region: 'North America',
    revenue: 4500000,
    budget: 4200000,
    operationalCost: 2800000,
    reconciliationRate: 99.9,
    slaAdherence: 98.4,
    transactions: 14200,
  },
  {
    quarter: 'Q1',
    region: 'EMEA',
    revenue: 3800000,
    budget: 3900000,
    operationalCost: 2450000,
    reconciliationRate: 99.7,
    slaAdherence: 97.8,
    transactions: 11800,
  },
  {
    quarter: 'Q1',
    region: 'APAC',
    revenue: 2900000,
    budget: 2700000,
    operationalCost: 1750000,
    reconciliationRate: 99.8,
    slaAdherence: 99.1,
    transactions: 9500,
  },
  {
    quarter: 'Q2',
    region: 'North America',
    revenue: 4850000,
    budget: 4500000,
    operationalCost: 2950000,
    reconciliationRate: 99.9,
    slaAdherence: 98.8,
    transactions: 15600,
  },
  {
    quarter: 'Q2',
    region: 'EMEA',
    revenue: 4100000,
    budget: 4000000,
    operationalCost: 2600000,
    reconciliationRate: 99.8,
    slaAdherence: 98.2,
    transactions: 12400,
  },
  {
    quarter: 'Q2',
    region: 'APAC',
    revenue: 3300000,
    budget: 3100000,
    operationalCost: 1980000,
    reconciliationRate: 99.9,
    slaAdherence: 99.3,
    transactions: 10800,
  },
  {
    quarter: 'Q3',
    region: 'North America',
    revenue: 5200000,
    budget: 4900000,
    operationalCost: 3100000,
    reconciliationRate: 99.95,
    slaAdherence: 99.2,
    transactions: 16800,
  },
  {
    quarter: 'Q3',
    region: 'EMEA',
    revenue: 4350000,
    budget: 4200000,
    operationalCost: 2720000,
    reconciliationRate: 99.85,
    slaAdherence: 98.6,
    transactions: 13100,
  },
  {
    quarter: 'Q3',
    region: 'APAC',
    revenue: 3600000,
    budget: 3400000,
    operationalCost: 2150000,
    reconciliationRate: 99.9,
    slaAdherence: 99.5,
    transactions: 11900,
  },
  {
    quarter: 'Q4',
    region: 'North America',
    revenue: 5650000,
    budget: 5200000,
    operationalCost: 3300000,
    reconciliationRate: 99.95,
    slaAdherence: 99.4,
    transactions: 18200,
  },
  {
    quarter: 'Q4',
    region: 'EMEA',
    revenue: 4700000,
    budget: 4500000,
    operationalCost: 2900000,
    reconciliationRate: 99.9,
    slaAdherence: 98.9,
    transactions: 14500,
  },
  {
    quarter: 'Q4',
    region: 'APAC',
    revenue: 3950000,
    budget: 3700000,
    operationalCost: 2320000,
    reconciliationRate: 99.92,
    slaAdherence: 99.6,
    transactions: 12800,
  },
];
