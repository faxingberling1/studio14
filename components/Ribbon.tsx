'use client';

import { useReducedMotion } from 'framer-motion';

export default function Ribbon() {
  const reduceMotion = useReducedMotion();

  const brandPillars = [
    { text: '100% INDEPENDENT CREATIVE', mark: '✦' },
    { text: 'ZERO COOKIE-CUTTER TEMPLATES', mark: '✳' },
    { text: 'DESIGN WITH REAL FEELING', mark: '✦' },
    { text: 'STAY A LITTLE CURIOUS', mark: '✳' },
    { text: 'BUILD BOLD BRANDS', mark: '✦' },
    { text: 'CREATE WITH PURPOSE', mark: '✳' },
  ];

  const studioProof = [
    { text: 'NOW BOOKING FOR 2026', mark: '🟢', highlight: true },
    { text: '4.9★ CLIENT HAPPINESS', mark: '✦' },
    { text: '24+ BRANDS ELEVATED', mark: '✳' },
    { text: 'BRAND STRATEGY & IDENTITY', mark: '✦' },
    { text: 'UI / UX & WEB DEVELOPMENT', mark: '✳' },
    { text: 'SOCIAL MEDIA CAMPAIGNS', mark: '✦' },
  ];

  return (
    <section
      aria-label="Studio 14 creative services and values"
      className="relative w-full py-12 my-4 overflow-hidden select-none pointer-events-auto"
    >
      {/* Background ambient lighting/gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ffd03b]/5 to-transparent -z-10"
      />

      {/* TAPE 2 (Under Layer - Ink Charcoal Washi Tape, tilted +1.2deg, moving RIGHT) */}
      <div className="w-full transform rotate-[1.2deg] scale-[1.03] z-10 my-1">
        <div className="w-full bg-[#162132] text-white border-y-[1.5px] border-[#162132] py-3 shadow-[0_4px_16px_rgba(22,33,50,0.15)] overflow-hidden">
          <div
            className={`flex whitespace-nowrap w-max ${
              reduceMotion ? '' : 'animate-tape-reverse hover:[animation-play-state:paused]'
            }`}
          >
            {/* Loop 4 times to ensure seamless infinite scroll on all screen widths */}
            {Array.from({ length: 4 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center">
                {studioProof.map((item, idx) => (
                  <div
                    key={`${loopIdx}-${idx}`}
                    className="flex items-center font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase"
                  >
                    <span
                      className={`font-bold px-3 ${
                        item.highlight ? 'text-[#ffcf4e]' : 'text-[#f0f4f8]'
                      }`}
                    >
                      {item.text}
                    </span>
                    <span className="text-[#a9def1] text-xs px-4 select-none opacity-80">
                      {item.mark}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TAPE 1 (Top Layer - Sunny Yellow Washi Tape, tilted -1.8deg, moving LEFT) */}
      <div className="w-full transform -rotate-[1.8deg] scale-[1.03] z-20 -mt-3.5">
        <div className="w-full bg-[#ffcf4e] text-[#162132] border-y-[1.5px] border-[#162132] py-3.5 shadow-[0_6px_20px_rgba(22,33,50,0.18),0_2px_0_#162132] overflow-hidden">
          <div
            className={`flex whitespace-nowrap w-max ${
              reduceMotion ? '' : 'animate-tape-forward hover:[animation-play-state:paused]'
            }`}
          >
            {/* Loop 4 times to ensure seamless infinite scroll on all screen widths */}
            {Array.from({ length: 4 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center">
                {brandPillars.map((item, idx) => (
                  <div
                    key={`${loopIdx}-${idx}`}
                    className="flex items-center font-mono text-[11px] sm:text-[12.5px] font-extrabold tracking-[0.15em] uppercase text-[#162132]"
                  >
                    <span className="px-3 hover:text-black transition-colors">{item.text}</span>
                    <span className="text-[#162132] text-sm px-4 select-none opacity-75">
                      {item.mark}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

