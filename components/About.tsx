"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

const stack = ["React", "Next.js", "Node.js", "TypeScript", "Java", "MongoDB", "AWS", "Docker", "Redis", "React Native"];

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("sameerkhan27560@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-20 w-full">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-4"
        >
          /01 — about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          I make software <br className="hidden md:block" />
          <span className="text-purple">that ships.</span>
        </motion.h2>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <p className="text-white/65 text-base md:text-lg leading-[1.8]">
            I&apos;m Sameer Khan — a full-stack engineer based in Bhopal. I spend most of my time building web and mobile products that are fast, reliable, and actually pleasant to use.
          </p>
          <p className="text-white/45 text-sm md:text-base leading-[1.8]">
            Over the past year I&apos;ve worked across the stack — NestJS backends, React Native apps, cloud infra on AWS, payment integrations, and AI-powered features. I&apos;m comfortable owning a feature end-to-end, from database schema to the last pixel on screen.
          </p>
          <p className="text-white/45 text-sm md:text-base leading-[1.8]">
            Currently open to new opportunities. If you&apos;re building something interesting, I&apos;d love to hear about it.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
            >
              {copied ? (
                <>
                  <IoCheckmarkOutline className="text-purple" />
                  <span className="text-purple">Copied!</span>
                </>
              ) : (
                <>
                  <IoCopyOutline className="group-hover:text-purple transition-colors duration-200" />
                  sameerkhan27560@gmail.com
                </>
              )}
            </button>
            <span className="w-px h-4 bg-white/10" />
            <a
              href="https://drive.google.com/file/d/1VjbpFz5slgEU4_SG3ER7QmnddwVvQua-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-200"
            >
              View résumé ↗
            </a>
          </div>
        </motion.div>

        {/* Right — stack + number facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col gap-10"
        >
          {/* Stack */}
          <div>
            <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-mono mb-5">
              Tech I work with
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {stack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.035, duration: 0.35 }}
                  className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white/90 transition-colors duration-200 cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-purple/60 flex-shrink-0" />
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Two number facts — horizontal, no card */}
          <div className="flex gap-10 border-t border-white/[0.06] pt-8">
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">1+</p>
              <p className="text-white/35 text-xs mt-1">years of experience</p>
            </div>
            <div className="w-px bg-white/[0.06]" />
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">15+</p>
              <p className="text-white/35 text-xs mt-1">projects shipped</p>
            </div>
            <div className="w-px bg-white/[0.06]" />
            <div>
              <p className="text-4xl font-bold text-white tabular-nums">5+</p>
              <p className="text-white/35 text-xs mt-1">clients served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
