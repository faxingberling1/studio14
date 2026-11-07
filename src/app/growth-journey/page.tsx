import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, Home, ChevronRight } from "lucide-react";
import { GrowthJourney } from "@/components/growth-journey/GrowthJourney";
import { Packages } from "@/components/sections/Packages";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Explore Your Growth Journey | Studio14 Creative Studio",
  description:
    "From an Idea to a Business Built for Growth. Explore Studio14's 6-stage immersive business development journey across brand identity, custom web engineering, creative ad studios, acquisition funnels, and automated operations.",
  openGraph: {
    title: "The Studio14 Growth Journey",
    description:
      "From an Idea to a Business Built for Growth. Discover our 6-stage roadmap for scalable ventures.",
  },
};

export default function GrowthJourneyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-24 sm:pt-28">
      {/* Top Breadcrumb Navigation Bar */}
      <div className="border-b border-charcoal/15 bg-white/70 backdrop-blur-sm py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-charcoal/70">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-charcoal transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-charcoal/40" />
            <span className="text-charcoal font-bold">The Growth Journey</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal/70 hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* The Master Interactive Growth Journey Experience */}
      <GrowthJourney />

      {/* The Complete Packages & Pricing Section */}
      <Packages />

      {/* Contact & Consultation Call to Action */}
      <ContactCTA />
    </main>
  );
}

