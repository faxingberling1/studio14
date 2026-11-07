import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { PageTransition } from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Portfolio Showcase`,
    description: project.shortDescription,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:underline decoration-[#FFC928] decoration-2 underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        {/* Demo Transparency Banner */}
        {project.isDemoContent && (
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#FFC928]/25 border-2 border-[#171717] text-xs sm:text-sm font-semibold text-[#171717]">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{project.demoNotice}</span>
          </div>
        )}

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-bold border-2 border-[#171717]"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.category}
            </span>
            <span className="font-hand text-xl font-bold text-[#666666]">
              {project.year}
            </span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Main Showcase Visual */}
        <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border-3 border-[#171717] shadow-[8px_8px_0px_#171717] bg-[#EFECE4]">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Challenge & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]">
            <h2 className="font-hand text-2xl font-bold text-[#171717] mb-2">
              01. The Challenge
            </h2>
            <p className="text-base text-[#666666] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]">
            <h2 className="font-hand text-2xl font-bold text-[#171717] mb-2">
              02. Studio14 Approach
            </h2>
            <p className="text-base text-[#666666] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Deliverables & Craft */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-editorial text-xl font-bold text-[#171717] mb-4">
              Scope &amp; Deliverables
            </h3>
            <ul className="space-y-2.5">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#171717]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#171717] fill-[#FFC928]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-editorial text-xl font-bold text-[#171717] mb-4">
              Tools &amp; Capabilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-xs font-bold text-[#171717]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-[#171717] text-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-editorial text-2xl font-bold">
              Inspired by this concept?
            </h3>
            <p className="text-sm text-[#FAF9F6]/75 mt-1">
              Let&apos;s tailor a custom solution for your brand.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Start Your Project
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}

