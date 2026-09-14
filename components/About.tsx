"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Code2,
  Briefcase,
  Calendar,
} from "lucide-react";
import AnimatedTerminal from "./AnimatedTerminal";
import { experiences } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const About = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        id="about"
        ref={ref}
        className="py-24 border-t border-emerald-900/30"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4 pb-2 leading-tight overflow-visible"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-slate-400 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              The story behind the code — my journey, skills, and experience.
            </motion.p>
          </motion.div>

          {/* Bento Grid — 2 Card Simetris */}
          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Card Kiri — Main Bio (Span 2 Kolom) */}
            <motion.div
              className="lg:col-span-2 p-6 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
              variants={itemVariants}
            >
              {/* Baris Atas: Foto Kiri + Judul Kanan */}
              <div className="flex items-center gap-6 mb-5">
                <img
                  src="/azi.jpeg"
                  alt="DWICODE"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-emerald-500/40 flex-shrink-0"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Building with Code. Thinking with{" "}
                  <span className="gradient-text">Security.</span>
                </h3>
              </div>

              {/* Baris Tengah: Deskripsi */}
              <p className="text-slate-300 leading-relaxed mb-6">
                Full-Stack Developer &amp; Cybersecurity Enthusiast focused on
                building modern, high-performance web applications and securing
                them against real-world threats. I blend clean architecture with
                threat modeling to deliver software that is functional,
                maintainable, and resilient under attack.
              </p>

              {/* Baris Bawah: Badge/Tag */}
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <Globe size={14} />
                  Indonesia
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <Code2 size={14} />
                  Full-Stack
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <ShieldCheck size={14} />
                  Cybersecurity
                </span>
              </div>
            </motion.div>

            {/* Card Kanan — Interactive Terminal (Span 1 Kolom) */}
            <motion.div
              className="lg:col-span-1 flex flex-col"
              variants={itemVariants}
            >
              <div className="flex-1 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl p-4">
                <AnimatedTerminal />
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase size={18} className="text-emerald-400" />
              Experience
            </h3>

            <div className="border-l border-emerald-900/50 pl-6 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Glowing node */}
                  <div className="absolute -left-[13px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />

                  {/* Position & Company */}
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-sm font-bold text-white">{exp.title}</span>
                    <span className="text-emerald-400 text-xs font-mono">{exp.company}</span>
                  </div>

                  {/* Period */}
                  <span className="text-[11px] text-slate-400 font-mono block mb-1">
                    {exp.period.start} — {exp.period.end}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);

About.displayName = "About";

export default About;
