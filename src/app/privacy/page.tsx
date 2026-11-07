import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Cookie,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { ChamakpattiStar, UrduBadge } from "@/components/growth-journey/doodles/TruckArtMotifs";
import { CookieSettingsTrigger } from "@/components/common/CookieSettingsTrigger";

export const metadata: Metadata = {
  title: "Privacy Policy — Studio14 Creative Studio",
  description:
    "Learn how Studio14 collects, protects, and handles your personal information, project briefs, and client data with complete confidentiality.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 7, 2026";

  return (
    <PageTransition className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Urdu Badge */}
        <div className="flex items-center gap-2 mb-4">
          <ChamakpattiStar size={18} color="#FFC928" />
          <UrduBadge text="رازداری کی پالیسی" subtitle="Privacy Policy" />
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>GDPR, CCPA &amp; GLOBAL COMPLIANCE</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            Studio14 Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-[#666666] flex items-center gap-2 font-mono">
            <span>Effective Date: {lastUpdated}</span>
            <span>•</span>
            <span>Version 2.4</span>
          </p>
        </div>

        {/* Quick Highlights Card */}
        <div className="mt-8 p-6 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]">
          <h2 className="font-editorial text-xl font-bold text-[#171717] mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#FFC928]" />
            <span>Our Core Privacy Promise</span>
          </h2>
          <p className="text-sm text-[#171717]/80 leading-relaxed">
            At Studio14 (اسٹوڈیو 14), we believe trust is earned through transparency. We
            do not sell your personal information, we never share project briefs with
            unauthorized third parties, and we protect all client intellectual property
            with enterprise-grade security and strict non-disclosure standards.
          </p>
        </div>

        {/* Main Content Sections */}
        <article className="mt-12 space-y-12 text-[#171717]">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              We collect information to provide high-caliber web development, video
              editing, marketing, and business automation services. The categories of
              information include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FFC928]" />
                  <span>Information You Provide Voluntarily</span>
                </h3>
                <ul className="text-xs sm:text-sm text-[#666666] space-y-1.5 list-disc list-inside">
                  <li>Full name, business email, and phone / WhatsApp number.</li>
                  <li>Company name, domain URL, and brand guidelines.</li>
                  <li>Project scope, budget parameters, and creative briefs.</li>
                  <li>Communications via email, WhatsApp, or Studio14 AI chat.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#06B6D4]" />
                  <span>Telemetry &amp; Device Information</span>
                </h3>
                <ul className="text-xs sm:text-sm text-[#666666] space-y-1.5 list-disc list-inside">
                  <li>Browser type, operating system, and device viewport.</li>
                  <li>Anonymized IP address and approximate country/city origin.</li>
                  <li>Page interaction timestamps, load latency, and referrer URLs.</li>
                  <li>Cookie preferences and session tokens.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              We process data strictly on legitimate business grounds, contract
              performance, and user consent:
            </p>
            <ul className="text-sm sm:text-base text-[#666666] space-y-2.5 list-disc list-inside">
              <li>
                <strong className="text-[#171717]">Service Delivery:</strong> Drafting
                custom scopes of work, deploying Next.js websites, producing video cuts,
                and configuring CRM webhooks.
              </li>
              <li>
                <strong className="text-[#171717]">Client Communication:</strong> Responding
                to project inquiries, sending sprint progress updates, and scheduling
                strategy consultations.
              </li>
              <li>
                <strong className="text-[#171717]">Security &amp; Fraud Prevention:</strong>{" "}
                Protecting our digital infrastructure, mitigating automated spam, and
                enforcing intellectual property protections.
              </li>
              <li>
                <strong className="text-[#171717]">Legal Compliance:</strong> Retaining
                accounting, invoicing, and tax records in accordance with international
                statutes.
              </li>
            </ul>
          </section>

          {/* Section 3: Project Ownership & Confidentiality */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              3. Client Confidentiality &amp; Project Ownership
            </h2>
            <div className="p-5 rounded-2xl bg-[#FFC928]/20 border-2 border-[#171717] space-y-2">
              <p className="text-sm sm:text-base text-[#171717] font-bold">
                Strict Non-Disclosure &amp; Intellectual Property Protection
              </p>
              <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed">
                All proprietary concepts, unreleased marketing materials, customer lists,
                internal spreadsheets, and code repositories shared with Studio14 are
                governed by strict confidentiality. We willingly execute mutual
                Non-Disclosure Agreements (NDAs) prior to starting strategic sprints.
              </p>
              <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed">
                <strong>Project Ownership:</strong> Upon full and final settlement of
                invoices, 100% of final project deliverables (bespoke source code,
                rendered video files, vector branding, and automation logic) belong
                exclusively to the client. See our{" "}
                <Link href="/terms" className="underline font-bold text-[#171717]">
                  Terms &amp; Conditions
                </Link>{" "}
                for full IP assignment clauses.
              </p>
            </div>
          </section>

          {/* Section 4: Cookies & Tracking Technologies */}
          <section id="cookies" className="space-y-4 scroll-mt-28">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              4. Cookie Policy &amp; Telemetry
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              We employ cookies and browser local storage to provide a seamless
              experience:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-[#171717]/20 text-xs sm:text-sm">
                <strong className="text-[#171717]">Strictly Necessary Cookies:</strong>{" "}
                Required for core website security, smooth scroll preservation, and
                storing your consent status. These cannot be disabled.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#171717]/20 text-xs sm:text-sm">
                <strong className="text-[#171717]">Analytics Cookies:</strong> Anonymized
                performance counters that calculate page speed, user flows, and error
                rates without identifying individual visitors.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#171717]/20 text-xs sm:text-sm">
                <strong className="text-[#171717]">Marketing &amp; Personalization:</strong>{" "}
                Tracks referral sources from our ad campaigns to gauge creative
                effectiveness.
              </div>
            </div>

            {/* Interactive Cookie Preference Button */}
            <div className="pt-2 flex items-center gap-3">
              <CookieSettingsTrigger />
              <span className="text-xs text-[#666666]">
                Click anytime to adjust your cookie preferences.
              </span>
            </div>
          </section>

          {/* Section 5: Third-Party Service Providers */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              5. Third-Party Data Processors
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              We partner with trusted, SOC-2 and ISO-27001 certified technology providers
              to operate our studio infrastructure:
            </p>
            <ul className="text-xs sm:text-sm text-[#666666] space-y-2 list-disc list-inside">
              <li>
                <strong className="text-[#171717]">Cloud Hosting &amp; CDN:</strong> Vercel
                Inc. (Edge networks, SSL encryption, and high-speed asset distribution).
              </li>
              <li>
                <strong className="text-[#171717]">Email &amp; Inquiries:</strong> Resend
                API / secure enterprise mail gateways for dispatching project briefs.
              </li>
              <li>
                <strong className="text-[#171717]">Direct Messaging:</strong> WhatsApp
                Business API (Meta Platforms) for rapid client conversations.
              </li>
              <li>
                <strong className="text-[#171717]">Automation Engines:</strong> Make /
                n8n / Zapier for CRM lead pipeline orchestration.
              </li>
            </ul>
          </section>

          {/* Section 6: Data Retention & Security */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              6. Data Retention &amp; Security Standards
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              We retain project records and client communications only as long as
              necessary to fulfill contractual obligations, provide ongoing support, and
              satisfy statutory accounting requirements.
            </p>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              All data in transit is encrypted using modern TLS 1.3 encryption. Internal
              access is strictly restricted to assigned project managers and engineers
              bound by confidentiality agreements.
            </p>
          </section>

          {/* Section 7: User Rights */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold border-b-2 border-[#171717]/15 pb-2">
              7. Your International Privacy Rights (GDPR &amp; CCPA)
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Regardless of your geographical location, Studio14 honors the highest
              global privacy benchmarks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#171717]/20 text-xs sm:text-sm">
                <strong>Right to Access:</strong> Request a copy of the personal
                information we hold about you.
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#171717]/20 text-xs sm:text-sm">
                <strong>Right to Erasure (&quot;Be Forgotten&quot;):</strong> Request the permanent
                deletion of your personal records.
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#171717]/20 text-xs sm:text-sm">
                <strong>Right to Rectification:</strong> Correct inaccurate or incomplete
                details.
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#171717]/20 text-xs sm:text-sm">
                <strong>Right to Data Portability:</strong> Obtain your data in a structured,
                machine-readable JSON format.
              </div>
            </div>
          </section>

          {/* Section 8: Contact */}
          <section className="space-y-4 pt-4 border-t-2 border-[#171717]/15">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              8. Contact the Privacy Desk
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              If you have any questions, wish to exercise your data rights, or require an
              executed NDA for an upcoming venture, reach out directly:
            </p>

            <div className="p-6 rounded-3xl bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#FFC928]" />
                <span>
                  Privacy Officer:{" "}
                  <a
                    href="mailto:hello@studio14.creative"
                    className="font-bold underline hover:text-[#FFC928] transition-colors"
                  >
                    hello@studio14.creative
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>
                  WhatsApp Desk:{" "}
                  <a
                    href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20have%20a%20privacy%20or%20legal%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-[#25D366] transition-colors"
                  >
                    +971 50 497 4967
                  </a>
                </span>
              </div>
            </div>
          </section>
        </article>

        {/* Bottom Navigation Links */}
        <div className="mt-14 pt-8 border-t-2 border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:text-[#FFC928] transition-colors"
          >
            <span>Review Terms &amp; Conditions</span>
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
