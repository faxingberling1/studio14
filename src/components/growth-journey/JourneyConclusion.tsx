"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, PhoneCall, FileText } from "lucide-react";
import { FloralOrnament, FloralCorner } from "./doodles/FloralOrnament";
import { DecorativeBird } from "./doodles/DecorativeBird";
import { TruckCrown, TruckArtBorder } from "./doodles/TruckArtBorder";
import { ChamakpattiStar, SpraySplatter, UrduBadge } from "./doodles/TruckArtMotifs";

export const JourneyConclusion: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FFFDF5] border-t-2 border-charcoal/15 py-16 sm:py-24">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none opacity-80">
        <TruckArtBorder variant="scallop" />
      </div>

      {/* Ambient Artwork */}
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-20 hidden lg:block">
        <FloralCorner position="bottom-left" size={130} />
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 hidden lg:block">
        <FloralCorner position="bottom-right" size={130} />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-20 -translate-y-1/2 hidden xl:block">
        <DecorativeBird type="peacock" size={160} flip />
      </div>
      <div className="absolute top-1/2 right-4 pointer-events-none opacity-20 -translate-y-1/2 hidden xl:block">
        <DecorativeBird type="chakor" size={150} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Urdu Emblem & Crown */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <TruckCrown width={180} />

          <div className="flex items-center gap-2 mt-2 mb-3">
            <ChamakpattiStar size={20} color="#FFC928" />
            <UrduBadge text="منزلِ مقصود" subtitle="Vision Realized" />
            <ChamakpattiStar size={20} color="#10B981" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-charcoal tracking-tight max-w-3xl leading-tight">
            Your Business. Your Vision. A Clearer Path Forward.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Building a resilient, profitable enterprise does not happen by accident. Whether you need full-lifecycle execution across all 6 stages or dedicated acceleration in a single discipline, Studio14 delivers the creative craftsmanship, engineering, and data infrastructure to scale.
          </p>
        </div>

        {/* Two Flexible Engagement Models */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1: Full Lifecycle */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white border-2 border-charcoal shadow-[0_6px_0_0_#171717] hover:shadow-[0_10px_0_0_#171717] transition-all flex flex-col justify-between group">
            <div className="absolute -top-3 right-6 bg-brand-yellow text-charcoal px-3 py-1 rounded-full text-xs font-mono font-black border border-charcoal shadow-sm">
              MOST COMPREHENSIVE
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/30 border border-charcoal flex items-center justify-center font-serif font-bold text-xl text-charcoal mb-4 shadow-[0_2px_0_0_#171717]">
                01-06
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Full-Stack Business Launch & Scale
              </h3>
              <p className="text-sm text-muted-gray mt-2 leading-relaxed">
                We act as your dedicated executive studio team. From raw concept to brand foundation, flagship web application, ad creatives, performance funnels, CRM setup, and automated back-office workflows.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-charcoal/10">
                {[
                  "Complete 6-stage turnkey execution",
                  "Dedicated creative director & lead engineer",
                  "Unified brand, product & acquisition architecture",
                  "Ongoing iterative growth sprints",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-charcoal/80 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-charcoal/10">
              <a
                href="#packages"
                className="w-full py-3 px-4 rounded-xl bg-charcoal hover:bg-black text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Full Studio Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Option 2: Modular Sprints */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white border-2 border-charcoal shadow-[0_6px_0_0_#171717] hover:shadow-[0_10px_0_0_#171717] transition-all flex flex-col justify-between group">
            <div className="absolute -top-3 right-6 bg-cream text-charcoal px-3 py-1 rounded-full text-xs font-mono font-bold border border-charcoal shadow-sm">
              FLEXIBLE & FAST
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-charcoal flex items-center justify-center font-serif font-bold text-xl text-charcoal mb-4 shadow-[0_2px_0_0_#171717]">
                S1-6
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Targeted Stage Accelerators
              </h3>
              <p className="text-sm text-muted-gray mt-2 leading-relaxed">
                Already have an established business, brand identity, or website? We parachute in to solve the specific bottlenecks holding back your scalability—whether that is high-converting ad creative, modern web engineering, or automated operations.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-charcoal/10">
                {[
                  "Choose any single milestone (e.g. Stage 01, 02, or 04)",
                  "Fixed scope, rapid turnaround sprints (2-4 weeks)",
                  "Direct handoff with thorough documentation",
                  "Seamless integration into your existing systems",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-charcoal/80 font-medium">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 border border-sky-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-charcoal/10">
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-brand-yellow hover:bg-[#ffbe0b] text-charcoal font-bold text-sm transition-all border-2 border-charcoal flex items-center justify-center gap-2 shadow-[0_2px_0_0_#171717]"
              >
                <span>Commission a Modular Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Strategy Consultation Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FFFDF5] border-2 border-dashed border-charcoal/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-yellow/30 text-charcoal flex items-center justify-center border border-charcoal shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-charcoal">
                Unsure which stage your business needs most?
              </h4>
              <p className="text-xs text-muted-gray">
                Book a 30-minute architectural strategy session with our studio founders. No pitch, just clear diagnostic advice.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-white hover:bg-cream text-charcoal font-bold text-xs border border-charcoal shadow-sm transition-all flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Book Strategy Session</span>
          </a>
        </div>
      </div>
    </div>
  );
};

