"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";
import { Sparkle } from "@/components/doodles/Sparkle";
import { servicesData } from "@/data/services";

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
                { label: "About Studio14", href: "/#about" },
                { label: "Our Work", href: "/#portfolio" },
                { label: "Creative Process", href: "/#process" },
                { label: "Insights & Notes", href: "/#insights" },
                { label: "Careers", href: "/#careers" },
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
                    href={`/services#${service.slug}`}
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
              <span className="block text-xs text-[#FAF9F6]/50 uppercase tracking-wider mb-2.5">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "YouTube", href: "https://youtube.com" },
                  { name: "LinkedIn", href: "https://linkedin.com" },
                  { name: "X / Twitter", href: "https://x.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Studio14 on ${social.name}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2C2C2C] text-[#FAF9F6] border border-[#FAF9F6]/20 hover:border-[#FFC928] hover:text-[#FFC928] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
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

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hover:text-[#FFC928] transition-colors"
            >
              Studio Ethos
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-[#FFC928] transition-colors"
            >
              Project Archive
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FFC928] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

