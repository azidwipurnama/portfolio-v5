"use client";

import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-emerald-900/40 bg-[#040D0A]/60 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        {/* Closing Message */}
        <p className="text-sm text-slate-300 mb-6 font-medium">
          Interested in collaborating or auditing security? Let's connect.
        </p>

        {/* Social Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/azidwipurnama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-950/30 border border-emerald-800/50 hover:border-emerald-500/80 text-slate-200 hover:text-emerald-300 font-mono text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/10"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/azidwipurnama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-950/30 border border-emerald-800/50 hover:border-emerald-500/80 text-slate-200 hover:text-emerald-300 font-mono text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/10"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Copyright Note */}
        <p className="text-xs text-slate-400 mt-8 font-mono">
          © DWICODE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
