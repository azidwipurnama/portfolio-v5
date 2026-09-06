"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * BackgroundCanvas.tsx
 *
 * Layered ambient background for the premium dark portfolio.
 * Layers:
 *   1. Ambient Gradient Mesh — animated radial glows (cyan, indigo, violet)
 *   2. Dot Matrix Grid Overlay — technical depth pattern
 *   3. Noise Texture — tactile premium feel
 */
const BackgroundCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Mouse-following spotlight glow intensity
  const spotlightOpacity = 0.15 + (mousePosition.x / window.innerWidth) * 0.1;
  const spotlightScale = 0.9 + (mousePosition.y / window.innerHeight) * 0.3;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* —— Layer 1: Ambient Gradient Mesh (animated blob glows) —— */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/30 via-indigo-600/20 to-transparent blur-[100px]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 45,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-500/25 via-indigo-600/15 to-transparent blur-[120px]"
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 120, -120, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 55,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-600/15 to-cyan-500/10 blur-[90px]"
        animate={{
          x: [0, 50, -50, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 38,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* —— Mouse-following spotlight —— */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-transparent blur-[60px] pointer-events-none"
        style={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: spotlightOpacity,
          scale: spotlightScale,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* —— Layer 2: Dot Matrix Grid Overlay —— */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* —— Layer 3: Subtle Noise Texture —— */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          opacity: 0.035,
        }}
      />

      {/* —— Accent grid lines (subtle diagonal) —— */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          opacity={0.04}
        >
          <defs>
            <pattern
              id="diagonal-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-1 1l2-2M0 48l48-48"
                stroke="rgba(99, 102, 241, 0.15)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundCanvas;
