"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Loader2 } from "lucide-react";

interface TerminalStep {
  command: string;
  runningLabel: string;
  output: string;
}

const terminalSteps: TerminalStep[] = [
  {
    command: "whoami",
    runningLabel: "Running command...",
    output: "Azi Dwipurnama [Full-Stack & Security Engineer]",
  },
  {
    command: "cat security_focus.txt",
    runningLabel: "Fetching security specs...",
    output: "Next.js, API Hardening, Vulnerability Auditing",
  },
  {
    command: "system_status",
    runningLabel: "Auditing system integrity...",
    output: "[STATUS: OK] 0 Vulnerabilities Found",
  },
];

interface CompletedStep {
  command: string;
  output: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const AnimatedTerminal = () => {
  const [history, setHistory] = useState<CompletedStep[]>([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [runningLabel, setRunningLabel] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const runSequence = async () => {
      // Initial delay before first animation (500ms)
      await sleep(500);

      for (let i = 0; i < terminalSteps.length; i++) {
        if (!isMountedRef.current) return;
        const step = terminalSteps[i];

        // Type command letter-by-letter (100ms - 120ms per char)
        setCurrentTyping("");
        for (let charIndex = 1; charIndex <= step.command.length; charIndex++) {
          if (!isMountedRef.current) return;
          setCurrentTyping(step.command.slice(0, charIndex));
          await sleep(110);
        }

        // Show running state for 800ms - 1000ms
        setRunningLabel(step.runningLabel);
        await sleep(900);
        if (!isMountedRef.current) return;

        // Commit step to history and clear running state
        setRunningLabel(null);
        setCurrentTyping("");
        setHistory((prev) => [
          ...prev,
          { command: step.command, output: step.output },
        ]);

        // Delay between commands (600ms)
        if (i < terminalSteps.length - 1) {
          await sleep(600);
        }
      }

      if (isMountedRef.current) {
        setIsFinished(true);
      }
    };

    runSequence();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="h-full bg-black/90 border border-emerald-500/30 rounded-2xl p-5 font-mono text-xs md:text-sm flex flex-col justify-between shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]">
      <div>
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-500/20">
          <Terminal size={14} className="text-emerald-400" />
          <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            TERMINAL CONSOLE
          </span>
        </div>

        {/* Lines */}
        <div className="space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span>{item.command}</span>
              </div>
              <div className="flex items-start gap-1.5 text-emerald-300 pl-2">
                <span className="text-emerald-500 font-bold">{">"}</span>
                <span className="text-slate-200">{item.output}</span>
              </div>
            </div>
          ))}

          {/* Current command being typed (before running state) */}
          {!isFinished && currentTyping !== "" && !runningLabel && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-[#34d399]">{currentTyping}</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-0.5" />
              </div>
            </div>
          )}

          {/* Running state (after command fully typed) */}
          {!isFinished && runningLabel && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-[#34d399]">{terminalSteps[history.length]?.command || currentTyping}</span>
              </div>
              <div className="flex items-start gap-1.5 text-amber-400/80 pl-2">
                <Loader2 size={12} className="animate-spin text-amber-400 mt-0.5" />
                <span>{runningLabel}</span>
              </div>
            </div>
          )}

          {/* Initial empty prompt cursor (before first animation starts) */}
          {!isFinished && history.length === 0 && currentTyping === "" && !runningLabel && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
            </div>
          )}

          {/* Final blinking cursor */}
          {isFinished && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTerminal;
