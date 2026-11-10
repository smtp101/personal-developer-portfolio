import {
  ContactFormData,
  FormValidationErrors,
  ProjectItem,
  SkillCategory,
  SkillItem,
  ProfileInfo,
  ExperienceItem,
} from '../types';

/**
 * Validates the contact form inputs according to business email and length constraints.
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: FormValidationErrors;
} {
  const errors: FormValidationErrors = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide an email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email format (e.g., name@domain.com).';
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please specify a subject for your message.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject should be at least 3 characters.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write your message or inquiry.';
  } else if (trimmedMessage.length < 15) {
    errors.message = 'Please provide at least 15 characters describing your requirements.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters skills by category tab and optional search query.
 */
export function filterSkills(
  skills: SkillItem[],
  category: SkillCategory,
  query: string = ''
): SkillItem[] {
  const normalizedQuery = query.toLowerCase().trim();

  return skills.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.highlightTool.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.keyTechniques.some((t) => t.toLowerCase().includes(normalizedQuery))
    );
  });
}

/**
 * Filters projects by category tag and optional search query.
 */
export function filterProjects(
  projects: ProjectItem[],
  category: string,
  query: string = ''
): ProjectItem[] {
  const normalizedQuery = query.toLowerCase().trim();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' ||
      project.category.toLowerCase() === category.toLowerCase();
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      project.title.toLowerCase().includes(normalizedQuery) ||
      project.summary.toLowerCase().includes(normalizedQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(normalizedQuery)
      ) ||
      project.keyFeatures.some((feat) =>
        feat.toLowerCase().includes(normalizedQuery)
      )
    );
  });
}

/**
 * Formats numeric metrics into standardized tabular strings.
 */
export function formatTabularNumber(
  value: number,
  format: 'currency' | 'percentage' | 'integer' | 'compact'
): string {
  if (isNaN(value)) return '0';

  switch (format) {
    case 'currency':
      return `$${value.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`;
    case 'percentage':
      return `${value.toFixed(1)}%`;
    case 'integer':
      return value.toLocaleString('en-US');
    case 'compact':
      if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
      if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
      return value.toString();
  }
}

/**
 * Generates an executive plain-text summary suitable for clipboard copy or download.
 */
export function generateResumeText(
  profile: ProfileInfo,
  experiences: ExperienceItem[],
  skills: SkillItem[]
): string {
  const header = [
    profile.name.toUpperCase(),
    profile.title,
    `Email: ${profile.email} | Phone: ${profile.phone} | Location: ${profile.location}`,
    `LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}`,
    '\n' + '='.repeat(70),
    'EXECUTIVE SUMMARY',
    profile.summary,
    '\n' + '='.repeat(70),
    'PROFESSIONAL EXPERIENCE',
  ];

  const expLines = experiences.flatMap((exp) => [
    `\n${exp.role.toUpperCase()} | ${exp.company} (${exp.period})`,
    `Location: ${exp.location}`,
    'Responsibilities:',
    ...exp.responsibilities.map((r) => `  - ${r}`),
    'Key Quantifiable Achievements:',
    ...exp.achievements.map((a) => `  * ${a}`),
    `Tools & Frameworks: ${exp.technologies.join(', ')}`,
  ]);

  const skillSummary = [
    '\n' + '='.repeat(70),
    'CORE TECHNICAL COMPETENCIES',
    ...skills.map(
      (s) => `  * ${s.name} (${s.proficiency}): ${s.keyTechniques.join(', ')}`
    ),
  ];

  return [...header, ...expLines, ...skillSummary].join('\n');
}
