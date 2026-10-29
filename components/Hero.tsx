'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Rocket, Heart, BarChart3 } from 'lucide-react';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-transparent pt-1 sm:pt-3 pb-10 lg:pb-14" id="home">
      {/* Background Subtle Splatters & Far-Right Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-80 h-80 bg-[#fcd5e5]/30 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Tilted note, Headline, Body, Button, Proof Points */}
        <div className="lg:col-span-5 xl:col-span-5 relative z-10 flex flex-col items-start pt-1">
          {/* Tilted Doodle Note: "Ideas Strategy Design Technology" */}
          <div className="mb-2 sm:mb-3 flex items-start gap-2 select-none">
            <div className="text-left font-handwriting text-[17px] sm:text-[19px] font-bold leading-tight text-[#2b3548] -rotate-12">
              Ideas<br />
              Strategy<br />
              Design<br />
              Technology
            </div>
            {/* Hand-drawn arrow & heart */}
            <div className="pt-1 flex flex-col items-center -rotate-6">
              <svg width="22" height="26" viewBox="0 0 28 32" fill="none" className="text-[#334155]">
                <path
                  d="M4 4C14 6 22 14 20 25M20 25L14 20M20 25L25 19"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-handwriting text-base font-bold text-[#2b3548] -mt-1">♡</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-[40px] sm:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.08] text-[#162132] tracking-tight mb-4">
            <span>Your Brand.</span>
            <br />
            {/* "Our Creativity." with yellow painted brush stroke */}
            <span className="relative inline-block mt-0.5 px-2 -ml-2">
              <span className="relative z-10">Our Creativity.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-[50%] bg-[#fed766] -rotate-1 rounded-[3px] -z-0 opacity-95"
              />
            </span>
            <br />
            {/* "Real Results." with sky blue painted brush stroke */}
            <span className="relative inline-block mt-0.5 px-2 -ml-2">
              <span className="relative z-10">Real Results.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-[48%] bg-[#bfeaf8] rotate-[0.7deg] rounded-[3px] -z-0 opacity-95"
              />
            </span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-[#596677] text-[15px] sm:text-[16px] leading-relaxed max-w-[430px] mb-6 font-normal">
            Studio 14 is a full-service digital agency helping brands grow through creative marketing,
            strategic social media, stunning design and powerful technology.
          </p>

          {/* CTA Button */}
          <div className="relative mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#ffcf4e] hover:bg-[#fec32a] text-[#19263a] font-bold text-[15px] px-7 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 stroke-[2.7] transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Blue doodle star with black outline beside button */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-7 top-1/2 -translate-y-1/2 text-[#8dd4ef] select-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="#19263a" strokeWidth="2">
                <path d="M12 2L15 8.5L22 9.5L17 14.5L18.5 21.5L12 18L5.5 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Proof Badges (Creative Solutions, Data-Driven, Real Growth) */}
          <div className="w-full flex flex-wrap items-center gap-6 sm:gap-8 select-none">
            {/* Badge 1: Creative Solutions */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#fde99a]/60 flex items-center justify-center text-[#19263a]">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-[#19263a] leading-tight">
                Creative<br /><span className="text-[#64748b] font-medium">Solutions</span>
              </div>
            </div>

            {/* Badge 2: Data-Driven Strategies */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#bfeaf8]/60 flex items-center justify-center text-[#0284c7]">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-[11px] font-bold text-[#19263a] leading-tight">
                Data-Driven<br /><span className="text-[#64748b] font-medium">Strategies</span>
              </div>
            </div>

            {/* Badge 3: Real Growth */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#cbead7]/60 flex items-center justify-center text-[#15803d]">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-[#19263a] leading-tight">
                Real<br /><span className="text-[#64748b] font-medium">Growth</span>
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
