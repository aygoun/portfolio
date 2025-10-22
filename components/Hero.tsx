"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { site, socialLinks } from "@/data/site";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="section-spacing pt-10">
      <div className="container-default">
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={fadeInUp(0)}
            className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl"
          >
            {site.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp(0.05)}
            className="mt-3 text-lg font-medium text-slate-700 md:text-xl"
          >
            {site.title}
          </motion.p>
          <motion.p variants={fadeInUp(0.1)} className="mt-3 text-slate-600">
            {site.tagline}
          </motion.p>
          <motion.div
            variants={fadeInUp(0.15)}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
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
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200/80 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
