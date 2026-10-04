# HandySof Corporate Website

A modern, simple, responsive company website for **HandySof** — a software development team focused on building modern, reliable, and user-friendly digital solutions.

Built with [Next.js](https://nextjs.org) (App Router), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS v4](https://tailwindcss.com).

---

## 🎨 Brand Identity & Color System

The design system strictly adheres to the official HandySof brand identity:

- **Primary Brand Blue**: `#00608E` — Used for main headings, navbar accents, primary buttons, and key structural elements.
- **Brand Teal Accent**: `#00A69C` — Used for highlights, feature icons, hover states, and tech badges.
- **Backgrounds**: White (`#FFFFFF`) and soft off-white (`#F8FAFC`, `#F9FBFC`) with generous whitespace.
- **Typography**: Clean, neutral, high-contrast typography using Inter.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint with validation & email hook
│   ├── favicon.ico              # Browser favicon
│   ├── globals.css              # Tailwind CSS theme & brand color configuration
│   ├── icon.png                 # Dynamic App icon
│   ├── layout.tsx               # Root layout, SEO metadata, OpenGraph, viewport settings
│   └── page.tsx                 # Home page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky responsive navbar with mobile drawer
│   │   └── Footer.tsx           # Footer with logo, nav links, social icons & copyright
│   ├── sections/
│   │   ├── HeroSection.tsx      # Strong hero with headline, CTAs, and reassurance points
│   │   ├── HeroGraphic.tsx      # Tech-inspired geometric visual based on HandySof logo
│   │   ├── AboutSection.tsx     # "Who We Are" section with 3 engineering pillars
│   │   ├── ServicesSection.tsx  # "What We Do" with 4 core services and line icons
│   │   ├── ProjectsSection.tsx  # "What We're Building" featuring AIN Masjid System
│   │   ├── WhyUsSection.tsx     # "Why HandySof" with 3 core principles
│   │   └── ContactSection.tsx   # Contact form with direct WhatsApp, Email, & LinkedIn
│   └── ui/
│       ├── Button.tsx           # Reusable button with brand variants
│       ├── Icons.tsx            # Crisp vector icons for LinkedIn, GitHub, WhatsApp
│       ├── ProjectCard.tsx      # Reusable project card with tags and badge
│       └── SectionHeading.tsx   # Reusable section heading with eyebrow badge
├── data/
│   ├── navigation.ts            # Nav links & social channels
│   ├── projects.ts              # Projects data (easily extensible)
│   ├── services.ts              # Services data
│   └── why-us.ts                # Why HandySof 3 core pillars
└── types/
    └── index.ts                 # TypeScript interfaces
```

---

## 📧 Contact Form & Email Integration

The contact form is currently wired to `POST /api/contact`.

To integrate an email delivery service (such as [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or [Nodemailer](https://nodemailer.com)), open `src/app/api/contact/route.ts` and replace the placeholder block with your provider's SDK.

---

## 🛠 Adding New Projects

To add more projects to the **"What We're Building"** section, simply append new entries to the `PROJECTS` array in `src/data/projects.ts`:

```typescript
export const PROJECTS: ProjectItem[] = [
  // ... existing projects
  {
    id: 'your-project-id',
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description: 'Detailed description...',
    badge: 'Coming Soon', // or 'Active'
    tags: ['Web Application', 'Cloud'],
    logoSrc: '/images/your-logo.png',
    highlights: ['Key feature 1', 'Key feature 2'],
    status: 'in_development',
  },
];
```

---

## 🌐 SEO & Social Sharing

SEO metadata is configured in `src/app/layout.tsx`:
- **Title**: `HandySof | Software Development & Digital Solutions`
- **Description**: `HandySof builds modern, reliable and user-friendly software solutions, web applications and business management systems.`
- **OpenGraph & Twitter Cards**: Configured with the official HandySof stacked logo.
