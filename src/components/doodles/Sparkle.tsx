"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SparkleProps {
  size?: number;
  color?: string;
  strokeColor?: string;
  delay?: number;
  className?: string;
}

export const Sparkle: React.FC<SparkleProps> = ({
  size = 28,
  color = "#FFC928",
  strokeColor = "#171717",
  delay = 0,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: [1, 1.16, 0.94, 1],
              rotate: [0, 8, -6, 0],
              opacity: [0.85, 1, 0.8, 0.85],
            }
      }
      transition={{
        duration: 3.4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M20 3C21.5 13 26.5 18 37 20C26.5 22 21.5 27 20 37C18.5 27 13.5 22 3 20C13.5 18 18.5 13 20 3Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33" cy="8" r="2" fill={strokeColor} />
      <circle cx="7" cy="32" r="1.6" fill={strokeColor} />
    </motion.svg>
  );
};

