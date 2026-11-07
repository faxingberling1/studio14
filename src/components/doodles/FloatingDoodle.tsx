"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FloatingDoodleProps {
  children: React.ReactNode;
  amplitudeY?: number;
  amplitudeRotate?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingDoodle: React.FC<FloatingDoodleProps> = ({
  children,
  amplitudeY = 7,
  amplitudeRotate = 3,
  duration = 4.5,
  delay = 0,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitudeY, 0, amplitudeY * 0.6, 0],
        rotate: [0, amplitudeRotate, 0, -amplitudeRotate * 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

