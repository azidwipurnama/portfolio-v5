"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "portfolio", label: "Portfolio", href: "/#portfolio" },
  { id: "about", label: "About", href: "/#about" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const el = document.getElementById(href.substring(2));
      el?.scrollIntoView({ behavior: "smooth" });
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
            className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            AZI DWIPURNAMA
          </Link>

          {/* Floating Photo Card — Hover Popup */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95, transition: { duration: 0.15 } }}
                className="absolute top-full left-0 mt-2 pointer-events-none"
              >
                <div className="p-1.5 bg-[#040D0A]/95 backdrop-blur-xl border border-emerald-800/60 rounded-2xl">
                  <img
                    src="/azi.jpeg"
                    alt="AZI Dwipurnama"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20"
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
                "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
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
