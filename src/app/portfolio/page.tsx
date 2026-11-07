import React from "react";
import type { Metadata } from "next";
import { PageTransition } from "@/components/animations/PageTransition";
import { Portfolio } from "@/components/sections/Portfolio";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Our Work & Portfolio — Ideas That Make an Impact",
  description:
    "Explore Studio14's concept showcases and digital craft across Websites, Branding, Video & Content, and Marketing.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioIndexPage() {
  return (
    <PageTransition className="pt-16">
      <Portfolio />
      <ContactCTA />
    </PageTransition>
  );
}

