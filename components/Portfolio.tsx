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
import { FaCertificate } from "react-icons/fa";
import { Clock } from "lucide-react";

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
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header — unchanged */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4 mt-4 pb-2 leading-tight overflow-visible"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Project Worth Sharing
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A running collection of things I&apos;ve built, broken, and fixed along the way.
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
                          className="group relative flex flex-col md:flex-row gap-6 p-6 bg-slate-900/50 backdrop-blur-lg border border-emerald-900/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.15)]"
                          onClick={() => handleProjectClick(project)}
                        >
                          {/* Thumbnail */}
                          <motion.div
                            className="relative w-full md:w-64 h-40 rounded-xl overflow-hidden border border-emerald-900/30 bg-slate-800/30 flex-shrink-0"
                            whileHover={{ scale: 1.02 }}
                          >
                            {project.thumbnail ? (
                              <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 256px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-600">
                                Project Image
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <motion.h3
                                className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-300 group-hover:to-mint-400 transition-all duration-300"
                              >
                                {project.title}
                              </motion.h3>
                              <motion.p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                              </motion.p>
                            </div>

                            {/* Tech Stack */}
                            <motion.div
                              className="flex flex-wrap gap-2 mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                            >
                              {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800/60 border border-slate-700/30 text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 4 && (
                                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800/60 border border-slate-700/30 text-slate-400">
                                  +{project.techStack.length - 4}
                                </span>
                              )}
                            </motion.div>

                            {/* Category & Status Badges */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/40 border border-slate-700/30 rounded-full">
                                {project.category}
                              </span>
                              {project.status && (
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300">
                                  {project.status.charAt(0).toUpperCase() +
                                    project.status.slice(1)}
                                </span>
                              )}
                              <motion.div
                                className="flex items-center gap-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              >
                                <span className="text-xs font-medium">
                                  View Details
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Coming Soon Placeholder */}
                    <motion.div
                      variants={itemVariants}
                      className="border-2 border-dashed border-emerald-800/60 bg-[#040D0A]/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px]"
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="bg-slate-900/40 border border-emerald-900/30 rounded-2xl p-6 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 relative mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-emerald-300 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                      {cert.description}
                    </p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      View Credential
                    </a>
                  </motion.div>
                ))}

                {/* Coming Soon Placeholder for Certificates */}
                <motion.div className="border-2 border-dashed border-emerald-800/60 bg-[#040D0A]/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
                  <Clock className="text-emerald-400 mb-3" size={32} />
                  <h3 className="font-bold text-lg text-slate-200">Coming Soon</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Next certificate is on the way. Stay tuned!
                  </p>
                </motion.div>
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
