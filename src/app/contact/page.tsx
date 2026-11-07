import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Clock,
  Sparkles,
  Home,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Compass,
} from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { ContactForm } from "@/components/sections/ContactForm";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { FloralOrnament } from "@/components/growth-journey/doodles/FloralOrnament";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";
import { TruckCrown } from "@/components/growth-journey/doodles/TruckArtBorder";

export const metadata: Metadata = {
  title: "Contact Studio14 — Let's Talk & Build Together",
  description:
    "Ready to create something extraordinary? Get in touch with Studio14 via WhatsApp, email, or our interactive project brief for Web Design, Video Storytelling, Marketing & Scalability Automations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Studio14 — Let's Talk",
    description:
      "Start a conversation with our creative directors and lead engineers. Response guaranteed within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <PageTransition className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-[#FAF9F6]">
      {/* 1. Breadcrumbs Bar */}
      <div className="border-b border-[#171717]/10 bg-white/70 backdrop-blur-sm py-3 px-4 sm:px-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-[#171717]/70"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#171717] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-[#171717]/40" />
            <span className="text-[#171717] font-bold">Contact Studio14</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717]/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Studio Desk Online · Typical reply under 24h</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ChamakpattiStar size={20} color="#FFC928" />
            <UrduBadge text="رابطہ کیجیے" subtitle="Let's Connect" />
            <ChamakpattiStar size={20} color="#25D366" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC928] drop-shadow" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            Let&apos;s Talk. Turn Your Vision Into{" "}
            <span className="relative inline-block px-3 py-0.5 rounded-xl bg-[#FFC928] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] transform -rotate-1 text-[#171717]">
              Reality
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Whether you have a full technical specification, need an end-to-end
            growth sprint, or simply want to explore how Studio14 can elevate
            your brand, we&apos;re here to help.
          </p>
        </div>

        {/* 3. Direct Quick-Connect Action Cards (WhatsApp, Email, Strategy Call) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* WhatsApp Direct Chat Card */}
          <div className="relative p-6 rounded-3xl bg-white border-2 border-[#171717] shadow-[0_6px_0_0_#171717] flex flex-col justify-between hover:shadow-[0_8px_0_0_#171717] hover:-translate-y-0.5 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 fill-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Instant Chat
                </span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#171717]">
                Chat on WhatsApp
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-700 mt-1">
                +971 50 497 4967
              </p>
              <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                Connect directly with our studio team for quick questions, brief
                brainstorming, or urgent project timelines.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#171717]/10">
              <a
                href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>+971 50 497 4967 · Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="relative p-6 rounded-3xl bg-white border-2 border-[#171717] shadow-[0_6px_0_0_#171717] flex flex-col justify-between hover:shadow-[0_8px_0_0_#171717] hover:-translate-y-0.5 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFC928] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-[#171717]" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cream text-[#171717] text-[11px] font-mono font-bold border border-[#171717]/20">
                  <Clock className="w-3 h-3 text-[#171717]/60" />
                  &lt; 24h Reply
                </span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#171717]">
                Studio Desk Email
              </h3>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                Send us project briefs, RFPs, pitch decks, or collaboration
                proposals directly to our inbox.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#171717]/10">
              <a
                href="mailto:hello@studio14.creative"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FAF9F6] hover:bg-white text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>hello@studio14.creative</span>
              </a>
            </div>
          </div>

          {/* Discovery Consultation Card */}
          <div className="relative p-6 rounded-3xl bg-white border-2 border-[#171717] shadow-[0_6px_0_0_#171717] flex flex-col justify-between hover:shadow-[0_8px_0_0_#171717] hover:-translate-y-0.5 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-mono font-bold border border-blue-200">
                  1-on-1 Call
                </span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#171717]">
                25-Min Strategy Session
              </h3>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                Book a focused conversation with our founders to analyze your
                digital roadmap, audit bottlenecks, and map solutions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#171717]/10">
              <a
                href="#studio14-inquiry-form"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#171717] hover:bg-black text-white font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] transition-all"
              >
                <Calendar className="w-4 h-4 text-[#FFC928]" />
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Main Two-Column Layout: Studio Details & Interactive Form */}
        <div id="studio14-inquiry-form" className="mt-14 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: What Happens Next & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* What Happens Next Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#171717] shadow-[0_6px_0_0_#171717] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFC928] text-[#171717] flex items-center justify-center border border-[#171717] font-bold text-xs">
                    S14
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#171717]">
                    What Happens Next?
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-[#666666]">
                  3 Simple Steps
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Diagnostic & Review",
                    desc: "Within 24 hours, our creative director and engineering lead review your objectives and market landscape.",
                  },
                  {
                    step: "02",
                    title: "Discovery Conversation",
                    desc: "We schedule a focused 25-minute strategy call to align on scope, creative angle, and target deliverables.",
                  },
                  {
                    step: "03",
                    title: "Architectural Roadmap & Proposal",
                    desc: "You receive a clear, transparent scope proposal with fixed milestones, turnaround timelines, and transparent pricing.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-lg bg-[#FAF9F6] border-2 border-[#171717] text-[#171717] font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#171717]">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#171717]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Guarantee & Confidentiality Card */}
            <div className="p-6 rounded-3xl bg-[#FFFDF5] border-2 border-[#171717] shadow-[0_4px_0_0_#171717] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#171717]">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Our Studio Commitment</span>
              </div>
              <ul className="space-y-2 text-xs text-[#171717]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Strict NDA protection &amp; IP ownership on delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Direct founder involvement on every engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No junior hand-offs or outsourced agency templates</span>
                </li>
              </ul>
            </div>

            {/* Link to Growth Journey Card */}
            <div className="p-6 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#666666] block">
                  Not sure where to start?
                </span>
                <h4 className="text-sm font-bold text-[#171717] mt-0.5">
                  Explore the 6-Stage Growth Journey
                </h4>
              </div>
              <Link
                href="/growth-journey"
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFC928] text-[#171717] font-bold text-xs border border-[#171717] shadow-sm transition-all flex items-center gap-1 shrink-0"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
