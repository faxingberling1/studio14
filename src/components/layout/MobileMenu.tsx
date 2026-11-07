"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Growth Journey", href: "/growth-journey", id: "growth-journey" },
  { label: "All Services", href: "/services", id: "services" },
  { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Insights", href: "/#insights", id: "insights" },
  { label: "Careers", href: "/#careers", id: "careers" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xs lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-out Sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#FAF9F6] border-l-2 border-[#171717] p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b-2 border-[#171717]/10">
                <Link href="/#home" onClick={onClose}>
                  <Studio14Logo variant="navbar" />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center text-[#171717] hover:bg-[#FFC928] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Primary Links */}
              <nav className="mt-6 space-y-1.5" aria-label="Mobile Primary">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-editorial text-xl font-bold transition-all ${
                        isActive
                          ? "bg-[#FFC928] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]"
                          : "text-[#171717] hover:bg-[#171717]/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </nav>

              {/* Dedicated Individual Service Pages */}
              <div className="mt-6 pt-5 border-t-2 border-[#171717]/10">
                <p className="font-hand text-lg font-bold text-[#666666] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FFC928]" />
                  Dedicated Service Pages
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="flex flex-col p-3.5 rounded-xl bg-[#F3EFE6] border-2 border-[#171717]/20 hover:border-[#171717] hover:bg-[#FFC928]/25 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#171717]">
                          {service.title}
                        </span>
                        <span
                          className="font-hand text-sm font-bold px-2 py-0.5 rounded border border-[#171717] text-[#171717]"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          {service.number}
                        </span>
                      </div>
                      <span className="text-xs text-[#666666] mt-1 line-clamp-1">
                        {service.features.join(" • ")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: WhatsApp Chat + Let's Talk CTA */}
            <div className="mt-8 pt-5 border-t-2 border-[#171717]/10 space-y-2.5">
              <a
                href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-y-0.5 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFC928] text-[#171717] font-bold border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-y-0.5 transition-all"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
