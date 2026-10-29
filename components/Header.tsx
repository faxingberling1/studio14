'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeNav?: string;
  onNavClick?: (nav: string) => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ activeNav = 'Home', onNavClick }: HeaderProps) {
  const [current, setCurrent] = useState(activeNav);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (label: string, href: string) => {
    setCurrent(label);
    if (onNavClick) {
      onNavClick(label);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative w-full overflow-hidden bg-transparent pt-4 pb-3">
      {/* Organic Pastel Doodle Blobs in Background (matching design) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -left-8 w-32 h-28 sm:w-40 sm:h-32 bg-[#fde382] rounded-[42%_58%_65%_35%/45%_48%_52%_55%] opacity-90 blur-[1px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 -left-6 w-24 h-24 sm:w-28 sm:h-28 bg-[#bfeaf8] rounded-[55%_45%_60%_40%/50%_65%_35%_50%] opacity-85 blur-[1px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -right-6 w-24 h-24 bg-[#fedde7] rounded-[50%_50%_45%_55%/60%_40%_60%_40%] opacity-70 blur-[1px] -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="#home"
          onClick={() => handleLinkClick('Home', '#home')}
          className="group flex flex-col items-center flex-shrink-0 select-none transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Studio 14 Homepage"
        >
          {/* Handwritten "Studio" text */}
          <span className="font-handwriting text-[23px] sm:text-[25px] font-bold text-[#1a2333] tracking-tight leading-none -mb-1 transform -rotate-1">
            Studio
          </span>

          {/* Black Square with bold 14 */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#151c28] rounded-[3px] flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.15)] my-0.5">
            <span className="text-white text-2xl sm:text-[26px] font-black tracking-tighter leading-none select-none">
              14
            </span>
          </div>

          {/* Uppercase STUDIO 14 subtitle */}
          <span className="text-[8px] sm:text-[8.5px] font-extrabold tracking-[0.24em] text-[#1a2333] font-mono leading-none mt-0.5">
            STUDIO 14
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = current === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.label, link.href)}
                className={`relative text-[15px] lg:text-[16px] font-semibold transition-colors duration-150 py-1 ${
                  isActive
                    ? 'text-[#162132]'
                    : 'text-[#2b374a] hover:text-[#111827]'
                }`}
              >
                {link.label}

                {/* Hand-drawn organic yellow underline for active link */}
                {isActive && (
                  <svg
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[125%] h-3 overflow-visible pointer-events-none"
                    viewBox="0 0 54 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5C12 2 40 1.8 52 6.5"
                      stroke="#ffc93c"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button with Doodle Sparks */}
        <div className="hidden md:flex items-center relative">
          {/* Left Spark Burst (3 dark radial lines) */}
          <div
            aria-hidden="true"
            className="absolute -left-7 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              {/* Top ray */}
              <path
                d="M18 5L5 7.5"
                stroke="#1a2333"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
              {/* Middle ray */}
              <path
                d="M19 12H4"
                stroke="#1a2333"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
              {/* Bottom ray */}
              <path
                d="M18 19L5 16.5"
                stroke="#1a2333"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => handleLinkClick('Contact', '#contact')}
            className="inline-flex items-center gap-2 bg-[#ffcf4e] hover:bg-[#fec32a] text-[#1a2333] font-bold text-[14px] lg:text-[15px] px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 stroke-[2.7]" />
          </a>

          {/* Right Spark Burst (Radial lines with green accent & yellow middle line) */}
          <div
            aria-hidden="true"
            className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
              {/* Green / mint tiny accent tick at top */}
              <path
                d="M8 2L11 1"
                stroke="#32785a"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Top ray */}
              <path
                d="M5 6L16 4"
                stroke="#1a2333"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
              {/* Middle yellow ray */}
              <path
                d="M4 13H18"
                stroke="#ffcf4e"
                strokeWidth="2.7"
                strokeLinecap="round"
              />
              {/* Bottom ray */}
              <path
                d="M5 20L16 22"
                stroke="#1a2333"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="bg-[#ffcf4e] text-[#1a2333] font-bold text-xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 shadow-sm"
          >
            <span>Talk</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 text-[#1a2333] hover:bg-black/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 bg-[#fffefa] border border-[#e2e4dc] rounded-2xl shadow-xl flex flex-col gap-3 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                current === link.label
                  ? 'bg-[#fff5d6] text-[#1a2333]'
                  : 'text-[#334155] hover:bg-stone-50'
              }`}
            >
              <span>{link.label}</span>
              {current === link.label && (
                <span className="w-2 h-2 rounded-full bg-[#ffcf4e]" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleLinkClick('Contact', '#contact')}
            className="mt-2 w-full text-center bg-[#ffcf4e] text-[#1a2333] font-bold py-3 rounded-xl shadow flex items-center justify-center gap-2"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      )}
    </header>
  );
}

