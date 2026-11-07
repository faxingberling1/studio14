"use client";

import React from "react";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { Reveal } from "@/components/animations/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  headline: string;
  highlightedWord?: string;
  supportingText?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  headline,
  highlightedWord,
  supportingText,
  align = "center",
  className = "",
}) => {
  const isCentered = align === "center";

  const renderHeadline = () => {
    if (!highlightedWord || !headline.includes(highlightedWord)) {
      return headline;
    }
    const parts = headline.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10">{highlightedWord}</span>
          <span className="absolute -bottom-1.5 left-0 right-0 z-0">
            <HandDrawnUnderline variant="double" />
          </span>
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <Reveal
      className={`max-w-3xl ${
        isCentered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/25 border border-[#171717]/20 mb-4 ${
          isCentered ? "mx-auto" : ""
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#FFC928] border border-[#171717]" />
        <span className="font-hand text-lg font-bold tracking-wide text-[#171717]">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15]">
        {renderHeadline()}
      </h2>

      {supportingText && (
        <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed">
          {supportingText}
        </p>
      )}
    </Reveal>
  );
};

