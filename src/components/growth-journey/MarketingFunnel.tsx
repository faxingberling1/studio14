"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Sparkles, Filter, ArrowDown, Megaphone, CheckCircle2 } from "lucide-react";
import { ChamakpattiStar } from "./doodles/TruckArtMotifs";
import { FloralOrnament } from "./doodles/FloralOrnament";

interface FunnelNode {
  id: string;
  step: string;
  label: string;
  shortRole: string;
  accent: string;
  whatHappens: string;
  studio14Handles: string[];
  whyItMatters: string;
  supportingService: string;
}

const FUNNEL_NODES: FunnelNode[] = [
  {
    id: "creative",
    step: "01",
    label: "CREATIVE ASSETS",
    shortRole: "The Visual Hook",
    accent: "#FFC928",
    whatHappens:
      "Compelling brand videos, static carousel cards, and persuasive copy are prepared and tested.",
    studio14Handles: [
      "Custom motion graphics & video editing",
      "High-contrast editorial typography and ad layouts",
      "Diverse creative hook variations for iterative testing",
    ],
    whyItMatters:
      "Without captivating creative, advertising spend is wasted on audiences who scroll past in seconds.",
    supportingService: "Video Editing & Creative Direction",
  },
  {
    id: "audience",
    step: "02",
    label: "TARGET AUDIENCE",
    shortRole: "The Right Eyes",
    accent: "#F97316",
    whatHappens:
      "Granular demographic, interest, and search-intent segments are identified and mapped into ad sets.",
    studio14Handles: [
      "Competitor research & audience demographic profiling",
      "Custom & lookalike audience architecture in Meta and Google",
      "Negative keyword & exclusion filtering to prevent wasted spend",
    ],
    whyItMatters:
      "Even the greatest creative fails if shown to people who have no use for your offering.",
    supportingService: "Marketing Strategy & Audience Research",
  },
  {
    id: "ad",
    step: "03",
    label: "LIVE ADVERTISEMENT",
    shortRole: "The Paid Delivery",
    accent: "#DC2626",
    whatHappens:
      "Structured campaigns launch across Meta, Google Search, and YouTube with daily bid management.",
    studio14Handles: [
      "Campaign setup & dynamic budget allocation",
      "Multi-placement distribution (Feeds, Stories, Reels, Search)",
      "Continuous A/B testing of headlines, thumbnails, and copy",
    ],
    whyItMatters:
      "Systematic ad management ensures budgets are automatically shifted to the top-performing creative angles.",
    supportingService: "Paid Ads Management (Meta & Google)",
  },
  {
    id: "landing",
    step: "04",
    label: "LANDING PAGE",
    shortRole: "The Destination",
    accent: "#06B6D4",
    whatHappens:
      "Clicks arrive at a dedicated, high-speed page matching the exact promise of the ad they clicked.",
    studio14Handles: [
      "Custom responsive Next.js landing page development",
      "Clear message match, social proof, and distraction-free layout",
      "Meta Pixel, Google Tag Manager & server-side event tracking",
    ],
    whyItMatters:
      "Sending paid traffic to a generic homepage causes high bounce rates; dedicated landing pages maximize conversions.",
    supportingService: "Website Design & Development",
  },
  {
    id: "lead",
    step: "05",
    label: "LEAD GENERATION",
    shortRole: "The Commitment",
    accent: "#059669",
    whatHappens:
      "Interested visitors fill out a project brief, book a discovery call, or purchase a product kit.",
    studio14Handles: [
      "Frictionless multi-step forms & calendar booking widgets",
      "Instant lead capture with phone/email verification",
      "Automated confirmation email & WhatsApp/SMS notification",
    ],
    whyItMatters:
      "This is where curiosity turns into measurable business pipeline and tangible contact information.",
    supportingService: "Business Automations & Funnels",
  },
  {
    id: "opportunity",
    step: "06",
    label: "SALES OPPORTUNITY",
    shortRole: "The Closed Deal",
    accent: "#1D4ED8",
    whatHappens:
      "Qualified leads are routed instantly to your sales team with complete context to close the partnership.",
    studio14Handles: [
      "Instant CRM deal creation in HubSpot or Notion",
      "Automated follow-up drip sequences for warm leads",
      "Real-time team notification via Slack or email webhook",
    ],
    whyItMatters:
      "Fast response times directly increase closing rates; automation ensures zero leads ever go cold.",
    supportingService: "Sales & Community Management",
  },
];

export const MarketingFunnel: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("creative");
  const selectedNode = FUNNEL_NODES.find((n) => n.id === selectedId) || FUNNEL_NODES[0];

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#DC2626] text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717] flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-[#DC2626]" />
            Interactive Customer Acquisition Funnel
          </span>
          <p className="text-xs text-[#666666]">
            Click any funnel stage below to inspect the mechanics, Studio14 deliverables, and strategic purpose.
          </p>
        </div>

        {/* Truck Art Hand-Painted Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928] border-2 border-[#171717] font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0px_#171717] self-start sm:self-auto">
          <ChamakpattiStar size={16} />
          <span>GET NOTICED!</span>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 6-Tier Clickable Funnel Visualization (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          {FUNNEL_NODES.map((node, index) => {
            const isSelected = selectedId === node.id;
            // Funnel taper width calculation
            const widthPercent = 100 - index * 6;

            return (
              <div key={node.id} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  style={{ width: `${widthPercent}%` }}
                  className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[4px_4px_0px_#DC2626] -translate-y-0.5"
                      : "bg-[#F4F1EA] text-[#171717] border-[#171717]/30 hover:border-[#171717] hover:bg-[#FAF9F6]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-6 h-6 rounded-lg text-xs font-bold font-mono border border-[#171717] flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: node.accent,
                        color: "#171717",
                      }}
                    >
                      {node.step}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold truncate">
                      {node.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono opacity-70 shrink-0 hidden sm:inline">
                    {node.shortRole}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Right: Stage Inspection & Deliverables Card (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#171717]/15">
                <div className="flex items-center gap-2.5">
                  <span
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold border border-[#171717]"
                    style={{ backgroundColor: selectedNode.accent, color: "#171717" }}
                  >
                    STAGE {selectedNode.step}
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#171717]">
                    {selectedNode.label}
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#666666] font-semibold">
                  {selectedNode.shortRole}
                </span>
              </div>

              <div>
                <p className="text-xs font-mono uppercase font-bold text-[#DC2626] mb-1">
                  WHAT HAPPENS AT THIS STAGE:
                </p>
                <p className="text-sm text-[#171717] leading-relaxed font-medium">
                  {selectedNode.whatHappens}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase font-bold text-[#059669] mb-1.5">
                  WHAT STUDIO14 HANDLES:
                </p>
                <ul className="space-y-1.5">
                  {selectedNode.studio14Handles.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-xs text-[#171717]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#171717]/25 space-y-1">
                <p className="text-xs font-bold text-[#171717]">Why This Stage Matters:</p>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {selectedNode.whyItMatters}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs border-t border-[#171717]/10">
                <span className="font-bold text-[#666666]">Supporting Studio Practice:</span>
                <span className="font-bold text-[#171717] underline decoration-[#FFC928]">
                  {selectedNode.supportingService}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

