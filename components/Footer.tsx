"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-emerald-900/40 bg-[#040D0A]/90 backdrop-blur-md px-8 md:px-12 py-5">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Baris 1: Social Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/azidwipurnama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-[11px] font-mono rounded-full border border-emerald-800/50 bg-emerald-950/30 text-slate-200 hover:text-emerald-300 flex items-center gap-1.5 transition-all"
          >
            <FaGithub size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/azi-dwipurnama-773668193"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-[11px] font-mono rounded-full border border-emerald-800/50 bg-emerald-950/30 text-slate-200 hover:text-emerald-300 flex items-center gap-1.5 transition-all"
          >
            <FaLinkedin size={15} />
            LinkedIn
          </a>
        </div>

        {/* Baris 2: Copyright */}
        <p className="text-[10px] text-slate-400 font-mono">
          © DWICODE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
