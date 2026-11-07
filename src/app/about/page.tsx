import React from "react";
import type { Metadata } from "next";
import { PageTransition } from "@/components/animations/PageTransition";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Studio14 — More Than a Studio. A Creative Partner.",
  description:
    "Learn how Studio14 blends creativity, technology, and strategy across web development, video editing, marketing, and business automations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageTransition className="pt-16">
      <About />
      <Process />
      <ContactCTA />
    </PageTransition>
  );
}

