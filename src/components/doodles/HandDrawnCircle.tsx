"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HandDrawnCircleProps {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const HandDrawnCircle: React.FC<HandDrawnCircleProps> = ({
  color = "#FFC928",
  strokeWidth = 3.5,
  duration = 1.2,
  delay = 0.15,
  className = " inset-0 w-full h-full",
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 420 150"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M36 42C98 10 315 6 382 44C424 68 412 118 352 134C276 154 96 148 34 118C-8 96 6 46 66 28C114 14 234 12 310 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={
          prefersReducedMotion
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.2, delay },
        }}
      />
    </svg>
  );
};

