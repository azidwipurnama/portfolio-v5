"use client";

import { motion } from "framer-motion";
import TechRotator from "@/components/TechRotator";

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
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold gradient-text tracking-tight mb-6"
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
            className="text-lg md:text-xl font-body font-light text-slate-300 tracking-wide max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            I develop full-stack web applications and secure them against
            real-world threats through cybersecurity engineering.
          </motion.p>

          {/* Tech Rotator (auto-rotate carousel) */}
          <motion.div variants={itemVariants}>
            <TechRotator />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator — fixed at bottom center of Hero */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.3em] font-mono text-slate-400 uppercase font-medium mb-2">
          SCROLL TO EXPLORE
        </p>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-transparent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 40, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
