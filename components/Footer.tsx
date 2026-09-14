"use client";

import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-emerald-900/30 bg-[#040D0A]/80">
      <div className="container mx-auto px-6 text-center">
        {/* Closing Message */}
        <p className="text-xs text-slate-300 mb-4 font-medium">
          Interested in collaborating or auditing security? Let's connect.
        </p>

        {/* Social Buttons */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/azidwipurnama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-800/40 text-slate-200 hover:text-emerald-300 font-mono text-[11px] flex items-center gap-1.5 transition-all duration-300"
          >
            <GitHubIcon className="w-3 h-3" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/azidwipurnama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-800/40 text-slate-200 hover:text-emerald-300 font-mono text-[11px] flex items-center gap-1.5 transition-all duration-300"
          >
            <LinkedInIcon className="w-3 h-3" />
            LinkedIn
          </a>
        </div>

        {/* Copyright Note */}
        <p className="text-[10px] text-slate-400 mt-4 font-mono">
          © DWICODE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
