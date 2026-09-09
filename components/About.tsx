"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import type { Experience } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

        {/* Bio Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-900/50 backdrop-blur-lg border border-emerald-900/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
          >
            {/* Avatar Placeholder */}
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-emerald-900/30 bg-slate-800/30 flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center text-slate-500">
                <span className="text-4xl font-bold gradient-text opacity-30">AZ</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let me tell you a story
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a Full-Stack Developer & UI/UX Enthusiast with over 3 years
                of experience building modern web applications. My journey began
                with a curiosity about how digital interfaces could be both
                beautiful and functional — a question that led me deep into
                code, design systems, and the intersection of art and
                engineering.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Today, I specialize in crafting high-performance, visually
                distinctive experiences using Next.js, TypeScript, and
                Tailwind CSS. I believe in writing code that is as elegant as
                the interfaces it produces, and I approach every project with
                a commitment to accessibility, performance, and pixel-perfect
                execution.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I am not coding, you can find me exploring the latest in
                design systems, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3
            className="text-2xl font-bold text-foreground text-center mb-12"
            variants={itemVariants}
          >
            Experience
          </motion.h3>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-emerald-900/50 md:ml-px" />

            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* ————————— Experience Item ————————— */
const ExperienceItem = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-12 last:mb-0 ${
        isEven ? "md:text-right md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
      }`}
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Node */}
      <motion.div
        className="absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-mint-400 shadow-lg shadow-emerald-500/30 z-10"
        style={{
          left: isEven ? "0" : "100%",
          translateX: isEven ? "0" : "-100%",
        }}
      />

      <div className="p-6 bg-slate-900/50 backdrop-blur-lg border border-emerald-900/30 rounded-xl hover:border-emerald-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            {experience.period.start} — {experience.period.end}
          </span>
          <h4 className="text-xl font-bold text-foreground">
            {experience.title}
          </h4>
        </div>
        <p className="text-emerald-400/80 font-medium mb-2">
          {experience.company}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
