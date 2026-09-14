"use client";

import { useEffect } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

export default function Home() {
  // Reset scroll to top on mount unless a hash is present
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      {/* Ambient Background Canvas (gradient mesh, dot grid, noise) */}
      <BackgroundCanvas />

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Home Hero Section */}
        <Hero />

        {/* Portfolio Section */}
        <Portfolio />

        {/* About Section */}
        <About />
      </main>
    </>
  );
}
