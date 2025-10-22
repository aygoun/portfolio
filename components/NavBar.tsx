"use client";
import Link from "next/link";
import { socialLinks } from "@/data/site";
import { Github, Linkedin, FileText } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "hackathons", label: "Hackathons" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60">
      <nav className="container-default grid h-12 grid-cols-[1fr_auto_1fr] items-center md:h-14">
        <Link
          href="#hero"
          className="font-semibold tracking-tight text-slate-900"
        >
          Armand Blin
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex justify-self-center">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-slate-900">
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5 justify-self-end">
          {socialLinks.map((s) => {
            const Icon =
              s.label === "GitHub"
                ? Github
                : s.label === "LinkedIn"
                ? Linkedin
                : FileText;
            return (
              <Link
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
