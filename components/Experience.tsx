"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { experiences } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className=""
    >
      {experiences.map((x, idx) => (
        <div key={idx}>
          {x.link ? (
            <Link
              href={x.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <motion.div
                variants={fadeInUp(idx * 0.03)}
                className="group py-4 md:py-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {x.image && (
                      <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                        <Image
                          src={x.image}
                          alt=""
                          fill
                          sizes="20px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
                      {x.company}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">{x.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {x.role}
                </p>
                <p className="mt-2 text-sm text-slate-600">{x.description}</p>
                {x.bullets && x.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {x.tags && x.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {x.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
                      >
                        {tag}
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
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-center gap-2">
                  {x.image && (
                    <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                      <Image
                        src={x.image}
                        alt=""
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-slate-900">
                    {x.company}
                  </h3>
                </div>
                <span className="text-xs text-slate-500">{x.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {x.role}
              </p>
              <p className="mt-2 text-sm text-slate-600">{x.description}</p>
              {x.bullets && x.bullets.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {x.tags && x.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {x.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
          {idx < experiences.length - 1 && (
            <hr className="my-1 h-px border-0 bg-slate-200/80" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
