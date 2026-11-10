export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  linkedin: string;
  github: string;
  yearsOfExperience: number;
  typingSpeed?: string;
  languages?: string[];
  workReadiness?: string;
  resumePdfPath?: string;
}

export interface MetricStat {
  label: string;
  value: string;
  change?: string;
  detail: string;
}

export type SkillCategory =
  | 'all'
  | 'excel'
  | 'mis'
  | 'database'
  | 'data-quality'
  | 'admin-docs'
  | 'productivity';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: 'Expert' | 'Advanced' | 'Proficient';
  levelPercent: number;
  highlightTool: string;
  description: string;
  keyTechniques: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  metricsAchieved: string[];
  thumbnail: string;
  liveInteractive?: boolean;
  githubLink?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  honors?: string;
  coreSubjects: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  category: string;
  description: string;
  context: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}
