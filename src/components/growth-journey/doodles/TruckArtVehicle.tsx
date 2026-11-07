"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TruckArtVehicleProps {
  className?: string;
  size?: number;
  width?: number | string;
}

export const TruckArtVehicle: React.FC<TruckArtVehicleProps> = ({
  className = "w-full max-w-lg h-auto",
  width,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 540 340"
      fill="none"
      style={width ? { width: typeof width === "number" ? `${width}px` : width } : undefined}
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion ? undefined : { y: [0, -3, 0] }
      }
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Upper Taj / Wooden Carved Truck Crown */}
      <path
        d="M60 130L80 70L120 40L170 20L220 40L260 70L280 130Z"
        fill="#FFC928"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Crown Inset Arches & Chamakpatti reflectors */}
      <path
        d="M95 125L110 75L170 45L230 75L245 125Z"
        fill="#DC2626"
        stroke="#171717"
        strokeWidth="2.5"
      />
      <circle cx="170" cy="85" r="22" fill="#06B6D4" stroke="#FFC928" strokeWidth="3" />
      {/* Urdu Calligraphy inside Crown */}
      <text
        x="170"
        y="92"
        textAnchor="middle"
        fill="#FAF9F6"
        fontSize="17"
        fontWeight="800"
        style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', sans-serif" }}
      >
        شاندار
      </text>

      {/* Main Cargo Bed (Carrying Business & Digital Apps) */}
      <rect
        x="240"
        y="90"
        width="270"
        height="150"
        rx="8"
        fill="#FAF9F6"
        stroke="#171717"
        strokeWidth="3.5"
      />
      {/* Multi-Color Pakistani Truck Painted Panels */}
      <rect x="250" y="100" width="80" height="60" rx="4" fill="#059669" stroke="#171717" strokeWidth="2" />
      <rect x="335" y="100" width="80" height="60" rx="4" fill="#1D4ED8" stroke="#171717" strokeWidth="2" />
      <rect x="420" y="100" width="80" height="60" rx="4" fill="#F97316" stroke="#171717" strokeWidth="2" />

      {/* Painted Rose in center cargo */}
      <circle cx="375" cy="130" r="14" fill="#DC2626" stroke="#FFC928" strokeWidth="2" />
      <circle cx="375" cy="130" r="7" fill="#FFC928" />

      {/* Lower Cargo Board with Urdu Studio14 Sign */}
      <rect x="250" y="170" width="250" height="60" rx="6" fill="#171717" />
      <rect x="254" y="174" width="242" height="52" rx="4" fill="#FFC928" stroke="#DC2626" strokeWidth="2" />
      <text
        x="375"
        y="207"
        textAnchor="middle"
        fill="#171717"
        fontSize="22"
        fontWeight="900"
        style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', sans-serif" }}
      >
        اسٹوڈیو 14 • سدا بہار
      </text>

      {/* Driver Cabin (Front Hood & Windshield) */}
      <path
        d="M60 130H240V240H40L40 180L60 130Z"
        fill="#06B6D4"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Windshield Glass */}
      <path
        d="M75 140H160L160 190H55L75 140Z"
        fill="#FAF9F6"
        stroke="#171717"
        strokeWidth="2.5"
      />
      {/* Center partition & decorative garland */}
      <line x1="110" y1="140" x2="110" y2="190" stroke="#171717" strokeWidth="2" />
      <path d="M58 190C80 200 135 200 158 190" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />

      {/* Front Hood Radiator Grille with Chamakpatti reflectors */}
      <rect x="35" y="200" width="130" height="40" rx="4" fill="#171717" stroke="#171717" strokeWidth="2.5" />
      <line x1="45" y1="210" x2="155" y2="210" stroke="#FFC928" strokeWidth="2" />
      <line x1="45" y1="220" x2="155" y2="220" stroke="#FFC928" strokeWidth="2" />
      <line x1="45" y1="230" x2="155" y2="230" stroke="#FFC928" strokeWidth="2" />

      {/* Heavy Front Bumper with multi-color tassels & reflectors */}
      <rect x="25" y="240" width="150" height="24" rx="6" fill="#DC2626" stroke="#171717" strokeWidth="3" />
      <circle cx="45" cy="252" r="6" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
      <circle cx="75" cy="252" r="6" fill="#059669" stroke="#171717" strokeWidth="1.5" />
      <circle cx="105" cy="252" r="6" fill="#06B6D4" stroke="#171717" strokeWidth="1.5" />
      <circle cx="135" cy="252" r="6" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />

      {/* Hanging Chain / Bell Ornaments (Ghungroo) */}
      {[35, 55, 75, 95, 115, 135, 155].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="264" x2={x} y2="280" stroke="#171717" strokeWidth="1.8" />
          <circle cx={x} cy="282" r="3" fill="#FFC928" stroke="#171717" strokeWidth="1" />
        </g>
      ))}

      {/* Massive Decorated Truck Wheels */}
      {/* Front Wheel */}
      <g>
        <circle cx="120" cy="270" r="42" fill="#171717" />
        <circle cx="120" cy="270" r="30" fill="#E5E5E5" stroke="#171717" strokeWidth="3" />
        <circle cx="120" cy="270" r="16" fill="#DC2626" stroke="#FFC928" strokeWidth="3" />
        <circle cx="120" cy="270" r="6" fill="#FFC928" />
      </g>

      {/* Rear Dual Wheels */}
      <g>
        <circle cx="340" cy="270" r="42" fill="#171717" />
        <circle cx="340" cy="270" r="30" fill="#E5E5E5" stroke="#171717" strokeWidth="3" />
        <circle cx="340" cy="270" r="16" fill="#059669" stroke="#FFC928" strokeWidth="3" />
        <circle cx="340" cy="270" r="6" fill="#FFC928" />
      </g>

      <g>
        <circle cx="440" cy="270" r="42" fill="#171717" />
        <circle cx="440" cy="270" r="30" fill="#E5E5E5" stroke="#171717" strokeWidth="3" />
        <circle cx="440" cy="270" r="16" fill="#1D4ED8" stroke="#FFC928" strokeWidth="3" />
        <circle cx="440" cy="270" r="6" fill="#FFC928" />
      </g>

      {/* Rear Decorative Mudflap with Hand-Drawn Heart & Rose */}
      <path d="M495 240L525 240L515 295L485 295Z" fill="#171717" />
      <circle cx="505" cy="265" r="7" fill="#DC2626" />

      {/* Floating Digital Presence Cloud Icons over the truck */}
      <g transform="translate(260, 20)">
        <rect x="0" y="0" width="46" height="46" rx="12" fill="#FAF9F6" stroke="#171717" strokeWidth="2.5" />
        <text x="23" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#171717">WWW</text>
      </g>
      <g transform="translate(325, 10)">
        <rect x="0" y="0" width="46" height="46" rx="12" fill="#DC2626" stroke="#171717" strokeWidth="2.5" />
        <polygon points="18,14 18,32 32,23" fill="#FAF9F6" />
      </g>
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="46" height="46" rx="12" fill="#06B6D4" stroke="#171717" strokeWidth="2.5" />
        <text x="23" y="32" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FAF9F6">in</text>
      </g>
      <g transform="translate(455, 30)">
        <rect x="0" y="0" width="46" height="46" rx="12" fill="#FFC928" stroke="#171717" strokeWidth="2.5" />
        <circle cx="23" cy="23" r="10" stroke="#171717" strokeWidth="2" fill="none" />
        <circle cx="23" cy="23" r="4" fill="#171717" />
      </g>
    </motion.svg>
  );
};

