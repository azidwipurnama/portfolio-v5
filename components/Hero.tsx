"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Link from "next/link";
import TechRotator from "@/components/TechRotator";
import type { SocialLink } from "@/types";

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

const stats: { value: string; label: string }[] = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "12+", label: "Tech Skills" },
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

          {/* Tech Rotator (auto-rotate carousel) */}
          <TechRotator />

          {/* ROW 1 — Actionable Buttons */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Link href="/#portfolio">
              <motion.button
                className="whitespace-nowrap px-8 py-3.5 rounded-full font-medium text-base bg-slate-900/40 border border-emerald-900/30 text-white hover:bg-emerald-900/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>

            <motion.button
              className="whitespace-nowrap px-8 py-3.5 rounded-full font-medium text-base bg-slate-900/40 border border-emerald-900/30 text-white hover:bg-emerald-900/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* ROW 2 — Stats (plain text, non-clickable) */}
          <motion.div
            className="flex justify-center items-center gap-0.5 mb-12 text-sm"
            variants={itemVariants}
          >
            {stats.map((stat, i) => (
              <motion.span
                key={stat.label}
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <span className="font-semibold text-emerald-300">{stat.value}</span>
                <span className="mx-1.5 text-slate-500">·</span>
                <span className="text-slate-400">{stat.label}</span>
                {i < stats.length - 1 && <span className="mx-3 text-slate-600/50" />}
              </motion.span>
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
