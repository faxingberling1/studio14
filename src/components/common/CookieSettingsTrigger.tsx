"use client";

import React from "react";
import { Settings } from "lucide-react";

interface CookieSettingsTriggerProps {
  className?: string;
  label?: string;
  variant?: "button" | "link";
}

export const CookieSettingsTrigger: React.FC<CookieSettingsTriggerProps> = ({
  className = "",
  label = "Manage Cookie Preferences",
  variant = "button",
}) => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-cookie-preferences"));
    }
  };

  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`hover:text-[#FFC928] transition-colors cursor-pointer text-left ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9F6] text-[#171717] font-bold text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFC928] transition-all cursor-pointer ${className}`}
    >
      <Settings className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};

