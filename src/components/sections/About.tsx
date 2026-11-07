"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Lightbulb as LightbulbIcon, Users, Target, X } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { AnimatedArrow } from "@/components/doodles/AnimatedArrow";
import { FloatingDoodle } from "@/components/doodles/FloatingDoodle";
import { Sparkle } from "@/components/doodles/Sparkle";
import { Button } from "@/components/ui/Button";

const valuePropositions = [
  {
    number: "01",
    title: "Innovative Solutions",
    description: "Creative thinking backed by practical execution.",
    icon: LightbulbIcon,
    accent: "#FFC928",
  },
  {
    number: "02",
    title: "Dedicated Team",
    description: "Skilled professionals working together.",
    icon: Users,
    accent: "#F28C5A",
  },
  {
    number: "03",
    title: "Client Focused",
    description: "Your goals and success come first.",
    icon: Target,
    accent: "#6BA3E8",
  },
];

export const About: React.FC = () => {
  const [studioModalOpen, setStudioModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#F4F1EA] border-t-2 border-b-2 border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN: Realistic Studio14 Workspace Frame + Play Button + Doodles (6 cols) */}
          <Reveal className="lg:col-span-6 relative">
            {/* Decorative Floating Sparkle */}
            <FloatingDoodle
              amplitudeY={6}
              amplitudeRotate={5}
              className="absolute -top-6 -left-3 z-20"
            >
              <div className="px-3 py-1.5 rounded-xl bg-[#FFC928] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] font-hand text-lg font-bold text-[#171717] transform -rotate-6">
                Inside Studio14 ✦
              </div>
            </FloatingDoodle>

            {/* Hand-Drawn Outer Photo Frame */}
            <div className="relative p-3 sm:p-5 rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#171717] transform -rotate-1">
              {/* Hand-drawn corner tape accents */}
              <div
                className="absolute -top-3 right-8 w-20 h-6 bg-[#FFC928]/85 border-2 border-[#171717] transform rotate-3 z-20"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 left-8 w-20 h-6 bg-[#FFC928]/85 border-2 border-[#171717] transform -rotate-2 z-20"
                aria-hidden="true"
              />

              {/* Studio Workspace Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#171717] bg-[#202020]">
                {/* Studio Collaboration & Desk Scene */}
                <div className="relative aspect-[4/3] w-full bg-[#EFECE4] p-5 sm:p-7 flex flex-col justify-between">
                  {/* Top Studio Wall Polaroids & Original Logo Frame */}
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5 rounded-xl overflow-hidden border-2 border-[#171717] bg-white shadow-[3px_3px_0px_#171717] p-2 transform -rotate-2">
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-[#171717]/20">
                        <Image
                          src="/logo/studio14-original.jpg"
                          alt="Studio14 Wall Frame"
                          fill
                          sizes="220px"
                          className="object-cover"
                        />
                      </div>
                      <p className="font-hand text-center text-sm font-bold text-[#171717] mt-1">
                        Our Founding Mark
                      </p>
                    </div>

                    <div className="col-span-7 space-y-3">
                      <div className="p-3.5 rounded-xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                          STUDIO CULTURE
                        </span>
                        <p className="font-editorial text-base sm:text-lg font-bold text-[#171717] mt-0.5">
                          Designers, Engineers &amp; Storytellers Under One Roof
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded-xl bg-[#FFC928]/35 border-2 border-[#171717]">
                          <p className="font-hand text-lg font-bold text-[#171717]">
                            4 Core Crafts
                          </p>
                          <p className="text-xs text-[#171717]/80">
                            Web • Video • Growth • Ops
                          </p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#6BA3E8]/30 border-2 border-[#171717]">
                          <p className="font-hand text-lg font-bold text-[#171717]">
                            100% Custom
                          </p>
                          <p className="text-xs text-[#171717]/80">
                            Built for your brand
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Studio Desk Sketch Strip */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#171717] text-[#FAF9F6] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#FFC928]">
                        STUDIO14 MANIFESTO
                      </p>
                      <p className="text-sm font-medium text-[#FAF9F6]/90">
                        &ldquo;Playful enough to be memorable. Sophisticated enough to build trust.&rdquo;
                      </p>
                    </div>
                    <Sparkle size={22} />
                  </div>

                  {/* Interactive Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => setStudioModalOpen(true)}
                    aria-label="Watch Inside Studio14 Culture Story"
                    className="group absolute inset-0 bg-[#171717]/15 hover:bg-[#171717]/35 transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC928]"
                  >
                    <span className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[4px_4px_0px_#171717] group-hover:scale-105 transition-transform">
                      <span className="w-8 h-8 rounded-full bg-[#171717] text-[#FFC928] flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </span>
                      <span>Inside Studio14</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Photo Frame Caption */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>FIG 04 — STUDIO14 CREATIVE WORKSHOP</span>
                <span className="font-hand text-base font-bold text-[#171717]">
                  اسٹوڈیو 14
                </span>
              </div>
            </div>

            {/* Animated Hand-Drawn Arrow Connecting Image to Content */}
            <div className="hidden lg:block absolute -right-10 bottom-8 z-20">
              <AnimatedArrow direction="loop-right" className="w-24 h-14" />
            </div>
          </Reveal>

          {/* RIGHT COLUMN: Editorial Copy & Three Value Propositions (6 cols) */}
          <Reveal delay={0.12} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#171717]">
                ABOUT STUDIO14
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] leading-[1.14]">
              More Than a Studio.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">A Creative Partner.</span>
                <span className="absolute -bottom-1.5 left-0 right-0 z-0">
                  <HandDrawnUnderline variant="wave" />
                </span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              We&apos;re more than a studio — we&apos;re your creative partner.
              From bold ideas to brilliant execution, Studio14 blends
              creativity, technology, and strategy to help your business grow in
              the digital world.
            </p>

            {/* Three Value Propositions */}
            <div className="space-y-3.5 pt-2">
              {valuePropositions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-1 transition-transform"
                  >
                    <div
                      className="w-11 h-11 rounded-xl border-2 border-[#171717] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      <IconComponent className="w-5 h-5 text-[#171717]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-hand text-base font-bold text-[#666666]">
                          {item.number}.
                        </span>
                        <h3 className="font-editorial text-lg font-bold text-[#171717]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-[#666666] mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="dark" size="lg" withArrow>
                Learn More
              </Button>
              <span className="font-hand text-xl font-bold text-[#666666]">
                Meet our philosophy &amp; approach
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Inside Studio14 Modal */}
      <AnimatePresence>
        {studioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/75 backdrop-blur-xs"
            onClick={() => setStudioModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Inside Studio14 Culture & Ethos"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#FFC928] p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b-2 border-[#171717]/15 pb-4">
                <span className="font-hand text-2xl font-bold text-[#171717]">
                  Inside Studio14 — How We Work
                </span>
                <button
                  type="button"
                  onClick={() => setStudioModalOpen(false)}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-full bg-[#FAF9F6] border-2 border-[#171717] flex items-center justify-center hover:bg-[#FFC928] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-base text-[#171717] leading-relaxed">
                At Studio14, every project begins with a real conversation and a
                blank sketchbook. Rather than forcing your brand into a rigid
                agency template, our designers, web engineers, video editors, and
                automation architects collaborate directly with you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#F4F1EA] border-2 border-[#171717]">
                  <p className="font-editorial font-bold text-[#171717]">
                    Craft Over Hype
                  </p>
                  <p className="text-xs text-[#666666] mt-1">
                    Clean architecture, thoughtful typography, and zero bloat.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F4F1EA] border-2 border-[#171717]">
                  <p className="font-editorial font-bold text-[#171717]">
                    Direct Collaboration
                  </p>
                  <p className="text-xs text-[#666666] mt-1">
                    Work directly with the makers crafting your project.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F4F1EA] border-2 border-[#171717]">
                  <p className="font-editorial font-bold text-[#171717]">
                    Built to Scale
                  </p>
                  <p className="text-xs text-[#666666] mt-1">
                    Documentation, training, and maintainable systems.
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  href="/about"
                  variant="primary"
                  size="sm"
                  withArrow
                  onClick={() => setStudioModalOpen(false)}
                >
                  Read Full Studio Story
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

