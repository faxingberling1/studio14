"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ExternalLink,
  Target,
  Lightbulb,
} from "lucide-react";
import { projectsData, portfolioCategories } from "@/data/projects";
import { PageTransition } from "@/components/animations/PageTransition";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <PageTransition className="pt-28 sm:pt-36 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        {/* Header Breadcrumb & Urdu Badge */}
        <div className="flex items-center gap-2 mb-4">
          <ChamakpattiStar size={18} color="#FFC928" />
          <UrduBadge text="تحقیقی جائزے" subtitle="Case Studies & Deep Dives" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Target className="w-3.5 h-3.5 text-[#171717]" />
            <span>REAL CHALLENGES • STRATEGIC EXECUTION</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            Studio14 Case Studies
          </h1>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            A transparent, inside look at how we combine thoughtful web engineering,
            retention-focused video editing, creative ad campaigns, and business
            automations to solve complex digital challenges.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 pb-2">
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[2px_2px_0px_#FFC928]"
                    : "bg-[#F4F1EA] text-[#666666] border-[#171717]/20 hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl bg-white border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717] hover:shadow-[8px_8px_0px_#FFC928] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta: Category + Accent Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full border-2 border-[#171717] text-[#171717] shadow-[1px_1px_0px_#171717]"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#666666] bg-[#FAF9F6] px-2.5 py-0.5 rounded border border-[#171717]/15">
                      Case Study
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717] group-hover:underline decoration-[#FFC928] decoration-3 underline-offset-4">
                    <Link href={`/case-studies/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Visual Preview / Thumbnail */}
                  <div className="mt-6 relative h-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#171717] bg-[#F4F1EA]">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                      <span className="truncate max-w-[240px] drop-shadow-sm font-bold">
                        {project.tags.join(" • ")}
                      </span>
                    </div>
                  </div>

                  {/* Two-Column Deep-Dive Breakdown: Challenge vs Approach */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* The Challenge */}
                    <div className="p-4 rounded-2xl bg-[#FFFDF5] border border-[#171717]/20 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        <Target className="w-3.5 h-3.5" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                        {project.challenge}
                      </p>
                    </div>

                    {/* The Strategic Approach */}
                    <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#171717]/20 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669]">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>The Approach</span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="mt-6 pt-5 border-t border-[#171717]/10">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#666666] font-bold mb-2.5">
                      Core Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.deliverables.slice(0, 4).map((del) => (
                        <div
                          key={del}
                          className="flex items-start gap-2 text-xs text-[#171717]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-7 pt-4 border-t border-[#171717]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-[#666666]">
                      Full Blueprint Available
                    </span>
                  </div>

                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171717] text-[#FAF9F6] hover:bg-[#FFC928] hover:text-[#171717] font-bold text-xs border border-[#171717] transition-all cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ContactCTA />
    </PageTransition>
  );
}

