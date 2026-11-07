"use client";

import React from "react";

interface DoodleIconProps {
  className?: string;
  accentColor?: string;
}

export const BrowserDoodle: React.FC<DoodleIconProps> = ({
  className = "w-16 h-16",
  accentColor = "#FFC928",
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    <rect
      x="10"
      y="16"
      width="60"
      height="48"
      rx="8"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.8"
    />
    <path
      d="M10 28H70"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <circle cx="19" cy="22" r="2.5" fill="#F28C5A" />
    <circle cx="27" cy="22" r="2.5" fill={accentColor} />
    <circle cx="35" cy="22" r="2.5" fill="#6BA3E8" />
    {/* Highlight pill behind code */}
    <rect
      x="21"
      y="38"
      width="38"
      height="16"
      rx="6"
      fill={accentColor}
      fillOpacity="0.45"
    />
    {/* Code brackets </> */}
    <path
      d="M31 40L24 46L31 52M49 40L56 46L49 52M43 38L37 54"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClapperboardDoodle: React.FC<DoodleIconProps> = ({
  className = "w-16 h-16",
  accentColor = "#F28C5A",
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    {/* Top clapper stick */}
    <path
      d="M14 26L64 15L67 25L16 35L14 26Z"
      fill={accentColor}
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M26 24L32 32M42 20L48 28M56 17L61 25"
      stroke="#171717"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Main board */}
    <rect
      x="14"
      y="34"
      width="54"
      height="34"
      rx="6"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.8"
    />
    {/* Play icon inside */}
    <circle
      cx="41"
      cy="51"
      r="11"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.2"
    />
    <polygon points="38,46 38,56 47,51" fill="#171717" />
  </svg>
);

export const MegaphoneDoodle: React.FC<DoodleIconProps> = ({
  className = "w-16 h-16",
  accentColor = "#6BA3E8",
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    {/* Megaphone cone */}
    <path
      d="M18 36L52 20V60L18 46V36Z"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <path
      d="M36 28L52 20V60L36 53V28Z"
      fill={accentColor}
      fillOpacity="0.4"
    />
    {/* Mouthpiece & handle */}
    <rect
      x="11"
      y="35"
      width="8"
      height="12"
      rx="3"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.6"
    />
    <path
      d="M21 47L26 62C26.5 63.5 24 65 22 64L16 47"
      fill={accentColor}
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    {/* Hand-drawn attention lines */}
    <path
      d="M60 28L69 22M62 40H72M60 52L69 58"
      stroke="#171717"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

export const GearsDoodle: React.FC<DoodleIconProps> = ({
  className = "w-16 h-16",
  accentColor = "#A695E7",
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    {/* Primary Gear */}
    <circle
      cx="32"
      cy="34"
      r="13"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.8"
    />
    <circle
      cx="32"
      cy="34"
      r="5.5"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.2"
    />
    <path
      d="M32 16V20M32 48V52M14 34H18M46 34H50M19 21L22 24M42 44L45 47M45 21L42 24M22 44L19 47"
      stroke="#171717"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Secondary Interconnected Gear */}
    <circle
      cx="54"
      cy="52"
      r="10"
      fill={accentColor}
      fillOpacity="0.45"
      stroke="#171717"
      strokeWidth="2.6"
    />
    <circle cx="54" cy="52" r="3.5" fill="#171717" />
    <path
      d="M54 38V41M54 63V66M40 52H43M65 52H68M44 42L46 44M62 60L64 62M64 42L62 44M46 60L44 62"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

export const SpeechLightbulbDoodle: React.FC<DoodleIconProps> = ({
  className = "w-14 h-14",
}) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 24C12 15.1634 19.1634 8 28 8H46C54.8366 8 62 15.1634 62 24V38C62 46.8366 54.8366 54 46 54H28L15 63V51.5C13.1 48.2 12 43.3 12 38V24Z"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <circle
      cx="37"
      cy="28"
      r="9"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.4"
    />
    <path
      d="M34 37H40M35 41H39M37 13V16M24 21L26 23M50 21L48 23"
      stroke="#171717"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const PencilNotebookDoodle: React.FC<DoodleIconProps> = ({
  className = "w-14 h-14",
}) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    <rect
      x="14"
      y="10"
      width="38"
      height="50"
      rx="5"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.6"
    />
    <path
      d="M10 18H17M10 28H17M10 38H17M10 48H17"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M23 22H42M23 31H38M23 40H34"
      stroke="#171717"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Diagonal Pencil */}
    <path
      d="M42 46L56 18L63 22L49 50L41 53L42 46Z"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const CreativeToolsDoodle: React.FC<DoodleIconProps> = ({
  className = "w-14 h-14",
}) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    {/* Pen nib & ruler */}
    <rect
      x="14"
      y="30"
      width="44"
      height="14"
      rx="3"
      transform="rotate(-30 14 30)"
      fill="#6BA3E8"
      fillOpacity="0.35"
      stroke="#171717"
      strokeWidth="2.5"
    />
    <path
      d="M36 14L48 36L40 46H32L24 36L36 14Z"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <circle cx="36" cy="31" r="3" fill="#171717" />
    <path d="M36 14V28" stroke="#171717" strokeWidth="2.4" />
    <rect
      x="29"
      y="46"
      width="14"
      height="10"
      rx="2"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.5"
    />
  </svg>
);

export const RocketDoodle: React.FC<DoodleIconProps> = ({
  className = "w-14 h-14",
}) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    className={`select-none overflow-visible ${className}`}
    aria-hidden="true"
  >
    {/* Flame */}
    <path
      d="M30 52C30 58 36 64 36 64C36 64 42 58 42 52"
      fill="#F28C5A"
      stroke="#171717"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    {/* Fins */}
    <path
      d="M24 40L15 49L25 51M48 40L57 49L47 51"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Rocket Body */}
    <path
      d="M36 10C45 18 48 32 47 50H25C24 32 27 18 36 10Z"
      fill="#FAF9F6"
      stroke="#171717"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <circle
      cx="36"
      cy="31"
      r="6"
      fill="#FFC928"
      stroke="#171717"
      strokeWidth="2.4"
    />
  </svg>
);

