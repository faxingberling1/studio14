"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Briefcase } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { InsightPost, CareerRole } from "@/types";

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

const openRoles: CareerRole[] = [
  {
    id: "role-01",
    title: "Creative Frontend Engineer (Next.js & Motion)",
    type: "Full-Time / Remote",
    location: "Remote",
    department: "Engineering",
    summary:
      "Build expressive, accessible web experiences with React, TypeScript, Tailwind CSS, and Framer Motion.",
  },
  {
    id: "role-02",
    title: "Senior Video Editor & Motion Storyteller",
    type: "Full-Time / Contract",
    location: "Remote",
    department: "Post-Production",
    summary:
      "Craft high-retention YouTube episodes, promotional brand films, and mixed-media social reels.",
  },
];

export const StudioJournalAndCareers: React.FC = () => {
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

        {/* CAREERS SECTION (#careers) */}
        <section id="careers" className="scroll-mt-28">
          <Reveal className="rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928] border border-[#171717]">
                  <Briefcase className="w-3.5 h-3.5 text-[#171717]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                    Careers at Studio14
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                  Join Makers Who Care About Craft
                </h2>
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  We&apos;re always eager to meet curious designers, developers,
                  video editors, and growth strategists who love building things
                  with personality.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {openRoles.map((role) => (
                  <div
                    key={role.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] hover:border-[#171717] shadow-[3px_3px_0px_#171717]"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFC928]/40 border border-[#171717] text-[#171717]">
                          {role.department}
                        </span>
                        <span className="text-xs font-mono text-[#666666]">
                          {role.type}
                        </span>
                      </div>
                      <h3 className="font-editorial text-lg font-bold text-[#171717]">
                        {role.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                        {role.summary}
                      </p>
                    </div>
                    <Link
                      href={`/contact?role=${encodeURIComponent(role.title)}`}
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171717] text-[#FAF9F6] text-xs font-bold hover:bg-[#FFC928] hover:text-[#171717] border border-[#171717] transition-colors self-start sm:self-center"
                    >
                      <span>Apply / Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

