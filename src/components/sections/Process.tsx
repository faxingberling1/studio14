"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SpeechLightbulbDoodle,
  PencilNotebookDoodle,
  CreativeToolsDoodle,
  RocketDoodle,
} from "@/components/doodles/StudioDoodles";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Process: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const renderStepDoodle = (
    type: "speech-lightbulb" | "pencil-notebook" | "gears-tools" | "rocket"
  ) => {
    switch (type) {
      case "speech-lightbulb":
        return <SpeechLightbulbDoodle className="w-14 h-14" />;
      case "pencil-notebook":
        return <PencilNotebookDoodle className="w-14 h-14" />;
      case "gears-tools":
        return <CreativeToolsDoodle className="w-14 h-14" />;
      case "rocket":
        return <RocketDoodle className="w-14 h-14" />;
    }
  };

  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 bg-[#F4F1EA] border-t-2 border-b-2 border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Creative Process"
          headline="Simple. Transparent. Effective."
          highlightedWord="Transparent."
          supportingText="A streamlined process to turn your ideas into reality."
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-16">
          {/* Desktop Horizontal Animated Connecting Line */}
          <div
            className="hidden lg:block absolute top-14 left-12 right-12 h-6 pointer-events-none z-0"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1100 30"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <path
                d="M10 15C220 4 400 26 550 15C700 4 880 26 1090 15"
                stroke="#171717"
                strokeOpacity="0.2"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
              <motion.path
                d="M10 15C220 4 400 26 550 15C700 4 880 26 1090 15"
                stroke="#171717"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={
                  prefersReducedMotion
                    ? { pathLength: 1 }
                    : { pathLength: 0 }
                }
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div
            className="lg:hidden absolute top-8 bottom-8 left-7 w-1 bg-[#171717]/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Four Stages Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-row lg:flex-col items-start gap-5 lg:gap-0"
              >
                {/* Step Number Badge & Doodle Node */}
                <div className="flex lg:w-full items-center justify-between lg:mb-6">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFC928] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] shrink-0">
                    <span className="font-editorial text-xl font-bold text-[#171717]">
                      {step.number}
                    </span>
                  </div>

                  <motion.div
                    whileHover={
                      prefersReducedMotion ? undefined : { rotate: -6, scale: 1.08 }
                    }
                    className="hidden lg:flex p-2.5 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717]"
                  >
                    {renderStepDoodle(step.doodleType)}
                  </motion.div>
                </div>

                {/* Stage Card Content */}
                <div className="flex-1 w-full rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-shadow">
                  <div className="flex items-center justify-between lg:hidden mb-3">
                    <span className="font-hand text-lg font-bold text-[#666666]">
                      Stage {step.number}
                    </span>
                    <div className="p-1.5 rounded-xl bg-[#F4F1EA] border border-[#171717]/30">
                      {renderStepDoodle(step.doodleType)}
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#171717]">
                    {step.title}
                  </h3>
                  <p className="font-hand text-xl font-bold text-[#171717] mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="mt-2.5 text-sm sm:text-base text-[#666666] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables Pills */}
                  <div className="mt-4 pt-3.5 border-t border-[#171717]/10 flex flex-wrap gap-1.5">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F4F1EA] text-[#171717] border border-[#171717]/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

