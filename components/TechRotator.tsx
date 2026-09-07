"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiJavascript, SiPhp, SiPython, SiBootstrap, SiTailwindcss, SiNextdotjs, SiWireshark, SiOwasp } from "react-icons/si";
import { FaBug, FaNetworkWired, FaSkullCrossbones } from "react-icons/fa";
import { GiHornedSkull } from "react-icons/gi";

/**
 * TechRotator.tsx
 *
 * Displays a single tech tag at a time with icon, auto-rotating every 1s.
 * Smooth fade + vertical slide transition, pause on hover, fixed height.
 */

const techs = [
  { name: "JAVASCRIPT", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
  { name: "PYTHON", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "BOOTSTRAP", icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "NEXT.JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "BURP SUITE", icon: <FaBug className="text-emerald-300" /> },
  { name: "WIRESHARK", icon: <SiWireshark className="text-[#80B2CF]" /> },
  { name: "NMAP", icon: <FaNetworkWired className="text-emerald-300" /> },
  { name: "METASPLOIT", icon: <GiHornedSkull className="text-emerald-300" /> },
  { name: "OWASP ZAP", icon: <SiOwasp className="text-emerald-300" /> },
];

const TechRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation with setInterval (1s interval)
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techs.length);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Animation variants for fade + vertical slide
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div
      className="relative flex items-center justify-center mb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fixed height container — prevents layout shift between different tag lengths */}
      <div className="relative flex items-center gap-2 h-12">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-emerald-300"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="text-3xl md:text-4xl">{techs[currentIndex].icon}</span>
            {techs[currentIndex].name}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Optional: subtle accent dot */}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
    </div>
  );
};

export default TechRotator;
