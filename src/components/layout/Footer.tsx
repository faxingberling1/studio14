"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { Sparkle } from "@/components/doodles/Sparkle";
import { servicesData } from "@/data/services";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20project!", icon: WhatsAppIcon },
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { name: "X (Twitter)", href: "https://x.com", icon: XTwitterIcon },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#202020] text-[#FAF9F6] border-t-2 border-[#171717] overflow-hidden">
      {/* Subtle Top Hand-Drawn Wave Accent */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-4 text-[#FFC928]"
          aria-hidden="true"
        >
          <path
            d="M0 12C240 2 480 22 720 12C960 2 1200 22 1440 12"
            stroke="#FFC928"
            strokeWidth="3"
            strokeDasharray="10 8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF9F6]/15">
          {/* Column 1: Brand & Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/#home" className="inline-block">
              <Studio14Logo variant="footer" />
            </Link>
            <p className="font-editorial text-xl text-[#FFC928] italic">
              &ldquo;Crafting Digital Resonance.&rdquo;
            </p>
            <p className="text-sm text-[#FAF9F6]/75 leading-relaxed max-w-sm">
              We are Studio14 — a creative digital studio blending thoughtful web
              engineering, rhythmic video editing, smart marketing, and business
              automations with a handcrafted touch.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Sparkle size={20} />
              <span className="font-hand text-base text-[#FAF9F6]/80">
                Modern Creative Studio × Handcrafted Execution
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-hand text-xl font-bold text-[#FFC928] tracking-wide">
              Explore Studio
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/#home" },
                { label: "Our Services", href: "/#services" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Growth Journey", href: "/growth-journey" },
                { label: "About Studio14", href: "/#about" },
                { label: "Our Work", href: "/#portfolio" },
                { label: "Creative Process", href: "/#process" },
                { label: "Legal Portal", href: "/legal" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FAF9F6]/75 hover:text-[#FFC928] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-hand text-xl font-bold text-[#FFC928] tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group text-[#FAF9F6]/75 hover:text-[#FFC928] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="font-mono text-xs text-[#FFC928]">
                      {service.number}.
                    </span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FFC928] hover:underline"
                >
                  <span>Full Services Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Placeholders & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-hand text-xl font-bold text-[#FFC928] tracking-wide">
              Studio Desk
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF9F6]/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FFC928] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#FAF9F6]/50 uppercase tracking-wider">
                    Project Inquiries (Placeholder)
                  </span>
                  <a
                    href="mailto:hello@studio14.creative"
                    className="hover:text-[#FFC928] transition-colors font-medium"
                  >
                    hello@studio14.creative
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC928] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#FAF9F6]/50 uppercase tracking-wider">
                    Studio Location
                  </span>
                  <span>Remote-First Creative Desk • Global</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFC928] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#FAF9F6]/50 uppercase tracking-wider">
                    Working Hours
                  </span>
                  <span>Mon – Fri • 9:00 AM – 6:00 PM</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs text-[#FAF9F6]/50 uppercase tracking-wider mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Studio14 on ${social.name}`}
                      title={social.name}
                      className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#2A2A2A] text-[#FAF9F6] border-2 border-[#FAF9F6]/20 shadow-[2px_2px_0px_#171717] hover:bg-[#FFC928] hover:text-[#171717] hover:border-[#171717] hover:shadow-[3px_3px_0px_#FFC928] hover:-translate-y-0.5 transition-all"
                    >
                      <Icon className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 px-2 py-0.5 rounded bg-[#171717] text-[#FFC928] border border-[#FAF9F6]/20 text-[10px] font-bold whitespace-nowrap shadow-sm z-20">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/60">
          <p>
            © {currentYear} Studio14 (اسٹوڈیو 14). All rights reserved. Crafted
            with creativity, not gimmicks.
          </p>

          <p className="inline-flex items-center gap-1.5 text-[#FAF9F6]/80">
            <span>Made with</span>
            <svg
              viewBox="0 0 24 24"
              fill="#FFC928"
              stroke="#FAF9F6"
              strokeWidth="1.8"
              className="w-4 h-4 inline-block doodle-pulse"
              aria-label="love"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.5C12 20.5 4 15.2 4 9.2C4 6.4 6.2 4.2 8.8 4.2C10.4 4.2 11.5 5 12 6.2C12.5 5 13.6 4.2 15.2 4.2C17.8 4.2 20 6.4 20 9.2C20 15.2 12 20.5 12 20.5Z"
              />
            </svg>
            <span>by</span>
            <a
              href="https://neogentechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FFC928] hover:underline decoration-[#FFC928] decoration-2 underline-offset-4 transition-colors inline-flex items-center gap-0.5"
            >
              <span>Neo Gen Technologies</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs">
            <Link
              href="/legal"
              className="hover:text-[#FFC928] transition-colors"
            >
              Legal Hub
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#FFC928] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#FFC928] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

