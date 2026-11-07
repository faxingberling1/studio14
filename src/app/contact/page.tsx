import React from "react";
import type { Metadata } from "next";
import { Mail, Clock, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";

export const metadata: Metadata = {
  title: "Contact Studio14 — Start a Conversation",
  description:
    "Have an idea, a project, or a challenge? Get in touch with Studio14 to discuss Website Design & Development, Video Editing, Marketing, or Business Automations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageTransition className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          headline="Ready to Create Something Amazing?"
          highlightedWord="Something Amazing?"
          supportingText="Have an idea, a project, or a challenge? Let's turn it into something extraordinary."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Studio Desk Info & Expectations (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[5px_5px_0px_#171717] space-y-5">
              <Studio14Logo variant="navbar" />
              <p className="text-sm text-[#666666] leading-relaxed">
                Whether you have a full technical specification or a rough idea
                sketched on a napkin, we&apos;d love to hear from you.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#171717]/15 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#171717] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-mono uppercase text-[#666666]">
                      Direct Email (Placeholder)
                    </span>
                    <a
                      href="mailto:hello@studio14.creative"
                      className="font-bold text-[#171717] hover:underline"
                    >
                      hello@studio14.creative
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#171717] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-mono uppercase text-[#666666]">
                      Response Time
                    </span>
                    <span className="font-bold text-[#171717]">
                      Within 1–2 Business Days
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFC928]/25 border-2 border-[#171717] space-y-2">
              <div className="flex items-center gap-2 font-hand text-xl font-bold text-[#171717]">
                <Sparkles className="w-4 h-4" />
                <span>What Happens Next?</span>
              </div>
              <ol className="text-xs sm:text-sm text-[#171717]/85 space-y-2 list-decimal list-inside font-medium">
                <li>We review your project goals and requirements.</li>
                <li>We schedule a 25-minute discovery conversation.</li>
                <li>You receive a clear roadmap, timeline, and scope.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Form (8 cols) */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

