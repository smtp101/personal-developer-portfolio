# Premium Operations & MIS Professional Portfolio

A modern, responsive, executive personal portfolio website designed for an **Operations & MIS Professional / Data Management Specialist**.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, and accessible semantic components.

---

## 🌟 Key Features

1. **Executive Split Hero Section**:
   - High-fidelity executive corporate portrait
   - Professional title, credentials badge (Microsoft Certified Excel Expert verification)
   - Primary action CTAs: *View My Work*, *Download Resume*, and *Launch Live MIS Simulator*
   - Full-width 4-column KPI strip (Reconciliation Accuracy, MIS Turnaround Reduction, Automated Reports, Cost Optimizations)

2. **Interactive Live MIS Cockpit & Financial Model**:
   - Live interactive simulator right on the page showcasing real domain mastery
   - Filter by Quarter (Q1, Q2, Q3, Q4, All) and Region (North America, EMEA, APAC, Consolidated)
   - Real-time recalculation of Consolidated Revenue, Budget Variance ($ and %), EBITDA Margin %, Reconciliation Rate %, and SLA Adherence
   - Real-time scenario toggle (e.g., *-5% OpEx Optimization*)
   - Instant sanitized summary export to CSV file directly in the browser

3. **Categorized Technical Competencies**:
   - Filterable skills by 6 key disciplines (Advanced Excel & Modeling, MIS Reporting & Analytics, Database & SQL, Data Quality & Validation, Operations & SOPs, Productivity & BI Tools)
   - Real-time instant search bar for skills, formulas, and tools
   - Unboxed metadata with typographic separators

4. **Professional Experience Timeline**:
   - Progressive corporate tenure with responsibilities, quantifiable achievements, and technology tags

5. **Featured Projects Portfolio & Case Study Modals**:
   - 5 comprehensive practical projects with high-resolution UI thumbnails
   - Deep-dive case study modal for each project covering Problem Solved, Engineered Capabilities, and Quantified Business Impact

6. **Education & Verified Certifications**:
   - Academic qualification with core curriculum
   - Verified certifications with Credential IDs (Excel Expert, CFI MIS Specialist, SQL Fundamentals, Lean Six Sigma)

7. **Measurable Achievements**:
   - Quantified efficiency dividends and zero-variance compliance ratings

8. **Validated Contact Form & Direct Channels**:
   - Full form validation with error feedback
   - Success confirmation state with realistic logging receipt
   - Direct Email, Phone, Location, Response SLA, and LinkedIn / GitHub channels

9. **Executive Resume Viewer**:
   - Clean printable resume sheet
   - One-click "Print / Save PDF", "Download Markdown", and "Copy to Clipboard"

10. **Dual-Theme Support (Dark & Light Mode)**:
    - Custom `@custom-variant dark` configured in Tailwind v4
    - Instant toggle with persistence in `localStorage`

11. **Instant Profile Personalizer**:
    - Built-in drawer allowing user or recruiter to customize name, email, phone, location, and summary on the fly

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18.x or later)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The app will run locally at `http://localhost:3000`.

### 3. Run Unit Tests
```bash
npx --yes tsx --test src/utils/filterAndSearch.test.ts
```

### 4. Build for Production
```bash
npm run build
```
Production build assets will be generated in `/dist`.

---

## 📦 GitHub Upload Instructions

To publish your portfolio to a new GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all project files
git add .

# 3. Commit the changes
git commit -m "Initial commit: Executive Operations & MIS Portfolio"

# 4. Create a new repository on GitHub (e.g. portfolio-website)

# 5. Link local repository to GitHub
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended)
1. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New Project** and select your `portfolio-website` repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Click **Deploy**. Vercel will build and assign you an SSL domain (`yourapp.vercel.app`).

### Option 2: Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Choose GitHub and pick your repository.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Click **Deploy site**.

### Option 3: GitHub Pages
1. In `vite.config.ts`, add `base: '/portfolio-website/'` (or `'/'` if using custom domain).
2. Install `gh-pages`: `npm install -D gh-pages`.
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 🛠 Customization Instructions

All data is decoupled into structured TypeScript files:

1. **Your Name & Profile Information**:
   - Edit `src/data/portfolioData.ts` -> `INITIAL_PROFILE`
   - Update your Name, Title, Email, Phone, Location, LinkedIn, and GitHub URLs.
   - Alternatively, click the **Customize** button in the website header at any time to edit in real time!

2. **Your Work Experience**:
   - Edit `src/data/portfolioData.ts` -> `EXPERIENCE_DATA`

3. **Your Projects & Case Studies**:
   - Edit `src/data/portfolioData.ts` -> `PROJECTS_DATA`

4. **Your Skills**:
   - Edit `src/data/portfolioData.ts` -> `SKILLS_DATA`

5. **Your Education & Certifications**:
   - Edit `src/data/portfolioData.ts` -> `EDUCATION_DATA` and `CERTIFICATIONS_DATA`
