'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Rocket, Heart, BarChart3 } from 'lucide-react';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-transparent pt-1 sm:pt-3 pb-10 lg:pb-14" id="home">
      {/* Background Soft Splash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-80 h-80 bg-[#fcd5e5]/25 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Authentic Hand-Drawn Headline, Description, Button, Proof Badges */}
        <div className="lg:col-span-5 xl:col-span-5 relative z-10 flex flex-col items-start pt-1">
          {/* Authentic Hand-Crafted Headline Artwork from Reference */}
          <div className="relative mb-4 sm:mb-5 w-full max-w-[480px]">
            <h1 className="sr-only">
              Studio 14 — Your Brand. Our Creativity. Real Results. Ideas, Strategy, Design, Technology.
            </h1>
            <img
              src="/hero-headline-transparent.png"
              alt="Studio 14 - Your Brand. Our Creativity. Real Results. Ideas, Strategy, Design, Technology."
              width={860}
              height={394}
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            />
          </div>

          {/* Subtext Paragraph */}
          <p className="text-[#4e5b6e] text-[15px] sm:text-[16px] leading-[1.65] max-w-[440px] mb-6 font-normal">
            Studio 14 is a full-service digital agency helping brands grow through creative marketing,
            strategic social media, stunning design and powerful technology.
          </p>

          {/* CTA Button + Blue Doodle Star */}
          <div className="flex items-center gap-3.5 mb-7">
            {/* Blue doodle star with black ink outline */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none text-[#6ec3ec] flex-shrink-0"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="#19263a" strokeWidth="2">
                <path d="M12 2L15 8.5L22 9.5L17 14.5L18.5 21.5L12 18L5.5 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
              </svg>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#fecb3e] hover:bg-[#fdbd1a] text-[#19263a] font-bold text-[15px] px-7 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 stroke-[2.7] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Proof Badges with Vertical Dividers */}
          <div className="w-full flex items-center gap-3 sm:gap-4 select-none pt-2 border-t border-[#19263a]/8 sm:border-0 sm:pt-0">
            {/* Badge 1 */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#fde99a]/70 flex items-center justify-center text-[#19263a]">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11.5px] font-bold text-[#19263a] leading-tight">
                Creative<br /><span className="text-[#64748b] font-medium text-[11px]">Solutions</span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-6 w-[1px] bg-[#dbe0e6]" />

            {/* Badge 2 */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#bfeaf8]/70 flex items-center justify-center text-[#0284c7]">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-[11.5px] font-bold text-[#19263a] leading-tight">
                Data-Driven<br /><span className="text-[#64748b] font-medium text-[11px]">Strategies</span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-6 w-[1px] bg-[#dbe0e6]" />

            {/* Badge 3 */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#cbead7]/70 flex items-center justify-center text-[#15803d]">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11.5px] font-bold text-[#19263a] leading-tight">
                Real<br /><span className="text-[#64748b] font-medium text-[11px]">Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full, Unboxed, Seamless Illustration Canvas */}
        <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[620px] lg:max-w-[680px]"
          >
            {/* The Seamless, Full-Fidelity Artwork */}
            <img
              src="/hero-art.png"
              alt="Studio 14 Digital Agency Creative Laptop Illustration"
              width={1024}
              height={683}
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
