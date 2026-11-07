import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";
import { servicesData } from "@/data/services";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  BrowserDoodle,
  ClapperboardDoodle,
  MegaphoneDoodle,
  GearsDoodle,
} from "@/components/doodles/StudioDoodles";

export const metadata: Metadata = {
  title: "Our Services — End-to-End Creative Solutions",
  description:
    "Explore Studio14's four dedicated service disciplines: Website Design & Development, Video Editing, Marketing, and Business Automations.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const renderDoodle = (
    type: "browser" | "clapperboard" | "megaphone" | "gears",
    color: string
  ) => {
    switch (type) {
      case "browser":
        return <BrowserDoodle className="w-16 h-16" accentColor={color} />;
      case "clapperboard":
        return <ClapperboardDoodle className="w-16 h-16" accentColor={color} />;
      case "megaphone":
        return <MegaphoneDoodle className="w-16 h-16" accentColor={color} />;
      case "gears":
        return <GearsDoodle className="w-16 h-16" accentColor={color} />;
    }
  };

  return (
    <PageTransition className="pt-28 sm:pt-36 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <SectionHeading
          eyebrow="Studio Disciplines"
          headline="Crafted With Dil. Engineered to Scale."
          highlightedWord="Engineered to Scale."
          supportingText="From high-speed Next.js flagships and retention-focused video to multi-channel ads and autonomous workflows—explore our 4 specialized creative departments."
        />

        {/* 2x2 Directory Grid of Dedicated Service Pages */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-7 sm:p-9 shadow-[6px_6px_0px_#171717] hover:bg-[#FAF9F6] hover:shadow-[8px_8px_0px_#FFC928] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span
                    className="font-hand text-2xl font-bold px-3.5 py-1 rounded-xl border-2 border-[#171717] text-[#171717] shadow-[2px_2px_0px_#171717]"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    Service {service.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    {renderDoodle(service.doodleType, service.accentColor)}
                  </div>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717] group-hover:underline decoration-[#FFC928] decoration-3 underline-offset-4">
                  {service.title}
                </h2>

                <p className="mt-3 text-base text-[#666666] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-[#171717]/15">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm font-bold text-[#171717]"
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-[#171717] flex items-center justify-center shrink-0"
                        style={{ backgroundColor: service.accentColor }}
                      >
                        <Check className="w-3 h-3 text-[#171717] stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t-2 border-[#171717]/15 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666666]">
                  <Clock className="w-3.5 h-3.5 text-[#171717]" />
                  {service.timelineEstimate}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] text-[#FAF9F6] text-xs sm:text-sm font-bold group-hover:bg-[#FFC928] group-hover:text-[#171717] border border-[#171717] transition-colors">
                  <span>View Dedicated Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ContactCTA />
    </PageTransition>
  );
}
