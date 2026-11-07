"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { TruckArtBorder, TruckCrown } from "./doodles/TruckArtBorder";
import { FloralOrnament } from "./doodles/FloralOrnament";
import {
  ChamakpattiStar,
  TruckArtButterfly,
  UrduBadge,
} from "./doodles/TruckArtMotifs";
import { TruckArtVehicle } from "./doodles/TruckArtVehicle";

export const GrowthJourneyTeaser: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 bg-[#FAF9F6] border-y-2 border-[#171717]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Single Focused Artistic Card Container */}
        <div className="relative rounded-3xl bg-white border-2 border-[#171717] p-6 sm:p-10 lg:p-12 shadow-[0_10px_0_0_#171717] overflow-hidden">
          {/* Card Top Truck Art Scallop Header */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-90">
            <TruckArtBorder variant="scalloped" className="w-full h-5" />
          </div>

          {/* Corner Floral Ornaments */}
          <div className="absolute top-5 left-5 pointer-events-none opacity-80 hidden sm:block">
            <FloralOrnament variant="rose" size={44} />
          </div>
          <div className="absolute top-5 right-5 pointer-events-none opacity-80 hidden sm:block">
            <FloralOrnament variant="rose" size={44} />
          </div>

          {/* Floating Butterfly Accent */}
          <div className="absolute top-8 right-16 pointer-events-none hidden md:block">
            <TruckArtButterfly size={36} />
          </div>

          {/* Crown & Urdu Calligraphy Emblem */}
          <div className="flex flex-col items-center text-center mt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TruckCrown width={170} />
            </motion.div>

            <div className="flex items-center gap-2 mt-2 mb-3">
              <ChamakpattiStar size={20} color="#FFC928" />
              <UrduBadge text="سفرِ کامیابی" subtitle="The Journey to Scalability" />
              <ChamakpattiStar size={20} color="#E11D48" />
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717] shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC928] drop-shadow" />
              <span>The Studio14 Growth Experience</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#171717] tracking-tight max-w-3xl leading-[1.18]">
              From an Idea to a Business Built for Growth.
            </h2>

            {/* Supporting Copy */}
            <p className="mt-3 text-sm sm:text-base text-[#171717]/80 max-w-2xl leading-relaxed font-sans">
              Building a successful business takes more than a great idea. Explore our dedicated 6-stage interactive roadmap—covering brand identity, custom web engineering, creative ad studios, performance funnels, and automated operations.
            </p>
          </div>

          {/* Centerpiece: Handcrafted Pakistani Truck & Highway Strip */}
          <div className="mt-8 relative p-4 sm:p-6 rounded-2xl bg-[#FFFDF5] border-2 border-[#171717]/20 shadow-inner flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            {/* The Pakistani Truck Vehicle Artwork */}
            <div className="shrink-0 flex items-center justify-center">
              <TruckArtVehicle width={190} />
            </div>

            {/* Highway Roadmap Message */}
            <div className="flex-1 text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#171717]/60 bg-[#FAF9F6] px-2.5 py-0.5 rounded border border-[#171717]/15">
                  Full Interactive Journey
                </span>
                <span className="text-xs font-serif font-bold text-[#171717]/60">
                  شاہراہِ ترقی
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#171717]">
                Explore All 6 Production Stages &amp; Working Prototypes
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed max-w-xl">
                Step inside our interactive laboratory on the dedicated Growth Journey page: test our Before/After brand identity simulator, 6-channel digital footprint hub, ad campaign builder, acquisition funnels, and CRM workflow automation.
              </p>
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-[#171717]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]/70">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full lifecycle execution &amp; modular stage accelerators available</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/growth-journey"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FFC928] hover:bg-[#ffbe0b] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[0_4px_0_0_#171717] hover:shadow-[0_2px_0_0_#171717] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Explore Your Growth Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
