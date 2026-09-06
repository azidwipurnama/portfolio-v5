/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind CSS v4 uses inline @theme blocks in app/globals.css for
  // theme extensions (colors, gradients, keyframes, background patterns).
  // This file documents the design tokens used across the project.

  // —————————————— Design Tokens (mirrored in globals.css @theme) ——————————————
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Deep dark theme palette
        background: "#090d16",
        foreground: "#f8fafc",
        muted: "#94a3b8",
        primary: "#6366f1",
        "primary-hover": "#4f46e5",
        "accent-cyan": "#06b6d4",
        "accent-violet": "#a855f7",
      },

      // — Premium gradient (indigo → purple → cyan)
      backgroundImage: {
        "gradient-premium":
          "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)",
        "gradient-premium-hover":
          "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #0891b2 100%)",
      },

      // — Custom keyframes (defined in globals.css @keyframes)
      animation: {
        blob: "blob 20s ease-in-out infinite",
        "blob-slow": "blob 30s ease-in-out infinite",
        "blob-slower": "blob 40s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        shimmer: "shimmer 12s ease-in-out infinite",
        flicker: "flicker 0.3s infinite alternate",
        glow: "glow 2s ease-in-out infinite",
      },

      // — Glassmorphism & card utilities
      backgroundColor: {
        "card-bg": "rgba(15, 23, 42, 0.45)",
        "glass-bg": "rgba(15, 23, 42, 0.45)",
      },
      borderColor: {
        "card-border": "rgba(30, 41, 59, 0.8)",
        "glass-border": "rgba(30, 41, 59, 0.7)",
      },

      // — Box shadows for glow effects
      boxShadow: {
        "inner-glow": "inset 0 0 25px -5px rgba(99, 102, 241, 0.15)",
        "outer-glow": "0 0 25px -5px rgba(99, 102, 241, 0.15)",
        "card-hover": "0 0 40px -5px rgba(99, 102, 241, 0.2)",
      },

      // — Backdrop blur presets
      backdropBlur: {
        xs: "2px",
      },

      // — Container sizes
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
      },
    },
  },

  plugins: [],
};
