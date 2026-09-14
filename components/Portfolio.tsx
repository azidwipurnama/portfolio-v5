"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types";
import { projects, certificates } from "@/lib/data";

// Tech items reused from TechRotator — same icons, same color classes
import {
  SiJavascript,
  SiPhp,
  SiPython,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiWireshark,
  SiOwasp,
} from "react-icons/si";
import { FaBug, FaNetworkWired } from "react-icons/fa";
import { GiHornedSkull } from "react-icons/gi";
import { Clock, ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-[#7952B3]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38BDF8]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "PHP",
        icon: <SiPhp className="text-[#777BB4]" />,
      },
      {
        name: "Python",
        icon: <SiPython className="text-[#3776AB]" />,
      },
    ],
  },
  {
    label: "Security Tools",
    items: [
      {
        name: "Burp Suite",
        icon: <FaBug className="text-emerald-300" />,
      },
      {
        name: "Wireshark",
        icon: <SiWireshark className="text-[#80B2CF]" />,
      },
      {
        name: "Nmap",
        icon: <FaNetworkWired className="text-emerald-300" />,
      },
      {
        name: "Metasploit",
        icon: <GiHornedSkull className="text-emerald-300" />,
      },
      {
        name: "OWASP ZAP",
        icon: <SiOwasp className="text-emerald-300" />,
      },
    ],
  },
];

/* ——— Parent tab config ——— */
const parentTabs = ["Projects", "Certificates", "Tech Stack"] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /* Gradient background for active parent tab — mirrors navbar pattern */
  const getTabGradient = (tab: string) => {
    if (tab === "Projects") {
      return "linear-gradient(to right, #10b981 0%, transparent 100%)";
    }
    if (tab === "Tech Stack") {
      return "linear-gradient(to right, transparent 0%, #10b981 100%)";
    }
    return "linear-gradient(to right, transparent 0%, #10b981 50%, transparent 100%)";
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 px-4 max-w-6xl mx-auto"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4 mt-4 pb-2 leading-tight overflow-visible"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Proof of Work
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A curated showcase of built projects, verified certifications, and technical capabilities.
          </motion.p>
        </motion.div>

        {/* Parent Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/40 rounded-full border border-emerald-900/30">
            {parentTabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: getTabGradient(tab),
                    }}
                  />
                )}
                <span className="relative z-1">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === "Projects" && (
              <>
                {/* Projects Grid — 2 Columns */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <AnimatePresence mode="wait">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        layoutId={`project-card-${project.id}`}
                        variants={itemVariants}
                        custom={index}
                      >
                        <motion.div
                          layoutId={`project-card-inner-${project.id}`}
                          className="group relative flex flex-col bg-[#040D0A]/90 border border-emerald-900/50 rounded-2xl p-5 hover:border-emerald-500/50 transition-all shadow-xl min-h-[380px]"
                          onClick={() => handleProjectClick(project)}
                        >
                          {/* Gambar Proyek (Atas) */}
                          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-900/30 flex items-center justify-center">
                            {project.thumbnail ? (
                              <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="object-cover"
                              />
                            ) : (
                              <span className="text-slate-500 text-xs">[Project Image]</span>
                            )}
                          </div>

                          {/* Judul */}
                          <h3 className="text-xl font-bold text-white mb-2">
                            {project.title}
                          </h3>

                          {/* Deskripsi */}
                          <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] px-2.5 py-1 bg-emerald-950/40 border border-emerald-800/40 rounded-full text-emerald-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Footer Kartu */}
                          <div className="flex items-center justify-between pt-3 border-t border-emerald-900/30">
                            <span className={`text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 ${project.status ? '' : 'hidden'}`}>
                              {project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : ""}
                            </span>
                            <span className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                              View Project <ArrowUpRight size={12} />
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Coming Soon Placeholder */}
                    <motion.div
                      variants={itemVariants}
                      className="w-full h-full min-h-[380px] flex flex-col items-center justify-center border-2 border-dashed border-emerald-800/60 rounded-2xl p-6 bg-[#040D0A]/40"
                    >
                      <Clock className="text-emerald-400 mb-3" size={32} />
                      <h3 className="font-bold text-lg text-slate-200">Coming Soon</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Next project currently in active development. Stay tuned!
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </>
            )}

            {activeTab === "Certificates" && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <AnimatePresence mode="wait">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      layoutId={`cert-${cert.id}`}
                      className="group relative flex flex-col bg-[#040D0A]/90 border border-emerald-900/50 rounded-2xl p-5 hover:border-emerald-500/50 transition-all shadow-xl min-h-[380px]"
                      variants={itemVariants}
                      custom={index}
                    >
                      {/* Thumbnail */}
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-900/30 flex items-center justify-center">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={160}
                          height={160}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm text-emerald-300 mb-2">
                        {cert.issuer} • {cert.date}
                      </p>

                      {/* Description — 2 lines clamp */}
                      <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-emerald-900/30">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-800/30 text-emerald-300 font-mono">
                          Verified
                        </span>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                        >
                          View Credential <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </motion.div>
                  ))}

                  {/* Coming Soon Placeholder */}
                  <motion.div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center border-2 border-dashed border-emerald-800/60 rounded-2xl p-6 bg-[#040D0A]/40">
                    <Clock className="text-emerald-400 mb-3" size={32} />
                    <h3 className="font-bold text-lg text-slate-200">Coming Soon</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Next certificate is on the way. Stay tuned!
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {activeTab === "Tech Stack" && (
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {techCategories.map((category) => (
                  <motion.div
                    key={category.label}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-emerald-900/30" />
                      <h3 className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
                        {category.label}
                      </h3>
                      <div className="h-px flex-1 bg-emerald-900/30" />
                    </div>
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                      variants={containerVariants}
                    >
                      {category.items.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 border border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 group"
                          whileHover={{ scale: 1.02 }}
                          variants={itemVariants}
                        >
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Portfolio;
