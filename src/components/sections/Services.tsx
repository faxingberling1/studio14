"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Sparkle } from "@/components/doodles/Sparkle";
import { Button } from "@/components/ui/Button";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 border-t-2 border-[#171717]/10 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="relative">
          <Sparkle
            size={30}
            className="hidden md:block absolute -top-4 left-1/4"
          />
          <SectionHeading
            eyebrow="What We Craft"
            headline="Four Disciplines. Zero Creative Fluff."
            highlightedWord="Zero Creative Fluff."
            supportingText="No cookie-cutter templates or slow agency bureaucracy. Just handcrafted flagships, magnetic video edits, ads that actually sell, and quiet automations that save you hours."
          />
        </div>

        {/* Four Service Cards Grid */}
        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {servicesData.map((service) => (
            <StaggerItem key={service.id} className="h-full flex">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Editorial Note & Link to Full Services Page */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#F3EFE6] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]">
          <div className="text-center sm:text-left">
            <p className="font-editorial text-lg sm:text-xl font-bold text-[#171717]">
              Need a tailored combination of web, video, marketing, and automation?
            </p>
            <p className="text-sm text-[#666666] mt-0.5">
              Compare deliverables, tools, and timelines across all four Studio14 disciplines.
            </p>
          </div>
          <Button href="/services" variant="primary" size="md" withArrow>
            View Full Services Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

