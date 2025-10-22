"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { education } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export function EducationSection() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className=""
    >
      {education.map((e, idx) => (
        <div key={idx}>
          {e.link ? (
            <Link
              href={e.link}
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
                    {e.image && (
                      <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                        <Image
                          src={e.image}
                          alt=""
                          fill
                          sizes="20px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
                      {e.school}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">{e.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {e.degree}
                </p>
                {e.location && (
                  <p className="mt-1 text-sm text-slate-500">{e.location}</p>
                )}
                {e.details && (
                  <p className="mt-2 text-sm text-slate-600">{e.details}</p>
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
                  {e.image && (
                    <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                      <Image
                        src={e.image}
                        alt=""
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-slate-900">
                    {e.school}
                  </h3>
                </div>
                <span className="text-xs text-slate-500">{e.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {e.degree}
              </p>
              {e.location && (
                <p className="mt-1 text-sm text-slate-500">{e.location}</p>
              )}
              {e.details && (
                <p className="mt-2 text-sm text-slate-600">{e.details}</p>
              )}
            </motion.div>
          )}
          {idx < education.length - 1 && (
            <hr className="my-1 h-px border-0 bg-slate-200/80" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
