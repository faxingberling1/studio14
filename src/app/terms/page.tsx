import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck,
  Scale,
  Award,
  Layers,
  Clock,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";

export const metadata: Metadata = {
  title: "Terms & Conditions — Studio14 Creative Studio",
  description:
    "Review Studio14's client engagement terms, project ownership clauses, intellectual property transfers, and service agreements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "November 7, 2026";

  return (
    <PageTransition className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Urdu Badge */}
        <div className="flex items-center gap-2 mb-4">
          <ChamakpattiStar size={18} color="#FFC928" />
          <UrduBadge text="قواعد و ضوابط" subtitle="Terms & Conditions" />
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Scale className="w-3.5 h-3.5 text-[#171717]" />
            <span>CLIENT ENGAGEMENT CHARTER</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm sm:text-base text-[#666666] flex items-center gap-2 font-mono">
            <span>Last Updated: {lastUpdated}</span>
            <span>•</span>
            <span>Standard Master Services Agreement (MSA)</span>
          </p>
        </div>

        {/* Highlight Card: Project Ownership */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#FFC928]/25 border-3 border-[#171717] shadow-[6px_6px_0px_#171717]">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#FFC928] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] shrink-0">
              <Award className="w-6 h-6 text-[#171717]" />
            </div>
            <div className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#171717]">
                The Studio14 Ownership Guarantee
              </h2>
              <p className="text-xs sm:text-sm text-[#171717]/90 leading-relaxed">
                We believe you should own what you pay for. Upon full and final settlement
                of all project invoices, <strong>100% of final bespoke deliverables</strong>{" "}
                — including custom source code, graphic designs, video assets, brand kits,
                and automation workflows — become your exclusive property. No hostage code,
                no hidden licensing traps.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <article className="mt-12 space-y-12 text-[#171717]">
          {/* Section 1: Acceptance */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              1. Acceptance &amp; Engagement Structure
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern all proposals, statements of
              work, sprint engagements, and communications between{" "}
              <strong>Studio14</strong> (اسٹوڈیو 14) and the client (&quot;Client&quot;, &quot;you&quot;).
              By commissioning a project brief, approving an invoice, or accessing our
              digital services, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 2: Scope of Studio Services */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              2. Scope of Creative Services
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Studio14 provides creative and technical services spanning four core
              disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-sm text-[#171717] mb-1">
                  01. Website Design &amp; Development
                </h3>
                <p className="text-xs text-[#666666]">
                  Custom Next.js, Shopify, and WordPress platforms, responsive layouts,
                  interactive components, and performance optimization.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-sm text-[#171717] mb-1">
                  02. Video Editing &amp; Motion Design
                </h3>
                <p className="text-xs text-[#666666]">
                  YouTube long-form narrative editing, vertical social cutdowns, custom
                  motion typography, color grading, and sound mastering.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-sm text-[#171717] mb-1">
                  03. Marketing &amp; Acquisition Funnels
                </h3>
                <p className="text-xs text-[#666666]">
                  Paid ad creative production, creative testing scripts, landing page
                  optimization, and organic content strategies.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-sm text-[#171717] mb-1">
                  04. Business Automations
                </h3>
                <p className="text-xs text-[#666666]">
                  Webhook setups, CRM pipelines (HubSpot/Notion), API connections, and
                  automated client onboarding sequences.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Project Ownership & IP Clauses (CRUCIAL) */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2 flex items-center justify-between">
              <span>3. Project Ownership &amp; Intellectual Property</span>
              <Award className="w-6 h-6 text-[#FFC928]" />
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#666666] leading-relaxed">
              <p>
                <strong className="text-[#171717]">
                  3.1 Assignment of Deliverables:
                </strong>{" "}
                Subject to receipt of full payment, Studio14 hereby assigns, transfers,
                and conveys to the Client all worldwide rights, title, and interest in
                and to all final deliverables created specifically for the project
                (including final compiled and uncompiled application source code, custom
                illustrations, exported master video renders, copy manuscripts, and
                design files).
              </p>
              <p>
                <strong className="text-[#171717]">
                  3.2 Pre-Existing Studio Materials &amp; Open Source:
                </strong>{" "}
                Studio14 retains ownership of its proprietary boilerplates, reusable utility
                scripts, design components, and standard tooling created prior to or
                independently of the project. To the extent these materials are integrated
                into the deliverables, Studio14 grants the Client a perpetual,
                non-exclusive, worldwide, royalty-free license to use, modify, and deploy
                them as part of the delivered project.
              </p>
              <p>
                <strong className="text-[#171717]">
                  3.3 Third-Party Licenses:
                </strong>{" "}
                Client deliverables may incorporate third-party software, fonts, sound
                effects, stock imagery, or open-source software (e.g. Next.js, MIT
                licensed libraries). These items remain governed by their respective
                licensors.
              </p>
              <p>
                <strong className="text-[#171717]">
                  3.4 Portfolio Rights &amp; Credit:
                </strong>{" "}
                Studio14 retains the standard creative right to display the final work in
                our studio portfolio, case studies, showreels, and award submissions,
                unless a separate mutual Non-Disclosure Agreement (NDA) or White-Label
                agreement explicitly restricts publication.
              </p>
            </div>
          </section>

          {/* Section 4: Client Obligations */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              4. Client Responsibilities &amp; Asset Delivery
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              To maintain agreed sprint cadences, the Client agrees to:
            </p>
            <ul className="text-xs sm:text-sm text-[#666666] space-y-2 list-disc list-inside">
              <li>
                Provide required assets (logos, raw footage, brand copy, API tokens, hosting
                credentials) in a timely manner.
              </li>
              <li>
                Designate a primary decision-maker with authority to review deliverables
                and approve milestone sign-offs.
              </li>
              <li>
                Provide consolidated feedback within five (5) business days of receiving
                review drafts to prevent sprint delays.
              </li>
              <li>
                Ensure that all supplied assets do not infringe any third-party copyrights,
                trademarks, or privacy rights.
              </li>
            </ul>
          </section>

          {/* Section 5: Billing, Milestones & Payment */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              5. Invoicing, Payments &amp; Milestones
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#666666] leading-relaxed">
              <p>
                <strong className="text-[#171717]">Deposit &amp; Commencements:</strong>{" "}
                Unless otherwise specified in a statement of work, custom web and brand
                projects require a 50% non-refundable deposit prior to sprint kick-off.
                The remaining 50% balance is invoiced upon staging approval before production
                handover.
              </p>
              <p>
                <strong className="text-[#171717]">Ongoing Retainers:</strong> Monthly
                video editing, marketing, and automation retainers are billed in advance on
                the 1st of each calendar month.
              </p>
              <p>
                <strong className="text-[#171717]">Payment Methods:</strong> Invoices are
                payable via bank wire transfer, corporate credit card, or agreed online
                invoicing gateways within fourteen (14) days of issuance.
              </p>
            </div>
          </section>

          {/* Section 6: Revisions & Scope Management */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              6. Revisions, Iterations &amp; Change Orders
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Every fixed-price sprint includes two (2) consolidated rounds of revisions
              per milestone. Revisions must align with the approved original project
              brief.
            </p>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Requests that introduce new structural features, alter approved technical
              architecture, or pivot creative direction constitute a Change Order and will
              be quoted transparently at our standard studio hourly or sprint rates.
            </p>
          </section>

          {/* Section 7: Warranties & Support */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              7. Warranties &amp; 30-Day Launch Guarantee
            </h2>
            <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] space-y-2">
              <p className="font-bold text-sm text-[#171717]">
                30-Day Bug Warranty on Custom Web Builds
              </p>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Studio14 warrants that delivered custom web platforms will perform in
                substantial accordance with the agreed specifications for thirty (30) days
                following production launch. Any technical bugs or rendering defects
                identified during this window will be resolved promptly at zero additional
                cost.
              </p>
            </div>
          </section>

          {/* Section 8: Confidentiality */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              8. Mutual Confidentiality
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Both parties agree to protect and keep confidential all non-public
              technical, commercial, and financial information disclosed during the
              engagement. This obligation survives termination of the contract for a
              period of three (3) years.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              9. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              To the maximum extent permitted by applicable law, neither party shall be
              liable for indirect, incidental, consequential, or punitive damages
              (including loss of revenue, profits, or data). Studio14&apos;s total aggregate
              liability under any claim arising out of an engagement shall be strictly
              limited to the total fees actually received by Studio14 from the Client for
              the specific statement of work in question.
            </p>
          </section>

          {/* Section 10: Termination */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              10. Termination &amp; Cancellation
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Either party may terminate a project upon fourteen (14) days written notice
              if the other party commits a material breach and fails to cure such breach.
              In the event of cancellation, the Client shall pay for all completed sprint
              milestones and hours incurred up to the date of termination.
            </p>
          </section>

          {/* Section 11: Governing Law & Dispute Resolution */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              11. Governing Law &amp; Arbitration
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              These Terms shall be interpreted and governed by international commercial
              standards and laws. In the unlikely event of a dispute, both parties agree to
              engage in good-faith negotiations before pursuing formal commercial
              arbitration.
            </p>
          </section>

          {/* Section 12: Contact Desk */}
          <section className="space-y-4 pt-4 border-t-2 border-[#171717]/15">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              12. Legal &amp; Contractual Inquiries
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              For contract amendments, customized Statements of Work, or NDA requests,
              reach our legal desk:
            </p>
            <div className="p-6 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-base text-[#171717]">Studio14 Legal Desk</p>
                <p className="text-xs text-[#666666]">
                  Email: hello@studio14.creative • WhatsApp: +971 50 497 4967
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                <span>Initiate Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-14 pt-8 border-t-2 border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:text-[#FFC928] transition-colors"
          >
            <span>Review Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:text-[#FFC928] transition-colors"
          >
            <span>Legal Portal Overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
