import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { servicesData, processSteps } from "@/data/services";
import { projectsData } from "@/data/projects";
import { PageTransition } from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/Button";
import { HandDrawnUnderline } from "@/components/doodles/HandDrawnUnderline";
import { Sparkle } from "@/components/doodles/Sparkle";
import {
  BrowserDoodle,
  ClapperboardDoodle,
  MegaphoneDoodle,
  GearsDoodle,
} from "@/components/doodles/StudioDoodles";
import { ContactForm } from "@/components/sections/ContactForm";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} — Studio14 Creative Service`,
    description: service.longDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  // Match related portfolio showcases for this discipline
  const categoryMap: Record<string, string[]> = {
    "web-development": ["Websites", "Branding"],
    "video-editing": ["Video & Content"],
    marketing: ["Marketing", "Branding"],
    "business-automations": ["Marketing", "Websites"],
  };
  const relatedCategories = categoryMap[service.slug] || ["Websites"];
  const relatedProjects = projectsData
    .filter((p) => relatedCategories.includes(p.category))
    .slice(0, 2);

  const renderDoodle = (
    type: "browser" | "clapperboard" | "megaphone" | "gears",
    color: string,
    sizeClass = "w-24 h-24"
  ) => {
    switch (type) {
      case "browser":
        return <BrowserDoodle className={sizeClass} accentColor={color} />;
      case "clapperboard":
        return <ClapperboardDoodle className={sizeClass} accentColor={color} />;
      case "megaphone":
        return <MegaphoneDoodle className={sizeClass} accentColor={color} />;
      case "gears":
        return <GearsDoodle className={sizeClass} accentColor={color} />;
    }
  };

  return (
    <PageTransition className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Breadcrumb & Service Switcher Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#171717]/15">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:underline decoration-[#FFC928] decoration-2 underline-offset-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Studio14 Services</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {servicesData.map((s) => {
              const isCurrent = s.slug === service.slug;
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${
                    isCurrent
                      ? "bg-[#FFC928] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717]"
                      : "bg-[#F4F1EA] text-[#666666] border-[#171717]/25 hover:border-[#171717] hover:text-[#171717]"
                  }`}
                >
                  {s.number}. {s.shortTitle}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dedicated Service Hero Card */}
        <section className="relative rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-7 sm:p-12 lg:p-14 shadow-[8px_8px_0px_#171717] overflow-hidden">
          <Sparkle
            size={30}
            className="hidden sm:block absolute top-8 right-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="font-hand text-2xl font-bold px-3.5 py-1 rounded-xl border-2 border-[#171717] text-[#171717] shadow-[2px_2px_0px_#171717]"
                  style={{ backgroundColor: service.accentColor }}
                >
                  Discipline {service.number}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
                  STUDIO14 SPECIALIZED PRACTICE
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171717] leading-[1.1]">
                <span className="relative inline-block">
                  <span className="relative z-10">{service.title}</span>
                  <span className="absolute -bottom-1.5 left-0 right-0 z-0">
                    <HandDrawnUnderline
                      variant="double"
                      color={service.accentColor}
                      strokeWidth={6}
                    />
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#171717] font-medium leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
                {service.longDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="#service-inquiry"
                  variant="primary"
                  size="lg"
                  withArrow
                >
                  Start a {service.shortTitle} Project
                </Button>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF9F6] border-2 border-[#171717] text-xs sm:text-sm font-bold text-[#171717]">
                  <Clock className="w-4 h-4 text-[#171717]" />
                  <span>Timeline: {service.timelineEstimate}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Hand-Drawn Doodle & Core Capabilities Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#171717] p-6 sm:p-7 shadow-[5px_5px_0px_#171717] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717]">
                    {renderDoodle(
                      service.doodleType,
                      service.accentColor,
                      "w-20 h-20"
                    )}
                  </div>
                  <span className="font-editorial text-4xl font-bold text-[#171717]/15">
                    {service.number}
                  </span>
                </div>

                <div>
                  <p className="font-hand text-xl font-bold text-[#171717] mb-3">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#171717]"
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-[#171717] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          <Check className="w-3 h-3 text-[#171717] stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#171717]/15">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#666666] mb-2">
                    <Wrench className="w-3.5 h-3.5 text-[#171717]" />
                    <span>Tools &amp; Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-[#F4F1EA] border border-[#171717]/25 text-xs font-bold text-[#171717]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Deliverables Grid */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <span className="font-hand text-2xl font-bold text-[#171717]">
              What We Deliver ✦
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#171717] mt-1">
              End-to-End {service.title} Deliverables
            </h2>
            <p className="text-base text-[#666666] mt-2">
              Every engagement is scoped transparently around practical
              deliverables built for long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] p-6 sm:p-8 shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-hand text-lg font-bold px-3 py-0.5 rounded-lg border border-[#171717] text-[#171717]"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#171717] fill-[#FFC928]" />
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Execute This Service (4-Step Workflow Strip) */}
        <section className="rounded-3xl bg-[#202020] text-[#FAF9F6] border-3 border-[#171717] p-7 sm:p-12 shadow-[8px_8px_0px_#FFC928] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#FAF9F6]/15 pb-6">
            <div>
              <span className="font-hand text-xl font-bold text-[#FFC928]">
                How We Work Together
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl font-bold mt-1">
                Our 4-Stage {service.shortTitle} Workflow
              </h2>
            </div>
            <p className="text-sm text-[#FAF9F6]/75 max-w-md">
              A predictable, collaborative rhythm from initial discovery to
              launch and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-2xl bg-[#2B2B2B] border border-[#FAF9F6]/20 space-y-2.5"
              >
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FFC928] text-[#171717]">
                  STEP {step.number}
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#FAF9F6]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Studio14 Showcase Concepts */}
        {relatedProjects.length > 0 && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-hand text-2xl font-bold text-[#171717]">
                  Related Showcases ✦
                </span>
                <h2 className="font-editorial text-3xl font-bold text-[#171717] mt-1">
                  See {service.shortTitle} in Action
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171717] underline decoration-[#FFC928] decoration-2 underline-offset-4"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] overflow-hidden shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#FFC928] transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#EFECE4] border-b-2 border-[#171717] overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#171717] text-[#FFC928]">
                      <Sparkles className="w-3 h-3" />
                      Studio Concept
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#666666]">
                        {project.category}
                      </span>
                      <h3 className="font-editorial text-xl font-bold text-[#171717] mt-1 group-hover:underline decoration-[#FFC928] decoration-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#666666] mt-2">
                        {project.shortDescription}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#171717]/10 inline-flex items-center gap-1.5 text-xs font-bold text-[#171717]">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Explore Other Studio14 Services */}
        <section className="pt-6 border-t-2 border-[#171717]/15 space-y-6">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
            Explore Other Studio14 Disciplines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="group p-5 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FFC928]/25 hover:shadow-[5px_5px_0px_#171717] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-hand text-lg font-bold px-2.5 py-0.5 rounded border border-[#171717] text-[#171717]"
                      style={{ backgroundColor: other.accentColor }}
                    >
                      {other.number}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#171717] transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#171717] group-hover:underline">
                    {other.title}
                  </h3>
                  <p className="text-xs text-[#666666] mt-1 line-clamp-2">
                    {other.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Direct Inquiry Form for This Service */}
        <section id="service-inquiry" className="scroll-mt-28">
          <ContactForm />
        </section>
      </div>
    </PageTransition>
  );
}

