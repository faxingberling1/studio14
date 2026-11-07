"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { growthStagesData } from "@/data/growthJourney";
import { FloralOrnament } from "./doodles/FloralOrnament";
import { DecorativeBird } from "./doodles/DecorativeBird";
import { TruckArtBorder } from "./doodles/TruckArtBorder";
import { ChamakpattiStar, SpraySplatter, UrduBadge } from "./doodles/TruckArtMotifs";
import { TruckArtVehicle } from "./doodles/TruckArtVehicle";

interface JourneyRoadmapProps {
  currentStageIndex: number;
  onSelectStage: (index: number) => void;
}

export const JourneyRoadmap: React.FC<JourneyRoadmapProps> = ({
  currentStageIndex,
  onSelectStage,
}) => {
  return (
    <div id="journey-roadmap" className="relative py-12 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF5] via-white to-[#FAF9F6] border-b-2 border-charcoal/15 overflow-hidden scroll-mt-24">
      {/* Background Motifs */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-20">
        <FloralOrnament variant="rose" size={60} />
      </div>
      <div className="absolute bottom-4 right-6 pointer-events-none opacity-20">
        <FloralOrnament variant="marigold" size={60} />
      </div>
      <div className="absolute top-1/2 left-2 pointer-events-none opacity-15 hidden xl:block">
        <DecorativeBird type="chakor" size={120} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-charcoal/60 bg-brand-yellow/30 px-2.5 py-0.5 rounded border border-charcoal/20">
                Interactive Highway
              </span>
              <span className="text-xs font-serif font-bold text-charcoal/70">
                شاہراہِ ترقی
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal tracking-tight">
              The 6-Stage Scalability Roadmap
            </h3>
            <p className="text-sm text-muted-gray mt-1 max-w-xl">
              Click any milestone along the route to inspect its architectural deliverables, interactive prototypes, and business impact.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/70">
              <span className="w-3 h-3 rounded-full bg-brand-yellow border border-charcoal inline-block" />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/70">
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-charcoal inline-block" />
              <span>Complete</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/70">
              <span className="w-3 h-3 rounded-full bg-white border border-charcoal/30 inline-block" />
              <span>Upcoming</span>
            </div>
          </div>
        </div>

        {/* Desktop Illustrated Roadmap Track */}
        <div className="relative mt-8">
          {/* Animated Connecting Highway Track */}
          <div className="hidden lg:block absolute top-[64px] left-[5%] right-[5%] h-3 bg-charcoal/15 rounded-full z-0">
            {/* Road Dotted Center Line */}
            <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-white/80" />
            
            {/* Active Progress Fill */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-brand-yellow rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(currentStageIndex / (growthStagesData.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* 6 Stage Stations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
            {growthStagesData.map((stage, idx) => {
              const isActive = idx === currentStageIndex;
              const isPast = idx < currentStageIndex;

              return (
                <div
                  key={stage.id}
                  onClick={() => onSelectStage(idx)}
                  className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 relative flex flex-col justify-between border-2 ${
                    isActive
                      ? "bg-white border-charcoal shadow-[0_8px_0_0_#171717] -translate-y-2 ring-2 ring-brand-yellow/80"
                      : isPast
                      ? "bg-white/80 border-charcoal/30 hover:border-charcoal hover:shadow-[0_4px_0_0_#171717]"
                      : "bg-[#FAF9F6]/80 border-charcoal/20 hover:border-charcoal/50 hover:bg-white"
                  }`}
                >
                  {/* Top Station Badge & Truck Icon when active */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center border-2 border-charcoal transition-transform ${
                        isActive
                          ? "scale-110 shadow-[0_2px_0_0_#171717]"
                          : "group-hover:scale-105"
                      }`}
                      style={{ backgroundColor: stage.accentColor }}
                    >
                      {stage.number}
                    </span>

                    {isActive ? (
                      <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-charcoal bg-brand-yellow px-2 py-0.5 rounded-full border border-charcoal shadow-sm">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>Here</span>
                      </span>
                    ) : isPast ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <span className="text-[11px] font-serif text-charcoal/40 font-bold">
                        {stage.urduPhrase.split(" ")[0]}
                      </span>
                    )}
                  </div>

                  {/* Title & Short description */}
                  <div>
                    <h4
                      className={`text-sm font-bold font-serif leading-tight transition-colors ${
                        isActive ? "text-charcoal" : "text-charcoal/80 group-hover:text-charcoal"
                      }`}
                    >
                      {stage.title}
                    </h4>
                    <p className="text-[11px] text-muted-gray mt-1 leading-snug line-clamp-2">
                      {stage.theme}
                    </p>
                  </div>

                  {/* Station Footer / Click indicator */}
                  <div className="mt-4 pt-2 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-semibold">
                    <span
                      className={
                        isActive
                          ? "text-brand-yellow-dark font-bold"
                          : "text-charcoal/50 group-hover:text-charcoal"
                      }
                    >
                      {isActive ? "Viewing" : "Explore"}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive
                          ? "text-brand-yellow-dark translate-x-1"
                          : "text-charcoal/40 group-hover:translate-x-1 group-hover:text-charcoal"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Moving Truck Graphic Banner */}
        <div className="mt-8 p-4 rounded-xl bg-charcoal text-white border-2 border-charcoal flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-brand-yellow text-charcoal flex items-center justify-center font-black border border-white/20 shrink-0">
              <span className="font-serif text-lg">S14</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-yellow font-bold">
                  Truck Art Express Engine
                </span>
                <span className="text-xs font-serif text-white/60">
                  سفر جاری ہے
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                Currently docked at <strong className="text-brand-yellow">Stage {growthStagesData[currentStageIndex].number}: {growthStagesData[currentStageIndex].title}</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectStage(Math.max(0, currentStageIndex - 1))}
              disabled={currentStageIndex === 0}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-all border border-white/20"
            >
              ← Prev Stage
            </button>
            <button
              onClick={() => onSelectStage(Math.min(growthStagesData.length - 1, currentStageIndex + 1))}
              disabled={currentStageIndex === growthStagesData.length - 1}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-yellow hover:bg-[#ffbe0b] text-charcoal transition-all border border-charcoal font-mono"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

