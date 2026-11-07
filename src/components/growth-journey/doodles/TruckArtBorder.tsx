"use client";

import React from "react";

interface TruckArtBorderProps {
  className?: string;
  variant?: "scalloped" | "scallop" | "geometric" | "crown";
  color?: string;
}

export const TruckArtBorder: React.FC<TruckArtBorderProps> = ({
  className = "w-full h-8",
  variant = "scalloped",
}) => {
  if (variant === "crown") {
    return (
      <svg
        viewBox="0 0 600 48"
        fill="none"
        preserveAspectRatio="none"
        className={`select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        {/* Ornate Pakistani Truck Art Crown Taj Border */}
        <path
          d="M0 48H600V24L550 4L500 24L450 4L400 24L350 4L300 28L250 4L200 24L150 4L100 24L50 4L0 24V48Z"
          fill="#171717"
        />
        <path
          d="M0 44H600V26L550 8L500 26L450 8L400 26L350 8L300 30L250 8L200 26L150 8L100 26L50 8L0 26V44Z"
          fill="#FFC928"
        />
        {/* Alternating Chamakpatti triangles */}
        <polygon points="50,16 65,30 35,30" fill="#DC2626" />
        <polygon points="150,16 165,30 135,30" fill="#06B6D4" />
        <polygon points="250,16 265,30 235,30" fill="#DC2626" />
        <polygon points="350,16 365,30 335,30" fill="#059669" />
        <polygon points="450,16 465,30 435,30" fill="#DC2626" />
        <polygon points="550,16 565,30 535,30" fill="#1D4ED8" />
        {/* Little decorative reflective dots */}
        <circle cx="100" cy="28" r="3.5" fill="#DC2626" />
        <circle cx="200" cy="28" r="3.5" fill="#FFC928" />
        <circle cx="300" cy="28" r="4.5" fill="#DC2626" stroke="#171717" strokeWidth="1.5" />
        <circle cx="400" cy="28" r="3.5" fill="#FFC928" />
        <circle cx="500" cy="28" r="3.5" fill="#06B6D4" />
      </svg>
    );
  }

  if (variant === "geometric") {
    return (
      <svg
        viewBox="0 0 600 24"
        fill="none"
        preserveAspectRatio="none"
        className={`select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        <rect width="600" height="24" fill="#171717" />
        {/* Interlocking Diamond Pattern */}
        <path
          d="M0 12L20 0L40 12L20 24Z M40 12L60 0L80 12L60 24Z M80 12L100 0L120 12L100 24Z M120 12L140 0L160 12L140 24Z M160 12L180 0L200 12L180 24Z M200 12L220 0L240 12L220 24Z M240 12L260 0L280 12L260 24Z M280 12L300 0L320 12L300 24Z M320 12L340 0L360 12L340 24Z M360 12L380 0L400 12L380 24Z M400 12L420 0L440 12L420 24Z M440 12L460 0L480 12L460 24Z M480 12L500 0L520 12L500 24Z M520 12L540 0L560 12L540 24Z M560 12L580 0L600 12L580 24Z"
          fill="#FFC928"
          stroke="#DC2626"
          strokeWidth="1.5"
        />
        <line x1="0" y1="2" x2="600" y2="2" stroke="#06B6D4" strokeWidth="2" />
        <line x1="0" y1="22" x2="600" y2="22" stroke="#059669" strokeWidth="2" />
      </svg>
    );
  }

  // Scalloped floral wave
  return (
    <svg
      viewBox="0 0 600 32"
      fill="none"
      preserveAspectRatio="none"
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 8C25 8 25 24 50 24C75 24 75 8 100 8C125 8 125 24 150 24C175 24 175 8 200 8C225 8 225 24 250 24C275 24 275 8 300 8C325 8 325 24 350 24C375 24 375 8 400 8C425 8 425 24 450 24C475 24 475 8 500 8C525 8 525 24 550 24C575 24 575 8 600 8"
        stroke="#DC2626"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M0 8C25 8 25 24 50 24C75 24 75 8 100 8C125 8 125 24 150 24C175 24 175 8 200 8C225 8 225 24 250 24C275 24 275 8 300 8C325 8 325 24 350 24C375 24 375 8 400 8C425 8 425 24 450 24C475 24 475 8 500 8C525 8 525 24 550 24C575 24 575 8 600 8"
        stroke="#FFC928"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Decorative center dots in scallops */}
      {[25, 75, 125, 175, 225, 275, 325, 375, 425, 475, 525, 575].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={i % 2 === 0 ? 10 : 22}
          r="3"
          fill={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#059669" : "#D946EF"}
          stroke="#171717"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export const TruckCrown: React.FC<{
  width?: number | string;
  className?: string;
}> = ({ width = 160, className = "" }) => (
  <div style={{ width: typeof width === "number" ? `${width}px` : width }} className={className}>
    <TruckArtBorder variant="crown" className="w-full h-10" />
  </div>
);
