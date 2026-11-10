import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterSkills,
  filterProjects,
  formatTabularNumber,
  generateResumeText,
} from './filterAndSearch';
import { SkillItem, ProjectItem, ProfileInfo, ExperienceItem } from '../types';

test('validateContactForm checks required fields and formats', () => {
  const invalid = validateContactForm({
    fullName: '',
    email: 'invalid-email',
    subject: '',
    message: 'short',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    fullName: 'Jane Doe',
    email: 'jane.doe@enterprise.com',
    subject: 'MIS Automation Opportunity',
    message: 'We are seeking an operations lead for our executive reporting team.',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('filterSkills filters by category and keyword search', () => {
  const sampleSkills: SkillItem[] = [
    {
      name: 'Advanced Excel Formulas',
      category: 'excel',
      proficiency: 'Expert',
      levelPercent: 95,
      highlightTool: 'Excel 365',
      description: 'Nested functions, Dynamic Arrays, XLOOKUP',
      keyTechniques: ['XLOOKUP', 'INDEX/MATCH', 'LAMBDA'],
    },
    {
      name: 'SQL Database Management',
      category: 'database',
      proficiency: 'Advanced',
      levelPercent: 88,
      highlightTool: 'PostgreSQL / MySQL',
      description: 'Relational schema design and data extraction',
      keyTechniques: ['JOINs', 'Subqueries', 'Indexing'],
    },
  ];

  // Category filter
  assert.equal(filterSkills(sampleSkills, 'excel').length, 1);
  assert.equal(filterSkills(sampleSkills, 'database').length, 1);
  assert.equal(filterSkills(sampleSkills, 'all').length, 2);

  // Search keyword
  assert.equal(filterSkills(sampleSkills, 'all', 'xlookup').length, 1);
  assert.equal(filterSkills(sampleSkills, 'all', 'sql').length, 1);
  assert.equal(filterSkills(sampleSkills, 'all', 'nonexistent').length, 0);
});

test('filterProjects handles category and search correctly', () => {
  const sampleProjects: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Advanced Excel MIS Dashboard',
      category: 'MIS & Reporting',
      summary: 'Executive dashboard with dynamic slicers',
      problemSolved: 'Slow manual compilation',
      technologies: ['Excel', 'VBA', 'Power Query'],
      keyFeatures: ['Automated ETL', 'Variance analysis'],
      metricsAchieved: ['60% time saved'],
      thumbnail: '/sample.jpg',
    },
    {
      id: 'p2',
      title: 'Employee Management Database',
      category: 'Database Management',
      summary: 'Relational database for tracking employee records',
      problemSolved: 'Fragmented data',
      technologies: ['MySQL', 'SQL', 'MS Access'],
      keyFeatures: ['Audit trails', 'Role access'],
      metricsAchieved: ['100% data audit score'],
      thumbnail: '/sample2.jpg',
    },
  ];

  assert.equal(filterProjects(sampleProjects, 'all').length, 2);
  assert.equal(filterProjects(sampleProjects, 'mis & reporting').length, 1);
  assert.equal(filterProjects(sampleProjects, 'all', 'vba').length, 1);
  assert.equal(filterProjects(sampleProjects, 'all', 'audit').length, 1);
});

test('formatTabularNumber formats correctly', () => {
  assert.equal(formatTabularNumber(1250000, 'compact'), '1.3M');
  assert.equal(formatTabularNumber(45000, 'compact'), '45K');
  assert.equal(formatTabularNumber(98.24, 'percentage'), '98.2%');
  assert.equal(formatTabularNumber(42000, 'currency'), '$42,000');
  assert.equal(formatTabularNumber(14500, 'integer'), '14,500');
});

test('generateResumeText produces structured readable resume content', () => {
  const profile: ProfileInfo = {
    name: 'S. M. Salman',
    title: 'Operations & MIS Professional',
    tagline: 'Data Management Specialist',
    summary: 'Seasoned Operations and MIS Specialist with 6+ years of expertise.',
    email: 'contact@example.com',
    phone: '+1 (555) 019-2834',
    location: 'Chicago, IL',
    availability: 'Immediate',
    linkedin: 'linkedin.com/in/example',
    github: 'github.com/example',
    yearsOfExperience: 6,
  };

  const text = generateResumeText(profile, [], []);
  assert.ok(text.includes('S. M. SALMAN'));
  assert.ok(text.includes('EXECUTIVE SUMMARY'));
  assert.ok(text.includes('PROFESSIONAL EXPERIENCE'));
});
