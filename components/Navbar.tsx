"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { id: "home", label: "HOME", href: "/" },
  { id: "portfolio", label: "PORTFOLIO", href: "/#portfolio" },
  { id: "about", label: "ABOUT", href: "/#about" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // IntersectionObserver untuk deteksi section yang aktif
  useEffect(() => {
    const sectionIds = ["home", "portfolio", "about"];
    const options: IntersectionObserverInit = {
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      let currentFound = "home";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentFound = entry.target.id;
        }
      });

      setActiveSection(currentFound);
      setScrolled(window.scrollY > 50);
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    // Hapus hash & scroll ke atas untuk Home
    if (href === "/" || href === "/#home") {
      window.history.pushState("", document.title, " ");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Smooth scroll ke section target dengan hash bersih
    if (href.startsWith("/#")) {
      const target = href.substring(2);
      const el = document.getElementById(target);
      if (el) {
        window.history.pushState("", document.title, ` `);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-emerald-800/30 bg-[#040D0A]/80 backdrop-blur-lg transition-all duration-300">
      <div
        className={cn(
          "flex items-center justify-between w-full px-6 md:px-12 py-4 transition-all duration-300",
          scrolled && "py-3"
        )}
      >
        {/* Logo — Benar-benar Ujung Kiri */}
        <div className="relative flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400/80 hover:text-emerald-400 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Terminal Symbol Prompt: >_ */}
            <span className="text-emerald-400 font-mono font-bold mr-1.5">&gt;_</span>

            {/* "DWI" — Tegak & Normal */}
            <span className="font-extralight not-italic tracking-[0.2em] text-slate-100">DWI</span>

            {/* "CODE" — Tipis & Miring (NO BOLD), emerald glowing */}
            <span className="font-extralight italic tracking-[0.2em] text-emerald-400">CODE</span>
          </Link>

          {/* Floating Photo Card — Hover Popup */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95, transition: { duration: 0.15 } }}
                className="absolute top-full left-0 mt-3 z-50 pointer-events-none w-52 h-64 md:w-60 md:h-72"
              >
                <div className="p-1.5 bg-[#040D0A]/95 backdrop-blur-xl border border-emerald-800/60 rounded-2xl shadow-2xl shadow-emerald-500/20 w-full h-full">
                  <img
                    src="/azi.jpeg"
                    alt="DWICODE"
                    className="rounded-2xl object-cover w-full h-full border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/30"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav — Benar-benar Ujung Kanan */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.href, item.id)}
              className={cn(
                "relative px-5 py-2.5 text-sm font-heading font-light tracking-[0.2em] rounded-full transition-all duration-300",
                activeSection === item.id
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundImage:
                      activeSection === "home"
                        ? "linear-gradient(to right, #10b981 0%, transparent 100%)"
                        : activeSection === "portfolio"
                        ? "linear-gradient(to right, transparent 0%, #10b981 50%, transparent 100%)"
                        : "linear-gradient(to right, transparent 0%, #10b981 100%)",
                  }}
                />
              )}
              <span className="relative z-1">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-emerald-950/30 hover:bg-emerald-900/40 text-slate-300 hover:text-white transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-6 md:right-12 mt-2 w-48 bg-[#040D0A]/90 backdrop-blur-md border border-emerald-900/30 rounded-xl shadow-xl shadow-black/40"
            >
              <div className="flex flex-col p-2 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={cn(
                      "px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                      activeSection === item.id
                        ? "text-white bg-emerald-500/80"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
