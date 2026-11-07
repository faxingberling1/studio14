"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { growthStagesData, GrowthStage } from "@/data/growthJourney";

interface JourneyProgressProps {
  currentStageIndex: number;
  onSelectStage: (index: number) => void;
}

export const JourneyProgress: React.FC<JourneyProgressProps> = ({
  currentStageIndex,
  onSelectStage,
}) => {
  const currentStage = growthStagesData[currentStageIndex];
  const progressPercent = ((currentStageIndex + 1) / growthStagesData.length) * 100;

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-b-2 border-charcoal/20 py-4 px-4 sticky top-16 z-30 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Active Stage Indicator */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border-2 border-charcoal shadow-[0_2px_0_0_#171717] transition-colors"
            style={{ backgroundColor: currentStage.accentColor }}
          >
            {currentStage.number}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal/60">
                Stage {currentStage.number} of {growthStagesData.length}
              </span>
              <span className="text-xs font-serif text-charcoal/50 font-bold">
                {currentStage.urduPhrase}
              </span>
            </div>
            <h4 className="text-sm font-bold text-charcoal leading-none">
              {currentStage.title}
            </h4>
          </div>
        </div>

        {/* 6 Stage Navigation Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {growthStagesData.map((stage, idx) => {
            const isActive = idx === currentStageIndex;
            const isCompleted = idx < currentStageIndex;

            return (
              <button
                key={stage.id}
                onClick={() => onSelectStage(idx)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                  isActive
                    ? "bg-charcoal text-white border-charcoal shadow-[0_3px_0_0_#FFC928]"
                    : isCompleted
                    ? "bg-cream text-charcoal border-charcoal/30 hover:border-charcoal hover:bg-white"
                    : "bg-white text-muted-gray border-charcoal/15 hover:border-charcoal/40 hover:text-charcoal"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono ${
                    isActive
                      ? "bg-brand-yellow text-charcoal font-black"
                      : isCompleted
                      ? "bg-emerald-500 text-white"
                      : "bg-charcoal/10 text-charcoal/70"
                  }`}
                >
                  {isCompleted ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : stage.number}
                </span>
                <span className="hidden sm:inline">{stage.shortTitle}</span>
                <span className="sm:hidden">{stage.number}</span>
              </button>
            );
          })}
        </div>

        {/* Percentage Progress Bar */}
        <div className="hidden lg:flex items-center gap-3 min-w-[160px]">
          <div className="flex-1 h-2 rounded-full bg-cream border border-charcoal/20 overflow-hidden">
            <motion.div
              className="h-full bg-brand-yellow"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="font-mono text-xs font-bold text-charcoal">
            {Math.round(progressPercent)}%
          </span>
        </div>
      </div>
    </div>
  );
};

