"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Clock,
  Flame,
  ArrowDown,
} from "lucide-react";
import { FloralOrnament } from "@/components/growth-journey/doodles/FloralOrnament";
import { ChamakpattiStar } from "@/components/growth-journey/doodles/TruckArtMotifs";
import { TruckCrown } from "@/components/growth-journey/doodles/TruckArtBorder";

interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  stageFocus: string;
  idealFor: string;
  timeline: string;
  popular?: boolean;
  features: string[];
  deliverablesSummary: string;
  ctaText: string;
  accentColor: string;
}

const packages: PackageTier[] = [
  {
    id: "brand-launch",
    name: "Brand Foundation Sprint",
    tagline: "Give your venture an identity worth remembering.",
    stageFocus: "Stage 01 Focus",
    idealFor: "Startups & founders needing complete brand identity & positioning.",
    timeline: "2 – 3 Weeks",
    popular: false,
    accentColor: "#FFC928",
    deliverablesSummary: "Complete Brand Book + Logo Mark Suite + Stationery Kit",
    features: [
      "Brand discovery & market positioning strategy",
      "Full primary, secondary & submark logo suite",
      "Design system & typography pairing guide",
      "Color palette tokens with accessibility standards",
      "Comprehensive 30+ page brand guidelines PDF",
      "Business stationery suite (cards, letterheads, invoice templates)",
      "Social media starter kit (avatars, banners & templates)",
      "Full commercial vector assets & font licenses guidance",
    ],
    ctaText: "Launch Brand Identity",
  },
  {
    id: "digital-flagship",
    name: "Digital Flagship Suite",
    tagline: "Establish your custom high-performance digital presence.",
    stageFocus: "Stages 01 + 02 Focus",
    idealFor: "Businesses ready to stand out online and convert visitors into buyers.",
    timeline: "4 – 6 Weeks",
    popular: false,
    accentColor: "#3B82F6",
    deliverablesSummary: "Brand Identity + Custom High-Performance Web App / Store",
    features: [
      "Everything in Brand Foundation Sprint",
      "Custom Next.js / React web development or Shopify store",
      "Handcrafted responsive UI/UX design with Framer Motion animations",
      "Technical SEO foundation & OpenGraph social cards",
      "Interactive product showcases, services catalogs or booking flows",
      "Google Analytics 4 & Meta Pixel conversion tracking",
      "Headless CMS integration for effortless content editing",
      "High-speed server setup & 95+ Google Lighthouse optimization",
    ],
    ctaText: "Build Digital Flagship",
  },
  {
    id: "growth-engine",
    name: "Full Growth Engine",
    tagline: "The complete 6-stage turnkey venture development partnership.",
    stageFocus: "Stages 01 – 06 Complete",
    idealFor: "High-ambition companies seeking an end-to-end partner to build & scale.",
    timeline: "8 – 12 Weeks + Ongoing",
    popular: true,
    accentColor: "#E11D48",
    deliverablesSummary: "Brand + Flagship Web + Ad Studio + Funnels + Automations",
    features: [
      "Full 6-Stage Studio14 Growth Journey execution",
      "Complete Brand Foundation & Design System",
      "Bespoke High-Performance Web Platform & E-Commerce",
      "Creative Ad Engine: 15+ Motion, Short-Form & Static Creatives",
      "Full Acquisition Funnel setup (Meta, Google & LinkedIn)",
      "Automated CRM & Lead Routing (HubSpot, WhatsApp, Slack)",
      "Operational workflow automation & customer onboarding flows",
      "Dedicated Creative Director, Tech Lead & Growth Strategist",
      "Bi-weekly strategic sprints & real-time analytics dashboard",
    ],
    ctaText: "Start Growth Partnership",
  },
  {
    id: "creative-retainer",
    name: "Performance & Creative Engine",
    tagline: "Continuous creative ad production and conversion optimization.",
    stageFocus: "Stages 03 – 05 Focus",
    idealFor: "Established brands with an active site looking to scale sales & leads.",
    timeline: "Monthly Dedicated Retainer",
    popular: false,
    accentColor: "#10B981",
    deliverablesSummary: "Monthly Video/Static Ad Batches + Funnel Optimization",
    features: [
      "8–12 Fresh high-converting ad creatives per month (UGC, Motion, 3D)",
      "Continuous landing page CRO & A/B testing sprints",
      "Ad copywriting, hooks & storyboarding across Meta, TikTok & Google",
      "Email & SMS retention marketing flows (abandoned cart, post-purchase)",
      "Monthly performance reviews & attribution analysis",
      "Dedicated Slack channel with 24h creative response",
      "No long-term lock-in: month-to-month flexibility",
    ],
    ctaText: "Reserve Monthly Capacity",
  },
];

export const Packages: React.FC = () => {
  const [activeBilling, setActiveBilling] = useState<"project" | "retainer">("project");

  return (
    <section id="packages" className="relative py-20 sm:py-28 bg-[#FAF9F6] border-b-2 border-charcoal/15 scroll-mt-20">
      {/* 1. SEAMLESS TRANSITION FROM GROWTH JOURNEY */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/30 border border-charcoal/20 text-xs font-bold uppercase tracking-wider text-charcoal shadow-sm mb-4">
          <ChamakpattiStar size={16} color="#FFC928" />
          <span>Stage 07 · Moving Into Action</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-charcoal tracking-tight leading-tight">
          Now, Let&apos;s Find the Right Starting Point.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          Whether you want to build a complete business from the ground up or focus on a specific phase of your growth, explore our packages designed to match where you are today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#package-cards"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-yellow hover:bg-[#ffbe0b] text-charcoal font-bold text-sm shadow-[0_4px_0_0_#171717] hover:shadow-[0_2px_0_0_#171717] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 border-2 border-charcoal"
          >
            <span>View Studio14 Packages</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-cream text-charcoal font-semibold text-sm border-2 border-charcoal/30 hover:border-charcoal transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span>Schedule a Free Consultation</span>
          </a>
        </div>
      </div>

      {/* 2. THE PACKAGES GRID */}
      <div id="package-cards" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 bg-white border-2 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "border-charcoal shadow-[0_10px_0_0_#171717] lg:-translate-y-3 ring-2 ring-brand-yellow"
                  : "border-charcoal/20 hover:border-charcoal shadow-[0_6px_0_0_#171717]/40 hover:shadow-[0_8px_0_0_#171717]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-charcoal text-brand-yellow px-4 py-1 rounded-full text-xs font-mono font-black border-2 border-brand-yellow shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                  <span>Most Comprehensive</span>
                </div>
              )}

              <div>
                {/* Header Tag & Stage */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-md border border-charcoal text-charcoal shadow-sm"
                    style={{ backgroundColor: pkg.accentColor }}
                  >
                    {pkg.stageFocus}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-gray">
                    <Clock className="w-3 h-3" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-black text-charcoal leading-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Scope Highlight */}
                <div className="mt-4 p-2.5 rounded-xl bg-cream border border-charcoal/15 text-[11px] font-semibold text-charcoal/90">
                  <span className="font-mono text-muted-gray block text-[10px] uppercase">Core Artifact</span>
                  {pkg.deliverablesSummary}
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-charcoal/10">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal/60 block">
                    What&apos;s Included
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="mt-8 pt-4 border-t border-charcoal/10">
                <a
                  href="#contact"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border-2 ${
                    pkg.popular
                      ? "bg-brand-yellow hover:bg-[#ffbe0b] text-charcoal border-charcoal shadow-[0_3px_0_0_#171717]"
                      : "bg-charcoal hover:bg-black text-white border-charcoal shadow-sm"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Enterprise Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-charcoal shadow-[0_6px_0_0_#171717] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cream border-2 border-charcoal flex items-center justify-center text-charcoal shrink-0 shadow-[0_2px_0_0_#171717]">
              <Sparkles className="w-7 h-7 text-brand-yellow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal/60">
                  Custom Architecture
                </span>
                <span className="text-xs font-serif font-bold text-charcoal/70">
                  خصوصی حل
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal">
                Need a Bespoke Combination or Custom Enterprise Scope?
              </h3>
              <p className="text-xs sm:text-sm text-muted-gray mt-1 max-w-xl">
                Have an established platform, complex integrations, or dedicated multi-channel requirements? We engineer custom solutions tailored to your organization.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-charcoal hover:bg-black text-white font-bold text-xs sm:text-sm transition-all border border-charcoal shadow-sm flex items-center gap-2"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

