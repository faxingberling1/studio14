"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedArrowProps {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  direction?: "right" | "down-right" | "up-right" | "loop-right";
  className?: string;
}

export const AnimatedArrow: React.FC<AnimatedArrowProps> = ({
  color = "#171717",
  strokeWidth = 2.8,
  duration = 1,
  delay = 0.2,
  direction = "loop-right",
  className = "w-28 h-16",
}) => {
  const prefersReducedMotion = useReducedMotion();

  const paths = {
    right: {
      main: "M6 32C42 26 84 28 118 31",
      head: "M104 19L121 31L103 42",
    },
    "down-right": {
      main: "M8 10C38 12 68 28 112 52",
      head: "M96 54L115 53L106 36",
    },
    "up-right": {
      main: "M8 54C44 52 78 36 114 14",
      head: "M97 12L116 12L108 29",
    },
    "loop-right": {
      main: "M6 42C28 16 56 14 64 30C70 42 52 50 48 38C44 24 82 18 118 28",
      head: "M104 17L121 29L102 38",
    },
  };

  const selected = paths[direction];

  return (
    <motion.svg
      viewBox="0 0 130 64"
      fill="none"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              x: [0, 4, 0],
            }
      }
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d={selected.main}
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
        viewport={{ once: true }}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.2, delay },
        }}
      />
      <motion.path
        d={selected.head}
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
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.4, delay: delay + duration * 0.75, ease: "easeOut" },
          opacity: { duration: 0.15, delay: delay + duration * 0.75 },
        }}
      />
    </motion.svg>
  );
};

