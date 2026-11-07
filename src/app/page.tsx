import React from "react";
import { Hero } from "@/components/sections/Hero";
import { GrowthJourneyTeaser } from "@/components/growth-journey/GrowthJourneyTeaser";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { StudioJournalAndCaseStudies } from "@/components/sections/StudioJournalAndCaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GrowthJourneyTeaser />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <StudioJournalAndCaseStudies />
      <FAQ />
      <ContactCTA />
    </>
  );
}
