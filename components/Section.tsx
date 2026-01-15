"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type SectionProps = {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section-spacing">
      <div className="container-default">
        {(title || description) && (
          <motion.div
            variants={staggerContainer(0.04)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-0 md:mb-0"
          >
            {title && (
              <motion.h2
                variants={fadeInUp(0)}
                className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                variants={fadeInUp(0.05)}
                className="mt-2 max-w-2xl text-slate-600"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
