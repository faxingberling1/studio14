"use client";

import React from "react";
import Image from "next/image";

interface Studio14LogoProps {
  variant?: "navbar" | "emblem" | "footer" | "original-badge";
  className?: string;
}

/**
 * Renders the supplied Studio14 Logo with accurate proportions and crisp visibility.
 * Includes the Urdu calligraphy "اسٹوڈیو", the tall black monolith with thin "14",
 * and the "STUDIO 14" condensed wordmark, plus direct support for the original uploaded artwork.
 */
export const Studio14Logo: React.FC<Studio14LogoProps> = ({
  variant = "navbar",
  className = "",
}) => {
  if (variant === "original-badge") {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border-2 border-[#171717] bg-white shadow-[3px_3px_0px_#171717] ${className}`}
      >
        <Image
          src="/logo/studio14-original.jpg"
          alt="Studio14 Original Emblem — اسٹوڈیو 14"
          width={220}
          height={220}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    );
  }

  if (variant === "emblem") {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <svg
          viewBox="0 0 220 300"
          fill="none"
          className="w-full h-full"
          role="img"
          aria-label="Studio14 — اسٹوڈیو 14"
        >
          {/* Urdu Script اسٹوڈیو */}
          <text
            x="110"
            y="48"
            textAnchor="middle"
            fill="#171717"
            fontSize="42"
            fontWeight="800"
            style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', sans-serif" }}
          >
            اسٹوڈیو
          </text>
          {/* Vertical Black Monolith */}
          <rect x="35" y="64" width="150" height="178" fill="#1C1C1C" />
          {/* Tall Thin Architectural 14 */}
          <path
            d="M60 86L72 78V224"
            stroke="#FAF9F6"
            strokeWidth="8.5"
            strokeLinecap="square"
          />
          <path
            d="M148 224V78L94 182H166"
            stroke="#FAF9F6"
            strokeWidth="8.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Bottom STUDIO 14 condensed typography */}
          <text
            x="35"
            y="282"
            fill="#1C1C1C"
            fontSize="39"
            fontWeight="800"
            letterSpacing="1.5"
            style={{ fontFamily: "'Impact', 'Arial Narrow', sans-serif" }}
          >
            STUDIO
          </text>
          <path
            d="M161 249L165 246V282M183 282V246L169 271H187"
            stroke="#1C1C1C"
            strokeWidth="2.8"
            strokeLinecap="square"
          />
        </svg>
      </div>
    );
  }

  const isFooter = variant === "footer";

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Authentic Studio14 Monolith Mark with original image thumbnail + crisp vector */}
      <div
        className={`relative flex flex-col items-center justify-center rounded-lg border-2 px-2 py-1 transition-transform duration-300 group-hover:-rotate-2 ${
          isFooter
            ? "border-[#FAF9F6]/80 bg-[#171717] shadow-[2px_2px_0px_#FFC928]"
            : "border-[#171717] bg-white shadow-[2px_2px_0px_#FFC928]"
        }`}
      >
        <span
          className={`text-[10px] leading-none font-bold tracking-tight mb-0.5 ${
            isFooter ? "text-[#FAF9F6]" : "text-[#171717]"
          }`}
          dir="rtl"
        >
          اسٹوڈیو
        </span>
        <div className="bg-[#171717] px-2 py-0.5 flex items-center justify-center border border-[#171717]">
          <svg
            width="22"
            height="24"
            viewBox="0 0 90 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M14 14L22 8V92"
              stroke="#FAF9F6"
              strokeWidth="6.5"
              strokeLinecap="square"
            />
            <path
              d="M72 92V8L36 68H84"
              stroke="#FFC928"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5 leading-none">
          <span
            className={`font-display text-xl font-bold tracking-tight ${
              isFooter ? "text-[#FAF9F6]" : "text-[#171717]"
            }`}
          >
            Studio
          </span>
          <span className="inline-block rounded bg-[#FFC928] px-1.5 py-0.5 font-display text-lg font-extrabold text-[#171717] leading-none">
            14
          </span>
        </div>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.18em] mt-0.5 ${
            isFooter ? "text-[#FAF9F6]/60" : "text-[#666666]"
          }`}
        >
          Creative Studio
        </span>
      </div>
    </div>
  );
};

