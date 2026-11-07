"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GraffitiArrowProps {
  color?: string;
  secondaryColor?: string;
  className?: string;
  direction?: "right" | "down-curve" | "loop" | "dynamic-next";
}

export const GraffitiArrow: React.FC<GraffitiArrowProps> = ({
  color = "#FFC928",
  secondaryColor = "#171717",
  className = "w-28 h-12",
  direction = "dynamic-next",
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (direction === "down-curve") {
    return (
      <svg
        viewBox="0 0 80 100"
        fill="none"
        className={`select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        {/* Graffiti Spray drip lines */}
        <circle cx="28" cy="85" r="2" fill={color} />
        <circle cx="34" cy="94" r="1.5" fill={color} />
        <path
          d="M20 10C50 15 65 45 45 75C42 80 36 84 32 86"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M20 10C50 15 65 45 45 75C42 80 36 84 32 86"
          stroke={secondaryColor}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <path
          d="M18 72L30 88L48 78"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 72L30 88L48 78"
          stroke={secondaryColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Dynamic street graffiti next arrow
  return (
    <motion.svg
      viewBox="0 0 140 50"
      fill="none"
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion ? undefined : { x: [0, 5, 0] }
      }
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Background shadow stroke */}
      <path
        d="M8 28C35 15 75 16 122 25"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M102 10L126 25L98 38"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Foreground crisp charcoal stroke */}
      <path
        d="M8 28C35 15 75 16 122 25"
        stroke={secondaryColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M102 10L126 25L98 38"
        stroke={secondaryColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spray droplets and scribble sparks */}
      <circle cx="132" cy="18" r="2.2" fill={secondaryColor} />
      <circle cx="135" cy="30" r="1.5" fill={color} />
      <line x1="16" y1="36" x2="34" y2="38" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
};

export const GraffitiArrowCurved: React.FC<GraffitiArrowProps> = (props) => (
  <GraffitiArrow direction="down-curve" {...props} />
);
