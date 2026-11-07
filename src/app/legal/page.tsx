import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Award,
  FileText,
  Lock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";

export const metadata: Metadata = {
  title: "Legal Portal & Governance — Studio14 Creative Studio",
  description:
    "Explore Studio14's complete legal directory: Terms & Conditions, Privacy Policy, and Project Ownership Charters.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPortalPage() {
  const documents = [
    {
      title: "Terms & Conditions",
      slug: "/terms",
      icon: Scale,
      badge: "Master Services Agreement",
      color: "#FFC928",
      description:
        "Client engagement structure, sprint milestones, revision policies, 30-day bug warranties, payment terms, and limitation of liability.",
      highlights: [
        "100% Project Ownership on final payment",
        "2 Structured revision rounds included per sprint",
        "30-Day launch bug warranty on custom web builds",
      ],
    },
    {
      title: "Privacy Policy",
      slug: "/privacy",
      icon: ShieldCheck,
      badge: "GDPR & CCPA Compliant",
      color: "#10B981",
      description:
        "Full disclosure on information collection, project brief confidentiality, third-party data processors (Vercel, Resend), and your international privacy rights.",
      highlights: [
        "Zero data selling or third-party brokering",
        "Encrypted project brief submissions (TLS 1.3)",
        "Strict client NDA adherence for unreleased work",
      ],
    },
    {
      title: "Client IP & Ownership Charter",
      slug: "/terms#ownership",
      icon: Award,
      badge: "Client Protection",
      color: "#06B6D4",
      description:
        "Complete transparency regarding code ownership, video renders, graphic files, and brand deliverables. You own what you pay for.",
      highlights: [
        "Full copyright transfer on custom source code",
        "Unrestricted commercial usage rights",
        "Optional white-label / private portfolio embargo",
      ],
    },
  ];

  return (
    <PageTransition className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Urdu Badge */}
        <div className="flex items-center gap-2 mb-4">
          <ChamakpattiStar size={18} color="#FFC928" />
          <UrduBadge text="قانونی پورٹل" subtitle="Legal Portal & Governance" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Lock className="w-3.5 h-3.5 text-[#171717]" />
            <span>TRANSPARENT CLIENT PROTECTION</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            Legal Hub &amp; Client Governance
          </h1>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Welcome to the Studio14 legal portal. Here you will find our complete
            governance documentation, intellectual property ownership agreements,
            and privacy guarantees designed for transparent, long-term partnerships.
          </p>
        </div>

        {/* 3 Core Legal Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.title}
                className="group relative rounded-3xl bg-white border-3 border-[#171717] p-6 sm:p-7 shadow-[6px_6px_0px_#171717] hover:shadow-[8px_8px_0px_#FFC928] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center text-[#171717]"
                      style={{ backgroundColor: doc.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#171717] border border-[#171717]/20">
                      {doc.badge}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl font-bold text-[#171717] mb-2">
                    {doc.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-5">
                    {doc.description}
                  </p>

                  <div className="pt-4 border-t border-[#171717]/10 space-y-2">
                    {doc.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-[#171717]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#171717]/10">
                  <Link
                    href={doc.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] group-hover:text-[#FFC928] group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Full Document</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Section: Project Ownership Deep-Dive */}
        <div className="mt-14 rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-8 sm:p-10 shadow-[8px_8px_0px_#171717]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#10B981]/20 text-[#047857] text-xs font-bold border border-[#047857]/30">
                <Award className="w-3.5 h-3.5" />
                <span>FAIR CREATIVE PARTNERSHIP</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                Project Ownership &amp; Intellectual Property Transfer
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                When you collaborate with Studio14, you are not merely renting our
                work. Once all milestone invoices are fully settled, 100% of final bespoke
                assets — including raw application source code, Figma files, master video
                renders, and database schemas — belong exclusively to you.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                href="/terms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                <span>Read Ownership Clauses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mutual NDA Request & Direct Contact */}
        <div className="mt-14 p-8 rounded-3xl bg-[#FAF9F6] border-2 border-[#171717]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-editorial text-xl font-bold text-[#171717]">
              Need a Mutual Non-Disclosure Agreement (NDA)?
            </h4>
            <p className="text-xs sm:text-sm text-[#666666]">
              Have proprietary trade secrets or an unreleased startup idea? We readily
              execute our standard mutual NDA before initial discovery calls.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@studio14.creative?subject=NDA%20Request%20—%20Project%20Brief"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#171717] font-bold text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFC928] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Mutual NDA</span>
            </a>
            <a
              href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20legal%20or%20contractual%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:opacity-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+971 50 497 4967</span>
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
