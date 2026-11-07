"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkle } from "@/components/doodles/Sparkle";

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Our Clients Say"
          headline="Trusted by Innovative Brands"
          highlightedWord="Innovative Brands"
          supportingText="Transparency first: we only publish real, verified client words as they are approved."
        />

        {/* Embla Carousel Viewport */}
        <div className="relative mt-12">
          <div className="overflow-hidden py-4 px-2" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] md:flex-[0_0_82%] lg:flex-[0_0_72%] min-w-0 pl-6"
                >
                  <article className="relative h-full rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-7 sm:p-10 shadow-[6px_6px_0px_#171717] flex flex-col justify-between">
                    {/* Top Row: Quote Icon & Verified Transparency Tag */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFC928] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center">
                          <Quote className="w-6 h-6 text-[#171717]" />
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border-2 border-[#171717] text-xs font-bold text-[#171717]">
                          <ShieldCheck className="w-4 h-4 text-[#171717] fill-[#FFC928]" />
                          {item.serviceTag}
                        </span>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="font-editorial text-xl sm:text-2xl text-[#171717] leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Client / Slot Footer */}
                    <div className="mt-8 pt-6 border-t-2 border-[#171717]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#171717] bg-[#FAF9F6] shrink-0">
                          <Image
                            src={item.avatarUrl}
                            alt={item.clientName}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-editorial text-lg font-bold text-[#171717]">
                            {item.clientName}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#666666] font-medium">
                            {item.roleOrCompany}
                          </p>
                        </div>
                      </div>

                      {item.projectAssociated && (
                        <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-[#FFC928]/35 border border-[#171717] text-xs font-bold text-[#171717]">
                          <Sparkle size={14} />
                          <span>{item.projectAssociated}</span>
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls: Prev/Next Arrows & Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial slide"
              className="w-11 h-11 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FFC928] active:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-[#171717]" />
            </button>

            <div
              className="flex items-center gap-2.5"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {testimonialsData.map((slide, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => scrollTo(index)}
                    className={`h-3 rounded-full border-2 border-[#171717] transition-all cursor-pointer ${
                      isSelected ? "w-9 bg-[#FFC928]" : "w-3 bg-[#FAF9F6]"
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial slide"
              className="w-11 h-11 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FFC928] active:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-[#171717]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

