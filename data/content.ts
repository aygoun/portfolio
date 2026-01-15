export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
  link?: string;
  image?: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies?: string[];
  link?: string;
  tags?: string[];
  image?: string; // public path or remote URL
  bullets?: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags?: string[];
  link?: string;
  bullets?: string[];
  image?: string;
};

export type HackathonItem = {
  name: string;
  award?: string;
  description: string;
  link?: string;
  image?: string;
};

export const education: EducationItem[] = [
  {
    school: "MVA (Mathematics, Vision, Learning) - ENS Paris-Saclay",
    degree:
      "2nd-year Master's in Mathematics, Machine Learning and Deep Learning",
    period: "Sept 2025 - Apr 2026",
    location: "Paris, France",
    details:
      "Coursework: Computer Vision, Deep Learning, Neural Architectures, Convex Optimization, ML for Time Series",
    link: "https://www.master-mva.com/",
    image:
      "https://www.master-mva.com/wp-content/uploads/2024/11/cropped-MVA-2-32x32.png",
  },
  {
    school: "EPITA - SCIA Track (AI & Big Data)",
    degree: "Master's in Machine Learning and Data Science",
    period: "Sept 2021 - Apr 2026",
    location: "Paris, France",
    details:
      "GPA: 4.0 • Semester in SRE Team (La Forge): DevOps, K8s, Networking, Terraform • Coursework: Convex Optimization, Adv. Math for ML, Prob & Stats, ML Fundamentals, NLP",
    link: "https://www.epita.fr/diplome-ingenieur/cycle-ingenieur/les-majeures/",
    image: "https://upload.wikimedia.org/wikipedia/fr/d/d8/Epita.png",
  },
  {
    school: "Imperial College - Mathematics for Machine Learning (Coursera)",
    degree: "Online Specialization",
    period: "Jul 2025 - Sept 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/DPZ9U9QAKY4G",
    image: "/portfolio/img/imperial_logo.jpg",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Multimodal AI Assistant — Lightweight Jarvis",
    description:
      "Local modular AI assistant combining speech, vision, and automation tools; current work on hand-tracking for gesture interaction.",
    technologies: ["Python", "PyTorch", "OpenCV", "Whisper"],
    link: "https://github.com/aygoun/light-jarvis",
    tags: ["ML/DL", "Multimodal", "Vision"],
    bullets: [
      "Speech and vision pipelines orchestrated locally for privacy",
      "Experimental hand-tracking for gesture control",
    ],
    image:
      "https://github.com/aygoun/light-jarvis/blob/main/docs/assets/logo.png?raw=true",
  },
  {
    name: "Hybrid Recommender System for Videos (KuaiRec)",
    description:
      "Content-based recommender for short videos on KuaiRec; feature engineering, weighting, and evaluation pipeline.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Jupyter"],
    link: "https://github.com/aygoun/Hybrid-Recommender-System-for-Videos",
    tags: ["ML", "Recommender"],
    image:
      "https://github.com/aygoun/Hybrid-Recommender-System-for-Videos/raw/main/docs/content_based_metrics_plot.png",
    bullets: [
      "Built end-to-end pipeline: preprocessing → features → recommendations",
      "Improved MAP and precision with tuned engagement weights",
      "Best model: NDCG @500 = 0.6 - MAP @500 = 0.4",
    ],
  },
  {
    name: "NLP — Business Reviews",
    description:
      "Classification and generation of customer reviews; compared RNN, FFN, Transformers, Logistic Regression, Naive Bayes.",
    technologies: ["Python", "PyTorch", "scikit-learn"],
    link: "https://github.com/aygoun/nlp1-business-reviews",
    tags: ["NLP", "ML"],
    bullets: [
      "Trained and evaluated multiple model families",
      "Reported metrics and trade-offs across baselines",
    ],
  },
  {
    name: "Ships Classification",
    description: "Kaggle competition: Classification of ships.",
    technologies: ["Python", "PyTorch"],
    tags: ["Computer Vision", "ML"],
    bullets: [
      "Trained and evaluated a CNN model",
      "Accuracy: 82.8%",
      "Ranked 17th out of 117 teams.",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Mistral AI",
    role: "Applied AI Engineer Intern",
    period: "Apr 2026 - Oct 2026",
    description:
      "Applied AI engineering internship focusing on developing and deploying AI models and systems.",
    tags: ["AI", "ML", "Deep Learning"],
    link: "https://mistral.ai/",
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/mistral-color.png",
  },
  {
    company: "Machina Capital",
    role: "Software Engineer Intern",
    period: "Sept 2024 - Jan 2025",
    description:
      "Engineered Python libraries and migrated tools to Airflow; led big-data research to optimize trading automation infrastructure.",
    tags: ["Infra", "Data", "Airflow", "AWS", "Python"],
    bullets: [
      "Migrated batch workflows to Airflow with clear SLAs",
      "Optimized data ingestion and monitoring stack",
    ],
    link: "https://www.machinacap.com/",
    image: "https://www.machinacap.com/wp-content/uploads/fav.png",
  },
  {
    company: "ThetysLab",
    role: "Lead Software Engineer (Freelance)",
    period: "Mar 2024 - Apr 2025",
    description:
      "Designed scalable backends and cloud architectures for apps with 700K+ MAU across AWS/GCP; led full-stack and CI/CD initiatives.",
    tags: ["Infra", "Cloud", "TypeScript", "CI/CD", "GCP", "AWS"],
    bullets: [
      "Built multi-region deployments and observability",
      "Set up CI/CD pipelines and zero-downtime releases",
    ],
    link: "https://apps.apple.com/fr/developer/thetys-lab/id1675347984?l=en-GB",
    image: "/portfolio/img/thetys_lab_logo.jpeg",
  },
  {
    company: "Peewix",
    role: "Founder / Solo Venture",
    period: "2021 — 2023",
    description:
      "Built a platform for organizing and sharing events; end-to-end product development and deployment.",
    tags: ["Product", "Full-stack"],
    bullets: [
      "Conducted market validation and MVP shipping",
      "Managed infra, backend, and mobile app integration",
    ],
    link: "https://www.linkedin.com/posts/armandblin_ios-android-share-activity-7064022808468602880-LI6t",
    image: "/portfolio/img/peewix_logo.jpeg",
  },
];

export const hackathons: HackathonItem[] = [
  {
    name: "🥈2nd place - ElevenLabs Conversational Hackathon",
    description:
      "AI-powered Technical Interview Assistant designed to help developers practice, improve, and receive real-time feedback during mock interviews.",
    link: "https://github.com/ElevenLabs-Agents-Hackathon/web-page",
    image: "/portfolio/img/elevenlabs_logo.png",
  },
  {
    name: "Finalist — Google Healthcare Hackathon 2025",
    description:
      "Built an AI medical assistant using MedGemma, Google Chirp, and avatars for pre-diagnosis and urgency detection.",
    link: "https://gdg.community.dev/events/details/google-gdg-paris-presents-solve-for-healthcare-amp-life-sciences-with-gemma-hackathon-1/",
    image: "https://avatars.githubusercontent.com/u/219257464?s=200&v=4",
  },
  {
    name: "People's Choice — Mistral AI MCP Hackathon 2025",
    description:
      "DevOps co-pilot reducing infrastructure complexity on Mistral's LeChat.",
    link: "https://github.com/Mistral-MCP-Hackathon-2025/mcp-la_telecommande",
    image: "https://avatars.githubusercontent.com/u/232047316?s=200&v=4",
  },
];
