"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface DecorativeBirdProps {
  size?: number;
  direction?: "left" | "right";
  type?: "peacock" | "chakor" | string;
  flip?: boolean;
  className?: string;
  animate?: boolean;
}

export const DecorativeBird: React.FC<DecorativeBirdProps> = ({
  size = 72,
  direction = "right",
  type = "peacock",
  flip = false,
  className = "",
  animate = true,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isFlipped = flip || direction === "left";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`select-none overflow-visible ${className}`}
      style={{ transform: isFlipped ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
      animate={
        animate && !prefersReducedMotion
          ? { y: [0, -4, 0], rotate: [0, 2, 0] }
          : undefined
      }
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Ornate Tail Feathers (Peacock / Chakor Fan) */}
      <path
        d="M20 75C10 50 15 25 35 15C25 35 30 55 45 70Z"
        fill="#059669"
        stroke="#171717"
        strokeWidth="2.2"
      />
      <circle cx="28" cy="30" r="5" fill="#06B6D4" stroke="#FFC928" strokeWidth="1.5" />
      <circle cx="28" cy="30" r="2" fill="#DC2626" />

      <path
        d="M12 85C2 60 5 35 22 25C15 45 22 65 38 80Z"
        fill="#1D4ED8"
        stroke="#171717"
        strokeWidth="2.2"
      />
      <circle cx="16" cy="45" r="4.5" fill="#FFC928" stroke="#DC2626" strokeWidth="1.5" />
      <circle cx="16" cy="45" r="1.8" fill="#171717" />

      {/* Bird Body */}
      <path
        d="M40 70C35 55 45 40 60 40C72 40 82 48 85 58C88 68 78 80 62 82C48 84 42 78 40 70Z"
        fill="#06B6D4"
        stroke="#171717"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      {/* Wing with multi-color truck-art scallops */}
      <path
        d="M45 68C42 58 52 50 64 52C62 62 55 72 45 68Z"
        fill="#FFC928"
        stroke="#171717"
        strokeWidth="2"
      />
      <path
        d="M50 64C48 58 54 54 60 55C58 61 54 66 50 64Z"
        fill="#DC2626"
      />

      {/* Neck & Head */}
      <path
        d="M72 46C74 36 70 26 78 20C86 20 88 28 84 38C82 42 78 46 72 46Z"
        fill="#1D4ED8"
        stroke="#171717"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="25" r="7.5" fill="#06B6D4" stroke="#171717" strokeWidth="2" />
      {/* Eye with white ring */}
      <circle cx="81" cy="24" r="3.2" fill="#FAF9F6" stroke="#171717" strokeWidth="1.2" />
      <circle cx="81.5" cy="24" r="1.6" fill="#171717" />

      {/* Beak with truck-art red */}
      <polygon points="87,24 97,27 86,30" fill="#F97316" stroke="#171717" strokeWidth="1.8" />

      {/* Crown Kalgi / Crest on Head */}
      <path
        d="M78 18C75 10 70 8 68 10M80 18C80 8 83 6 86 8M82 19C85 11 90 10 91 12"
        stroke="#FFC928"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="68" cy="9" r="2" fill="#DC2626" />
      <circle cx="86" cy="7" r="2" fill="#DC2626" />
      <circle cx="91" cy="11" r="2" fill="#DC2626" />

      {/* Little legs */}
      <path d="M56 82V92M64 82V92M53 92H59M61 92H67" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" />
    </motion.svg>
  );
};
