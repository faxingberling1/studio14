"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Instagram, Facebook, Linkedin, Youtube, Search, CheckCircle2, ArrowRight } from "lucide-react";
import { TruckArtVehicle } from "./doodles/TruckArtVehicle";

interface Destination {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  accent: string;
  previewTitle: string;
  previewSummary: string;
  studioRole: string[];
}

const DESTINATIONS: Destination[] = [
  {
    id: "website",
    name: "Website Flagship",
    icon: Globe,
    tag: "Core Anchor",
    accent: "#FFC928",
    previewTitle: "Next.js & Shopify High-Performance Flagship",
    previewSummary:
      "Your central home base where brand storytelling, interactive product builders, and frictionless checkouts turn visitors into paying customers.",
    studioRole: [
      "Custom responsive architecture with 99+ mobile performance",
      "Handcrafted SVG illustration systems & smooth page transitions",
      "Direct conversion funnel & automated booking integration",
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    tag: "Visual Storytelling",
    accent: "#F43F5E",
    previewTitle: "Curated Visual Grid & High-Retention Reels",
    previewSummary:
      "Transforming passive scrollers into passionate brand advocates through aesthetic grid design, highlight kits, and daily engagement.",
    studioRole: [
      "Cohesive 9-post visual grid framework & color harmony",
      "Short-form 9:16 kinetic video templates for high retention",
      "Custom story highlight icons & bio optimization",
    ],
  },
  {
    id: "google-search",
    name: "Google Search",
    icon: Search,
    tag: "Search Intent",
    accent: "#06B6D4",
    previewTitle: "Technical SEO & Google Business Profile",
    previewSummary:
      "Ensuring your business appears at the top when high-intent local and international customers search for your solutions.",
    studioRole: [
      "Schema structured data markup & search intent clustering",
      "Google Business Profile local map pack optimization",
      "Generative Search Optimization (GEO/AI search visibility)",
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    tag: "Long-Form Video",
    accent: "#DC2626",
    previewTitle: "Authority Channel & Documentary Pacing",
    previewSummary:
      "Long-form video content that establishes authority, builds deep customer trust, and ranks on the world's second-largest search engine.",
    studioRole: [
      "Custom channel banner, profile mark, and thumbnail toolkit",
      "Retention-engineered documentary episode editing",
      "Video chapters, description SEO, and end-screen funnels",
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    tag: "B2B Authority",
    accent: "#1D4ED8",
    previewTitle: "Executive Brand & Business Partnerships",
    previewSummary:
      "Positioning founders and company leaders as credible category authorities to attract high-ticket clients, talent, and partners.",
    studioRole: [
      "Executive personal brand & company page alignment",
      "Thought-leadership carousel graphics and PDF guides",
      "B2B inbound lead routing and network positioning",
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    tag: "Community Hub",
    accent: "#2563EB",
    previewTitle: "Community Engagement & Meta Advertising Hub",
    previewSummary:
      "The anchor for Meta Pixel tracking, catalog sync, community reviews, and targeted ad campaigns.",
    studioRole: [
      "Meta Business Manager & Pixel integration",
      "Customer review management & verified business setup",
      "Catalog feed connection for automated product tagging",
    ],
  },
];

export const DigitalFootprint: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("website");
  const selected = DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#06B6D4] text-left">
      {/* Top Banner with Truck Art Motif */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717]">
            One Business Identity → Multiple Discoverable Destinations
          </span>
          <p className="text-xs text-[#666666]">
            Click any channel below to see how Studio14 establishes and unifies your footprint.
          </p>
        </div>

        {/* Small Truck Art Badge */}
        <div className="px-3 py-1 rounded-full bg-[#06B6D4]/25 border-2 border-[#171717] font-mono text-xs font-bold text-[#171717] self-start md:self-auto">
          ✦ UNIFIED ECOSYSTEM
        </div>
      </div>

      {/* Selectable Destination Pills */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {DESTINATIONS.map((dest) => {
          const Icon = dest.icon;
          const isSelected = dest.id === selectedId;
          return (
            <button
              key={dest.id}
              type="button"
              onClick={() => setSelectedId(dest.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[3px_3px_0px_#06B6D4] -translate-y-0.5"
                  : "bg-[#F4F1EA] text-[#171717] border-[#171717]/25 hover:border-[#171717] hover:bg-[#FAF9F6]"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: dest.accent }}
              />
              <Icon className="w-4 h-4" />
              <span>{dest.name}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Detail Preview Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-6 p-6 sm:p-7 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#171717]/15">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl border-2 border-[#171717] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#171717]"
                style={{ backgroundColor: selected.accent }}
              >
                <selected.icon className="w-5 h-5 text-[#171717]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] font-bold">
                  {selected.tag}
                </span>
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#171717]">
                  {selected.previewTitle}
                </h4>
              </div>
            </div>

            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#171717]/30 text-[#171717] self-start sm:self-auto">
              Active Channel
            </span>
          </div>

          <p className="text-sm text-[#666666] leading-relaxed">
            {selected.previewSummary}
          </p>

          <div>
            <p className="font-hand text-base font-bold text-[#171717] mb-2.5">
              How Studio14 Builds This:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {selected.studioRole.map((item) => (
                <li
                  key={item}
                  className="p-3 rounded-xl bg-[#FAF9F6] border border-[#171717]/25 text-xs text-[#171717] leading-relaxed flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Illustrated Truck Art Vehicle Road Footer */}
      <div className="mt-7 pt-5 border-t-2 border-[#171717]/15">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#666666]">
          <span>ARTWORK FIG. 02 — THE STUDIO14 BRAND EXPRESS TRUCK</span>
          <span className="font-hand text-base font-bold text-[#171717]">
            سدا بہار سفر
          </span>
        </div>
        <div className="flex justify-center p-3 rounded-2xl bg-[#EFECE4] border-2 border-[#171717]">
          <TruckArtVehicle className="w-full max-w-md h-auto" />
        </div>
      </div>
    </div>
  );
};

