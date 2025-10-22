"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { hackathons } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export function HackathonsSection() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className=""
    >
      {hackathons.map((h, idx) => (
        <div key={idx}>
          {h.link ? (
            <Link
              href={h.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <motion.div
                variants={fadeInUp(idx * 0.03)}
                className="group py-4 md:py-5"
              >
                <div className="flex items-center gap-2">
                  {h.image && (
                    <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                      <Image
                        src={h.image}
                        alt=""
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
                    {h.name}
                  </h3>
                </div>
                {h.award && (
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {h.award}
                  </p>
                )}
                <p className="mt-2 text-sm text-slate-600">{h.description}</p>
              </motion.div>
            </Link>
          ) : (
            <motion.div
              variants={fadeInUp(idx * 0.03)}
              className="py-4 md:py-5"
            >
              <div className="flex items-center gap-2">
                {h.image && (
                  <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
                    <Image
                      src={h.image}
                      alt=""
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </span>
                )}
                <h3 className="text-base font-semibold text-slate-900">
                  {h.name}
                </h3>
              </div>
              {h.award && (
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {h.award}
                </p>
              )}
              <p className="mt-2 text-sm text-slate-600">{h.description}</p>
            </motion.div>
          )}
          {idx < hackathons.length - 1 && (
            <hr className="my-1 h-px border-0 bg-slate-200/80" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
