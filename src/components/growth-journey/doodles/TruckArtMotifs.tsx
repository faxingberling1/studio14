"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const ChamakpattiStar: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 32, color = "#FFC928", className = "" }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion ? undefined : { rotate: [0, 90, 180, 270, 360] }
      }
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <polygon
        points="20,0 25,14 40,20 25,26 20,40 15,26 0,20 15,14"
        fill={color}
        stroke="#171717"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="4.5" fill="#DC2626" stroke="#171717" strokeWidth="1.5" />
    </motion.svg>
  );
};

export const TruckArtButterfly: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 46, className = "" }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion
          ? undefined
          : { y: [0, -4, 0], rotate: [-2, 2, -2] }
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Top Wings */}
      <path
        d="M30 30C25 15 10 10 5 22C0 34 18 38 30 30Z"
        fill="#F97316"
        stroke="#171717"
        strokeWidth="2"
      />
      <circle cx="14" cy="22" r="4" fill="#FFC928" />

      <path
        d="M30 30C35 15 50 10 55 22C60 34 42 38 30 30Z"
        fill="#06B6D4"
        stroke="#171717"
        strokeWidth="2"
      />
      <circle cx="46" cy="22" r="4" fill="#FFC928" />

      {/* Bottom Wings */}
      <path
        d="M30 30C24 38 12 44 14 52C16 60 28 50 30 30Z"
        fill="#DC2626"
        stroke="#171717"
        strokeWidth="2"
      />
      <path
        d="M30 30C36 38 48 44 46 52C44 60 32 50 30 30Z"
        fill="#059669"
        stroke="#171717"
        strokeWidth="2"
      />

      {/* Body & Antennae */}
      <ellipse cx="30" cy="32" rx="2.5" ry="12" fill="#171717" />
      <path d="M30 20C28 14 24 12 22 14M30 20C32 14 36 12 38 14" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
    </motion.svg>
  );
};

export const GraffitiPaintSplatter: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 50, color = "#FFC928", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    <path
      d="M30 22C36 18 42 24 45 30C48 36 44 42 38 45C32 48 24 46 20 40C16 34 22 26 30 22Z"
      fill={color}
    />
    <circle cx="14" cy="20" r="3" fill={color} />
    <circle cx="48" cy="18" r="2.5" fill={color} />
    <circle cx="42" cy="52" r="2" fill={color} />
    <circle cx="18" cy="48" r="2.2" fill={color} />
    <circle cx="52" cy="36" r="1.5" fill={color} />
  </svg>
);

export const UrduTruckArtBanner: React.FC<{
  phrase: string;
  translation?: string;
  color?: string;
  className?: string;
}> = ({
  phrase,
  translation,
  color = "#FFC928",
  className = "",
}) => (
  <div
    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-[#171717] shadow-[3px_3px_0px_#171717] ${className}`}
    style={{ backgroundColor: color }}
  >
    <span
      className="text-base sm:text-lg font-bold text-[#171717] leading-none"
      dir="rtl"
      style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', sans-serif" }}
    >
      {phrase}
    </span>
    {translation && (
      <span className="text-[11px] font-mono uppercase font-bold text-[#171717]/80 border-l border-[#171717]/30 pl-2">
        {translation}
      </span>
    )}
  </div>
);

export const SpraySplatter = GraffitiPaintSplatter;

export const UrduBadge: React.FC<{
  text?: string;
  phrase?: string;
  subtitle?: string;
  translation?: string;
  color?: string;
  className?: string;
}> = ({
  text,
  phrase,
  subtitle,
  translation,
  color = "#FFC928",
  className = "",
}) => (
  <UrduTruckArtBanner
    phrase={phrase || text || ""}
    translation={translation || subtitle}
    color={color}
    className={className}
  />
);
