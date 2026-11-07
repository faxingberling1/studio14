"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { growthStagesData } from "@/data/growthJourney";

interface JourneyProgressProps {
  currentStageIndex: number;
  onSelectStage: (index: number) => void;
}

// Concise responsive stage label helpers for tablet and mobile
const getConciseLabel = (shortTitle: string): string => {
  switch (shortTitle) {
    case "Brand Identity":
      return "Brand";
    case "Digital Presence":
      return "Presence";
    case "Creative & Ads":
      return "Creative";
    case "Campaign Launch":
      return "Launch";
    case "Sales & Community":
      return "Sales";
    case "Scale & Automate":
      return "Scale";
    default:
      return shortTitle.split(" ")[0] || shortTitle;
  }
};

export const JourneyProgress: React.FC<JourneyProgressProps> = ({
  currentStageIndex,
  onSelectStage,
}) => {
  const currentStage = growthStagesData[currentStageIndex];
  const progressPercent = ((currentStageIndex + 1) / growthStagesData.length) * 100;

  return (
    <div className="w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b-2 border-[#171717] py-2 sm:py-2.5 px-3 sm:px-6 sticky top-16 z-30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto space-y-2">
        {/* ========================================================
            ROW 1: Active Stage Context + Prev/Next Buttons + Progress Bar
        ======================================================== */}
        <div className="flex items-center justify-between gap-3">
          {/* Active Stage Indicator */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] shrink-0 transition-colors"
              style={{ backgroundColor: currentStage.accentColor }}
            >
              {currentStage.number}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#171717]/60 whitespace-nowrap">
                  Stage {currentStage.number} of {growthStagesData.length}
                </span>
                <span className="hidden sm:inline text-xs font-serif text-[#171717]/50 font-bold whitespace-nowrap">
                  • {currentStage.urduPhrase}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#171717] truncate leading-tight">
                {currentStage.title}
              </h4>
            </div>
          </div>

          {/* Right Side: Step Controls & Progress Meter */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Quick Step Buttons (Prev / Next) */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onSelectStage(Math.max(0, currentStageIndex - 1))}
                disabled={currentStageIndex === 0}
                aria-label="Previous Stage"
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg border-2 border-[#171717]/30 text-xs font-bold text-[#171717] hover:bg-white hover:border-[#171717] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Prev</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectStage(Math.min(growthStagesData.length - 1, currentStageIndex + 1))}
                disabled={currentStageIndex === growthStagesData.length - 1}
                aria-label="Next Stage"
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg border-2 border-[#171717]/30 text-xs font-bold text-[#171717] hover:bg-white hover:border-[#171717] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1"
              >
                <span className="hidden md:inline text-[11px]">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Progress Meter Bar */}
            <div className="flex items-center gap-2">
              <div className="w-16 sm:w-28 md:w-36 h-2 rounded-full bg-[#EFECE4] border border-[#171717]/20 overflow-hidden">
                <motion.div
                  className="h-full bg-[#FFC928]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#171717] min-w-[28px] text-right">
                {Math.round(progressPercent)}%
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: The 6 Stage Navigation Tabs Grid
            (100% width, 6 columns, zero horizontal scroll needed on desktop/mobile)
        ======================================================== */}
        <div className="grid grid-cols-6 gap-1 sm:gap-2 w-full pt-0.5">
          {growthStagesData.map((stage, idx) => {
            const isActive = idx === currentStageIndex;
            const isCompleted = idx < currentStageIndex;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelectStage(idx)}
                className={`group relative py-1.5 sm:py-2 px-1 sm:px-2 rounded-xl text-center flex items-center justify-center gap-1 sm:gap-1.5 border-2 transition-all cursor-pointer min-w-0 ${
                  isActive
                    ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[2px_2px_0px_#FFC928]"
                    : isCompleted
                    ? "bg-white text-[#171717] border-[#171717]/30 hover:border-[#171717] hover:bg-[#FAF9F6]"
                    : "bg-[#F4F1EA] text-[#666666] border-[#171717]/20 hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {/* Stage Badge Number or Checkmark */}
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[10px] sm:text-[11px] flex items-center justify-center font-mono font-bold shrink-0 transition-transform group-hover:scale-105 ${
                    isActive
                      ? "bg-[#FFC928] text-[#171717]"
                      : isCompleted
                      ? "bg-[#10B981] text-white"
                      : "bg-[#171717]/10 text-[#171717]"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  ) : (
                    stage.number
                  )}
                </span>

                {/* Stage Label (Responsive adaptation across all breakpoints) */}
                <span className="truncate font-bold text-[10px] sm:text-xs tracking-tight">
                  {/* Full label on Laptops and Desktops */}
                  <span className="hidden lg:inline">{stage.shortTitle}</span>
                  {/* Concise label on Tablets */}
                  <span className="hidden sm:inline lg:hidden">{getConciseLabel(stage.shortTitle)}</span>
                  {/* Micro label or number on Phones */}
                  <span className="sm:hidden">{stage.number}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
