"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { servicesData } from "@/data/services";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  BrowserDoodle,
  ClapperboardDoodle,
  MegaphoneDoodle,
  GearsDoodle,
} from "@/components/doodles/StudioDoodles";
import { Lightbulb } from "@/components/doodles/Lightbulb";

const SECTION_IDS = [
  "home",
  "growth-journey",
  "packages",
  "services",
  "about",
  "portfolio",
  "process",
  "testimonials",
  "insights",
  "careers",
  "faq",
  "contact",
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeSection = useActiveSection(SECTION_IDS, 180);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "Services", href: "/services", id: "services", hasDropdown: true },
    { label: "Growth Journey", href: "/growth-journey", id: "growth-journey" },
    { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Insights", href: "/#insights", id: "insights" },
    { label: "Careers", href: "/#careers", id: "careers" },
  ];

  const isItemActive = (id: string) => {
    if (pathname !== "/") {
      return pathname.startsWith(`/${id}`);
    }
    return activeSection === id;
  };

  const renderServiceDoodle = (
    type: "browser" | "clapperboard" | "megaphone" | "gears",
    color: string
  ) => {
    switch (type) {
      case "browser":
        return <BrowserDoodle className="w-9 h-9" accentColor={color} />;
      case "clapperboard":
        return <ClapperboardDoodle className="w-9 h-9" accentColor={color} />;
      case "megaphone":
        return <MegaphoneDoodle className="w-9 h-9" accentColor={color} />;
      case "gears":
        return <GearsDoodle className="w-9 h-9" accentColor={color} />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-2.5" : "py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={dropdownRef}
            onMouseLeave={() => setServicesOpen(false)}
            className={`relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              isScrolled || servicesOpen
                ? "bg-[#FAF9F6]/95 backdrop-blur-md border-2 border-[#171717] shadow-[4px_4px_0px_#171717]"
                : "bg-[#FAF9F6]/70 backdrop-blur-xs border-2 border-transparent"
            }`}
          >
            {/* Left: Studio14 Logo */}
            <Link
              href="/#home"
              aria-label="Studio14 Home"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded-lg shrink-0"
            >
              <Studio14Logo variant="navbar" />
            </Link>

            {/* Center: Tablet & Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-0.5 lg:gap-1.5"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.id);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`relative px-3 lg:px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                            active || servicesOpen
                              ? "text-[#171717] font-bold"
                              : "text-[#171717]/80 hover:text-[#171717]"
                          }`}
                        >
                          <span>{item.label}</span>
                          {active && (
                            <motion.span
                              layoutId="activeNavDot"
                              className="absolute bottom-0.5 left-3 right-3 h-1 rounded-full bg-[#FFC928] border border-[#171717]"
                            />
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          aria-expanded={servicesOpen}
                          aria-label="Toggle Services Mega Menu"
                          className="p-1 -ml-1.5 text-[#171717]/80 hover:text-[#171717] focus-visible:outline-none cursor-pointer"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => setServicesOpen(false)}
                    className={`relative px-3 lg:px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      active
                        ? "text-[#171717] font-bold"
                        : "text-[#171717]/80 hover:text-[#171717]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute bottom-0.5 left-3 right-3 h-1 rounded-full bg-[#FFC928] border border-[#171717]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Let's Talk CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-xs lg:text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] transition-all group"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-[#171717] hover:bg-[#FFC928] transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* RESPONSIVE SERVICES MEGA MENU (Optimized for Tablet, Laptop & Desktop) */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.99 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] lg:w-[min(94vw,1060px)] pt-2.5 z-50"
                >
                  <div className="max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[6px_6px_0px_#171717] p-4 lg:p-5">
                    {/* Compact Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3.5 border-b border-[#171717]/15">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFC928] border border-[#171717] font-hand text-base font-bold text-[#171717]">
                          Our Capabilities ✦
                        </span>
                        <span className="text-xs font-medium text-[#666666] hidden sm:inline">
                          Dedicated Studio14 disciplines &amp; deliverables
                        </span>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#171717] hover:underline decoration-[#FFC928] decoration-2 underline-offset-4"
                      >
                        <span>All Services Directory</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Responsive Grid: 2x2 on Tablet, 12-col (8+4) on Laptop/Desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
                      {/* 2x2 Grid of Compact Service Cards */}
                      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group relative flex flex-col justify-between rounded-xl bg-[#F4F1EA] border-2 border-[#171717] p-3.5 hover:bg-[#FAF9F6] hover:shadow-[3px_3px_0px_#FFC928] transition-all"
                          >
                            <div>
                              {/* Top Row: Number Badge + Title + Doodle */}
                              <div className="flex items-start justify-between gap-2.5">
                                <div className="space-y-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className="font-hand text-sm font-bold px-2 py-0.5 rounded-md border border-[#171717] text-[#171717] leading-none shrink-0"
                                      style={{
                                        backgroundColor: service.accentColor,
                                      }}
                                    >
                                      {service.number}
                                    </span>
                                    <span className="text-[11px] font-mono text-[#666666] truncate">
                                      {service.timelineEstimate}
                                    </span>
                                  </div>
                                  <h3 className="font-editorial text-base xl:text-[17px] font-bold text-[#171717] leading-snug group-hover:underline decoration-[#FFC928] decoration-2 underline-offset-2">
                                    {service.title}
                                  </h3>
                                </div>

                                <div className="p-1.5 rounded-lg bg-[#FAF9F6] border border-[#171717]/20 shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
                                  {renderServiceDoodle(
                                    service.doodleType,
                                    service.accentColor
                                  )}
                                </div>
                              </div>

                              {/* Concise 1-line Description */}
                              <p className="text-xs text-[#666666] line-clamp-1 mt-1.5">
                                {service.description}
                              </p>
                            </div>

                            {/* Compact Sub-Capabilities Pills + Arrow */}
                            <div className="mt-2.5 pt-2 border-t border-[#171717]/10 flex items-center justify-between gap-2">
                              <div className="flex flex-wrap gap-1 overflow-hidden max-h-6">
                                {service.features.slice(0, 2).map((feat) => (
                                  <span
                                    key={feat}
                                    className="px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#171717]/20 text-[10px] font-semibold text-[#171717] truncate"
                                  >
                                    {feat}
                                  </span>
                                ))}
                                {service.features.length > 2 && (
                                  <span className="px-1.5 py-0.5 rounded bg-[#FFC928]/40 border border-[#171717]/20 text-[10px] font-bold text-[#171717]">
                                    +{service.features.length - 2}
                                  </span>
                                )}
                              </div>

                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#171717] shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <span>Explore</span>
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Featured Studio14 Callout Panel (4 cols on Laptop/Desktop, horizontal banner on Tablet) */}
                      <div className="lg:col-span-4 rounded-xl bg-[#202020] text-[#FAF9F6] border-2 border-[#171717] p-4 flex flex-col justify-between gap-4">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFC928] text-[#171717] text-[10px] font-extrabold uppercase tracking-wider">
                              <Sparkles className="w-3 h-3" />
                              Custom Sprint
                            </span>
                            <div className="p-1 rounded-lg bg-[#FAF9F6] border border-[#171717] shrink-0">
                              <Lightbulb size={26} />
                            </div>
                          </div>

                          <h4 className="font-editorial text-lg xl:text-xl font-bold leading-snug text-[#FAF9F6]">
                            Need a Multi-Discipline Creative Team?
                          </h4>

                          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed">
                            Combine custom web engineering, video storytelling,
                            smart campaigns, and workflow automations into one
                            cohesive Studio14 sprint.
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#FAF9F6]/15 flex flex-col sm:flex-row lg:flex-col gap-2">
                          <Link
                            href="/contact"
                            onClick={() => setServicesOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#FFC928] text-[#171717] font-bold text-xs border border-[#171717] hover:bg-[#FAF9F6] transition-colors"
                          >
                            <span>Start a Project Brief</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href="/growth-journey"
                            onClick={() => setServicesOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-1 py-1 text-xs font-semibold text-[#FAF9F6]/80 hover:text-[#FFC928] transition-colors"
                          >
                            <span>Explore The Growth Journey</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
