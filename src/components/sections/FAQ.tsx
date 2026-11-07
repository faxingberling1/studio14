"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { Lightbulb } from "@/components/doodles/Lightbulb";
import { Sparkle } from "@/components/doodles/Sparkle";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: "Services" | "Process" | "Pricing & Timelines";
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What core services does Studio14 specialize in?",
    answer:
      "We offer four integrated creative disciplines under one roof: Website Design & Development (Next.js, Shopify, WordPress), Video Editing (YouTube episodes, high-retention short-form reels, and promotional films), Marketing (organic strategy, SEO, and paid campaigns), and Business Automations (CRM funnels, Make, and Zapier pipelines). You can engage us for a single discipline or combine them into a unified studio sprint.",
    category: "Services",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Do you use generic website templates or AI page generators?",
    answer:
      "Never. We strongly believe modern brands need authentic visual personality to stand out. Every web project we build features custom editorial layouts, handcrafted SVG illustration systems, clean code, and zero bloated template locks. The result is a lightning-fast digital flagship designed specifically for your brand.",
    category: "Services",
  },
  {
    id: "faq-3",
    number: "03",
    question: "What are your typical project timelines?",
    answer:
      "Timelines depend on the discipline and scope: Website Design & Development engagements typically run 3 to 8 weeks; Video Editing projects range from 48-hour turnarounds for individual sprints to ongoing monthly creator retainers; Business Automations usually deploy within 1 to 4 weeks. We provide clear milestone calendars during our initial planning phase.",
    category: "Pricing & Timelines",
  },
  {
    id: "faq-4",
    number: "04",
    question: "How does the Studio14 creative process work?",
    answer:
      "Our process is transparent and structured across 4 stages: Discover (listening to your goals and auditing existing assets), Plan (crafting editorial wireframes, creative direction, and technical roadmaps), Create (collaborative sprints where design and engineering come to life), and Deliver (rigorous cross-device testing, deployment, and team onboarding).",
    category: "Process",
  },
  {
    id: "faq-5",
    number: "05",
    question: "How do you handle pricing and project proposals?",
    answer:
      "We believe in transparent, fixed-scope proposals without hidden fees. After an initial 25-minute discovery conversation, we provide a detailed project scope document outlining deliverables, milestones, and predictable pricing. For ongoing creative needs, we also offer flexible monthly studio retainers.",
    category: "Pricing & Timelines",
  },
  {
    id: "faq-6",
    number: "06",
    question: "What happens after launch? Do you provide support and training?",
    answer:
      "Yes! We don't just hand off code and disappear. Every project includes recorded video walkthroughs, documentation on updating your content or managing automations, and a post-launch support window. We also offer ongoing growth partnerships for brands that want continuous iteration.",
    category: "Process",
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Services", "Process", "Pricing & Timelines"];

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 bg-[#F4F1EA] border-t-2 border-[#171717] overflow-hidden"
    >
      {/* Decorative Floating Lightbulb Doodle */}
      <div className="hidden lg:block absolute top-12 left-10 pointer-events-none opacity-80">
        <Lightbulb size={60} />
      </div>

      <div className="hidden lg:block absolute bottom-12 right-12 pointer-events-none opacity-80">
        <Sparkle size={36} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative text-center">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            headline="Everything You Need to Know"
            highlightedWord="Need to Know"
            supportingText="Straightforward answers about our creative studio, disciplines, workflows, and collaboration."
          />
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FFC928] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717]"
                    : "bg-[#FAF9F6] text-[#666666] border-[#171717]/25 hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border-2 border-[#171717] transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF9F6] shadow-[5px_5px_0px_#FFC928]"
                    : "bg-[#FAF9F6] shadow-[3px_3px_0px_#171717] hover:shadow-[4px_4px_0px_#171717]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]"
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-hand text-lg font-bold px-2.5 py-0.5 rounded-lg border border-[#171717] shrink-0 leading-none transition-colors ${
                        isOpen ? "bg-[#FFC928]" : "bg-[#F4F1EA]"
                      }`}
                    >
                      {faq.number}
                    </span>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#171717] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#171717] shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#171717] text-[#FAF9F6] rotate-180"
                        : "bg-[#FFC928] text-[#171717]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#666666] leading-relaxed border-t border-[#171717]/10 ml-0 sm:ml-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom AI Companion & Question Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[6px_6px_0px_#171717] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC928]/35 border border-[#171717] text-xs font-bold text-[#171717] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#171717]" />
              <span>Studio14 Autonomous Assistant</span>
            </div>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#171717]">
              Have a question specific to your project?
            </h4>
            <p className="text-sm text-[#666666]">
              Ask our custom Studio14 AI assistant on the bottom-right or send us a project brief.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-[#FAF9F6] font-bold text-sm border-2 border-[#171717] hover:bg-[#FFC928] hover:text-[#171717] transition-all shadow-[2px_2px_0px_#FFC928]"
          >
            <span>Ask Our Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

