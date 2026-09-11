"use client";

import { useState, useCallback, useRef } from "react";
import { Terminal, RotateCw } from "lucide-react";

interface TerminalStep {
  command: string;
  runningLabel: string;
  output: string;
}

interface CompletedStep {
  command: string;
  output: string;
}

const terminalSteps: TerminalStep[] = [
  {
    command: "whoami",
    runningLabel: "> Running command...",
    output: "> Azi Dwipurnama [Full-Stack & Security Engineer]",
  },
  {
    command: "cat security_focus.txt",
    runningLabel: "> Fetching security specs...",
    output: "> Next.js, API Hardening, Vulnerability Auditing",
  },
  {
    command: "system_status",
    runningLabel: "> Auditing system integrity...",
    output: "> [STATUS: OK] 0 Vulnerabilities Found",
  },
];

const AnimatedTerminal = () => {
  const [history, setHistory] = useState<CompletedStep[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [runningLabel, setRunningLabel] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const activeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isCancelledRef = useRef(false);

  const animateSequence = useCallback(async () => {
    for (let i = 0; i < terminalSteps.length; i++) {
      if (isCancelledRef.current) return;
      const step = terminalSteps[i];

      setCurrentCommand("");
      for (let charIndex = 1; charIndex <= step.command.length; charIndex++) {
        if (isCancelledRef.current) return;
        setCurrentCommand(step.command.slice(0, charIndex));
        await new Promise((resolve) => {
          activeTimeoutRef.current = setTimeout(resolve, 110);
        });
      }

      setRunningLabel(step.runningLabel);
      await new Promise((resolve) => {
        activeTimeoutRef.current = setTimeout(resolve, 800);
      });

      if (isCancelledRef.current) return;

      setRunningLabel(null);
      setCurrentCommand("");
      setHistory((prev) => [
        ...prev,
        { command: step.command, output: step.output },
      ]);

      if (i < terminalSteps.length - 1) {
        await new Promise((resolve) => {
          activeTimeoutRef.current = setTimeout(resolve, 500);
        });
      }
    }

    if (isCancelledRef.current) return;
    setIsFinished(true);
  }, []);

  const startAnimation = useCallback(() => {
    // Cancel any existing timers
    isCancelledRef.current = true;
    if (activeTimeoutRef.current) {
      clearTimeout(activeTimeoutRef.current);
      activeTimeoutRef.current = null;
    }

    // Reset state
    setHistory([]);
    setCurrentCommand("");
    setRunningLabel(null);
    setIsFinished(false);

    // Reset cancellation flag
    isCancelledRef.current = false;
    setHasStarted(true);

    // 1.5 second delay before starting
    activeTimeoutRef.current = setTimeout(() => {
      if (isCancelledRef.current) return;
      animateSequence();
    }, 1500);
  }, [animateSequence]);

  const handleTrigger = useCallback(() => {
    // If not started yet, start it. If started, replay it.
    startAnimation();
  }, [startAnimation]);

  return (
    <div
      onClick={handleTrigger}
      className="h-full bg-black/90 border border-emerald-500/30 rounded-2xl p-5 font-mono text-xs md:text-sm flex flex-col justify-between shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] cursor-pointer hover:border-emerald-500/60 transition-all duration-300 group"
    >
      <div>
        {/* Terminal Header */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400/60 text-[10px] group-hover:text-emerald-400 transition-colors">
            <RotateCw size={12} />
            Click to rerun
          </div>
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

          {/* Current typing state */}
          {!isFinished && currentCommand !== "" && !runningLabel && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-[#34d399]">{currentCommand}</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-0.5" />
            </div>
          )}

          {/* Running state */}
          {!isFinished && runningLabel && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-[#34d399]">{terminalSteps[history.length]?.command || currentCommand}</span>
              </div>
              <div className="flex items-start gap-1.5 text-amber-400/80 pl-2">
                <span className="text-amber-400/80 animate-pulse">{">"}</span>
                <span>{runningLabel.replace(/^>\s/, "")}</span>
              </div>
            </div>
          )}

          {/* Initial empty state - shows BEFORE click */}
          {!hasStarted && history.length === 0 && currentCommand === "" && !runningLabel && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-slate-500 italic text-[10px] ml-1">Click to start...</span>
            </div>
          )}

          {/* Waiting during the 1.5s delay */}
          {hasStarted && history.length === 0 && currentCommand === "" && !runningLabel && !isFinished && (
            <div className="flex items-center gap-1.5 text-emerald-400/50">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="animate-pulse">Initializing...</span>
            </div>
          )}

          {/* Finished state - blinking cursor */}
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
