"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  Sparkles,
  ChevronDown,
  Layers,
  Award,
} from "lucide-react";
import { GrowthStage } from "@/data/growthJourney";
import { BrandPreview } from "./BrandPreview";
import { DigitalFootprint } from "./DigitalFootprint";
import { CampaignBuilder } from "./CampaignBuilder";
import { MarketingFunnel } from "./MarketingFunnel";
import { CustomerJourney } from "./CustomerJourney";
import { BusinessWorkflow } from "./BusinessWorkflow";
import { FloralOrnament } from "./doodles/FloralOrnament";
import { ChamakpattiStar, UrduBadge } from "./doodles/TruckArtMotifs";
import { TruckCrown } from "./doodles/TruckArtBorder";

interface StageDetailPanelProps {
  stage: GrowthStage;
  currentIndex: number;
  totalStages: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectStage: (index: number) => void;
}

export const StageDetailPanel: React.FC<StageDetailPanelProps> = ({
  stage,
  currentIndex,
  totalStages,
  onPrev,
  onNext,
  onSelectStage,
}) => {
  const [showAllDeliverables, setShowAllDeliverables] = useState(false);

  // Render the corresponding interactive showcase component for the active stage
  const renderInteractiveComponent = () => {
    switch (stage.interactiveComponentId) {
      case "brand-preview":
        return <BrandPreview />;
      case "digital-footprint":
        return <DigitalFootprint />;
      case "campaign-builder":
        return <CampaignBuilder />;
      case "marketing-funnel":
        return <MarketingFunnel />;
      case "customer-journey":
        return <CustomerJourney />;
      case "business-workflow":
        return <BusinessWorkflow />;
      default:
        return null;
    }
  };

  return (
    <div className="relative py-12 px-4 sm:px-6 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Stage Hero Banner */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-white border-2 border-charcoal shadow-[0_8px_0_0_#171717] overflow-hidden">
              {/* Background Chamakpatti Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none -mr-20 -mt-20"
                style={{ backgroundColor: stage.accentColor }}
              />

              {/* Decorative Truck Art Accents */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-40 hidden sm:block">
                <FloralOrnament variant="rose" size={54} />
              </div>

              <div className="relative z-10 max-w-3xl">
                {/* Stage Tagline & Urdu Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="px-3.5 py-1 rounded-xl text-xs font-black tracking-wider uppercase border-2 border-charcoal shadow-[0_2px_0_0_#171717] text-charcoal font-mono"
                    style={{ backgroundColor: stage.accentColor }}
                  >
                    STAGE {stage.number} OF {totalStages.toString().padStart(2, "0")}
                  </span>

                  <UrduBadge text={stage.urduPhrase} subtitle={stage.urduTranslation} />

                  <span className="text-xs font-semibold text-charcoal/60 bg-cream px-3 py-1 rounded-md border border-charcoal/15">
                    {stage.theme}
                  </span>
                </div>

                {/* Stage Title & Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-charcoal tracking-tight leading-tight">
                  {stage.title}
                </h2>
                <h3 className="mt-3 text-lg sm:text-xl font-medium text-charcoal/80 leading-relaxed font-sans">
                  &ldquo;{stage.headline}&rdquo;
                </h3>

                {/* Narrative Description */}
                <p className="mt-4 text-sm sm:text-base text-muted-gray leading-relaxed max-w-2xl">
                  {stage.description}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {stage.detailedExplanation}
                </p>
              </div>

              {/* Completion Statement Card */}
              <div className="mt-6 pt-6 border-t-2 border-dashed border-charcoal/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal/60">
                      Milestone Outcome
                    </span>
                    <p className="text-sm font-bold text-charcoal">
                      {stage.completionMessage}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-charcoal/70 bg-brand-yellow/30 px-2.5 py-1 rounded-lg border border-charcoal/20">
                    {stage.deliverables.length} Studio Deliverables
                  </span>
                </div>
              </div>
            </div>

            {/* The Interactive Showcase Component */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-yellow drop-shadow" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                    Interactive Demonstration · Explore & Test Below
                  </span>
                </div>
                <span className="text-xs text-muted-gray hidden sm:inline">
                  Click tabs, buttons & controls to experience our systems in action
                </span>
              </div>

              {renderInteractiveComponent()}
            </div>

            {/* Deliverables Architecture Section */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-charcoal shadow-[0_6px_0_0_#171717]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-charcoal/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/30 border border-charcoal flex items-center justify-center text-charcoal">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-charcoal">
                      Deliverables & Production Assets
                    </h4>
                    <p className="text-xs text-muted-gray">
                      Everything crafted, coded, and deployed during {stage.title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAllDeliverables(!showAllDeliverables)}
                  className="text-xs font-bold text-charcoal flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal/30 hover:border-charcoal bg-cream hover:bg-white transition-all"
                >
                  <span>{showAllDeliverables ? "Collapse List" : "View All"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      showAllDeliverables ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Grid of Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(showAllDeliverables ? stage.deliverables : stage.deliverables.slice(0, 6)).map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-charcoal/15 bg-[#FAF9F6] flex items-start gap-2.5 hover:bg-white hover:border-charcoal/40 transition-all group"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal/90 leading-snug">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>

              {!showAllDeliverables && stage.deliverables.length > 6 && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowAllDeliverables(true)}
                    className="text-xs font-mono font-bold text-charcoal/70 hover:text-charcoal underline underline-offset-4"
                  >
                    + {stage.deliverables.length - 6} more deliverables included in this milestone
                  </button>
                </div>
              )}
            </div>

            {/* Stage Navigation Controller (Footer) */}
            <div className="p-6 rounded-2xl bg-cream border-2 border-charcoal flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_4px_0_0_#171717]">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={onPrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-cream disabled:opacity-40 disabled:hover:bg-white border-2 border-charcoal font-bold text-xs sm:text-sm text-charcoal transition-all flex items-center gap-2 shadow-[0_2px_0_0_#171717]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Stage</span>
                </button>

                <div className="sm:hidden text-xs font-mono font-bold text-charcoal/70">
                  {currentIndex + 1} / {totalStages}
                </div>

                <button
                  onClick={onNext}
                  disabled={currentIndex === totalStages - 1}
                  className="px-4 py-2.5 rounded-xl bg-brand-yellow hover:bg-[#ffbe0b] disabled:opacity-40 disabled:hover:bg-brand-yellow border-2 border-charcoal font-bold text-xs sm:text-sm text-charcoal transition-all flex items-center gap-2 shadow-[0_2px_0_0_#171717]"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-gray hidden md:inline">
                  Ready to activate this stage for your business?
                </span>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl bg-charcoal text-white hover:bg-black font-bold text-xs sm:text-sm transition-all border border-charcoal shadow-sm flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Start Stage {stage.number} Brief</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

