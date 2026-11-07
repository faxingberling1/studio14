"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MessageCircle,
  HelpCircle,
  UserCheck,
  Award,
  Repeat,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { DecorativeBird } from "./doodles/DecorativeBird";
import { FloralOrnament } from "./doodles/FloralOrnament";

interface JourneyStageItem {
  id: string;
  step: string;
  title: string;
  customerExperience: string;
  businessAction: string;
  studioRole: string[];
  systemMockup: {
    type: "chat" | "crm" | "pipeline" | "retention";
    badge: string;
    details: string;
  };
}

const JOURNEY_STAGES: JourneyStageItem[] = [
  {
    id: "visitor",
    step: "01",
    title: "Curious Visitor",
    customerExperience:
      "Browses your website or reels, reads client case studies, and checks if your brand solves their specific problem.",
    businessAction:
      "Present a clear value proposition, build immediate trust with social proof, and provide an effortless way to reach out.",
    studioRole: [
      "Intuitive navigation & fast-loading Next.js architecture",
      "Compelling storytelling & transparent portfolio showcases",
      "Clear call-to-actions placed at natural reading pauses",
    ],
    systemMockup: {
      type: "chat",
      badge: "WEBSITE INTERACTION",
      details: "Visitor spends 2m 45s on Services and clicks 'Let’s Create'.",
    },
  },
  {
    id: "inquiry",
    step: "02",
    title: "Initial Inquiry",
    customerExperience:
      "Submits a short project brief or sends a direct message asking about capabilities, turnaround, and pricing.",
    businessAction:
      "Acknowledge the message instantly so the prospect feels heard and knows the exact timeline for a response.",
    studioRole: [
      "Custom multi-step inquiry form with instant validation",
      "Automated acknowledgement email with a personal founder note",
      "Instant notification pushed to your team's Slack or phone",
    ],
    systemMockup: {
      type: "chat",
      badge: "INCOMING BRIEF",
      details: "Ayesha (Chai & Co.): 'Interested in custom Shopify development & brand identity.'",
    },
  },
  {
    id: "conversation",
    step: "03",
    title: "Discovery Dialogue",
    customerExperience:
      "Attends a 25-minute focused discovery call; feels listened to rather than subjected to an aggressive sales pitch.",
    businessAction:
      "Listen closely, diagnose business bottlenecks, and determine if there is a genuine mutual fit.",
    studioRole: [
      "Automated Calendly / Google Calendar scheduling sync",
      "Pre-call questionnaire to save meeting time for strategy",
      "Recorded meeting recap & key requirement checklist",
    ],
    systemMockup: {
      type: "pipeline",
      badge: "CALENDAR SYNC",
      details: "Discovery Session confirmed: Friday, 3:00 PM via Google Meet.",
    },
  },
  {
    id: "qualified",
    step: "04",
    title: "Qualified Lead",
    customerExperience:
      "Receives a transparent scope of work document with clear deliverables, timeline estimates, and milestones.",
    businessAction:
      "Deliver a tailored proposal quickly while momentum is strong, answering any technical or timeline questions.",
    studioRole: [
      "HubSpot / CRM deal pipeline tracking & status updates",
      "Standardized proposal generator with clear scope boundaries",
      "Automated follow-up triggers if unread after 48 hours",
    ],
    systemMockup: {
      type: "crm",
      badge: "CRM DEAL STAGE",
      details: "Deal: Chai & Co. Flagship • Stage: Scope Review • Owner: Studio Team",
    },
  },
  {
    id: "customer",
    step: "05",
    title: "Delighted Customer",
    customerExperience:
      "Experiences collaborative sprints, regular video progress updates, and a transparent staging environment.",
    businessAction:
      "Execute with excellence, respect milestone deadlines, and communicate clearly without jargon.",
    studioRole: [
      "Dedicated client portal in Notion / Slack channel",
      "Weekly milestone Loom video recaps and sprint demos",
      "Rigorous quality assurance before final launch deployment",
    ],
    systemMockup: {
      type: "pipeline",
      badge: "ACTIVE SPRINT",
      details: "Sprint 03: Storefront Checkout & SVG Animations • Status: On Schedule",
    },
  },
  {
    id: "returning",
    step: "06",
    title: "Brand Advocate",
    customerExperience:
      "Celebrates successful launch results; returns for ongoing marketing campaigns or refers fellow business owners.",
    businessAction:
      "Nurture the relationship post-launch with performance audits, check-in calls, and ongoing iteration support.",
    studioRole: [
      "Post-launch 30-day technical warranty & check-in",
      "Automated client satisfaction review requests",
      "Ongoing monthly retainer sprints for marketing & scale",
    ],
    systemMockup: {
      type: "retention",
      badge: "RETENTION & REFERRAL",
      details: "5-Star Review received • Client requested Q2 Marketing & Automations Sprints.",
    },
  },
];

export const CustomerJourney: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("conversation");
  const active = JOURNEY_STAGES.find((s) => s.id === selectedId) || JOURNEY_STAGES[0];

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#059669] text-left">
      {/* Top Banner with Truck Art Bird */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717] flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#DC2626] fill-current" />
            Turn Attention into Long-Term Customer Loyalty
          </span>
          <p className="text-xs text-[#666666]">
            Follow a prospect&apos;s complete emotional journey from first impression to brand advocate.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <DecorativeBird size={42} />
        </div>
      </div>

      {/* Horizontal Stage Stepper */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-6 gap-2">
        {JOURNEY_STAGES.map((st) => {
          const isSelected = st.id === selectedId;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => setSelectedId(st.id)}
              className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[3px_3px_0px_#059669] -translate-y-0.5"
                  : "bg-[#F4F1EA] text-[#171717] border-[#171717]/25 hover:border-[#171717] hover:bg-[#FAF9F6]"
              }`}
            >
              <span className="font-mono text-xs font-bold block opacity-70">
                STAGE {st.step}
              </span>
              <span className="font-editorial text-sm font-bold block mt-0.5 leading-snug">
                {st.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          {/* Left: Journey Narrative (7 cols) */}
          <div className="md:col-span-7 p-6 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#059669] text-[#FAF9F6] text-xs font-mono font-bold">
                STAGE {active.step}
              </span>
              <h4 className="font-editorial text-xl font-bold text-[#171717]">
                {active.title}
              </h4>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono uppercase font-bold text-[#1D4ED8]">
                CUSTOMER PERSPECTIVE:
              </p>
              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                {active.customerExperience}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono uppercase font-bold text-[#059669]">
                WHAT THE BUSINESS MUST DO:
              </p>
              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                {active.businessAction}
              </p>
            </div>

            <div className="pt-2 border-t border-[#171717]/15">
              <p className="text-xs font-bold text-[#171717] mb-1.5">
                Studio14 Process Support:
              </p>
              <ul className="space-y-1 text-xs text-[#666666]">
                {active.studioRole.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Simulated CRM & Communication Mockup (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-[#171717] text-[#FAF9F6] border-2 border-[#171717] shadow-[4px_4px_0px_#FFC928] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#FAF9F6]/20">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FFC928] text-[#171717] font-bold">
                  {active.systemMockup.badge}
                </span>
                <Sparkles className="w-4 h-4 text-[#FFC928]" />
              </div>

              <div className="p-4 rounded-xl bg-[#2A2A2A] border border-[#FAF9F6]/15 space-y-2">
                <p className="text-xs font-mono text-[#06B6D4]">
                  SYSTEM ACTIVITY LOG
                </p>
                <p className="text-xs text-[#FAF9F6]/90 leading-relaxed font-mono">
                  {active.systemMockup.details}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#FAF9F6]/15 flex items-center justify-between text-xs text-[#FAF9F6]/70">
              <span>Connected System</span>
              <span className="font-bold text-[#FFC928]">CRM &amp; Automations</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

