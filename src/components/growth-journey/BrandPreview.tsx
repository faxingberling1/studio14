"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, SlidersHorizontal, Eye } from "lucide-react";
import { FloralOrnament } from "./doodles/FloralOrnament";
import { ChamakpattiStar } from "./doodles/TruckArtMotifs";

export const BrandPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "logo" | "palette" | "typography" | "stationery" | "social"
  >("logo");
  const [showComparison, setShowComparison] = useState<"after" | "before">("after");

  const tabs = [
    { id: "logo", label: "Logo & Mark" },
    { id: "palette", label: "Color Palette" },
    { id: "typography", label: "Typography" },
    { id: "stationery", label: "Stationery" },
    { id: "social", label: "Social Brand" },
  ] as const;

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#FFC928] text-left">
      {/* Top Controls: Interactive Before/After Toggle + Element Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFC928]" />
            Interactive Brand Identity Laboratory
          </span>
          <p className="text-xs text-[#666666]">
            Fictional Case: <em>Chai &amp; Co. Craft Roasters</em>
          </p>
        </div>

        {/* Before / After Switcher */}
        <div className="inline-flex items-center p-1 rounded-full bg-[#EFECE4] border-2 border-[#171717] self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setShowComparison("before")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              showComparison === "before"
                ? "bg-[#DC2626] text-[#FAF9F6] shadow-xs"
                : "text-[#666666] hover:text-[#171717]"
            }`}
          >
            Before (Inconsistent)
          </button>
          <button
            type="button"
            onClick={() => setShowComparison("after")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              showComparison === "after"
                ? "bg-[#059669] text-[#FAF9F6] shadow-xs"
                : "text-[#666666] hover:text-[#171717]"
            }`}
          >
            After (Studio14 Identity)
          </button>
        </div>
      </div>

      {/* Comparative Viewport */}
      {showComparison === "before" ? (
        <motion.div
          key="before-view"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 rounded-2xl bg-[#EFECE4] border-2 border-dashed border-[#171717]/40 text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-[#D4CEBF] flex items-center justify-center text-xs font-mono text-[#666666] border border-[#171717]/30">
            [Generic]
          </div>
          <h4 className="font-sans text-xl font-normal text-[#666666] tracking-wide">
            Chai and Co.
          </h4>
          <p className="text-xs text-[#666666] max-w-md mx-auto leading-relaxed">
            • Stock clip-art logo with no vector master files
            <br />• Inconsistent fonts across invoices, website, and social channels
            <br />• Random colors picked ad-hoc without accessibility testing
            <br />• No stationery guidelines or customer recognition
          </p>
          <span className="inline-block px-3 py-1 rounded-md bg-[#DC2626]/20 text-[#DC2626] text-xs font-bold">
            Zero Brand Recognition • Hard to Differentiate
          </span>
        </motion.div>
      ) : (
        <div className="mt-6 space-y-6">
          {/* Sub-Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FFC928] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717]"
                    : "bg-[#FAF9F6] text-[#666666] border-[#171717]/20 hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content Area */}
          <AnimatePresence mode="wait">
            {activeTab === "logo" && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {/* Primary Emblem with Truck-Art Rose */}
                <div className="p-5 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <ChamakpattiStar size={18} color="#FFC928" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-[#171717] border-2 border-[#FFC928] flex items-center justify-center relative">
                    <FloralOrnament size={46} animateGently={false} />
                  </div>
                  <span className="font-editorial text-lg font-bold text-[#171717]">
                    CHAI &amp; CO.
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#059669] font-bold">
                    Primary Logo Mark
                  </span>
                </div>

                {/* Sub-mark / Stamp */}
                <div className="p-5 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-16 h-16 rounded-xl bg-[#FFC928] border-2 border-[#171717] flex items-center justify-center">
                    <span className="font-editorial text-2xl font-black text-[#171717]">
                      CC
                    </span>
                  </div>
                  <span className="font-editorial text-sm font-bold text-[#171717]">
                    Monogram Badge
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#666666]">
                    Secondary Asset
                  </span>
                </div>

                {/* Bilingual Lettering / Truck Art Flourish */}
                <div className="p-5 rounded-2xl bg-[#171717] text-[#FAF9F6] border-2 border-[#171717] flex flex-col items-center justify-center text-center space-y-2">
                  <span
                    className="text-2xl font-bold text-[#FFC928]"
                    dir="rtl"
                    style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', sans-serif" }}
                  >
                    چائے اینڈ کو
                  </span>
                  <span className="font-hand text-base text-[#FAF9F6]">
                    Bespoke Hand Lettering
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#06B6D4] font-bold">
                    Cultural Signature
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "palette" && (
              <motion.div
                key="palette"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3.5"
              >
                {[
                  { name: "Cream Paper", hex: "#FAF9F6", role: "Primary Background" },
                  { name: "Charcoal Ink", hex: "#171717", role: "Primary Typography" },
                  { name: "Chamak Yellow", hex: "#FFC928", role: "Brand Accent" },
                  { name: "Gulab Red", hex: "#DC2626", role: "Vibrant Accent" },
                ].map((color) => (
                  <div
                    key={color.name}
                    className="p-3.5 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] space-y-2"
                  >
                    <div
                      className="w-full h-14 rounded-xl border border-[#171717]/30 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-xs font-bold text-[#171717]">{color.name}</p>
                      <p className="text-[11px] font-mono text-[#666666]">{color.hex}</p>
                      <p className="text-[10px] text-[#059669] font-medium mt-0.5">{color.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "typography" && (
              <motion.div
                key="typography"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="space-y-3.5"
              >
                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#666666]">
                      HEADLINE SERIF
                    </span>
                    <p className="font-editorial text-2xl font-bold text-[#171717]">
                      Playfair Display • Craft &amp; Heritage
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FFC928] border border-[#171717]">
                    Headings
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#666666]">
                      BODY TEXT
                    </span>
                    <p className="font-sans text-base font-semibold text-[#171717]">
                      DM Sans • Clean, Accessible, &amp; Legible
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#171717]">
                    Interface
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "stationery" && (
              <motion.div
                key="stationery"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="p-5 rounded-2xl bg-[#171717] text-[#FAF9F6] border-2 border-[#171717] space-y-3 shadow-[3px_3px_0px_#FFC928]">
                  <div className="flex justify-between items-start">
                    <span className="font-editorial text-base font-bold text-[#FFC928]">
                      CHAI &amp; CO.
                    </span>
                    <span className="text-[10px] font-mono bg-[#FFC928] text-[#171717] px-2 py-0.5 rounded font-bold">
                      BUSINESS CARD
                    </span>
                  </div>
                  <p className="text-xs text-[#FAF9F6]/80 font-mono">
                    Ayesha Khan • Founder &amp; Head Blender
                  </p>
                  <p className="text-[11px] text-[#FAF9F6]/60">
                    hello@chaiandco.com • +92 300 0000000
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-hand text-lg font-bold text-[#171717]">
                      Product Packaging Sleeve
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#059669]" />
                  </div>
                  <p className="text-xs text-[#666666]">
                    Embossed foil stamp with Chamakpatti borders and batch certification seal.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "social" && (
              <motion.div
                key="social"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3.5"
              >
                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] text-center space-y-2">
                  <div className="w-12 h-12 rounded-full mx-auto bg-[#FFC928] border-2 border-[#171717] flex items-center justify-center font-editorial font-bold">
                    C&amp;C
                  </div>
                  <p className="text-xs font-bold text-[#171717]">Profile Avatar</p>
                  <p className="text-[10px] text-[#666666]">High-resolution vector glyph</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] text-center space-y-2">
                  <div className="h-12 rounded-lg bg-[#DC2626] border border-[#171717] flex items-center justify-center text-xs font-bold text-[#FAF9F6]">
                    Story Frame
                  </div>
                  <p className="text-xs font-bold text-[#171717]">Daily Highlights</p>
                  <p className="text-[10px] text-[#666666]">Custom illustrated cover kit</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] text-center space-y-2">
                  <div className="h-12 rounded-lg bg-[#06B6D4] border border-[#171717] flex items-center justify-center text-xs font-bold text-[#171717]">
                    Grid Template
                  </div>
                  <p className="text-xs font-bold text-[#171717]">Editorial Posts</p>
                  <p className="text-[10px] text-[#666666]">Consistent 3x3 visual cadence</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

