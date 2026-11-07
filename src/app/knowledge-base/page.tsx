import React from "react";
import type { Metadata } from "next";
import { KnowledgeBaseClient } from "./KnowledgeBaseClient";

export const metadata: Metadata = {
  title: "Knowledge Base & Client Guides | Studio14 Creative Studio",
  description:
    "Explore Studio14's comprehensive Knowledge Base: web engineering standards, video post-production pipelines, 2-week sprint workflows, revision protocols, and IP ownership charters.",
  alternates: {
    canonical: "/knowledge-base",
  },
  openGraph: {
    title: "Knowledge Base & Client Resource Center — Studio14",
    description:
      "Transparent guides on our Next.js stacks, video pipelines, sprint milestones, 30-day bug warranties, and asset handoffs.",
  },
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseClient />;
}

