"use client";

import React from "react";
import { HandDrawnCircle } from "@/components/doodles/HandDrawnCircle";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { PaperPlane } from "@/components/doodles/PaperPlane";
import { AnimatedArrow } from "@/components/doodles/AnimatedArrow";
import { Sparkle } from "@/components/doodles/Sparkle";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/animations/Reveal";

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-[#F4F1EA] border-t-2 border-[#171717] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Final CTA Card */}
        <Reveal className="relative rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#171717] px-6 py-14 sm:px-12 sm:py-20 text-center overflow-hidden">
          {/* Animated Paper Plane Top Right */}
          <div className="hidden md:block absolute top-6 right-8">
            <PaperPlane size={130} withTrail />
          </div>

          {/* Decorative Sparkles */}
          <Sparkle
            size={32}
            className="hidden sm:block absolute top-10 left-12"
          />
          <Sparkle
            size={24}
            className="hidden sm:block absolute bottom-10 right-16"
          />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="inline-block font-hand text-2xl font-bold text-[#171717] px-4 py-1 rounded-full bg-[#FFC928]/40 border border-[#171717]">
              Let&apos;s Collaborate ✦
            </span>

            {/* Headline with Large Hand-Drawn Circular Outline */}
            <div className="relative inline-block px-4 py-3 sm:px-8 sm:py-5">
              <HandDrawnCircle
                color="#FFC928"
                strokeWidth={4}
                className="absolute inset-0 w-full h-full"
              />
              <h2 className="relative z-10 font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171717] leading-[1.12]">
                Ready to Create{" "}
                <span className="relative inline-block">
                  Something Amazing?
                  <span className="absolute -bottom-1 left-0 right-0">
                    <HandDrawnUnderline variant="wave" color="#171717" strokeWidth={3} />
                  </span>
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Have an idea, a project, or a challenge? Let&apos;s turn it into
              something extraordinary.
            </p>

            {/* Primary CTA Button + Decorative Hand-Drawn Arrow */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedArrow
                direction="right"
                className="hidden sm:block w-24 h-12 -mr-2"
              />
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Get in Touch
              </Button>
              <a
                href="#studio14-inquiry-form"
                className="px-5 py-3 rounded-full text-sm font-bold text-[#171717] underline decoration-[#FFC928] decoration-2 underline-offset-4 hover:bg-[#FFC928]/20 transition-colors"
              >
                Or fill out the brief below ↓
              </a>
            </div>
          </div>
        </Reveal>

        {/* Direct Interactive Contact Form Anchor */}
        <div id="studio14-inquiry-form" className="mt-14 scroll-mt-28">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

