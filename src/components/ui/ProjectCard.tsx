"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ProjectItem } from "@/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      layout={!prefersReducedMotion}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-shadow duration-300 ${
        project.layoutSpan === "wide" ? "md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Image Container with Zoom on Hover */}
      <div
        onClick={() => onSelect(project)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(project);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View project details for ${project.title}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFECE4] border-b-2 border-[#171717] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]"
      >
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF9F6] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
            <span
              className="w-2 h-2 rounded-full border border-[#171717]"
              style={{ backgroundColor: project.accentColor }}
            />
            {project.category}
          </span>

          {project.isDemoContent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#171717]/90 text-[#FFC928] border border-[#171717]">
              <Sparkles className="w-3 h-3" />
              Studio Concept
            </span>
          )}
        </div>

        {/* Hover Overlay Prompt */}
        <div className="absolute inset-0 bg-[#171717]/65 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#171717] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Project Breakdown
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 justify-between p-5 sm:p-6">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-[#F3EFE6] text-[#666666] border border-[#171717]/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#171717] leading-snug">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-left hover:underline decoration-[#FFC928] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:underline cursor-pointer"
            >
              {project.title}
            </button>
          </h3>

          <p className="mt-2 text-sm sm:text-base text-[#666666] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#171717]/10 flex items-center justify-between">
          <span className="font-hand text-base font-bold text-[#666666]">
            {project.year}
          </span>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171717] hover:text-[#171717] group/btn cursor-pointer focus-visible:outline-none focus-visible:underline"
          >
            <span>View Project</span>
            <span className="w-7 h-7 rounded-full bg-[#FFC928] border border-[#171717] flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4 text-[#171717]" />
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

