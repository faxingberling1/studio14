import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Target,
  Lightbulb,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { PageTransition } from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/Button";
import { ChamakpattiStar } from "@/components/growth-journey/doodles/TruckArtMotifs";
import { ContactForm } from "@/components/sections/ContactForm";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title} — Case Study Deep Dive`,
    description: project.shortDescription,
    alternates: {
      canonical: `/case-studies/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom transition
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <PageTransition className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Link & Tag */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:underline decoration-[#FFC928] decoration-2 underline-offset-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <span
            className="text-xs font-mono font-bold px-3 py-1 rounded-full border-2 border-[#171717] text-[#171717] shadow-[2px_2px_0px_#171717]"
            style={{ backgroundColor: project.accentColor }}
          >
            {project.category}
          </span>
        </div>

        {/* Header Block */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/30 border border-[#171717]/20 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Target className="w-3.5 h-3.5 text-[#171717]" />
            <span>CASE STUDY BREAKDOWN</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#666666] leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white border border-[#171717]/25 text-[#171717] shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Hero Visual */}
        <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border-3 border-[#171717] bg-[#F4F1EA] shadow-[8px_8px_0px_#171717]">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Core Challenge vs Strategic Approach Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. The Challenge */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FFFDF5] border-3 border-[#171717] shadow-[6px_6px_0px_#171717] space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-300">
              <Target className="w-3.5 h-3.5" />
              <span>THE CLIENT CHALLENGE</span>
            </div>
            <h2 className="font-editorial text-2xl font-bold text-[#171717]">
              The Obstacle
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 2. The Strategic Approach */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#F0FDF4] border-3 border-[#171717] shadow-[6px_6px_0px_#171717] space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>THE STUDIO14 APPROACH</span>
            </div>
            <h2 className="font-editorial text-2xl font-bold text-[#171717]">
              The Strategy &amp; Solution
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </section>

        {/* Full Strategic Breakdown Narrative */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border-3 border-[#171717] shadow-[6px_6px_0px_#171717] space-y-4">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
            Creative Execution &amp; Technical Architecture
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="pt-6 border-t border-[#171717]/10">
            <h3 className="font-editorial text-xl font-bold text-[#171717] mb-4">
              Delivered Work &amp; Project Artifacts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F1EA] border border-[#171717]/15 text-sm text-[#171717]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Artifacts */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <ChamakpattiStar size={18} color="#FFC928" />
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
                Artifact Showcase &amp; Design Notes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white border-2 border-[#171717] overflow-hidden shadow-[4px_4px_0px_#171717]"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#F4F1EA]">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border-t border-[#171717]/15">
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next Case Study Navigation Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-bold">
              Next Case Study
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#171717] mt-0.5">
              {nextProject.title}
            </h3>
          </div>

          <Link
            href={`/case-studies/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
          >
            <span>Explore Next Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Direct Project Inquiry Form */}
        <div className="pt-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="font-hand text-xl font-bold text-[#171717]">
              Have a Similar Challenge?
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#171717]">
              Let&apos;s Build Your Solution
            </h2>
            <p className="text-sm text-[#666666]">
              Share your goals below to discuss a dedicated sprint tailored to your brand.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
}

