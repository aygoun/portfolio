export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "CV" | string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/aygoun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/armandblin/" },
  { label: "CV", href: "/CV_BLIN_Armand.pdf" },
];

export const site = {
  name: "Armand Blin",
  title: "ML Engineer & Researcher",
  tagline: "Focused on LLM & Deep Learning Engineering",
};
