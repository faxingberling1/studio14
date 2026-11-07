"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { InsightPost } from "@/types";
import { projectsData } from "@/data/projects";

const studioInsights: InsightPost[] = [
  {
    id: "insight-01",
    slug: "why-handcrafted-web-design-outperforms-templates",
    title: "Why Handcrafted Web Design Outperforms Generic Agency Templates",
    category: "Web Architecture",
    readTime: "4 min read",
    date: "Studio Note #01",
    excerpt:
      "How combining editorial typography, custom SVG illustration systems, and Next.js performance builds instant brand trust.",
  },
  {
    id: "insight-02",
    slug: "pacing-and-retention-in-short-form-video",
    title: "Rhythm & Retention: Structuring Video Edits That Hold Attention",
    category: "Video Editing",
    readTime: "5 min read",
    date: "Studio Note #02",
    excerpt:
      "Breaking down the first 3 seconds of visual hooks, kinetic typography, and sound design across YouTube and vertical social reels.",
  },
  {
    id: "insight-03",
    slug: "automating-creative-operations",
    title: "Practical Business Automations That Save 10+ Hours Every Week",
    category: "Automations",
    readTime: "4 min read",
    date: "Studio Note #03",
    excerpt:
      "Connecting lead capture forms, CRM pipelines, and onboarding sequences without fragile spreadsheet copy-pasting.",
  },
];

const featuredCaseStudies = projectsData.slice(0, 3);

export const StudioJournalAndCaseStudies: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] border-t-2 border-[#171717]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* INSIGHTS SECTION (#insights) */}
        <section id="insights" className="scroll-mt-28">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b-2 border-[#171717]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717] mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#171717]" />
                <span className="font-hand text-base font-bold text-[#171717]">
                  Studio14 Insights
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#171717]">
                Notes from the Studio Desk
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#666666] max-w-md">
              Field notes on web architecture, video storytelling, creative
              campaigns, and workflow automation.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {studioInsights.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#666666] mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#FFC928] text-[#171717] font-bold border border-[#171717]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#171717] group-hover:underline decoration-[#FFC928] decoration-2">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#666666] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#171717]/15 flex items-center justify-between">
                  <span className="font-hand text-base font-bold text-[#171717]">
                    {post.date}
                  </span>
                  <Link
                    href="/contact?topic=insights"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#171717] hover:underline"
                  >
                    <span>Discuss Topic</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURED CASE STUDIES SPOTLIGHT SECTION (#case-studies) */}
        <section id="case-studies" className="scroll-mt-28">
          <Reveal className="rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#171717]/15">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928] border border-[#171717]">
                  <Target className="w-3.5 h-3.5 text-[#171717]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                    Featured Case Studies
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#171717]">
                  Proof of Craft. Measurable Outcomes.
                </h2>
                <p className="text-sm sm:text-base text-[#666666] max-w-xl leading-relaxed">
                  A transparent look into how Studio14 solves complex brand, web, video,
                  and operational challenges for growing ventures.
                </p>
              </div>

              <Link
                href="/case-studies"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] transition-all self-start md:self-auto"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Featured Case Study Spotlight Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-2xl bg-white border-2 border-[#171717] p-5 sm:p-6 shadow-[3px_3px_0px_#171717] flex flex-col justify-between hover:shadow-[5px_5px_0px_#FFC928] hover:-translate-y-0.5 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#171717] text-[#171717]"
                        style={{ backgroundColor: study.accentColor }}
                      >
                        {study.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#666666]">
                        {study.tags[0]}
                      </span>
                    </div>

                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#171717] group-hover:underline decoration-[#FFC928] decoration-2">
                      <Link href={`/case-studies/${study.slug}`}>
                        {study.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                      {study.shortDescription}
                    </p>

                    <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#171717]/15 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                        The Approach:
                      </span>
                      <p className="text-[11px] text-[#171717] line-clamp-2">
                        {study.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#171717]/10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#171717]">
                      {study.deliverables.length} Deliverables
                    </span>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#171717] group-hover:text-[#FFC928] transition-colors"
                    >
                      <span>Read Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

