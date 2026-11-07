"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Code2,
  Video,
  Palette,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  FileCheck2,
  Clock,
  Laptop,
} from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";

type CategoryId =
  | "all"
  | "web-engineering"
  | "video-production"
  | "brand-creative"
  | "sprint-operations"
  | "ownership-billing";

interface KnowledgeArticle {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  readTime: string;
  summary: string;
  takeaways: string[];
  deepDive: {
    heading: string;
    paragraphs: string[];
  }[];
  accentColor: string;
}

interface FAQItem {
  id: string;
  category: CategoryId;
  question: string;
  answer: string;
}

const CATEGORIES: { id: CategoryId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Knowledge", icon: BookOpen },
  { id: "web-engineering", label: "Web & Tech Stack", icon: Code2 },
  { id: "video-production", label: "Video & Motion", icon: Video },
  { id: "brand-creative", label: "Brand Systems", icon: Palette },
  { id: "sprint-operations", label: "Sprint Workflows", icon: Layers },
  { id: "ownership-billing", label: "IP & Warranties", icon: ShieldCheck },
];

const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "kb-01-web-stack",
    category: "web-engineering",
    categoryLabel: "Web & Tech Stack",
    title: "Why We Build with Next.js & Shopify (No Clunky Page Builders)",
    readTime: "4 min read",
    summary:
      "A technical and commercial breakdown of why hand-coded modern frameworks drastically outperform bloated WordPress/Wix visual builders in conversion, SEO, and uptime.",
    accentColor: "#FFC928",
    takeaways: [
      "Sub-second First Contentful Paint (FCP) and 95+ Google Lighthouse mobile scores",
      "Zero vulnerability to fragile WordPress plugin conflicts and SQL injection exploits",
      "True editorial freedom with bespoke component blocks and hand-drawn SVG art",
    ],
    deepDive: [
      {
        heading: "The Real Cost of Slow Templates",
        paragraphs: [
          "Every additional second of page load time degrades mobile conversion by up to 20%. Template builders load megabytes of unused CSS, tracking scripts, and redundant jQuery wrappers that choke mobile processors.",
          "At Studio14, we build tailored web applications with React, Next.js, TypeScript, and Tailwind CSS. Static generation and edge caching deliver pages in under 800 milliseconds worldwide.",
        ],
      },
      {
        heading: "E-Commerce Architecture & Shopify Headless",
        paragraphs: [
          "For direct-to-consumer and B2B brands, we configure Shopify Liquid or Next.js Headless storefronts that synchronize seamlessly with ERP inventory, Stripe payments, and custom checkout funnels.",
        ],
      },
    ],
  },
  {
    id: "kb-02-video-pipeline",
    category: "video-production",
    categoryLabel: "Video & Motion",
    title: "The Studio14 Video Pipeline: Raw Footage to High-Retention Edits",
    readTime: "5 min read",
    summary:
      "How our post-production desk engineers 0–3 second visual hooks, kinetic captions, rhythm pacing, and master color grades for YouTube and vertical reels.",
    accentColor: "#F43F5E",
    takeaways: [
      "Drop-box transfer guidelines for 4K ProRes, Sony S-Log, and iPhone ProRes raw video",
      "Auditory mastering to broadcast standards (-14 LUFS for YouTube, -16 LUFS for Reels)",
      "Mixed-media motion overlays, hand-drawn chamakpatti motifs, and dynamic sound design",
    ],
    deepDive: [
      {
        heading: "Hook Engineering (The First 3 Seconds)",
        paragraphs: [
          "Over 65% of scrollers swipe away within the first 2.5 seconds. Our video editors use kinetic text overlays, pattern interrupts, and rhythmic micro-zooms to capture retention before delivering the core message.",
          "Each long-form video includes custom YouTube chapter cards, clickable timestamp funnels, and optimized thumbnail assets.",
        ],
      },
      {
        heading: "Asset Transfer & Cloud Footage Storage",
        paragraphs: [
          "Clients receive a dedicated high-speed cloud drive link. We accept raw footage in any major format (ProRes, BRAW, Log, MP4) and manage archive backups for 90 days post-delivery.",
        ],
      },
    ],
  },
  {
    id: "kb-03-sprint-cadence",
    category: "sprint-operations",
    categoryLabel: "Sprint Workflows",
    title: "How Our 2-Week Sprints Work: Alignment, Async Feedback, and Delivery",
    readTime: "3 min read",
    summary:
      "A transparent look into sprint planning, asynchronous Loom video updates, structured review milestones, and launch staging environments.",
    accentColor: "#06B6D4",
    takeaways: [
      "Direct maker collaboration with engineers and designers (no game of telephone)",
      "Private staging URLs deployed on Vercel for live testing before production launch",
      "2 Structured review rounds per milestone to keep timelines sharp and predictable",
    ],
    deepDive: [
      {
        heading: "Kickoff & Milestone Mapping",
        paragraphs: [
          "Every project begins with a 25-minute strategy call and a shared Notion dashboard. Sprints are broken into clear deliverables with fixed checkpoints.",
          "We communicate asynchronously via dedicated Slack channels and record 3-minute Loom video walkthroughs for every milestone submission.",
        ],
      },
      {
        heading: "Structured Revisions Without Drag",
        paragraphs: [
          "Each sprint includes 2 rounds of consolidated revisions. This allows your stakeholders to gather internal thoughts in one organized pass without timeline slippage.",
        ],
      },
    ],
  },
  {
    id: "kb-04-ip-ownership",
    category: "ownership-billing",
    categoryLabel: "IP & Warranties",
    title: "Client IP, Source Code Ownership & The 30-Day Launch Bug Warranty",
    readTime: "4 min read",
    summary:
      "Our ironclad promise on intellectual property: you own 100% of your source code, design files, and video project files upon final invoice settlement.",
    accentColor: "#10B981",
    takeaways: [
      "Full GitHub repository ownership transfer and domain DNS delegation",
      "30-Day complimentary post-launch bug warranty covering technical defects",
      "No proprietary lock-in: clean TypeScript code that any senior engineer can maintain",
    ],
    deepDive: [
      {
        heading: "100% Copyright Transfer",
        paragraphs: [
          "Unlike legacy agencies that hold your domain or code hostage, Studio14 transfers all rights, Figma assets, and GitHub repositories directly to your organization upon final milestone completion.",
          "You are free to host anywhere (Vercel, AWS, Cloudflare, Shopify) with complete independence.",
        ],
      },
      {
        heading: "30-Day Technical Bug Warranty",
        paragraphs: [
          "Every custom web project includes a 30-day warranty starting on the official launch date. If an unexpected bug, layout regression, or broken script appears, our engineering team fixes it with priority turnaround at zero extra cost.",
        ],
      },
    ],
  },
  {
    id: "kb-05-brand-deliverables",
    category: "brand-creative",
    categoryLabel: "Brand Systems",
    title: "Brand Deliverables Package: What You Actually Receive",
    readTime: "4 min read",
    summary:
      "The complete asset checklist provided with every Studio14 branding engagement: vector SVGs, color tokens, typography scales, social kits, and brand books.",
    accentColor: "#8B5CF6",
    takeaways: [
      "Scalable vector assets in SVG, EPS, PNG, and print-ready PDF formats",
      "Comprehensive typography hierarchy and open-source font pairing licenses",
      "Tailored social media template kits for Figma and Canva",
    ],
    deepDive: [
      {
        heading: "Complete Visual Identity System",
        paragraphs: [
          "A brand is far more than a simple logo mark. We deliver a complete visual grammar: primary marks, secondary emblems, custom iconography, and responsive favicons.",
          "Each brand book details clear usage rules, color accessibility contrasts (WCAG AAA), and spacing guidelines.",
        ],
      },
    ],
  },
  {
    id: "kb-06-automations-guide",
    category: "sprint-operations",
    categoryLabel: "Sprint Workflows",
    title: "Business Automations: Connecting Lead Forms, CRMs & Slack",
    readTime: "4 min read",
    summary:
      "How we eliminate 10+ hours of manual administrative data entry by connecting web capture forms to HubSpot, Notion, Slack alerts, and automated email drips.",
    accentColor: "#F59E0B",
    takeaways: [
      "Zero copy-pasting between forms, emails, and spreadsheet tables",
      "Instant lead qualification and real-time team notifications",
      "Enterprise webhook resilience with automated retry loops and error logging",
    ],
    deepDive: [
      {
        heading: "Turnkey Operational Pipelines",
        paragraphs: [
          "We architect visual automations using Make.com, Zapier, and custom REST APIs. Inquiries submitted on your website are instantly verified, mapped to client records, and pushed to your sales pipeline within seconds.",
        ],
      },
    ],
  },
];

const FAQS: FAQItem[] = [
  {
    id: "faq-01",
    category: "ownership-billing",
    question: "Who owns the code, design files, and final video renders?",
    answer:
      "You do. 100%. Upon final payment settlement, all intellectual property, GitHub repositories, Figma source files, 4K video masters, and graphic assets are fully transferred to your company. We do not charge licensing fees or retain ownership.",
  },
  {
    id: "faq-02",
    category: "web-engineering",
    question: "Where will our website be hosted, and what are the ongoing server costs?",
    answer:
      "We recommend hosting Next.js applications on Vercel or Cloudflare, and e-commerce stores on Shopify. These platforms offer exceptional 99.99% uptime, global CDN edge caching, and free SSL certificates. Server costs are billed directly to your own account (typically $0 to $20/month for standard sites).",
  },
  {
    id: "faq-03",
    category: "sprint-operations",
    question: "How do revisions work if we need changes during a project?",
    answer:
      "Every project milestone includes 2 structured revision rounds. You receive a private preview URL or video link, and we invite your team to leave consolidated feedback via Loom or Figma comments. We implement changes within 48–72 hours.",
  },
  {
    id: "faq-04",
    category: "video-production",
    question: "What is your typical turnaround time for video editing?",
    answer:
      "For individual short-form reels and TikTok cuts, our turnaround is 24–48 hours. For full-length YouTube documentary episodes (10–25 minutes), typical turnaround is 3–5 business days including sound design, kinetic title cards, and color grading.",
  },
  {
    id: "faq-05",
    category: "ownership-billing",
    question: "What does the 30-Day Launch Bug Warranty cover?",
    answer:
      "Our 30-day warranty covers any technical defect, layout bug, broken link, or script error that deviates from the approved scope. If something doesn't work as intended across modern browsers, we patch it immediately with top priority at no extra charge.",
  },
  {
    id: "faq-06",
    category: "brand-creative",
    question: "Can you design custom Pakistani Truck Art motifs for our brand?",
    answer:
      "Yes! Studio14 is famous for blending authentic cultural motifs—handcrafted truck art floral scallops, chamakpatti reflective stars, and Urdu calligraphy—with contemporary editorial layouts and graffiti aesthetics.",
  },
  {
    id: "faq-07",
    category: "sprint-operations",
    question: "How do we get started on a new project?",
    answer:
      "Simply fill out our 2-minute project brief on the Contact page. We will review your goals, evaluate timeline feasibility, and schedule an introductory alignment call within 1–2 business days.",
  },
];

export const KnowledgeBaseClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenAIChat = (query?: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-studio14-ai-chat", {
          detail: {
            query: query || "Tell me about the Studio14 Knowledge Base, IP ownership, and warranties",
          },
        })
      );
    }
  };

  const filteredArticles = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.takeaways.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FAF9F6] text-[#171717] pt-24 sm:pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* ========================================================
              1. HERO SECTION: Knowledge Base & Resource Center
          ======================================================== */}
          <div className="relative rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#171717] overflow-hidden">
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC928]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 max-w-3xl space-y-4">
              {/* Eyebrow with Truck Art Accent */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC928] border border-[#171717] text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Studio14 Resource Center</span>
                </span>

                <UrduBadge text="علم و آگاہی" subtitle="Knowledge & Insights" />
                <ChamakpattiStar size={18} color="#FFC928" />
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15]">
                Knowledge Base &amp; Client Guides
              </h1>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl">
                Clear, transparent answers about our engineering stacks, video pipelines,
                revision protocols, asset handoffs, and 30-day bug warranties. Everything
                you need to know about partnering with Studio14.
              </p>

              {/* Live Search Input */}
              <div className="pt-2">
                <div className="relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, stacks, revisions, IP ownership..."
                    aria-label="Search Knowledge Base"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-[#171717] text-sm font-medium text-[#171717] placeholder:text-[#666666]/60 shadow-[3px_3px_0px_#171717] focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#666666] hover:text-[#171717] px-2 py-1 rounded bg-[#EFECE4]"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              2. CATEGORY FILTER TABS
          ======================================================== */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[2px_2px_0px_#FFC928] -translate-y-0.5"
                      : "bg-white text-[#171717] border-[#171717]/25 hover:border-[#171717] hover:bg-[#F4F1EA]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* ========================================================
              3. FEATURED KNOWLEDGE ARTICLES (Interactive Accordions)
          ======================================================== */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                  Foundational Guides
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                  In-Depth Technical &amp; Operational Guides
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#666666]">
                {filteredArticles.length} Article{filteredArticles.length === 1 ? "" : "s"}
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="p-8 sm:p-12 text-center rounded-2xl bg-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] space-y-3">
                <HelpCircle className="w-8 h-8 text-[#666666] mx-auto" />
                <h3 className="font-editorial text-lg font-bold text-[#171717]">
                  No guides matched your search &ldquo;{searchQuery}&rdquo;
                </h3>
                <p className="text-xs text-[#666666] max-w-sm mx-auto">
                  Try broader terms like &ldquo;Next.js&rdquo;, &ldquo;video&rdquo;, or &ldquo;revisions&rdquo;, or reset the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FFC928] text-[#171717] text-xs font-bold border border-[#171717] shadow-[2px_2px_0px_#171717]"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => {
                  const isExpanded = expandedArticleId === article.id;
                  return (
                    <article
                      key={article.id}
                      className={`rounded-2xl bg-white border-2 border-[#171717] p-5 sm:p-6 shadow-[3px_3px_0px_#171717] transition-all flex flex-col justify-between ${
                        isExpanded ? "md:col-span-2 shadow-[5px_5px_0px_#FFC928]" : "hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717]"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#171717] text-[#171717]"
                            style={{ backgroundColor: article.accentColor }}
                          >
                            {article.categoryLabel}
                          </span>
                          <span className="text-[11px] font-mono text-[#666666] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#171717] leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                          {article.summary}
                        </p>

                        {/* Core Takeaways Checklist */}
                        <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#171717]/15 space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717] font-bold block">
                            Key Standard:
                          </span>
                          <ul className="space-y-1.5">
                            {article.takeaways.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-[#171717] flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Deep Dive Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pt-4 border-t border-[#171717]/15 space-y-4"
                            >
                              {article.deepDive.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-2">
                                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#171717]">
                                    {section.heading}
                                  </h4>
                                  {section.paragraphs.map((p, pIdx) => (
                                    <p
                                      key={pIdx}
                                      className="text-xs sm:text-sm text-[#666666] leading-relaxed"
                                    >
                                      {p}
                                    </p>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#171717]/10 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-[#FFC928] transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? "Collapse Guide" : "Read Full Deep Dive"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleOpenAIChat(`Tell me more about: ${article.title}`)}
                            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#2563EB] hover:underline cursor-pointer"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>Ask AI</span>
                          </button>

                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#666666] hover:text-[#171717]"
                          >
                            <span>Contact Team</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* ========================================================
              4. SEARCHABLE FAQ ACCORDION
          ======================================================== */}
          <div className="rounded-3xl bg-white border-2 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-[#171717]/15">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                  Immediate Answers
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                  Frequently Asked Questions
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#666666]">
                {filteredFaqs.length} FAQ{filteredFaqs.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="divide-y divide-[#171717]/10">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openFaqIds[faq.id];
                return (
                  <div key={faq.id} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="font-editorial text-base sm:text-lg font-bold text-[#171717] group-hover:text-[#FFC928] transition-colors">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg border-2 border-[#171717] flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? "bg-[#FFC928] rotate-180" : "bg-[#FAF9F6]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 text-[#171717]" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pt-3"
                        >
                          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              5. CLIENT ONBOARDING & PRE-FLIGHT CHECKLIST CARDS
          ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#FFFDF5] border-2 border-[#171717] p-6 shadow-[3px_3px_0px_#171717] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFC928] border-2 border-[#171717] flex items-center justify-center font-bold text-[#171717]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#171717]">
                Pre-Flight Creative Brief
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Everything required before writing a single line of code or cutting the first video frame: brand goals, typography files, domain DNS, and inspiration benchmarks.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:underline"
              >
                <span>Submit Your Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl bg-[#F0FDF4] border-2 border-[#171717] p-6 shadow-[3px_3px_0px_#171717] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981] border-2 border-[#171717] flex items-center justify-center font-bold text-white">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#171717]">
                Web Launch Checklist
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Our 18-point pre-launch protocol: OpenGraph social previews, dynamic XML sitemaps, Google Search Console indexing, 404 handlers, and SSL TLS encryption.
              </p>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:underline"
              >
                <span>Inspect Web Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl bg-[#EFF6FF] border-2 border-[#171717] p-6 shadow-[3px_3px_0px_#171717] space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6] border-2 border-[#171717] flex items-center justify-center font-bold text-white shadow-[2px_2px_0px_#171717]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#171717]">
                  Ask Studio14 AI
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Have questions about our stacks, code ownership, or 30-day bug warranty? Chat directly with our autonomous studio intelligence.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenAIChat("Tell me about the Studio14 Knowledge Base, IP ownership, and warranties")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3B82F6] text-white text-xs font-bold border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#2563EB] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
              >
                <span>Open Studio14 AI Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ========================================================
              6. STILL HAVE QUESTIONS? DIRECT CTA
          ======================================================== */}
          <div className="rounded-3xl bg-[#171717] text-[#FAF9F6] p-8 sm:p-12 border-3 border-[#171717] shadow-[8px_8px_0px_#FFC928] text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928] text-[#171717] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Maker Communication</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
              Have a Specific Technical or Creative Question?
            </h2>

            <p className="text-xs sm:text-sm text-[#FAF9F6]/75 max-w-lg mx-auto leading-relaxed">
              We love speaking directly with founders, marketers, and creative directors.
              Send us your brief or drop a note to our studio desk.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#FAF9F6] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-2"
              >
                <span>Start a Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenAIChat("What is Studio14's code ownership and 30-day bug warranty policy?")}
                className="px-6 py-3 rounded-full bg-[#3B82F6] text-white font-bold text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#FAF9F6] hover:bg-[#2563EB] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Studio14 AI</span>
              </button>

              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-full bg-transparent text-[#FAF9F6] font-bold text-sm border-2 border-[#FAF9F6]/30 hover:border-[#FAF9F6] transition-colors"
              >
                <span>Browse Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

