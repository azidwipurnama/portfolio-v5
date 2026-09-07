"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Link from "next/link";
import type { SocialLink, StatBadge } from "@/types";

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <GitHubIcon className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <LinkedInIcon className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: <Mail size={20} />,
    label: "Email",
  },
];

const statBadges: StatBadge[] = [
  {
    label: "Years Experience",
    value: "3+",
    icon: <span className="text-2xl">🚀</span>,
  },
  {
    label: "Projects Completed",
    value: "15+",
    icon: <span className="text-2xl">📁</span>,
  },
  {
    label: "Tech Skills",
    value: "12+",
    icon: <span className="text-2xl">⚡</span>,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">Build It.</span>
            <br className="md:hidden" />{" "}
            <span className="text-foreground">Secure It.</span>
          </motion.h1>

          {/* Role Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
            Full-Stack Developer & Cybersecurity Engineer
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            I develop full-stack web applications and secure them against
            real-world threats through cybersecurity engineering.
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={itemVariants}
          >
            {["JavaScript", "PHP", "Python", "Bootstrap", "Tailwind CSS", "Next.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/40 border border-emerald-900/30 text-slate-300 hover:text-emerald-300 hover:border-emerald-800/40 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons + Stat Badges (merged single row) */}
          <motion.div
            className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 mb-12"
            variants={itemVariants}
          >
            <Link href="/#portfolio">
              <motion.button
                className="group relative flex-shrink-0 flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-mint-500 opacity-100 blur group-hover:opacity-90 transition-opacity duration-300" />
                <span className="absolute inset-0.5 rounded-full bg-slate-900" />
                <span className="relative flex items-center gap-2 text-white">
                  View Projects
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.button>
            </Link>

            <motion.button
              className="group relative flex-shrink-0 flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium border border-emerald-900/40 text-slate-300 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 rounded-full bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download size={16} className="relative" />
              Download CV
            </motion.button>

            {statBadges.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/40 border border-emerald-900/30 text-slate-300 hover:text-white hover:border-emerald-800/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {stat.icon}
                <span className="font-semibold text-white text-sm">{stat.value}</span>
                <span className="text-xs">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <motion.div
                  className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/40 border border-emerald-900/30 text-slate-400 hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-mint-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-1">{social.icon}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
