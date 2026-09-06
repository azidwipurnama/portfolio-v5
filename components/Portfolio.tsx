"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types";
import { projects, projectCategories } from "@/lib/data";

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
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Featured Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Selected Projects
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A curated selection of projects I have built or contributed to.
            Each represents a unique challenge and solution in modern web
            development.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/40 rounded-full border border-slate-800/60">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="category-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20"
                  />
                )}
                <span className="relative z-1">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.p
                className="text-center text-slate-500 py-20"
                key="empty"
              >
                No projects in this category.
              </motion.p>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  className="mb-8 last:mb-0"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div
                    layoutId={`project-card-inner-${project.id}`}
                    className="group relative flex flex-col md:flex-row gap-6 p-6 bg-slate-900/50 backdrop-blur-lg border border-slate-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.15)]"
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Thumbnail */}
                    <motion.div
                      className="relative w-full md:w-64 h-40 rounded-xl overflow-hidden border border-slate-800/60 bg-slate-800/30 flex-shrink-0"
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
                          className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-300"
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

                      {/* Category Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/40 border border-slate-700/30 rounded-full">
                          {project.category}
                        </span>
                        <motion.div
                          className="flex items-center gap-2 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <span className="text-xs font-medium">
                            View Details
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
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
