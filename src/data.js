export const profile = {
  name: 'Andi Muh. Syahrul Ulum',
  photo: '/assets/profile.jpg',
  email: 'syahrululum1911@gmail.com',
  phone: '+62 822-9649-9244',
  phoneHref: 'tel:+6282296499244',
  github: 'https://github.com/ArulUlum',
  linkedin: 'https://linkedin.com/in/syahrululum',
  location: 'Jakarta, Indonesia',
};

export const roles = ['Backend Developer', 'Full Stack Developer', 'AI/ML Enthusiast'];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

export const aboutText =
  'Computer Science graduate from Telkom University (GPA 3.56/4.00) and Backend Developer at PT Swamedia Informatika. ' +
  'Hands-on with Python (Flask, FastAPI), PostgreSQL, WebMethods & APIGW, with a big interest in Artificial Intelligence, Machine Learning & Deep Learning. ' +
  'Currently building Kebbu.id, a full ticketing platform. ' +
  'Also taught as Practicum Assistant & AI Assistant Lecturer at Telkom University.';

export const facts = [
  { to: 3, suffix: '+', label: 'Years in backend dev' },
  { to: 3.56, decimals: 2, label: 'GPA / 4.00' },
];

export const experience = [
  {
    title: 'Backend Developer & Operations Team',
    date: 'Mar 2023 — Present',
    org: 'PT Swamedia Informatika',
    points: [
      'Build backend logic with Python Flask.',
      'Write PostgreSQL queries and wire them into the backend.',
      'Consume APIs via WebMethods and integrate through APIGW.',
      'Report on service usage, query errors, and server monitoring.',
      'Support users with order and transaction issues.',
      'Deploy code from dev to prod and test in production.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    date: 'Feb 2022 — Dec 2022',
    org: 'Telkom Indonesia',
    points: [
      'Built backend logic with Node.js.',
      'Connected SQL (MariaDB) and NoSQL (MongoDB) databases.',
      'Deployed with Docker images.',
    ],
  },
];

export const projects = [
  {
    name: 'Kebbu.id',
    date: 'May 2025 — Present',
    url: 'https://kebbu.id',
    linkLabel: 'Live Site',
    stars: 5,
    rank: 'S-Rank Quest · Full Stack Developer',
    points: [
      'Built 80+ REST API endpoints (FastAPI) for auth, events, tickets, payments, and images; migrated backend from Flask to FastAPI (SQLAlchemy 2.0, Pydantic).',
      'Implemented JWT auth and Google OAuth login; integrated Cring QRIS payment gateways with webhooks and scheduled invoice auto-expiry (APScheduler).',
      'Built automated e-ticket delivery (QR code + PDF generation, email via Resend) and image storage via Cloudinary.',
      'Built the frontend with React, Vite, and Tailwind CSS: QR check-in scanner and an organizer analytics dashboard (Recharts); migrated the frontend from React (Vite) to Next.js.',
      "Set up CI/CD: Dockerized backend, auto build/push to Docker Hub via GitHub Actions, deployed to a VPS behind Nginx with Let's Encrypt SSL; frontend hosted on Vercel.",
    ],
    tags: [
      { label: 'FastAPI', el: 'electro' },
      { label: 'Next.js', el: 'hydro' },
      { label: 'PostgreSQL', el: 'geo' },
      { label: 'Docker', el: 'cryo' },
      { label: 'CI/CD', el: 'dendro' },
    ],
  },
  {
    name: 'Clipperul',
    date: 'Sep 2026 — Present',
    url: 'https://github.com/ArulUlum/Clipperul',
    linkLabel: 'GitHub',
    stars: 4,
    rank: 'A-Rank Quest · Full Stack & AI',
    points: [
      'Turns long videos (upload or YouTube link) into short vertical clips: Whisper transcription, LLM moment scoring, face-tracking smart crop, burned-in subtitles.',
      'Writes a hook-style title for each clip in the video’s own language; pluggable LLM provider (OpenAI-compatible, Anthropic, Gemini, Ollama).',
      'Built a clip editor (trim, ratio, crop, subtitles) with live preview, plus posting to YouTube: multi-account, scheduling, cancel and retry, progress tracking.',
      'Heavy work runs on Celery + Redis workers with live progress over SSE; an optional daily auto clip posts trending videos on a schedule.',
      'Fully Dockerized: FastAPI, PostgreSQL, Redis, MinIO (S3) and Next.js 15 start with one Compose command.',
    ],
    tags: [
      { label: 'FastAPI', el: 'electro' },
      { label: 'Next.js', el: 'hydro' },
      { label: 'Celery & Redis', el: 'pyro' },
      { label: 'Whisper & LLM', el: 'dendro' },
      { label: 'FFmpeg', el: 'anemo' },
      { label: 'Docker', el: 'cryo' },
    ],
  },
  {
    name: 'Agent Arul',
    date: 'Oct 2026',
    url: 'https://github.com/ArulUlum/agent-arul',
    linkLabel: 'GitHub',
    stars: 3,
    rank: 'B-Rank Quest · AI Agent',
    points: [
      'Self-hosted Telegram bot that controls my own Windows laptop: system status, screenshots, files, and shell commands.',
      'Agent mode: plain-language requests are turned into tool calls by an LLM through a local 9Router, with native function-calling and a prompt-based fallback.',
      'Persistent memory across restarts, PDF reading, and code editing; risky actions always need a button confirmation, and only the owner can use it.',
      'Hot-reload with validation and automatic rollback; desktop and browser control (Playwright) with a logged-in profile; auto-start on Windows login.',
    ],
    tags: [
      { label: 'Python', el: 'anemo' },
      { label: 'Telegram Bot', el: 'hydro' },
      { label: 'LLM Agent', el: 'dendro' },
      { label: 'Playwright', el: 'electro' },
    ],
  },
];

export const education = {
  school: 'Telkom University',
  date: 'Bandung, 2019 — 2023',
  degree: 'B.S. Computer Science · GPA: 3.56 / 4.00',
  roles: [
    {
      title: 'Practicum Assistant, Computer Science',
      years: '2022–2023',
      desc: 'Supervised practitioners, reviewed their work, and graded practicum results.',
    },
    {
      title: 'Assistant Lecturer, Artificial Intelligence',
      years: '2021–2022',
      desc: 'Taught AI fundamentals (searching, reasoning, learning) and helped students with final AI projects.',
    },
  ],
};

// `el` maps a tech to an elemental "Vision" color; omit for neutral gold.
export const skillGroups = [
  {
    title: 'Hard Skills',
    tags: [
      { label: 'Python', el: 'anemo' },
      { label: 'Flask', el: 'geo' },
      { label: 'FastAPI', el: 'electro' },
      { label: 'PostgreSQL', el: 'geo' },
      { label: 'SQL & NoSQL', el: 'hydro' },
      { label: 'WebMethods', el: 'electro' },
      { label: 'APIGW', el: 'electro' },
      { label: 'Node.js', el: 'anemo' },
      { label: 'React.js', el: 'hydro' },
      { label: 'Next.js', el: 'hydro' },
      { label: 'Docker', el: 'cryo' },
    ],
  },
  {
    title: 'Soft Skills',
    tags: [{ label: 'Problem Solving' }, { label: 'Research & Analysis' }, { label: 'Time Management' }],
  },
  {
    title: 'Interests',
    tags: [
      { label: 'Artificial Intelligence', el: 'dendro' },
      { label: 'Machine Learning', el: 'dendro' },
      { label: 'Deep Learning', el: 'dendro' },
    ],
  },
];

export const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, el: 'hydro' },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, el: 'electro' },
  { label: 'LinkedIn', value: 'linkedin.com/in/syahrululum', href: profile.linkedin, el: 'anemo', external: true },
  { label: 'GitHub', value: 'github.com/ArulUlum', href: profile.github, el: 'geo', external: true },
];

export const elVar = (el) => (el ? { '--el': `var(--el-${el})` } : undefined);
