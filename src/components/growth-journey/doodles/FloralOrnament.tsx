"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FloralOrnamentProps {
  size?: number;
  className?: string;
  variant?: "rose" | "bouquet" | "corner-rose" | "marigold";
  animateGently?: boolean;
}

export const FloralOrnament: React.FC<FloralOrnamentProps> = ({
  size = 54,
  className = "",
  variant = "rose",
  animateGently = true,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (variant === "corner-rose") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        className={`select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        {/* Leaf Pair */}
        <path
          d="M10 70C20 40 50 35 70 10C50 30 25 35 10 70Z"
          fill="#059669"
          stroke="#171717"
          strokeWidth="2"
        />
        <path d="M25 50L45 30" stroke="#FAF9F6" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M70 70C40 60 35 30 10 10C30 30 35 55 70 70Z"
          fill="#10B981"
          stroke="#171717"
          strokeWidth="2"
        />
        {/* Corner Rose */}
        <circle cx="40" cy="40" r="22" fill="#DC2626" stroke="#171717" strokeWidth="2.5" />
        <circle cx="40" cy="40" r="16" fill="#F43F5E" stroke="#FFC928" strokeWidth="2" />
        <circle cx="40" cy="40" r="9" fill="#FFC928" stroke="#171717" strokeWidth="2" />
        <path
          d="M34 38C36 34 44 34 46 38C44 42 36 42 34 38Z"
          fill="#DC2626"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`select-none overflow-visible ${className}`}
      aria-hidden="true"
      animate={
        animateGently && !prefersReducedMotion
          ? { rotate: [0, 2.5, 0, -2.5, 0], scale: [1, 1.03, 1] }
          : undefined
      }
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Outer Emerald Leaves with decorative painted veins */}
      <path
        d="M20 50C10 30 30 15 45 25C35 35 30 45 20 50Z"
        fill="#059669"
        stroke="#171717"
        strokeWidth="2.2"
      />
      <path d="M25 35L35 30" stroke="#FAF9F6" strokeWidth="1.5" strokeLinecap="round" />

      <path
        d="M80 50C90 30 70 15 55 25C65 35 70 45 80 50Z"
        fill="#059669"
        stroke="#171717"
        strokeWidth="2.2"
      />
      <path d="M75 35L65 30" stroke="#FAF9F6" strokeWidth="1.5" strokeLinecap="round" />

      <path
        d="M50 85C30 95 18 75 30 60C40 70 45 78 50 85Z"
        fill="#10B981"
        stroke="#171717"
        strokeWidth="2.2"
      />

      <path
        d="M50 85C70 95 82 75 70 60C60 70 55 78 50 85Z"
        fill="#10B981"
        stroke="#171717"
        strokeWidth="2.2"
      />

      {/* Layer 1: Traditional Red Petals */}
      <circle cx="50" cy="50" r="30" fill="#DC2626" stroke="#171717" strokeWidth="2.8" />

      {/* Layer 2: Scalloped Magenta / Rose Petals */}
      <path
        d="M32 38C35 30 44 28 50 34C56 28 65 30 68 38C74 44 72 54 66 60C60 66 50 68 50 68C50 68 40 66 34 60C28 54 26 44 32 38Z"
        fill="#F43F5E"
        stroke="#FFC928"
        strokeWidth="2.2"
      />

      {/* Layer 3: Vibrant Orange Middle Petals */}
      <circle cx="50" cy="48" r="16" fill="#F97316" stroke="#171717" strokeWidth="2" />

      {/* Layer 4: Studio14 Yellow Pistil with Red Swirl */}
      <circle cx="50" cy="48" r="9" fill="#FFC928" stroke="#171717" strokeWidth="2" />
      <path
        d="M47 46C48 43 53 43 54 46C55 49 51 51 49 50"
        stroke="#DC2626"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Radiating Chamakpatti Dots */}
      <circle cx="50" cy="14" r="2.5" fill="#FFC928" stroke="#171717" strokeWidth="1" />
      <circle cx="86" cy="50" r="2.5" fill="#06B6D4" stroke="#171717" strokeWidth="1" />
      <circle cx="50" cy="86" r="2.5" fill="#FFC928" stroke="#171717" strokeWidth="1" />
      <circle cx="14" cy="50" r="2.5" fill="#06B6D4" stroke="#171717" strokeWidth="1" />
    </motion.svg>
  );
};

export const FloralCorner: React.FC<{
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  className?: string;
}> = ({ position = "top-left", size = 80, className = "" }) => {
  const rotation =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : position === "bottom-left"
      ? "-rotate-90"
      : "";

  return (
    <div className={`inline-block ${rotation} ${className}`}>
      <FloralOrnament variant="corner-rose" size={size} animateGently={false} />
    </div>
  );
};
