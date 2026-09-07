"use client";

/**
 * TechMarquee.tsx
 *
 * Full-width infinite scrolling marquee of tech tags.
 * Uses CSS keyframes with 4x duplicated content for seamless linear scroll.
 * Includes edge fade masks and hover pause.
 */

const techs = ["JavaScript", "PHP", "Python", "Bootstrap", "Tailwind CSS", "Next.js"];

const TechMarquee = () => {
  // Duplicate array 4 times so content is always wider than viewport
  const duplicated = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="relative w-screen overflow-hidden left-1/2 right-1/2 -mx-[50vw] marquee-container mb-12">
      {/* Animated track — 4x duplicated list for seamless loop */}
      <div className="flex w-max animate-marquee">
        {duplicated.map((tech, i) => (
          <span
            key={i}
            className="mx-3 px-6 py-3 rounded-full border border-emerald-500/30 bg-black/40 text-emerald-300 text-base font-semibold whitespace-nowrap hover:text-mint-300 hover:border-emerald-400/50 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CSS for marquee keyframes, edge fade mask, and hover pause */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        /* Pause on hover */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }

        /* Edge fade mask — smooth fade at container edges */
        .marquee-container {
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
