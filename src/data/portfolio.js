export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Mohi Arya",
  eyebrow: "Computer Science Engineer",
  headline: "Hi, I'm Mohi Arya.",
  statement: "I build practical web applications with modern technologies.",
  supporting:
    "B.Tech Computer Science & Engineering student at VIT Vellore, focused on full-stack development and problem solving.",
  resumeUrl: "/Mohi_Arya_Resume.pdf",
  github: "https://github.com/Mohiarya",
  linkedin: "https://www.linkedin.com/in/mohi-arya058",
  leetcode: "https://leetcode.com/u/Mohi_arya/",
  email: "mohiarya058@gmail.com",
};

export const about = {
  intro:
    "I'm a Computer Science and Engineering student at VIT Vellore with a strong interest in full-stack development and problem solving. I enjoy turning ideas into practical applications and learning technologies by building real projects.",
  cards: [
    {
      title: "Education",
      lines: ["VIT Vellore", "B.Tech — Computer Science & Engineering"],
    },
    {
      title: "Focus",
      lines: ["Full-Stack Development", "DSA & Problem Solving"],
    },
    {
      title: "Currently Learning",
      lines: ["Python", "DSA", "Web Development"],
    },
    {
      title: "Hackathons",
      lines: ["Participated in 3-4 hackathons"],
    },
  ],
};

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL", "Prisma ORM"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Vitest", "pytest", "Vercel", "Render"],
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow/Keras", "OpenCV", "OpenAI API", "Gemini API"],
  },
];

// Meal Finder is the primary, most-emphasized project. The other three
// are real, deployed, GitHub-verified work, shown as compact cards.
export const projects = [
  {
    id: "meal-finder",
    index: "01",
    featured: true,
    title: "Meal Finder",
    type: "Full-Stack Web Application",
    tech: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "Spoonacular API"],
    description:
      "A full-stack nutrition and meal-planning platform: a curated recipe database with hard calorie/macro/dietary constraint filtering, a 7-day meal planner, daily nutrition tracking, and an auto-generated grocery list.",
    liveUrl: "https://meal-finder-project-theta.vercel.app",
    screenshot: "/screenshots/meal-finder.png",
    githubUrl: "https://github.com/Mohiarya/Meal-finder-project",
    features: [
      "JWT-based authentication with bcrypt password hashing",
      "Per-user ownership checks enforced at the database-query level",
      "Deterministic constraint-filtering recommendation engine (calories, macros, allergens, diet)",
      "Local recipe catalog with a fallback to the Spoonacular API",
      "7-day meal planner with smart meal-swap suggestions",
      "Daily macro and hydration tracking against personalized targets",
      "Auto-generated grocery list from the week's planned meals",
      "Automated backend and frontend test suite",
      "Deployed across Vercel, Render, and Neon (PostgreSQL)",
    ],
    problem:
      "Figuring out what to eat that fits specific calorie, macro, or dietary constraints is slow to do by hand — most people either guess or manually calculate macros for every meal.",
    solution:
      "A backend service filters a curated recipe database against hard nutritional and dietary constraints using deterministic (non-AI) logic, so every recommendation is explainable and database-verified rather than a model's guess.",
    architecture: "React (Vercel) → REST API on Express (Render) → Prisma ORM → PostgreSQL (Neon)",
    contribution:
      "Designed the backend's route/service/data-access layering, built the constraint-filtering recommendation engine, implemented authentication and per-user authorization, wrote the automated test suite, and handled the full production deployment across three platforms.",
  },
  {
    id: "dsa-practice-coach",
    index: "02",
    featured: false,
    title: "DSA Practice Coach",
    type: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express.js", "Prisma", "Turso", "Gemini API"],
    description:
      "A spaced-repetition tracker for DSA interview practice: log problems, get scheduled for review with the SM-2 algorithm, and ask a guarded Socratic AI tutor for a hint without it giving away the answer.",
    liveUrl: "https://dsa-practice-coach.vercel.app",
    screenshot: "/screenshots/dsa-practice-coach.png",
    githubUrl: "https://github.com/Mohiarya/dsa-practice-coach",
    features: [
      "Problem logging tagged by pattern and difficulty",
      "SM-2 spaced-repetition scheduling, implemented as a unit-tested pure function",
      "Gemini-powered Socratic hints that guide without revealing code or the solution",
      "A second check on the model's actual output, not just a prompt instruction, before a hint is shown",
      "Progress analytics: streaks, pattern mastery, and review history",
      "Session auth via a signed httpOnly cookie",
      "Deployed on Vercel and Render with a Turso (hosted SQLite) database",
    ],
    problem:
      "Problems solved once are easily forgotten within weeks, and most AI coding help gives away the answer instead of building problem-solving skill.",
    solution:
      "Reviews are scheduled with the SM-2 spaced-repetition algorithm so shaky problems resurface sooner, and hints come from a Gemini-powered tutor instructed to ask guiding questions — with its output checked in code before being shown, so a response that leaks code is retried or blocked rather than trusted.",
    architecture: "React (Vercel) → Express API (Render) → Prisma → Turso, with a guarded call out to the Gemini API",
    contribution:
      "Implemented the SM-2 scheduling logic, the Socratic hint system and its output-validation safety check, per-user data isolation via cookie-based auth, and the full deployment.",
  },
  {
    id: "social-media-content-analyzer",
    index: "03",
    featured: false,
    title: "Social Media Content Analyzer",
    type: "Client-Side Web Application",
    tech: ["React", "JavaScript", "PDF.js", "Tesseract.js", "Vitest"],
    description:
      "A fully client-side app that extracts text from an uploaded PDF or image and scores it for social-media engagement with a rule-based analysis engine — no backend, no uploaded data ever leaves the browser.",
    liveUrl: "https://mohiarya.github.io/social-media-content-analyzer/",
    screenshot: "/screenshots/social-media-content-analyzer.png",
    githubUrl: "https://github.com/Mohiarya/social-media-content-analyzer",
    features: [
      "Dual-path text extraction: PDF.js reads the embedded text layer where available",
      "Automatic per-page OCR fallback (Tesseract.js) for scanned or image-only pages",
      "Rule-based engagement scoring — each rule an independent, unit-tested function",
      "Checks post length, hashtag count, call-to-action and question presence, emoji usage, readability",
      "Prioritized suggestions (issues → improvements → passed)",
      "100% client-side — no backend, no API keys, no file ever leaves the browser",
    ],
    problem:
      "Judging whether a social media post is well-optimized before posting is subjective, and most tools require uploading your content to a server.",
    solution:
      "A rule-based scoring engine, running entirely in the browser, analyzes extracted post text against concrete, explainable engagement heuristics and returns prioritized, actionable suggestions.",
    architecture: "React (client-side only) → PDF.js / Tesseract.js for extraction → in-browser rule-based scoring engine",
    contribution:
      "Built the dual-path text-extraction pipeline (embedded-text plus OCR fallback), the rule-based engagement scoring engine, and the fully client-side architecture with no backend.",
  },
  {
    id: "deepfake-detector",
    index: "04",
    featured: false,
    title: "AI Deepfake Detector",
    type: "Full-Stack AI Application",
    tech: ["Python", "FastAPI", "OpenCV", "TensorFlow/Keras", "React"],
    description:
      "An image forensics tool that detects faces and classifies them as real or manipulated using MesoNet, a CNN trained on FaceForensics++, with an independently measured accuracy rather than an assumed one.",
    liveUrl: "https://deepfake-forensics-lab.vercel.app",
    screenshot: "/screenshots/deepfake-detector.png",
    githubUrl: "https://github.com/Mohiarya/deepfake-detector",
    features: [
      "Face detection via OpenCV Haar Cascade with a secondary eye-verification pass",
      "Real-vs-manipulated classification using MesoNet (Meso4), a CNN trained on FaceForensics++",
      "Independent evaluation against a labeled FaceForensics++ test set, separate from the model's own reference samples",
      "Accuracy/precision/recall/F1 computed via scikit-learn (62.4% accuracy) rather than assumed",
      "Documented methodology covering dataset provenance and sampling rigor",
      "FastAPI backend, React frontend",
    ],
    problem:
      "Manipulated face images are increasingly hard to spot by eye, and most simple demo detectors report a headline accuracy number without showing how it was actually measured.",
    solution:
      "A FastAPI backend runs face detection then a MesoNet CNN classifier, and its real-world accuracy is measured with an independent, labeled evaluation set rather than quoted from the model's own training claims.",
    architecture: "React frontend → FastAPI backend → OpenCV face detection → MesoNet (Keras/TensorFlow) classification",
    contribution:
      "Built the FastAPI backend and detection pipeline, integrated MesoNet for classification, and designed and ran the independent accuracy evaluation methodology.",
  },
];

export const certifications = [
  {
    name: "Java Foundations Associate",
    issuer: "Oracle",
  },
];

export const education = [
  {
    school: "VIT Vellore",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2023 — Expected 2027",
  },
];
