"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight, Sparkles, Info } from "lucide-react";
import { projectsData, portfolioCategories } from "@/data/projects";
import { ProjectCategory, ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All Projects");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") {
      return projectsData;
    }
    return projectsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          eyebrow="Our Work"
          headline="Ideas That Make an Impact"
          highlightedWord="Make an Impact"
          supportingText="Explore some of our recent projects and see what we can do together."
        />

        {/* Transparent Demonstration Notice Banner */}
        <div className="mt-8 max-w-3xl mx-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#F3EFE6] border-2 border-[#171717]/30 text-xs sm:text-sm text-[#171717]">
          <Info className="w-4 h-4 text-[#171717] shrink-0" />
          <p>
            <strong className="font-bold">Studio14 Sandbox Showcases:</strong>{" "}
            Projects below are clearly marked Studio14 concept demonstrations
            illustrating our design, code, video, and automation architecture.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter portfolio projects by category"
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {portfolioCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer border-2 ${
                  isActive
                    ? "bg-[#FFC928] text-[#171717] border-[#171717] shadow-[3px_3px_0px_#171717] -translate-y-0.5"
                    : "bg-[#FAF9F6] text-[#666666] border-[#171717]/25 hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Varied Editorial Grid Layout */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to Full Portfolio Archive */}
        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary" size="lg" withArrow>
            View Complete Project Index
          </Button>
        </div>
      </div>

      {/* Detailed Project Breakdown Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171717]/75 backdrop-blur-xs overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={activeProject.title}
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#FFC928]"
            >
              {/* Sticky Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F6]/95 backdrop-blur-md border-b-2 border-[#171717]">
                <div className="flex items-center gap-2.5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold border-2 border-[#171717]"
                    style={{ backgroundColor: activeProject.accentColor }}
                  >
                    {activeProject.category}
                  </span>
                  <span className="font-hand text-lg font-bold text-[#666666]">
                    {activeProject.year}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project details"
                  className="w-9 h-9 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center hover:bg-[#FFC928] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#171717]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Demo Transparency Pill */}
                {activeProject.isDemoContent && (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFC928]/25 border border-[#171717] text-xs font-semibold text-[#171717]">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{activeProject.demoNotice}</span>
                  </div>
                )}

                {/* Hero Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-[#171717] bg-[#EFECE4]">
                  <Image
                    src={activeProject.imageUrl}
                    alt={activeProject.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title & Overview */}
                <div>
                  <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-[#171717]">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
                    {activeProject.fullDescription}
                  </p>
                </div>

                {/* Challenge & Approach Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-[#F3EFE6] border-2 border-[#171717]">
                    <h4 className="font-hand text-xl font-bold text-[#171717] mb-2">
                      The Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#F3EFE6] border-2 border-[#171717]">
                    <h4 className="font-hand text-xl font-bold text-[#171717] mb-2">
                      Studio14 Approach
                    </h4>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                      {activeProject.approach}
                    </p>
                  </div>
                </div>

                {/* Deliverables & Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#171717]/15">
                  <div>
                    <h4 className="font-editorial text-lg font-bold text-[#171717] mb-3">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm font-medium text-[#171717]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#171717] fill-[#FFC928]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-editorial text-lg font-bold text-[#171717] mb-3">
                      Technologies &amp; Craft
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border-2 border-[#171717] text-xs font-bold text-[#171717]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-6 border-t-2 border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/portfolio/${activeProject.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171717] underline decoration-[#FFC928] decoration-2 underline-offset-4"
                  >
                    <span>Open Dedicated Case Study Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    withArrow
                    onClick={() => setActiveProject(null)}
                  >
                    Build Something Similar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

