"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Cog,
  Database,
  BarChart3,
  Mail,
  Users,
} from "lucide-react";
import { FloralOrnament } from "./doodles/FloralOrnament";

interface WorkflowNode {
  id: string;
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  automationRole: string;
  humanTimeSaved: string;
  connectedTool: string;
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: "inquiry",
    num: "01",
    title: "New Inquiry",
    icon: Mail,
    accent: "#FFC928",
    automationRole:
      "Website form triggers a webhook instantly, validating customer data, formatting phone numbers, and deduplicating entries.",
    humanTimeSaved: "15 mins per lead",
    connectedTool: "Next.js Webhook & Zod",
  },
  {
    id: "crm",
    num: "02",
    title: "CRM Entry",
    icon: Database,
    accent: "#06B6D4",
    automationRole:
      "Creates or updates contact record in HubSpot / Notion, assigns deal stage, and tags service interests automatically.",
    humanTimeSaved: "20 mins per lead",
    connectedTool: "HubSpot / Notion API",
  },
  {
    id: "followup",
    num: "03",
    title: "Automated Follow-Up",
    icon: Zap,
    accent: "#F97316",
    automationRole:
      "Fires a personalized email confirmation and SMS/WhatsApp ping with a booking link, calendar invite, and client onboarding prep.",
    humanTimeSaved: "30 mins per lead",
    connectedTool: "Make.com & Twilio/Resend",
  },
  {
    id: "sales",
    num: "04",
    title: "Sales Team Alert",
    icon: Users,
    accent: "#DC2626",
    automationRole:
      "Posts an actionable rich card to the internal Slack channel with company background, notes, and 1-click meeting link.",
    humanTimeSaved: "10 mins per lead",
    connectedTool: "Slack Webhooks & Google Meet",
  },
  {
    id: "conversion",
    num: "05",
    title: "Client Conversion",
    icon: CheckCircle2,
    accent: "#059669",
    automationRole:
      "Digital contract signature triggers automated invoice generation, client Slack channel creation, and project folder setup.",
    humanTimeSaved: "45 mins per client",
    connectedTool: "DocuSign / Stripe / Google Drive",
  },
  {
    id: "reporting",
    num: "06",
    title: "Reporting & Insights",
    icon: BarChart3,
    accent: "#1D4ED8",
    automationRole:
      "Aggregates CAC, conversion rates, and sprint milestones into a unified executive dashboard for weekly review.",
    humanTimeSaved: "4 hours weekly",
    connectedTool: "Looker Studio & BigQuery / Sheet",
  },
];

export const BusinessWorkflow: React.FC = () => {
  const [comparisonTab, setComparisonTab] = useState<"after" | "before">("after");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("inquiry");

  const selectedNode =
    WORKFLOW_NODES.find((n) => n.id === selectedNodeId) || WORKFLOW_NODES[0];

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#1D4ED8] text-left">
      {/* Header with Before/After Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b-2 border-[#171717]/15">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717] flex items-center gap-1.5">
            <Workflow className="w-4 h-4 text-[#1D4ED8]" />
            From Chaos to Clarity: Operational Scalability
          </span>
          <p className="text-xs text-[#666666]">
            Explore how connected backend automations save 10+ hours every week.
          </p>
        </div>

        {/* Before vs After Switcher */}
        <div className="inline-flex items-center p-1 rounded-full bg-[#EFECE4] border-2 border-[#171717] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setComparisonTab("before")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              comparisonTab === "before"
                ? "bg-[#DC2626] text-[#FAF9F6] shadow-xs"
                : "text-[#666666] hover:text-[#171717]"
            }`}
          >
            Chaos (Disconnected)
          </button>
          <button
            type="button"
            onClick={() => setComparisonTab("after")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              comparisonTab === "after"
                ? "bg-[#1D4ED8] text-[#FAF9F6] shadow-xs"
                : "text-[#666666] hover:text-[#171717]"
            }`}
          >
            Clarity (Connected Systems)
          </button>
        </div>
      </div>

      {/* Comparison Viewport */}
      {comparisonTab === "before" ? (
        <motion.div
          key="chaos"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 rounded-2xl bg-[#EFECE4] border-2 border-dashed border-[#DC2626]/40 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            "Disconnected tools with zero sync",
            "Manual copy-pasting between spreadsheets",
            "Unorganized inquiries lost in cluttered inboxes",
            "Inconsistent follow-ups that cause leads to go cold",
            "Repetitive admin tasks that drain creative energy",
            "Zero real-time performance or conversion visibility",
          ].map((pain, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-[#DC2626] font-medium">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{pain}</span>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="mt-6 space-y-6">
          {/* Interactive 6-Node Horizontal Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {WORKFLOW_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#171717] text-[#FAF9F6] border-[#171717] shadow-[3px_3px_0px_#1D4ED8] -translate-y-0.5"
                      : "bg-[#F4F1EA] text-[#171717] border-[#171717]/25 hover:border-[#171717] hover:bg-[#FAF9F6]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center text-[#171717]"
                      style={{ backgroundColor: node.accent }}
                    >
                      {node.num}
                    </span>
                    <Icon className="w-3.5 h-3.5 opacity-70" />
                  </div>
                  <span className="font-editorial text-xs sm:text-sm font-bold block truncate">
                    {node.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Node Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="p-6 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold border border-[#171717]"
                    style={{ backgroundColor: selectedNode.accent, color: "#171717" }}
                  >
                    NODE {selectedNode.num}
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#171717]">
                    {selectedNode.title} Automation
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                  {selectedNode.automationRole}
                </p>
              </div>

              <div className="md:col-span-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#171717]/30 space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#666666] block">
                    TIME SAVED PER LEAD
                  </span>
                  <span className="font-bold text-[#059669] text-sm">
                    {selectedNode.humanTimeSaved}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#666666] block">
                    CONNECTED INTEGRATION
                  </span>
                  <span className="font-bold text-[#171717]">
                    {selectedNode.connectedTool}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

