"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HandDrawnUnderlineProps {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
  variant?: "wave" | "double" | "loop";
}

export const HandDrawnUnderline: React.FC<HandDrawnUnderlineProps> = ({
  color = "#FFC928",
  strokeWidth = 5,
  duration = 0.9,
  delay = 0.2,
  className = "w-full h-4",
  variant = "double",
}) => {
  const prefersReducedMotion = useReducedMotion();

  const paths = {
    wave: "M3 11C55 4 142 15 218 7C254 4 282 9 297 6",
    double:
      "M4 9C75 3 185 4 296 8M22 15C98 11 204 12 278 14",
    loop: "M3 12C82 4 166 5 245 10C268 11 285 8 296 6",
  };

  return (
    <svg
      viewBox="0 0 300 20"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d={paths[variant]}
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
        viewport={{ once: true, margin: "-20px" }}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.2, delay },
        }}
      />
    </svg>
  );
};

