/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind CSS v4 uses inline @theme blocks in app/globals.css for
  // theme extensions (colors, gradients, keyframes, background patterns).
  // This file documents the design tokens used across the project.

  // —————————————— EMERALD & ELECTRIC MINT ——————————————
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // — Colors: Emerald & Electric Mint (Luxury Cyber Green) —
      colors: {
        // Base background
        background: "#040d0a",
        "background-dark": "#06120e",
        foreground: "#f8fafc",
        muted: "#94a3b8",

        // Emerald & Mint accents
        primary: "#10b981",           // Emerald 500
        "primary-hover": "#059669",    // Emerald 600
        "accent-mint": "#34d399",      // Mint 400
        "accent-teal": "#14b8a6",      // Teal 400
        emerald: "#10b981",
        "emerald-dark": "#059669",
        mint: "#34d399",
        teal: "#14b8a6",
      },

      // — Custom Gradient: Emerald → Teal → Mint —
      backgroundImage: {
        "gradient-premium":
          "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #34d399 100%)",
        "gradient-premium-hover":
          "linear-gradient(135deg, #059669 0%, #0d9488 50%, #10b981 100%)",
      },

      // — Keyframe Animations (defined in globals.css @keyframes) —
      animation: {
        blob: "blob 20s ease-in-out infinite",
        "blob-slow": "blob 30s ease-in-out infinite",
        "blob-slower": "blob 40s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        shimmer: "shimmer 12s ease-in-out infinite",
        flicker: "flicker 0.3s infinite alternate",
        glow: "glow 2s ease-in-out infinite",
      },

      // — Glassmorphism & card utilities —
      backgroundColor: {
        "card-bg": "rgba(4, 13, 10, 0.5)",
        "glass-bg": "rgba(4, 13, 10, 0.45)",
      },
      borderColor: {
        "card-border": "rgba(16, 55, 40, 0.8)",
        "glass-border": "rgba(16, 55, 40, 0.7)",
      },

      // — Box shadows for emerald glow effects —
      boxShadow: {
        "inner-glow": "inset 0 0 25px -5px rgba(16, 185, 129, 0.15)",
        "outer-glow": "0 0 25px -5px rgba(16, 185, 129, 0.15)",
        "card-hover": "0 0 40px -5px rgba(16, 185, 129, 0.2)",
      },

      // — Backdrop blur presets —
      backdropBlur: {
        xs: "2px",
      },

      // — Container sizes —
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
      },
    },
  },

  plugins: [],
};
