"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl shadow-black/60"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={18} />
            </motion.button>

            {/* Content */}
            <div className="p-8">
              <motion.h2
                className="text-3xl font-bold text-foreground mb-4"
                variants={panelVariants}
              >
                {project.title}
              </motion.h2>

              <motion.p
                className="text-slate-300 text-lg mb-6"
                variants={panelVariants}
              >
                {project.longDescription}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="mb-6"
                variants={panelVariants}
              >
                <h3 className="text-sm font-semibold text-slate-400 mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Screenshots */}
              <motion.div
                className="mb-6 space-y-4"
                variants={panelVariants}
              >
                <h3 className="text-sm font-semibold text-slate-400">
                  Screenshots
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800/60 bg-slate-800/30"
                    >
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 pt-4 border-t border-slate-800/60"
                variants={panelVariants}
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-medium transition-all duration-300 hover:opacity-90"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
                  >
                    <GitBranch size={18} />
                    View Source
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
