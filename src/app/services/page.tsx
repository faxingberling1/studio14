import React from "react";
import type { Metadata } from "next";
import { Check, Clock, Wrench } from "lucide-react";
import { servicesData } from "@/data/services";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  BrowserDoodle,
  ClapperboardDoodle,
  MegaphoneDoodle,
  GearsDoodle,
} from "@/components/doodles/StudioDoodles";

export const metadata: Metadata = {
  title: "Our Services — End-to-End Creative Solutions",
  description:
    "Explore Studio14's four core disciplines: Website Design & Development, Video Editing, Marketing, and Business Automations.",
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
        return <BrowserDoodle className="w-20 h-20" accentColor={color} />;
      case "clapperboard":
        return <ClapperboardDoodle className="w-20 h-20" accentColor={color} />;
      case "megaphone":
        return <MegaphoneDoodle className="w-20 h-20" accentColor={color} />;
      case "gears":
        return <GearsDoodle className="w-20 h-20" accentColor={color} />;
    }
  };

  return (
    <PageTransition className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          headline="End-to-End Creative Solutions"
          highlightedWord="Creative Solutions"
          supportingText="From concept to completion, we help your brand grow in the digital world."
        />

        {/* Quick Anchor Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F1EA] border-2 border-[#171717] text-sm font-bold text-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFC928] transition-colors"
            >
              <span className="font-hand text-base">{s.number}.</span>
              <span>{s.title}</span>
            </a>
          ))}
        </div>

        {/* Detailed Service Sections */}
        <div className="mt-16 space-y-16">
          {servicesData.map((service) => (
            <section
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#171717]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Overview & Illustration */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-hand text-2xl font-bold px-3.5 py-1 rounded-xl border-2 border-[#171717] text-[#171717]"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      Service {service.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                      {renderDoodle(service.doodleType, service.accentColor)}
                    </div>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#171717]">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Timeline & Core Scope */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#171717]">
                      <Clock className="w-4 h-4 text-[#171717]" />
                      <span>Typical Engagement: {service.timelineEstimate}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[#666666]">
                      <Wrench className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                      <div className="flex flex-wrap gap-1.5">
                        {service.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-[#F4F1EA] border border-[#171717]/20 text-[#171717] font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      href={`/contact?service=${encodeURIComponent(
                        service.title
                      )}`}
                      variant="primary"
                      size="md"
                      withArrow
                    >
                      Inquire About {service.shortTitle}
                    </Button>
                  </div>
                </div>

                {/* Right Column: Detailed Deliverables Breakdown */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717]">
                    <h3 className="font-hand text-2xl font-bold text-[#171717] mb-4">
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {service.deliverables.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-xl bg-[#F4F1EA] border border-[#171717]/25 space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#FFC928] border border-[#171717] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-[#171717] stroke-[3]" />
                            </span>
                            <h4 className="font-editorial text-base font-bold text-[#171717]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-7">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

