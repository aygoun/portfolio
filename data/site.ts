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
  title: "Master in AI — ML Research Student",
  tagline:
    "Seeking final research internship (April 2026). Focus: Visual Understanding, CV, DL.",
};
