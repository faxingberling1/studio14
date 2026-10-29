'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Social Media Marketing',
    desc: 'Reach the right audience with targeted campaigns that convert.',
    image: '/service-card-1.png',
  },
  {
    id: 2,
    title: 'Social Media Management',
    desc: 'We handle your socials so you can focus on what you do best.',
    image: '/service-card-2.png',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    desc: 'User-friendly designs that create better experiences.',
    image: '/service-card-3.png',
  },
  {
    id: 4,
    title: 'Web Development',
    desc: 'Fast, secure and scalable web solutions for your business.',
    image: '/service-card-4.png',
  },
  {
    id: 5,
    title: 'Graphics Related Services',
    desc: 'Eye-catching visuals that bring your brand to life.',
    image: '/service-card-5.png',
  },
];

export default function WhatWeDo() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-label="What We Do - Creative Services"
      className="relative w-full bg-transparent pt-12 pb-20 overflow-hidden"
    >
      {/* Background Subtle Splatters */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/4 w-80 h-80 bg-[#bfeaf8]/20 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 bg-[#ffd03b]/15 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative">
        {/* Top Floating Rocket Doodle (Top-Right) */}
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, -6, 0], rotate: [-1, 2, -1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-6 right-2 sm:right-6 w-20 sm:w-28 h-auto pointer-events-none select-none z-10"
        >
          <img
            src="/rocket-doodle.png"
            alt="Rocket doodle"
            width={280}
            height={210}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
          <h2 className="sr-only">
            What We Do — Everything you need to build, grow and stand out online — under one roof.
          </h2>

          {/* Authentic Hand-Crafted Title Artwork */}
          <div className="w-full max-w-[480px] sm:max-w-[520px]">
            <img
              src="/services-title-transparent.png"
              alt="What We Do: Everything you need to build, grow and stand out online — under one roof."
              width={920}
              height={190}
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            />
          </div>
        </div>

        {/* Five Distinct Watercolor Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch relative z-10">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={reduceMotion ? {} : { y: -8, scale: 1.02 }}
              className="group flex flex-col rounded-2xl cursor-pointer select-none transition-all duration-300"
              aria-label={`${service.title}: ${service.desc}`}
            >
              <img
                src={service.image}
                alt={`${service.title} - ${service.desc}`}
                width={400}
                height={640}
                className="w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(22,33,50,0.06)] group-hover:drop-shadow-[0_12px_28px_rgba(22,33,50,0.12)] transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* Section Footnote with Flanking Doodle Stars */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 px-6 sm:px-8 select-none z-10">
          {/* Blue Doodle Star on Left of Footnote */}
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { rotate: [-3, 3, -3], y: [0, -3, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 text-[#6ec3ec] select-none hidden sm:block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#6ec3ec" stroke="#19263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
              <path d="M12 2.5L14.7 8.5L21.2 9.4L16.5 14L17.8 20.8L12 17.5L6.2 20.8L7.5 14L2.8 9.4L9.3 8.5L12 2.5Z" />
            </svg>
          </motion.div>

          <span className="font-serif italic text-[15px] text-[#5e6b7d]">
            Need a little bit of everything?{' '}
            <span className="text-[#19263a] underline decoration-[#ffcf4e] decoration-2 underline-offset-4 font-semibold">
              That’s kind of our thing.
            </span>
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#19263a] hover:text-[#ffcf4e] border-b-2 border-[#ffcf4e] pb-1 transition-colors"
          >
            <span>Let’s find your mix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Yellow Doodle Star on Right of Footnote */}
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { rotate: [3, -3, 3], y: [0, -4, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="pointer-events-none absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 text-[#ffd03b] select-none hidden sm:block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffd03b" stroke="#19263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
              <path d="M12 2.5L14.7 8.5L21.2 9.4L16.5 14L17.8 20.8L12 17.5L6.2 20.8L7.5 14L2.8 9.4L9.3 8.5L12 2.5Z" />
            </svg>
          </motion.div>
        </div>

        {/* Hand-Drawn Doodle Theme Divider (Positioned Below the Footnote) */}
        <div className="w-full flex items-center justify-center pt-10 pb-2 select-none pointer-events-none" aria-hidden="true">
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

