"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Code2,
  Cpu,
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

const About = () => {
  return (
    <section id="about" className="py-24">
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
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
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

        {/* Bento Grid */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 — Main Bio (spans 2 columns) */}
          <motion.div
            className="md:col-span-2 p-6 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
              Bridging Full-Stack Development with Cybersecurity Precision.
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              A Full-Stack Developer with over 3 years of experience building
              modern web applications using Next.js, TypeScript, and Tailwind
              CSS. I craft high-performance, visually distinctive interfaces and
              harden them against real-world threats through cybersecurity
              engineering — from API hardening to vulnerability auditing.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Every line of code I write is held to a secure code standard. I
              believe great software is not only functional and elegant — it is
              resilient. My workflow blends clean architecture with threat
              modeling to deliver applications that perform under pressure and
              stay secure under attack.
            </p>

            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <Globe size={14} />
                Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <ShieldCheck size={14} />
                Secure Code Standard
              </span>
            </div>
          </motion.div>

          {/* Card 2 — Terminal Console */}
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
          >
            <AnimatedTerminal />
          </motion.div>

          {/* Card 3a — Full-Stack Architecture */}
          <motion.div
            className="p-5 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <Code2 size={22} />
              </div>
              <h4 className="font-bold text-foreground text-sm">
                Full-Stack Architecture
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Next.js, TypeScript, Tailwind
            </p>
          </motion.div>

          {/* Card 3b — Cybersecurity Engineering */}
          <motion.div
            className="p-5 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h4 className="font-bold text-foreground text-sm">
                Cybersecurity Engineering
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Vulnerability Assessment, API Security
            </p>
          </motion.div>

          {/* Card 3c — High-Performance Systems */}
          <motion.div
            className="p-5 bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <Cpu size={22} />
              </div>
              <h4 className="font-bold text-foreground text-sm">
                High-Performance Systems
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Database Optimization, Clean Code
            </p>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
            <Briefcase size={22} className="text-emerald-400" />
            Experience
          </h3>

          <div className="border-l border-emerald-900/60 pl-6 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Glowing node */}
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />

                <div className="bg-[#040D0A]/60 backdrop-blur-md border border-emerald-900/40 rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-base font-bold text-foreground">
                      {exp.title}
                    </h4>
                    <span className="text-emerald-400/80 text-sm font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Calendar size={14} />
                    {exp.period.start} — {exp.period.end}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
