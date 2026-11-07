"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "@/types";
import {
  BrowserDoodle,
  ClapperboardDoodle,
  MegaphoneDoodle,
  GearsDoodle,
} from "@/components/doodles/StudioDoodles";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const prefersReducedMotion = useReducedMotion();

  const renderIllustration = () => {
    switch (service.doodleType) {
      case "browser":
        return <BrowserDoodle className="w-16 h-16" accentColor={service.accentColor} />;
      case "clapperboard":
        return <ClapperboardDoodle className="w-16 h-16" accentColor={service.accentColor} />;
      case "megaphone":
        return <MegaphoneDoodle className="w-16 h-16" accentColor={service.accentColor} />;
      case "gears":
        return <GearsDoodle className="w-16 h-16" accentColor={service.accentColor} />;
    }
  };

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] p-6 sm:p-7 shadow-[4px_4px_0px_#171717] hover:border-[#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-all duration-300"
    >
      {/* Top Row: Number Tag + Animated Doodle */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          <span className="font-hand text-2xl font-bold px-3 py-0.5 rounded-lg bg-[#FFC928]/30 border border-[#171717] text-[#171717]">
            {service.number}
          </span>
          <div className="p-2 rounded-xl bg-[#F4F1EA] border border-[#171717]/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
            {renderIllustration()}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#171717] group-hover:underline decoration-[#FFC928] decoration-3 underline-offset-4">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm sm:text-base text-[#666666] leading-relaxed">
          {service.description}
        </p>

        {/* Sub-service checklist */}
        <ul className="mt-5 space-y-2 border-t border-[#171717]/10 pt-4">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm font-medium text-[#171717]"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFC928] border border-[#171717] flex items-center justify-center">
                <Check className="w-3 h-3 text-[#171717] stroke-[3]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action Link */}
      <div className="mt-6 pt-4 border-t border-[#171717]/10">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center justify-between w-full text-sm font-bold text-[#171717] group-hover:text-[#171717] focus-visible:outline-none focus-visible:underline"
        >
          <span>Explore {service.shortTitle}</span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#171717] text-[#FAF9F6] group-hover:bg-[#FFC928] group-hover:text-[#171717] border border-[#171717] transition-all duration-200">
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
};

