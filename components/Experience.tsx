"use client";
import { motion } from "framer-motion";
import { workExperience } from "@/data";

const badges: Record<number, { label: string; color: string }> = {
  1: { label: "Full-time", color: "text-purple/80 border-purple/30" },
  2: { label: "Internship", color: "text-white/40 border-white/10" },
  3: { label: "Freelance", color: "text-white/40 border-white/10" },
};

export default function Experience() {
  return (
    <section className="py-20 w-full" id="experience">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-4"
        >
          /02 — experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-16"
        >
          Where I&apos;ve worked
        </motion.h2>
      </div>

      <div className="flex flex-col divide-y divide-white/[0.06]">
        {workExperience.map((exp, index) => {
          const [role, company] = exp.title.split(" | ");
          const badge = badges[exp.id];
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 cursor-default"
            >
              {/* Left — role meta */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-white/20 text-xs font-mono tabular-nums">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded border ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-purple transition-colors duration-300">
                  {role}
                </h3>
                {company && (
                  <p className="text-white/40 text-sm">{company}</p>
                )}
              </div>

              {/* Right — description */}
              <p className="text-white/55 text-sm md:text-base leading-relaxed self-center">
                {exp.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
