"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PaperPlaneProps {
  size?: number;
  accentColor?: string;
  strokeColor?: string;
  withTrail?: boolean;
  className?: string;
  delay?: number;
}

export const PaperPlane: React.FC<PaperPlaneProps> = ({
  size = 110,
  accentColor = "#FFC928",
  strokeColor = "#171717",
  withTrail = true,
  className = "",
  delay = 0.2,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size * 0.75 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="w-full h-full overflow-visible"
      >
        {withTrail && (
          <motion.path
            d="M8 104C32 98 48 76 38 62C28 48 12 60 20 74C28 88 64 78 96 48"
            stroke={strokeColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="5 6"
            initial={
              prefersReducedMotion
                ? { pathLength: 1, opacity: 0.65 }
                : { pathLength: 0, opacity: 0 }
            }
            whileInView={{ pathLength: 1, opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay, ease: "easeInOut" }}
          />
        )}
        <motion.g
          initial={
            prefersReducedMotion
              ? { x: 0, y: 0, rotate: 0, opacity: 1 }
              : { x: -24, y: 18, rotate: -8, opacity: 0 }
          }
          whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -6, 0, 4, 0],
                  x: [0, 4, 0, -2, 0],
                  rotate: [0, -3, 0, 2, 0],
                }
          }
          transition={{
             duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Hand-drawn Paper Plane */}
          <path
            d="M92 36L152 14L124 72L106 52L92 36Z"
            fill="#FAF9F6"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M152 14L106 52L102 74L115 61"
            fill={accentColor}
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M92 36L152 14L106 52"
            stroke={strokeColor}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </div>
  );
};

