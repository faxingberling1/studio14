"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  withArrow = false,
  disabled = false,
  className = "",
  ariaLabel,
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2.5 font-sans font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6] disabled:opacity-60 disabled:pointer-events-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#FFC928] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    dark: "bg-[#171717] text-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#FFC928] hover:bg-[#262626] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#FFC928]",
    secondary:
      "bg-[#FAF9F6] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FFC928]/25 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717]",
    outline:
      "bg-transparent text-[#171717] border-2 border-[#171717]/80 hover:border-[#171717] hover:bg-[#171717]/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-7 py-3.5 text-base sm:text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

