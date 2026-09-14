"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * BackgroundCanvas.tsx
 *
 * Layered ambient background for the premium dark portfolio.
 * Layers:
 *   1. Ambient Gradient Mesh — animated radial glows (emerald, mint, teal)
 *   2. Dot Matrix Grid Overlay — technical depth pattern
 *   3. Noise Texture — tactile premium feel
 *
 * Performance-optimized for mobile:
 *   - Mouse-tracking spotlight disabled on screens < 768px
 *   - Reduced blob animations and durations on mobile
 *   - Respects prefers-reduced-motion
 */
const BackgroundCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile + throttle mouse tracking to idle
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, shouldReduceMotion]);

  // Mouse-following spotlight glow intensity
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1080;
  const spotlightOpacity = 0.15 + (mousePosition.x / windowWidth) * 0.1;
  const spotlightScale = 0.9 + (mousePosition.y / windowHeight) * 0.3;

  // Reduced animation config for mobile / reduced motion
  const reducedDuration = {
    long: isMobile ? 20 : 45,
    medium: isMobile ? 22 : 55,
    short: isMobile ? 18 : 38,
  };

  const animationDisabled = isMobile || shouldReduceMotion;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* —— Layer 1: Ambient Gradient Mesh (animated blob glows) —— */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-600/20 to-transparent blur-[100px]"
        animate={
          animationDisabled
            ? {}
            : {
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.1, 0.95, 1],
              }
        }
        transition={
          animationDisabled
            ? {}
            : {
                duration: reducedDuration.long,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      />

      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-mint-500/25 via-teal-600/15 to-transparent blur-[120px]"
        animate={
          animationDisabled
            ? {}
            : {
                x: [0, -80, 80, 0],
                y: [0, 120, -120, 0],
                scale: [1, 0.9, 1.1, 1],
              }
        }
        transition={
          animationDisabled
            ? {}
            : {
                duration: reducedDuration.medium,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 2,
              }
        }
      />

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-600/15 to-mint-500/10 blur-[90px]"
        animate={
          animationDisabled
            ? {}
            : { x: [0, 50, -50, 0], scale: [1, 1.05, 0.9, 1] }
        }
        transition={
          animationDisabled
            ? {}
            : {
                duration: reducedDuration.short,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }
        }
      />

      {/* —— Mouse-following spotlight (disabled on mobile / reduced motion) —— */}
      {!animationDisabled && (
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-transparent blur-[60px] pointer-events-none"
          style={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
            opacity: spotlightOpacity,
            scale: spotlightScale,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      )}

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
                stroke="rgba(16, 185, 129, 0.15)"
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
