"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles, Compass, Rocket } from "lucide-react";
import { FloralOrnament, FloralCorner } from "./doodles/FloralOrnament";
import { DecorativeBird } from "./doodles/DecorativeBird";
import { TruckArtBorder, TruckCrown } from "./doodles/TruckArtBorder";
import { ChamakpattiStar, SpraySplatter, UrduBadge } from "./doodles/TruckArtMotifs";
import { GraffitiArrowCurved } from "./doodles/GraffitiArrow";

interface JourneyIntroProps {
  onStartJourney: () => void;
  onContactClick: () => void;
}

export const JourneyIntro: React.FC<JourneyIntroProps> = ({
  onStartJourney,
  onContactClick,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#FFFDF5] to-[#FAF9F6] border-y-2 border-charcoal/15 py-16 md:py-24">
      {/* Decorative Pakistani Truck-Art Borders Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none opacity-80">
        <TruckArtBorder variant="scallop" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none opacity-80 rotate-180">
        <TruckArtBorder variant="geometric" />
      </div>

      {/* Ambient background motifs */}
      <div className="absolute top-10 left-6 pointer-events-none opacity-20 hidden lg:block">
        <FloralCorner position="top-left" size={130} />
      </div>
      <div className="absolute top-10 right-6 pointer-events-none opacity-20 hidden lg:block">
        <FloralCorner position="top-right" size={130} />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-25 -translate-y-1/2 hidden xl:block">
        <DecorativeBird type="peacock" size={160} flip />
      </div>
      <div className="absolute top-1/2 right-4 pointer-events-none opacity-25 -translate-y-1/2 hidden xl:block">
        <DecorativeBird type="chakor" size={150} />
      </div>
      <div className="absolute bottom-16 left-1/4 pointer-events-none opacity-25">
        <SpraySplatter color="#FFC928" size={120} />
      </div>
      <div className="absolute top-20 right-1/4 pointer-events-none opacity-20">
        <SpraySplatter color="#3B82F6" size={110} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Crown & Urdu Calligraphy Emblem */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <TruckCrown width={180} />
          </motion.div>

          <div className="flex items-center gap-3 justify-center mb-4">
            <ChamakpattiStar size={24} color="#FFC928" />
            <UrduBadge text="سفرِ کامیابی" subtitle="The Journey to Scalability" />
            <ChamakpattiStar size={24} color="#E11D48" />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/30 border border-charcoal/20 text-xs md:text-sm font-bold tracking-wider uppercase text-charcoal shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-brand-yellow drop-shadow" />
            <span>The Studio14 Growth Experience</span>
          </div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-charcoal tracking-tight max-w-4xl leading-[1.15]"
          >
            Every Great Business Starts Somewhere.
          </motion.h2>

          {/* Supporting Headline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-charcoal/80 font-medium max-w-2xl leading-relaxed"
          >
            From an Idea to a Business Built for Growth. We help you build a distinctive identity, establish your digital footprint, launch high-conversion campaigns, and automate seamless operations.
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-muted-gray max-w-xl"
          >
            Whether you are starting from scratch or ready to take your established enterprise to the next stage, explore how Studio14 accompanies you every mile of the road.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onStartJourney}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FFC928] hover:bg-[#ffbe0b] text-[#171717] font-bold text-base shadow-[0_4px_0_0_#171717] hover:shadow-[0_2px_0_0_#171717] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3 border-2 border-[#171717] group cursor-pointer"
            >
              <span>Explore Your Growth Journey</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4F1EA] text-[#171717] font-semibold text-base border-2 border-[#171717] shadow-[0_4px_0_0_#171717] hover:shadow-[0_2px_0_0_#171717] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#171717]" />
              <span>Already Have a Business? Let&apos;s Talk</span>
            </Link>
          </motion.div>
        </div>

        {/* Illustrated Studio Evolution Infographic (Truck Art & Modern Studio Fusion) */}
        <div className="mt-12 relative p-6 sm:p-8 rounded-2xl bg-white/90 border-2 border-charcoal shadow-[0_8px_0_0_#171717] backdrop-blur-sm">
          {/* Decorative Corner Roses */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <FloralOrnament variant="rose" size={40} />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <FloralOrnament variant="rose" size={40} />
          </div>

          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal/60 bg-cream px-3 py-1 rounded-md border border-charcoal/15">
              The 6 Evolutionary Milestones
            </span>
            <h3 className="text-lg font-bold font-serif text-charcoal mt-1">
              How Your Enterprise Matures With Studio14
            </h3>
          </div>

          {/* 6 Stage Summary Cards with Chamakpatti Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { num: "01", title: "Brand Identity", desc: "Logo, positioning & visual soul", color: "#FFC928", urdu: "پہچان" },
              { num: "02", title: "Digital Flagship", desc: "Web app, social & search hub", color: "#3B82F6", urdu: "حضور" },
              { num: "03", title: "Creative Engine", desc: "Ad creative, scripts & content", color: "#EC4899", urdu: "تخلیق" },
              { num: "04", title: "Acquisition", desc: "Performance ads & lead funnels", color: "#10B981", urdu: "ترقی" },
              { num: "05", title: "Sales & CRM", desc: "Conversion & retention systems", color: "#F97316", urdu: "تعلق" },
              { num: "06", title: "Scale & Automate", desc: "Workflows & autonomous scale", color: "#8B5CF6", urdu: "کامیابی" },
            ].map((st, i) => (
              <div
                key={st.num}
                className="relative p-3.5 rounded-xl border border-charcoal/20 bg-[#FAF9F6] hover:bg-white hover:border-charcoal hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center border border-charcoal text-charcoal shadow-[0_2px_0_0_#171717]"
                    style={{ backgroundColor: st.color }}
                  >
                    {st.num}
                  </span>
                  <span className="text-[11px] font-serif text-charcoal/60 group-hover:text-charcoal font-bold">
                    {st.urdu}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal group-hover:text-brand-yellow-dark">
                    {st.title}
                  </h4>
                  <p className="text-[11px] text-muted-gray mt-1 leading-snug line-clamp-2">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-charcoal/10 flex items-center justify-between text-[10px] text-charcoal/50">
                  <span>Stage {st.num}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-gray">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full lifecycle execution or targeted single-stage sprints available</span>
            </div>
            <div className="font-mono text-[11px] text-charcoal/70">
              Interactive Blueprint · Click any stage below to inspect deliverables
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

