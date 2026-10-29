'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const processCards = [
  {
    id: 1,
    title: '1. Discover',
    desc: 'We learn about your brand, audience and goals.',
    tag: 'INSIGHTS',
    image: '/process-card-1.png',
  },
  {
    id: 2,
    title: '2. Strategize',
    desc: 'We craft a tailored plan for your unique needs.',
    tag: 'PLAN',
    image: '/process-card-2.png',
  },
  {
    id: 3,
    title: '3. Create',
    desc: 'We bring your ideas to life with design, code and content.',
    tag: 'BUILD',
    image: '/process-card-3.png',
  },
  {
    id: 4,
    title: '4. Grow',
    desc: 'We track, optimize and scale your success.',
    tag: 'RESULTS',
    image: '/process-card-4.png',
  },
];

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="approach"
      aria-label="Our Creative Process"
      className="relative w-full bg-transparent pt-10 sm:pt-14 pb-20 overflow-hidden select-none"
    >
      {/* Background Subtle Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-10 w-96 h-96 bg-[#bfeaf8]/20 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-10 w-96 h-96 bg-[#ffd03b]/15 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1260px] mx-auto px-6 sm:px-10 relative">
        
        {/* Top-Right Flying Rocket Doodle with Gentle Floating Animation */}
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, -6, 0], rotate: [-1, 2, -1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 right-2 sm:right-6 w-20 sm:w-28 h-auto pointer-events-none select-none z-10 hidden sm:block"
        >
          <img
            src="/process-corner-tr.png"
            alt="Rocket doodle"
            width={171}
            height={171}
            className="w-full h-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          />
        </motion.div>

        {/* Main Section Grid: Left Intro + Right 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading Artwork, Lead Text, CTA Button */}
          <div className="lg:col-span-4 flex flex-col items-start relative pr-0 lg:pr-2">
            
            {/* Authentic Hand-Crafted Headline Artwork */}
            <div className="w-full max-w-[280px] sm:max-w-[310px] mb-3">
              <h2 className="sr-only">
                From Your Vision to a Powerful Brand Story
              </h2>
              <img
                src="/process-headline-clean.png"
                alt="From Your Vision to a Powerful Brand Story"
                width={440}
                height={332}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              />
            </div>

            {/* Live Typography Paragraph */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#505c6d] leading-relaxed mb-8 max-w-[340px] font-normal">
              Every brand has a story. We help you tell it — with strategy, creativity and the right digital tools.
            </p>

            {/* Real Interactive Button with Radiating Doodle Rays */}
            <div className="relative inline-flex items-center">
              {/* Left Burst Rays */}
              <div
                aria-hidden="true"
                className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 pointer-events-none select-none text-[#19263a]"
              >
                <span className="w-3.5 h-[2px] bg-[#19263a] rounded-full rotate-[20deg]" />
                <span className="w-4 h-[2.5px] bg-[#19263a] rounded-full" />
                <span className="w-3.5 h-[2px] bg-[#19263a] rounded-full -rotate-[20deg]" />
              </div>

              {/* Main Button */}
              <motion.a
                href="#contact"
                whileHover={reduceMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ffd03b] hover:bg-[#ffc61a] text-[#19263a] font-extrabold text-[15px] shadow-[0_4px_16px_rgba(255,208,59,0.35)] transition-all duration-200 select-none cursor-pointer"
              >
                <span>Our Process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Right Burst Rays */}
              <div
                aria-hidden="true"
                className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 pointer-events-none select-none text-[#19263a]"
              >
                <span className="w-3.5 h-[2px] bg-[#19263a] rounded-full -rotate-[20deg]" />
                <span className="w-4 h-[2.5px] bg-[#19263a] rounded-full" />
                <span className="w-3.5 h-[2px] bg-[#19263a] rounded-full rotate-[20deg]" />
              </div>
            </div>

            {/* Bottom Blue Doodle Star */}
            <div
              aria-hidden="true"
              className="mt-8 ml-2 pointer-events-none select-none text-[#6ec3ec]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#6ec3ec" stroke="#19263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.5L14.7 8.5L21.2 9.4L16.5 14L17.8 20.8L12 17.5L6.2 20.8L7.5 14L2.8 9.4L9.3 8.5L12 2.5Z" />
              </svg>
            </div>
          </div>

          {/* Right Column: 4 Real Interactive Watercolor Cards */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch relative">
              {processCards.map((card, index) => (
                <div key={card.id} className="relative flex flex-col items-center">
                  <motion.a
                    href="#contact"
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={reduceMotion ? {} : { y: -8, scale: 1.02 }}
                    className="group flex flex-col rounded-2xl cursor-pointer select-none transition-all duration-300 w-full"
                    aria-label={`${card.title}: ${card.desc}`}
                  >
                    <img
                      src={card.image}
                      alt={`${card.title} - ${card.desc}`}
                      width={356}
                      height={592}
                      className="w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(22,33,50,0.06)] group-hover:drop-shadow-[0_12px_28px_rgba(22,33,50,0.12)] transition-all duration-300"
                    />
                  </motion.a>

                  {/* Connecting Hand-Drawn Arrow (Desktop only, between cards) */}
                  {index < processCards.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 w-6 pointer-events-none select-none z-20"
                    >
                      <img
                        src="/process-arrow.png"
                        alt="Arrow"
                        width={60}
                        height={52}
                        className="w-full h-auto object-contain opacity-75"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Hand-Drawn Doodle Theme Section Divider */}
        <div className="w-full flex items-center justify-center pt-16 pb-2 select-none pointer-events-none" aria-hidden="true">
          <svg width="260" height="24" viewBox="0 0 260 24" fill="none" className="text-[#19263a]">
            {/* Left Hand-Drawn Stroke */}
            <path d="M10 12 C 40 9, 80 15, 115 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            {/* Center Yellow Doodle Star */}
            <path d="M130 3 L133 9.5 L140 10.5 L135 15.5 L136.5 22.5 L130 19 L123.5 22.5 L125 15.5 L120 10.5 L127 9.5 Z" fill="#ffd03b" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            {/* Right Hand-Drawn Stroke */}
            <path d="M145 12 C 180 9, 220 15, 250 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
