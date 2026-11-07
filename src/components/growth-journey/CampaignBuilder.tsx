"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Megaphone, Video, Image as ImageIcon, Type, ArrowRight, Layers } from "lucide-react";
import { FloralOrnament } from "./doodles/FloralOrnament";
import { GraffitiPaintSplatter } from "./doodles/TruckArtMotifs";

export const CampaignBuilder: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<"static" | "video" | "social">("static");
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { num: 1, label: "Concept & Hook" },
    { num: 2, label: "Ad Design" },
    { num: 3, label: "Video Reel" },
    { num: 4, label: "Persuasive Copy" },
    { num: 5, label: "Multi-Platform Export" },
  ];

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#F97316] text-left relative overflow-hidden">
      {/* Decorative Paint Splatter in corner */}
      <div className="absolute top-2 right-2 pointer-events-none opacity-40">
        <GraffitiPaintSplatter size={70} color="#F97316" />
      </div>

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717] flex items-center gap-1.5">
            <Megaphone className="w-4 h-4 text-[#F97316]" />
            Interactive Campaign Assembly Desk
          </span>
          <p className="text-xs text-[#666666]">
            Watch how Studio14 pieces together high-converting creative ad campaigns.
          </p>
        </div>

        {/* Format Selector */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-[#EFECE4] border-2 border-[#171717] self-start sm:self-auto">
          {[
            { id: "static", label: "Static Feed Ad", icon: ImageIcon },
            { id: "video", label: "Motion Video", icon: Video },
            { id: "social", label: "Story / Reels", icon: Sparkles },
          ].map((fmt) => {
            const Icon = fmt.icon;
            const isSelected = selectedFormat === fmt.id;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => setSelectedFormat(fmt.id as "static" | "video" | "social")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#F97316] text-[#FAF9F6] shadow-xs"
                    : "text-[#666666] hover:text-[#171717]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{fmt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5-Step Campaign Assembly Pipeline */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((st) => (
          <button
            key={st.num}
            type="button"
            onClick={() => setActiveStep(st.num)}
            className={`p-2.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              activeStep === st.num
                ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[2px_2px_0px_#F97316]"
                : "bg-[#F4F1EA] text-[#666666] border-[#171717]/20 hover:border-[#171717]"
            }`}
          >
            <span className="font-hand text-sm font-bold block leading-none">
              Stage 0{st.num}
            </span>
            <span className="text-[11px] font-bold truncate block mt-0.5">
              {st.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Creative Mockup Screen */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive Mockup Canvas (7 cols) */}
        <div className="md:col-span-7 rounded-2xl bg-[#171717] p-4 text-[#FAF9F6] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]">
          <div className="flex items-center justify-between pb-3 border-b border-[#FAF9F6]/15 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
              <span className="text-[10px] font-mono text-[#FAF9F6]/60 ml-2">
                STUDIO14 AD PREVIEW CANVAS
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F97316] text-[#FAF9F6] font-bold">
              {selectedFormat.toUpperCase()}
            </span>
          </div>

          {/* Ad Mockup Frame */}
          <div className="aspect-[4/3] rounded-xl bg-[#FAF9F6] text-[#171717] border-2 border-[#171717] p-5 flex flex-col justify-between relative overflow-hidden">
            {/* Truck Art Corner Accent */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-80">
              <FloralOrnament size={36} variant="corner-rose" animateGently={false} />
            </div>

            <div>
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#FFC928] text-[10px] font-bold font-mono border border-[#171717] mb-2">
                SPONSORED CAMPAIGN
              </span>
              <h4 className="font-editorial text-xl sm:text-2xl font-bold leading-tight">
                &ldquo;Craft Your Coffee Experience.&rdquo;
              </h4>
              <p className="text-xs text-[#666666] mt-1.5 line-clamp-2">
                Small-batch specialty beans roasted weekly. Hand-drawn brew notes, ethically sourced beans, delivered to your door.
              </p>
            </div>

            {/* Middle visual composition */}
            <div className="my-auto py-2 flex items-center justify-center">
              {selectedFormat === "video" ? (
                <div className="w-16 h-16 rounded-full bg-[#171717] border-2 border-[#FFC928] flex items-center justify-center shadow-[3px_3px_0px_#F97316]">
                  <Play className="w-6 h-6 text-[#FFC928] fill-current ml-0.5" />
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F1EA] border border-[#171717]">
                  <FloralOrnament size={32} />
                  <div>
                    <p className="font-editorial text-sm font-bold">Artisan Roast.14</p>
                    <p className="text-[10px] font-mono text-[#666666]">Batch Blend N°04</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ad CTA Button in Mockup */}
            <div className="flex items-center justify-between pt-2 border-t border-[#171717]/10">
              <span className="text-[11px] font-mono text-[#666666]">chaiandco.com</span>
              <button
                type="button"
                className="px-4 py-1.5 rounded-full bg-[#171717] text-[#FFC928] text-xs font-bold border border-[#171717]"
              >
                Claim Tasting Kit →
              </button>
            </div>
          </div>
        </div>

        {/* Right: Step Details & Deliverables (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] space-y-2">
            <span className="font-hand text-lg font-bold text-[#F97316]">
              Step 0{activeStep} Breakdown:
            </span>
            <h4 className="font-editorial text-lg font-bold text-[#171717]">
              {activeStep === 1 && "Creative Concept & Retention Hook"}
              {activeStep === 2 && "Visual Hierarchy & Ad Creative"}
              {activeStep === 3 && "Motion Video & Pacing"}
              {activeStep === 4 && "Persuasive Copywriting"}
              {activeStep === 5 && "Multi-Platform Adaptation"}
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              {activeStep === 1 &&
                "We define the 3-second visual hook, emotional resonance, and unique value proposition that stops users from scrolling."}
              {activeStep === 2 &&
                "Crafting high-contrast typography, brand illustrations, and product focal points that communicate instantly."}
              {activeStep === 3 &&
                "Documentary-grade audio design, rhythmic jump-cuts, and frame-by-frame doodle motion graphics."}
              {activeStep === 4 &&
                "Headline angles tailored to problem-aware, solution-aware, and high-intent customer segments."}
              {activeStep === 5 &&
                "Exporting pixel-perfect ratios: 1:1 square feeds, 9:16 vertical reels, and 16:9 widescreen formats."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] flex items-center justify-between text-xs font-bold text-[#171717]">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#F97316]" />
              Production Deliverable
            </span>
            <span className="font-mono text-[#059669]">READY TO RUN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

