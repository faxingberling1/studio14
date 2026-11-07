"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { servicesData } from "@/data/services";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = [
  "home",
  "services",
  "about",
  "portfolio",
  "process",
  "testimonials",
  "insights",
  "careers",
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "Services", href: "/#services", id: "services", hasDropdown: true },
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              isScrolled
                ? "bg-[#FAF9F6]/95 backdrop-blur-md border-2 border-[#171717] shadow-[4px_4px_0px_#171717]"
                : "bg-[#FAF9F6]/70 backdrop-blur-xs border-2 border-transparent"
            }`}
          >
            {/* Left: Studio14 Logo */}
            <Link
              href="/#home"
              aria-label="Studio14 Home"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded-lg"
            >
              <Studio14Logo variant="navbar" />
            </Link>

            {/* Center: Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.id);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                            active
                              ? "text-[#171717] font-bold"
                              : "text-[#171717]/80 hover:text-[#171717]"
                          }`}
                        >
                          <span>{item.label}</span>
                          {active && (
                            <motion.span
                              layoutId="activeNavDot"
                              className="absolute bottom-0.5 left-3.5 right-3.5 h-1 rounded-full bg-[#FFC928] border border-[#171717]"
                            />
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          aria-expanded={servicesOpen}
                          aria-label="Toggle Services Dropdown"
                          className="p-1 -ml-2 text-[#171717]/80 hover:text-[#171717] focus-visible:outline-none cursor-pointer"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Services Dropdown Panel */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[5px_5px_0px_#171717] p-3 z-50"
                          >
                            <div className="px-3 py-1.5 mb-1 border-b border-[#171717]/10 flex items-center justify-between">
                              <span className="font-hand text-base font-bold text-[#666666]">
                                End-to-End Studio Capabilities
                              </span>
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="text-xs font-bold text-[#171717] underline decoration-[#FFC928] decoration-2"
                              >
                                View All
                              </Link>
                            </div>
                            <div className="space-y-1">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services#${service.slug}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FFC928]/25 transition-colors"
                                >
                                  <span className="font-hand text-lg font-bold px-2 py-0.5 rounded bg-[#FFC928] border border-[#171717] text-[#171717] leading-none mt-0.5">
                                    {service.number}
                                  </span>
                                  <div className="flex-1">
                                    <p className="text-sm font-bold text-[#171717] group-hover:underline">
                                      {service.title}
                                    </p>
                                    <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                                      {service.features.join(" • ")}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      active
                        ? "text-[#171717] font-bold"
                        : "text-[#171717]/80 hover:text-[#171717]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-1 rounded-full bg-[#FFC928] border border-[#171717]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Let's Create CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] transition-all group"
              >
                <span>Let&apos;s Create</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF9F6] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-[#171717] hover:bg-[#FFC928] transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
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

