"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className=""
    >
      {projects.map((p, idx) => (
        <div key={idx}>
          {p.link ? (
            <Link
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <motion.div
                variants={fadeInUp(idx * 0.03)}
                className="group rounded-md py-4 transition md:py-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {p.image && (
                      <div className="relative h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                        <Image
                          src={p.image}
                          alt=""
                          fill
                          sizes="20px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-slate-700">{p.description}</p>
                  {p.bullets && p.bullets.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {(p.tags || p.technologies) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(p.tags || []).map((tag) => (
                      <span
                        key={`tag-${tag}`}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {(p.technologies || []).map((t) => (
                      <span
                        key={`tech-${t}`}
                        className="rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </Link>
          ) : (
            <motion.div
              variants={fadeInUp(idx * 0.03)}
              className="py-4 md:py-5"
            >
              <div className="flex items-start gap-2">
                {p.image && (
                  <div className="relative h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-base font-semibold text-slate-900">
                  {p.name}
                </h3>
              </div>
              <div className="mt-2">
                <p className="text-sm text-slate-700">{p.description}</p>
                {p.bullets && p.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
              {(p.tags || p.technologies) && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {(p.tags || []).map((tag) => (
                    <span
                      key={`tag-${tag}`}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {(p.technologies || []).map((t) => (
                    <span
                      key={`tech-${t}`}
                      className="rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
          {idx < projects.length - 1 && (
            <hr className="my-1 h-px border-0 bg-slate-200/80" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
