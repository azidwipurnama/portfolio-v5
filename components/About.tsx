"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";
import { skills, experiences, certificates } from "@/lib/data";
import type { Skill, Experience, Certificate } from "@/types";

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
  // Group skills by category
  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const backendSkills = skills.filter((s) => s.category === "Backend");
  const toolsSkills = skills.filter((s) => s.category === "Tools & Cloud");

  const skillCategories = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "Tools & Cloud", skills: toolsSkills },
  ];

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
            className="relative flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-900/50 backdrop-blur-lg border border-slate-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
          >
            {/* Avatar Placeholder */}
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-slate-800/60 bg-slate-800/30 flex-shrink-0">
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

        {/* Tech Stack Grid */}
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
            Tech Stack
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                className="space-y-4"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-slate-300 mb-4">
                  {category.title}
                </h4>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIndex + catIndex * 10}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700/50 md:ml-px" />

            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-foreground text-center mb-12"
            variants={itemVariants}
          >
            Certificates & Achievements
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ————————— Skill Card ————————— */
const SkillCard = ({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) => {
  return (
    <motion.div
      className="group relative p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all duration-300"
      whileHover={{ scale: 1.02, x: 3 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="flex items-center gap-3">
        <div className="text-indigo-400 group-hover:text-white transition-colors">
          {skill.icon}
        </div>
        <span className="font-medium">{skill.name}</span>
      </div>
      {skill.level && (
        <div className="mt-2 h-1.5 w-full bg-slate-800/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
          />
        </div>
      )}
    </motion.div>
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
        className="absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30 z-10"
        style={{
          left: isEven ? "0" : "100%",
          translateX: isEven ? "0" : "-100%",
        }}
      />

      <div className="p-6 bg-slate-900/50 backdrop-blur-lg border border-slate-800/80 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
            {experience.period.start} — {experience.period.end}
          </span>
          <h4 className="text-xl font-bold text-foreground">
            {experience.title}
          </h4>
        </div>
        <p className="text-indigo-400/80 font-medium mb-2">
          {experience.company}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ————————— Certificate Card ————————— */
const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden border border-slate-800/60 bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]"
        whileHover={{ y: -3 }}
      >
        {/* Image/Placeholder */}
        {certificate.image ? (
          <div className="relative h-32 rounded-t-xl overflow-hidden bg-slate-800/30">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-32 rounded-t-xl bg-slate-800/30 flex items-center justify-center">
            <Award className="w-8 h-8 text-slate-500" />
          </div>
        )}

        <div className="p-4">
          <h4 className="font-bold text-foreground mb-1 group-hover:gradient-text transition-all duration-300">
            {certificate.title}
          </h4>
          <p className="text-sm text-slate-400 mb-2">{certificate.issuer}</p>
          <p className="text-xs text-slate-500 line-clamp-2">
            {certificate.description}
          </p>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-1 text-xs text-indigo-400 hover:text-cyan-300 transition-colors"
            >
              View Credential →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
