"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LightbulbProps {
  size?: number;
  color?: string;
  strokeColor?: string;
  className?: string;
}

export const Lightbulb: React.FC<LightbulbProps> = ({
  size = 64,
  color = "#FFC928",
  strokeColor = "#171717",
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 80 88"
      fill="none"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Glow rays */}
      <motion.g
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.45, 1, 0.45],
                scale: [0.96, 1.05, 0.96],
              }
        }
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M40 4V12M12 18L18 23M68 18L62 23M6 42H14M66 42H74"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M40 4V12M12 18L18 23M68 18L62 23M6 42H14M66 42H74"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Bulb Glass */}
      <path
        d="M22 40C22 28.9543 30.0589 20 40 20C49.9411 20 58 28.9543 58 40C58 47.4 53.6 52.8 50 57.5C48.5 59.5 47.5 62 47.5 65H32.5C32.5 62 31.5 59.5 30 57.5C26.4 52.8 22 47.4 22 40Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Filament Sketch */}
      <path
        d="M35 64V48L31 41L36 37L40 42L44 37L49 41L45 48V64"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screw Base */}
      <rect
        x="32"
        y="65"
        width="16"
        height="10"
        rx="3"
        fill="#FAF9F6"
        stroke={strokeColor}
        strokeWidth="2.6"
      />
      <line
        x1="33"
        y1="70"
        x2="47"
        y2="70"
        stroke={strokeColor}
        strokeWidth="2.2"
      />
      <path
        d="M35 75C35 78.5 45 78.5 45 75"
        fill={strokeColor}
        stroke={strokeColor}
        strokeWidth="2.2"
      />
    </motion.svg>
  );
};

