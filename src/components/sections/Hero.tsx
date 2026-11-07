"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowDown, X, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { FloatingDoodle } from "@/components/doodles/FloatingDoodle";
import { PaperPlane } from "@/components/doodles/PaperPlane";
import { Lightbulb } from "@/components/doodles/Lightbulb";
import { Sparkle } from "@/components/doodles/Sparkle";
import { AnimatedArrow } from "@/components/doodles/AnimatedArrow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [reelOpen, setReelOpen] = useState(false);

  const { scrollY } = useScroll();
  const deskParallaxY = useTransform(
    scrollY,
    [0, 500],
    prefersReducedMotion ? [0, 0] : [0, -24]
  );
  const badgeParallaxY = useTransform(
    scrollY,
    [0, 500],
    prefersReducedMotion ? [0, 0] : [0, 18]
  );

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Subtle Background Studio Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(#171717 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Headline & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            {/* Small Eyebrow Text */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#FFC928]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928] border border-[#171717]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-[#171717]">
                CREATIVE • INNOVATIVE • IMPACTFUL
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="space-y-2"
            >
              <h1 className="font-editorial text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#171717] leading-[1.06]">
                <span className="inline-flex items-baseline gap-2">
                  <span>Studio</span>
                  <span className="relative inline-block px-3 py-0.5 rounded-xl bg-[#FFC928] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] text-[#171717] transform -rotate-2">
                    14
                    <Sparkle
                      size={24}
                      className="absolute -top-3.5 -right-3.5"
                    />
                  </span>
                </span>
                <span className="block mt-3 font-editorial text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.12]">
                  Crafting Digital{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 italic font-normal">
                      Resonance
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 z-0">
                      <HandDrawnUnderline
                        variant="double"
                        color="#FFC928"
                        strokeWidth={6}
                      />
                    </span>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-xl"
            >
              We are Studio14, a creative studio that transforms ideas into
              powerful digital experiences.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="/#portfolio" variant="primary" size="lg" withArrow>
                Explore Our Work
              </Button>

              <button
                type="button"
                onClick={() => setReelOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FAF9F6] text-[#171717] font-semibold text-base sm:text-lg border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FFC928]/20 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] transition-all cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[#FFC928] border border-[#171717] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-[#171717] text-[#171717] ml-0.5" />
                </span>
                <span>Watch Our Reel</span>
              </button>
            </motion.div>

            {/* Quick Studio Disciplines Strip */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#666666]"
            >
              {[
                "Web Design & Dev",
                "Video Editing",
                "Smart Marketing",
                "Business Automations",
              ].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] fill-[#FFC928]" />
                  <span className="text-[#171717] font-semibold">{pill}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Artistic Creative Studio Desk Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Floating Lightbulb top-left of desk */}
            <FloatingDoodle
              amplitudeY={8}
              amplitudeRotate={4}
              duration={4.2}
              className="absolute -top-8 left-2 sm:left-6 z-20"
            >
              <div className="p-2 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                <Lightbulb size={54} />
              </div>
            </FloatingDoodle>

            {/* Paper Plane moving along curved SVG path top-right */}
            <div className="absolute -top-10 right-2 sm:right-6 z-20">
              <PaperPlane size={125} withTrail />
            </div>

            {/* Main Studio Desk Composition Frame */}
            <motion.div
              style={{ y: deskParallaxY }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-3xl bg-[#F2EDE2] border-3 border-[#171717] shadow-[8px_8px_0px_#171717] p-5 sm:p-7 overflow-hidden"
            >
              {/* Desk Surface Wood / Warm Mat Texture Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#171717]/15">
                <div className="flex items-center gap-2">
                  <span className="font-hand text-xl font-bold text-[#171717]">
                    Studio14 Creative Desk — Worktable N°14
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFC928] text-[#171717] border border-[#171717]">
                  LIVE STUDIO
                </span>
              </div>

              {/* Interactive SVG + Authentic Logo Desk Scene */}
              <div className="relative grid grid-cols-12 gap-4 items-end pt-2">
                {/* CENTER-LEFT: Open Studio Laptop displaying the Original Studio14 Logo */}
                <div className="col-span-12 sm:col-span-8">
                  <div className="relative mx-auto">
                    {/* Laptop Screen Bezel */}
                    <div className="rounded-t-2xl bg-[#171717] p-2.5 border-2 border-[#171717]">
                      {/* Camera dot */}
                      <div className="w-2 h-2 rounded-full bg-[#666666] mx-auto mb-1.5" />
                      {/* Laptop Screen Content */}
                      <div className="relative rounded-xl bg-[#FAF9F6] border-2 border-[#171717] p-4 flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
                        {/* Original Supplied Studio14 Logo Artwork */}
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden border-2 border-[#171717] shadow-[3px_3px_0px_#FFC928] bg-white">
                          <Image
                            src="/logo/studio14-original.jpg"
                            alt="Studio14 Original Logo on Laptop Screen"
                            fill
                            sizes="140px"
                            className="object-cover"
                            priority
                          />
                        </div>

                        {/* Screen UI Workspace Preview */}
                        <div className="flex-1 space-y-2 text-left w-full">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FFC928]/40 border border-[#171717] text-[11px] font-bold text-[#171717]">
                            <span>ACTIVE PROJECT</span>
                          </div>
                          <p className="font-editorial text-base font-bold text-[#171717] leading-tight">
                            Brand &amp; Digital Experience System
                          </p>
                          <div className="space-y-1.5 pt-1">
                            <div className="h-2 w-full rounded-full bg-[#171717]/15 overflow-hidden">
                              <div className="h-full w-4/5 bg-[#FFC928]" />
                            </div>
                            <div className="flex justify-between text-[11px] font-mono text-[#666666]">
                              <span>Design &amp; Code</span>
                              <span>100% Handcrafted</span>
                            </div>
                          </div>
                          {/* Mini Colour Swatches on Laptop */}
                          <div className="flex items-center gap-1.5 pt-1">
                            <span className="w-4 h-4 rounded-full bg-[#FFC928] border border-[#171717]" />
                            <span className="w-4 h-4 rounded-full bg-[#171717] border border-[#171717]" />
                            <span className="w-4 h-4 rounded-full bg-[#F28C5A] border border-[#171717]" />
                            <span className="w-4 h-4 rounded-full bg-[#6BA3E8] border border-[#171717]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Keyboard Base */}
                    <div className="h-4 mx-[-8px] rounded-b-xl bg-[#D8D2C5] border-2 border-[#171717] flex items-center justify-center">
                      <div className="w-16 h-1.5 rounded-full bg-[#171717]/40" />
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE OF DESK: Sticky Notes + Branded Studio14 Coffee Mug */}
                <div className="col-span-12 sm:col-span-4 flex sm:flex-col justify-between items-center gap-4">
                  {/* Hand-Drawn Sticky Note */}
                  <FloatingDoodle
                    amplitudeY={4}
                    amplitudeRotate={2}
                    duration={5}
                    className="w-full"
                  >
                    <div className="relative rounded-xl bg-[#FFC928] border-2 border-[#171717] p-3.5 shadow-[3px_3px_0px_#171717] transform rotate-2">
                      {/* Tape at top */}
                      <div className="w-12 h-3 bg-[#FAF9F6]/80 border border-[#171717]/40 mx-auto -mt-5 mb-2 transform -rotate-3" />
                      <p className="font-hand text-lg font-bold text-[#171717] leading-tight">
                        &ldquo;Make it memorable, never generic!&rdquo;
                      </p>
                      <p className="font-mono text-[10px] text-[#171717]/80 mt-1">
                        — Studio Note #14
                      </p>
                    </div>
                  </FloatingDoodle>

                  {/* Studio14 Branded Coffee Mug SVG */}
                  <div className="relative flex flex-col items-center">
                    <svg
                      width="115"
                      height="110"
                      viewBox="0 0 120 115"
                      fill="none"
                      aria-label="Coffee mug with Studio14 branding"
                    >
                      {/* Rising Steam Doodles */}
                      <motion.path
                        d="M42 22C39 15 46 11 43 4M58 20C55 13 62 9 59 2M74 22C71 15 78 11 75 4"
                        stroke="#171717"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { y: [0, -3, 0], opacity: [0.5, 0.9, 0.5] }
                        }
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Mug Handle */}
                      <path
                        d="M86 44H98C105 44 110 49 110 56V68C110 75 105 80 98 80H86"
                        stroke="#171717"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M86 44H98C105 44 110 49 110 56V68C110 75 105 80 98 80H86"
                        stroke="#FFC928"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Mug Body */}
                      <path
                        d="M24 32H90V78C90 91.2548 79.2548 102 66 102H48C34.7452 102 24 91.2548 24 78V32Z"
                        fill="#FAF9F6"
                        stroke="#171717"
                        strokeWidth="3"
                      />
                      {/* Yellow Accent Rim */}
                      <rect
                        x="24"
                        y="32"
                        width="66"
                        height="10"
                        fill="#FFC928"
                        stroke="#171717"
                        strokeWidth="3"
                      />
                      {/* Studio14 Monolith Badge on Mug */}
                      <rect
                        x="41"
                        y="50"
                        width="32"
                        height="38"
                        rx="3"
                        fill="#171717"
                      />
                      <text
                        x="57"
                        y="76"
                        textAnchor="middle"
                        fill="#FFC928"
                        fontFamily="monospace"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        14
                      </text>
                      {/* Coaster */}
                      <line
                        x1="16"
                        y1="104"
                        x2="98"
                        y2="104"
                        stroke="#171717"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Desk Row: Creative Stationery (Sketchbook, Pencil, Ruler & Doodle Notes) */}
              <div className="mt-5 pt-4 border-t-2 border-[#171717]/15 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                {/* Sketchbook Card */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF9F6] border-2 border-[#171717]">
                  <div className="w-9 h-9 rounded-lg bg-[#F28C5A]/30 border border-[#171717] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#171717]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#171717]">
                      Sketchbook &amp; Grids
                    </p>
                    <p className="text-[11px] text-[#666666]">
                      Editorial Wireframes
                    </p>
                  </div>
                </div>

                {/* Hand-Drawn Pencil & Ruler SVG */}
                <div className="flex items-center justify-center">
                  <svg
                    viewBox="0 0 180 42"
                    fill="none"
                    className="w-44 h-10"
                    aria-label="Creative stationery pencil and ruler"
                  >
                    {/* Pencil */}
                    <rect
                      x="18"
                      y="10"
                      width="115"
                      height="10"
                      fill="#FFC928"
                      stroke="#171717"
                      strokeWidth="2.2"
                    />
                    <polygon
                      points="133,10 152,15 133,20"
                      fill="#FAF9F6"
                      stroke="#171717"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <polygon points="145,13 152,15 145,17" fill="#171717" />
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="10"
                      rx="2"
                      fill="#F28C5A"
                      stroke="#171717"
                      strokeWidth="2.2"
                    />
                    {/* Ruler markings below */}
                    <path
                      d="M14 32H164M26 28V32M46 26V32M66 28V32M86 26V32M106 28V32M126 26V32M146 28V32"
                      stroke="#171717"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Secondary Sticky Note */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#6BA3E8]/25 border-2 border-[#171717]">
                  <span className="font-hand text-base font-bold text-[#171717]">
                    Idea → Strategy → Ship
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#171717]" />
                </div>
              </div>
            </motion.div>

            {/* Bottom-Left Hand-Drawn Arrow & Note */}
            <motion.div
              style={{ y: badgeParallaxY }}
              className="hidden sm:flex items-center gap-2 mt-3 ml-4"
            >
              <AnimatedArrow direction="up-right" className="w-20 h-10" />
              <span className="font-hand text-lg font-bold text-[#666666]">
                Real tools, handcrafted code &amp; zero generic templates
              </span>
            </motion.div>
          </div>
        </div>

        {/* Gentle Scroll Indicator at Bottom of Hero */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#services"
            aria-label="Scroll down to Services"
            className="group inline-flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#666666] hover:text-[#171717] transition-colors"
          >
            <span className="font-hand text-base tracking-normal capitalize text-[#171717]">
              Explore Studio14
            </span>
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-9 h-9 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[2px_2px_0px_#FFC928] flex items-center justify-center group-hover:bg-[#FFC928] transition-colors"
            >
              <ArrowDown className="w-4 h-4 text-[#171717]" />
            </motion.span>
          </a>
        </div>
      </div>

      {/* Interactive Studio Showreel Modal when clicking "Watch Our Reel" */}
      <AnimatePresence>
        {reelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/75 backdrop-blur-xs"
            onClick={() => setReelOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Studio14 Showreel Preview"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#FFC928] overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#EFECE4] border-b-2 border-[#171717]">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#FFC928] border border-[#171717]" />
                  <h3 className="font-editorial text-lg font-bold text-[#171717]">
                    Studio14 — Creative Capabilities Reel
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setReelOpen(false)}
                  aria-label="Close showreel modal"
                  className="w-9 h-9 rounded-full bg-[#FAF9F6] border-2 border-[#171717] flex items-center justify-center hover:bg-[#FFC928] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#171717]" />
                </button>
              </div>

              {/* Animated Storyboard Reel Preview */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="relative aspect-video w-full rounded-2xl bg-[#202020] border-2 border-[#171717] overflow-hidden flex flex-col items-center justify-center text-center p-6">
                  <Image
                    src="/projects/project-video-documentary.svg"
                    alt="Studio14 Showreel Storyboard Preview"
                    fill
                    className="object-cover opacity-35"
                  />
                  <div className="relative z-10 max-w-lg space-y-4 bg-[#171717]/90 p-6 rounded-2xl border-2 border-[#FFC928]">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FFC928] text-[#171717] text-xs font-extrabold uppercase tracking-wider">
                      Studio14 Showreel Deck
                    </span>
                    <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF9F6]">
                      Websites • Video Editing • Smart Marketing • Automations
                    </h4>
                    <p className="text-sm text-[#FAF9F6]/80 leading-relaxed">
                      Explore our interactive concept showcases below or request
                      a custom sample edit and technical walkthrough tailored to
                      your brand.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <Button
                        href="/#portfolio"
                        variant="primary"
                        size="sm"
                        withArrow
                        onClick={() => setReelOpen(false)}
                      >
                        Browse Work Gallery
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="sm"
                        onClick={() => setReelOpen(false)}
                      >
                        Request Custom Sample
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

