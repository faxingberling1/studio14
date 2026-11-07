"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TruckArtVehicleProps {
  className?: string;
  size?: number;
  width?: number | string;
}

/**
 * Authentic Pakistani Truck Art Vehicle ("The Studio14 Brand Express")
 * Handcrafted Bedford TJ aesthetic featuring:
 * - Carved wooden crown (Taj) with "شاندار" (Magnificent) medallion
 * - Hand-painted cargo panels (Gul-o-Bulbul rose, Chamakpatti sunburst, Mountain landscape)
 * - Lower enamel plaque: "اسٹوڈیو 14 • سدا بہار"
 * - Detailed chrome grille, faceted headlights, curved visor, side mirror, and ghungroo bells
 * - Authentic multi-ring painted rims, deep-tread tires, and nazar-battu mudflap
 * - Floating digital flagship badges (Web, Video, Social, Network) with exhaust curls
 */
export const TruckArtVehicle: React.FC<TruckArtVehicleProps> = ({
  className = "w-full max-w-lg h-auto",
  width,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 640 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={width ? { width: typeof width === "number" ? `${width}px` : width } : undefined}
      className={`select-none overflow-visible ${className}`}
      aria-label="Studio14 Handcrafted Pakistani Truck Art Vehicle"
      role="img"
      animate={prefersReducedMotion ? undefined : { y: [0, -3.5, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        {/* Drop shadow for floating digital badges */}
        <filter id="badgeShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="2" dy="3" stdDeviation="1.5" floodColor="#171717" floodOpacity="0.4" />
        </filter>

        {/* Tire rubber gradient */}
        <radialGradient id="tireRubber" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#0F0F0F" />
        </radialGradient>

        {/* Chrome Metallic Linear Gradient */}
        <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#E4E4E7" />
          <stop offset="70%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#F4F4F5" />
        </linearGradient>

        {/* Sunset Instagram Gradient */}
        <linearGradient id="igSunset" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFC928" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>

        {/* Reflective Chamakpatti Gold Gradient */}
        <linearGradient id="chamakGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFC928" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Windshield Reflection Gradient */}
        <linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="70%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>

      {/* ========================================================
          1. ROAD SURFACE & GROUND CONTACT SHADOWS
      ======================================================== */}
      {/* Soft Ground Shadows under heavy wheels */}
      <ellipse cx="145" cy="365" rx="58" ry="10" fill="#171717" opacity="0.25" />
      <ellipse cx="405" cy="365" rx="58" ry="10" fill="#171717" opacity="0.25" />
      <ellipse cx="515" cy="365" rx="58" ry="10" fill="#171717" opacity="0.25" />
      {/* Overall Chassis Shadow */}
      <ellipse cx="330" cy="368" rx="280" ry="8" fill="#171717" opacity="0.12" />

      {/* Stylized Highway Strip Line */}
      <path
        d="M20 372H620"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Dashed Road Center Line */}
      <path
        d="M50 380H110M170 380H230M290 380H350M410 380H470M530 380H590"
        stroke="#FFC928"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ========================================================
          2. EXHAUST STACK & PLAYFUL SMOKE PUFFS
      ======================================================== */}
      {/* Vertical Chrome Exhaust Pipe behind the cab */}
      <path
        d="M272 170V70C272 62 268 56 260 54H254"
        stroke="url(#chromeMetal)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M272 170V70C272 62 268 56 260 54H254"
        stroke="#171717"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Exhaust Rain Flapper Cap */}
      <line x1="250" y1="52" x2="264" y2="48" stroke="#171717" strokeWidth="3" strokeLinecap="round" />

      {/* Playful Rising Doodle Smoke Puffs */}
      <g opacity="0.85">
        <circle cx="242" cy="40" r="7" fill="#FAF9F6" stroke="#171717" strokeWidth="1.8" />
        <circle cx="228" cy="28" r="9" fill="#FAF9F6" stroke="#171717" strokeWidth="1.8" />
        <circle cx="210" cy="18" r="12" fill="#FAF9F6" stroke="#171717" strokeWidth="2" />
        {/* Subtle motion swirls inside smoke */}
        <path d="M210 16C208 14 206 18 204 18" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ========================================================
          3. MAIN CHASSIS UNDERCARRIAGE & FUEL TANK
      ======================================================== */}
      {/* Heavy Steel Frame Rail */}
      <rect x="70" y="278" width="490" height="18" rx="3" fill="#171717" />

      {/* Cylindrical Fuel Tank with Chrome Straps */}
      <rect x="220" y="280" width="85" height="34" rx="8" fill="#4B5563" stroke="#171717" strokeWidth="2.5" />
      <line x1="235" y1="280" x2="235" y2="314" stroke="#FFC928" strokeWidth="3" />
      <line x1="290" y1="280" x2="290" y2="314" stroke="#FFC928" strokeWidth="3" />
      <circle cx="262" cy="297" r="6" fill="#171717" />
      <circle cx="262" cy="297" r="3" fill="#E5E7EB" />

      {/* Battery Box / Tool Chest */}
      <rect x="315" y="282" width="45" height="30" rx="4" fill="#047857" stroke="#171717" strokeWidth="2" />
      <line x1="315" y1="297" x2="360" y2="297" stroke="#FFC928" strokeWidth="2" />

      {/* Lateral Safety Guardrails (Black & Yellow Chevron Tape) */}
      <g>
        <rect x="215" y="266" width="150" height="10" fill="#FFC928" stroke="#171717" strokeWidth="2" />
        {/* Hazard Stripes */}
        {[225, 245, 265, 285, 305, 325, 345].map((x) => (
          <line key={x} x1={x} y1="267" x2={x + 10} y2="275" stroke="#171717" strokeWidth="3" />
        ))}
      </g>

      {/* ========================================================
          4. THE ORNATE WOODEN CROWN (TAJ - تاج)
      ======================================================== */}
      {/* Outer Crown Base with multi-lobed scallops */}
      <path
        d="M78 142
           L98 88
           C105 76 116 66 128 58
           L160 38
           C174 29 194 24 212 24
           C230 24 250 29 264 38
           L296 58
           C308 66 319 76 326 88
           L346 142 Z"
        fill="url(#chamakGold)"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Chamakpatti Triangular Crest Teeth (Dandasa) along outer rim */}
      <path
        d="M98 88 L108 94 L118 84 L128 92 L140 78 L152 88 L168 70 L182 82 L200 62 L212 60 L224 62 L242 82 L256 70 L272 88 L284 78 L296 92 L306 84 L316 94 L326 88"
        stroke="#DC2626"
        strokeWidth="3"
        fill="#DC2626"
        strokeLinejoin="round"
      />

      {/* Tier 2: Scarlet Royal Arch Inset */}
      <path
        d="M106 138
           L124 92
           C138 68 172 46 212 46
           C252 46 286 68 300 92
           L318 138 Z"
        fill="#DC2626"
        stroke="#171717"
        strokeWidth="2.5"
      />

      {/* Tier 3: Peacock Cyan Inner Field */}
      <path
        d="M128 134
           L142 102
           C158 80 184 66 212 66
           C240 66 266 80 282 102
           L296 134 Z"
        fill="#06B6D4"
        stroke="#FFC928"
        strokeWidth="2"
      />

      {/* Centerpiece: Gilded Medallion with "شاندار" (Magnificent) */}
      <g>
        {/* Ornate Sunburst Rays behind Medallion */}
        <circle cx="212" cy="100" r="34" fill="#FFC928" stroke="#171717" strokeWidth="2.5" />
        <circle cx="212" cy="100" r="30" fill="#171717" />
        <circle cx="212" cy="100" r="27" fill="#047857" stroke="#FFC928" strokeWidth="2" />

        {/* Traditional Pearl Beads around medallion rim */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 212 + 32 * Math.cos(rad);
          const cy = 100 + 32 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="2" fill="#FAF9F6" />;
        })}

        {/* Gilded Urdu Script: شاندار (Shandaar / Magnificent) */}
        <text
          x="212"
          y="108"
          textAnchor="middle"
          fill="#FFC928"
          fontSize="22"
          fontWeight="900"
          style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', serif" }}
        >
          شاندار
        </text>
      </g>

      {/* Crown Top Golden Spire Finial */}
      <path d="M212 12V24M206 18H218" stroke="#FFC928" strokeWidth="4" strokeLinecap="round" />
      <circle cx="212" cy="10" r="4.5" fill="#DC2626" stroke="#171717" strokeWidth="1.5" />

      {/* Chamakpatti Corner Stars on Taj Wings */}
      <circle cx="120" cy="120" r="7" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="3" fill="#DC2626" />
      <circle cx="304" cy="120" r="7" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
      <circle cx="304" cy="120" r="3" fill="#DC2626" />

      {/* ========================================================
          5. DRIVER CABIN (BEDFORD TJ NOSE & WINDSHIELD)
      ======================================================== */}
      {/* Main Cabin Shell in Vibrant Peacock Cyan */}
      <path
        d="M74 142
           H280
           V278
           H56
           C50 278 46 273 46 267
           L46 208
           C46 198 52 188 60 180
           L74 142 Z"
        fill="#06B6D4"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Two-Tone Lower Bonnet Trim in Canary Yellow */}
      <path
        d="M48 226
           L62 182
           H185
           V278
           H56
           C50 278 48 274 48 270 Z"
        fill="#FFC928"
        stroke="#171717"
        strokeWidth="2.5"
      />

      {/* Curved Roof Visor (Chhajja) with Painted Fringe */}
      <path
        d="M68 140
           C110 132 230 132 284 140
           L282 148
           C228 142 110 142 70 148 Z"
        fill="#DC2626"
        stroke="#171717"
        strokeWidth="2.5"
      />
      {/* Visor Hanging Scallops (Jhalar) */}
      {[82, 106, 130, 154, 178, 202, 226, 250, 274].map((x) => (
        <path key={x} d={`M${x - 8} 148 Q${x} 154 ${x + 8} 148`} stroke="#FFC928" strokeWidth="2.5" fill="none" />
      ))}

      {/* Two-Pane Windshield Glass with Gaskets */}
      <path
        d="M86 150
           H184
           V202
           H64
           L86 150 Z"
        fill="url(#windshieldGlass)"
        stroke="#171717"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Center Window Partition Pillar */}
      <line x1="130" y1="150" x2="130" y2="202" stroke="#171717" strokeWidth="3" />

      {/* Windshield Wiper Blades */}
      <line x1="94" y1="200" x2="114" y2="168" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="138" y1="200" x2="158" y2="168" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

      {/* Windshield Festive Garland (Phool Mala) */}
      <path
        d="M68 200 Q100 212 130 202 Q158 212 182 200"
        stroke="#DC2626"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Garland Marigold Beads */}
      {[80, 100, 120, 140, 160, 174].map((x, i) => (
        <circle key={i} cx={x} cy={206 - (i % 2) * 2} r="3" fill="#FFC928" stroke="#171717" strokeWidth="1" />
      ))}

      {/* Side Door Window */}
      <path
        d="M194 150
           H268
           V202
           H194 Z"
        fill="url(#windshieldGlass)"
        stroke="#171717"
        strokeWidth="2.5"
      />
      {/* Driver Silhouette Gesture */}
      <circle cx="218" cy="174" r="8" fill="#171717" opacity="0.6" />
      <path d="M208 196 C210 186 226 186 228 196" fill="#171717" opacity="0.6" />

      {/* Driver Door Panel Ornament: Handcrafted Truck Art Motif */}
      <rect x="194" y="214" width="74" height="52" rx="4" fill="#FAF9F6" stroke="#171717" strokeWidth="2" />
      {/* Door Peacock Feather / Floral Arc */}
      <path d="M204 254 Q231 222 258 254" fill="#047857" stroke="#FFC928" strokeWidth="1.5" />
      <circle cx="231" cy="236" r="6" fill="#DC2626" stroke="#FFC928" strokeWidth="1.5" />
      <circle cx="231" cy="236" r="2.5" fill="#FFC928" />
      {/* Chrome Door Handle */}
      <rect x="254" y="218" width="10" height="4" rx="2" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="1" />

      {/* Chrome Side Rearview Mirror on Tubular Bracket */}
      <g>
        <path d="M68 180 L50 174 V160" stroke="#171717" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="42" y="152" width="10" height="22" rx="3" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="2" />
        <rect x="44" y="154" width="6" height="18" rx="1.5" fill="#E0F2FE" />
      </g>

      {/* Front Radiator Grille & Hood Chevron Reflectors */}
      <g>
        {/* Grille Housing */}
        <rect x="40" y="228" width="140" height="42" rx="4" fill="#171717" stroke="#171717" strokeWidth="2.5" />
        {/* Horizontal Chrome Louver Bars */}
        <line x1="50" y1="236" x2="170" y2="236" stroke="url(#chromeMetal)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="244" x2="170" y2="244" stroke="url(#chromeMetal)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="252" x2="170" y2="252" stroke="url(#chromeMetal)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="260" x2="170" y2="260" stroke="url(#chromeMetal)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Center Grille Badge (Classic Truck Diamond) */}
        <polygon points="110,234 120,248 110,262 100,248" fill="#DC2626" stroke="#FFC928" strokeWidth="2" />
        <circle cx="110" cy="248" r="3" fill="#FFC928" />
      </g>

      {/* Faceted Headlight Unit (Left Front) */}
      <g>
        {/* Chrome Headlight Bucket */}
        <circle cx="50" cy="214" r="14" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="2.5" />
        {/* Yellow Faceted Lens */}
        <circle cx="50" cy="214" r="10" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
        <path d="M46 210L54 218M46 218L54 210" stroke="#CA8A04" strokeWidth="1.2" />
        {/* Amber Indicator Lamp */}
        <rect x="36" y="200" width="8" height="8" rx="2" fill="#F97316" stroke="#171717" strokeWidth="1.5" />
      </g>

      {/* Heavy Steel Front Bumper with Chamakpatti Diamonds */}
      <g>
        <rect x="22" y="270" width="162" height="26" rx="6" fill="#DC2626" stroke="#171717" strokeWidth="3" />
        {/* Concentric Decorative Reflectors */}
        {[38, 70, 102, 134, 166].map((x, i) => {
          const colors = ["#FFC928", "#059669", "#06B6D4", "#FFC928", "#059669"];
          return (
            <g key={x}>
              <circle cx={x} cy="283" r="8" fill={colors[i]} stroke="#171717" strokeWidth="1.8" />
              <circle cx={x} cy="283" r="3.5" fill="#FAF9F6" />
            </g>
          );
        })}
      </g>

      {/* Hanging Steel Chains & Brass Bells (Ghungroos - چھنکار) */}
      {[34, 52, 70, 88, 106, 124, 142, 160].map((x, i) => (
        <g key={i}>
          {/* Linked Chain Links */}
          <line x1={x} y1="296" x2={x} y2="318" stroke="#171717" strokeWidth="2" strokeDasharray="2 3" />
          {/* Brass Bell with clapper */}
          <path
            d={`M${x - 4} 318 Q${x} 315 ${x + 4} 318 L${x + 5} 326 H${x - 5} Z`}
            fill="#FFC928"
            stroke="#171717"
            strokeWidth="1.2"
          />
          <circle cx={x} cy="328" r="1.8" fill="#DC2626" />
        </g>
      ))}

      {/* ========================================================
          6. MAIN CARGO BODY (DALA - ڈالا)
      ======================================================== */}
      {/* Main Wooden Cargo Box Outer Framework */}
      <rect
        x="276"
        y="126"
        width="334"
        height="152"
        rx="10"
        fill="#FAF9F6"
        stroke="#171717"
        strokeWidth="3.5"
      />

      {/* Top Scalloped Chamakpatti Crown Trim of Cargo Bed */}
      <g>
        <rect x="282" y="132" width="322" height="12" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
        {/* Scallop Ribbon */}
        {[292, 312, 332, 352, 372, 392, 412, 432, 452, 472, 492, 512, 532, 552, 572, 592].map((x) => (
          <polygon key={x} points={`${x},132 ${x + 8},144 ${x + 16},132`} fill="#DC2626" />
        ))}
      </g>

      {/* 3 Richly Decorated Traditional Truck Art Panels */}
      {/* ---------------------------------------------------- */}
      {/* PANEL 1: Gul-o-Bulbul (The Rose & Floral Flourish) */}
      <g>
        {/* Panel Frame */}
        <rect x="286" y="150" width="98" height="64" rx="6" fill="#047857" stroke="#171717" strokeWidth="2.5" />
        <rect x="290" y="154" width="90" height="56" rx="4" fill="#065F46" stroke="#FFC928" strokeWidth="1.5" />

        {/* Handcrafted Rose Blossom */}
        {/* Stem and Leaves */}
        <path d="M335 198 Q330 186 335 174" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M333 186 Q320 182 322 176 Q330 182 334 186" fill="#34D399" stroke="#171717" strokeWidth="1" />
        <path d="M335 182 Q348 180 346 174 Q338 178 335 182" fill="#34D399" stroke="#171717" strokeWidth="1" />

        {/* Multi-layered Rose Petals */}
        <circle cx="335" cy="172" r="14" fill="#DC2626" stroke="#171717" strokeWidth="1.5" />
        <circle cx="335" cy="172" r="9" fill="#F43F5E" />
        <circle cx="335" cy="172" r="5" fill="#FFC928" />

        {/* Chamakpatti Corner Corner Dots */}
        <circle cx="296" cy="160" r="3" fill="#FFC928" />
        <circle cx="374" cy="160" r="3" fill="#FFC928" />
        <circle cx="296" cy="204" r="3" fill="#FFC928" />
        <circle cx="374" cy="204" r="3" fill="#FFC928" />
      </g>

      {/* ---------------------------------------------------- */}
      {/* PANEL 2: Central Sunburst Medallion (Chamakpatti Sitara) */}
      <g>
        {/* Panel Frame */}
        <rect x="394" y="150" width="98" height="64" rx="6" fill="#1D4ED8" stroke="#171717" strokeWidth="2.5" />
        <rect x="398" y="154" width="90" height="56" rx="4" fill="#1E40AF" stroke="#FFC928" strokeWidth="1.5" />

        {/* Radiant Starburst Rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 443 + 14 * Math.cos(rad);
          const y1 = 182 + 14 * Math.sin(rad);
          const x2 = 443 + 22 * Math.cos(rad);
          const y2 = 182 + 22 * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFC928" strokeWidth="2" strokeLinecap="round" />;
        })}

        {/* Multi-tier Concentric Rings */}
        <circle cx="443" cy="182" r="15" fill="#DC2626" stroke="#FFC928" strokeWidth="2" />
        <circle cx="443" cy="182" r="9" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
        <circle cx="443" cy="182" r="4.5" fill="#06B6D4" />
        <circle cx="443" cy="182" r="1.8" fill="#FAF9F6" />
      </g>

      {/* ---------------------------------------------------- */}
      {/* PANEL 3: Mountain Landscape & Crescent Bird Motif */}
      <g>
        {/* Panel Frame */}
        <rect x="502" y="150" width="98" height="64" rx="6" fill="#EA580C" stroke="#171717" strokeWidth="2.5" />
        <rect x="506" y="154" width="90" height="56" rx="4" fill="#C2410C" stroke="#FFC928" strokeWidth="1.5" />

        {/* Mountain Silhouette with snowcaps */}
        <polygon points="510,204 532,176 548,204" fill="#171717" />
        <polygon points="532,176 538,185 532,188 526,185" fill="#FAF9F6" />
        <polygon points="538,204 562,168 586,204" fill="#171717" />
        <polygon points="562,168 570,178 562,182 554,178" fill="#FAF9F6" />

        {/* Golden Sun & Flying Falcon Silhouette */}
        <circle cx="578" cy="168" r="6" fill="#FFC928" />
        {/* Bird in flight */}
        <path d="M526 168 Q530 164 534 168 Q538 164 542 168" stroke="#FAF9F6" strokeWidth="1.5" fill="none" />
      </g>

      {/* ---------------------------------------------------- */}
      {/* LOWER CARGO PLAQUE: "اسٹوڈیو 14 • سدا بہار" */}
      {/* Outer Plaque Border with Rivets */}
      <rect x="286" y="222" width="314" height="48" rx="7" fill="#171717" />
      <rect x="290" y="226" width="306" height="40" rx="5" fill="#FFC928" stroke="#DC2626" strokeWidth="2" />

      {/* Ornate Plaque Corner Filigree */}
      <path d="M294 230 Q302 238 294 246" stroke="#171717" strokeWidth="1.8" fill="none" />
      <path d="M592 230 Q584 238 592 246" stroke="#171717" strokeWidth="1.8" fill="none" />

      {/* Master Truck Art Calligraphy: "اسٹوڈیو 14 • سدا بہار" */}
      <text
        x="443"
        y="253"
        textAnchor="middle"
        fill="#171717"
        fontSize="21"
        fontWeight="900"
        style={{ fontFamily: "'Noto Nastaliq Urdu', 'Segoe UI', serif" }}
      >
        اسٹوڈیو 14 • سدا بہار
      </text>

      {/* Chamakpatti Dots along plaque top */}
      {[310, 335, 360, 526, 551, 576].map((x) => (
        <circle key={x} cx={x} cy="231" r="2.2" fill="#DC2626" />
      ))}

      {/* Rear Heavy Rubber Mudflap (Nazar Battu / Eagle Eye) */}
      <g>
        <polygon points="602,274 632,274 624,342 590,342" fill="#171717" />
        {/* Evil Eye / Heart Medallion */}
        <circle cx="611" cy="302" r="10" fill="#DC2626" stroke="#FFC928" strokeWidth="1.5" />
        <circle cx="611" cy="302" r="5" fill="#FAF9F6" />
        <circle cx="611" cy="302" r="2.5" fill="#171717" />
        {/* Lower Mudflap Fringe */}
        <line x1="592" y1="336" x2="622" y2="336" stroke="#FFC928" strokeWidth="2.5" strokeDasharray="3 3" />
        {/* Red Rear Stop Tail Light */}
        <rect x="598" y="264" width="12" height="12" rx="3" fill="#DC2626" stroke="#171717" strokeWidth="2" />
        <circle cx="604" cy="270" r="3.5" fill="#EF4444" />
      </g>

      {/* ========================================================
          7. MASTER WHEELS (DEEP TREAD TIRES & PAINTED RIMS)
      ======================================================== */}
      {/* HELPER FUNCTION FOR TRUCK ART WHEEL */}
      {/* Front Wheel (Single Heavy Axle) */}
      <g transform="translate(145, 310)">
        {/* Outer Tire with Heavy Lug Treads */}
        <circle cx="0" cy="0" r="50" fill="url(#tireRubber)" stroke="#171717" strokeWidth="3" />
        {/* Deep Tread Notches */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 43 * Math.cos(rad);
          const y1 = 43 * Math.sin(rad);
          const x2 = 49 * Math.cos(rad);
          const y2 = 49 * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2D2D2D" strokeWidth="3.5" strokeLinecap="round" />;
        })}

        {/* Chrome Outer Rim Lip */}
        <circle cx="0" cy="0" r="37" fill="#E4E4E7" stroke="#171717" strokeWidth="2.5" />
        {/* Ring 1: Canary Yellow Band */}
        <circle cx="0" cy="0" r="31" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
        {/* Ring 2: Scarlet Red Medallion */}
        <circle cx="0" cy="0" r="22" fill="#DC2626" stroke="#FFC928" strokeWidth="2" />
        {/* Ring 3: Center Chrome Hubcap */}
        <circle cx="0" cy="0" r="12" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#FFC928" />

        {/* Wheel Hub Lug Nuts */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 17 * Math.cos(rad);
          const cy = 17 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="1.8" fill="#171717" />;
        })}
      </g>

      {/* Rear Axle 1 (Dual Wheel Pair Front) */}
      <g transform="translate(405, 310)">
        <circle cx="0" cy="0" r="50" fill="url(#tireRubber)" stroke="#171717" strokeWidth="3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 43 * Math.cos(rad);
          const y1 = 43 * Math.sin(rad);
          const x2 = 49 * Math.cos(rad);
          const y2 = 49 * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2D2D2D" strokeWidth="3.5" strokeLinecap="round" />;
        })}
        <circle cx="0" cy="0" r="37" fill="#E4E4E7" stroke="#171717" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="31" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="22" fill="#047857" stroke="#FFC928" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#FFC928" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 17 * Math.cos(rad);
          const cy = 17 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="1.8" fill="#171717" />;
        })}
      </g>

      {/* Rear Axle 2 (Dual Wheel Pair Back) */}
      <g transform="translate(515, 310)">
        <circle cx="0" cy="0" r="50" fill="url(#tireRubber)" stroke="#171717" strokeWidth="3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 43 * Math.cos(rad);
          const y1 = 43 * Math.sin(rad);
          const x2 = 49 * Math.cos(rad);
          const y2 = 49 * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2D2D2D" strokeWidth="3.5" strokeLinecap="round" />;
        })}
        <circle cx="0" cy="0" r="37" fill="#E4E4E7" stroke="#171717" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="31" fill="#FFC928" stroke="#171717" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="22" fill="#1D4ED8" stroke="#FFC928" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="url(#chromeMetal)" stroke="#171717" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#FFC928" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 17 * Math.cos(rad);
          const cy = 17 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="1.8" fill="#171717" />;
        })}
      </g>

      {/* ========================================================
          8. FLOATING DIGITAL CARGO BADGES (WEB, VIDEO, SOCIAL)
      ======================================================== */}
      {/* 1. Website Flagship (Globe) Badge */}
      <g transform="translate(306, 50)" filter="url(#badgeShadow)">
        <rect x="0" y="0" width="54" height="54" rx="16" fill="#FAF9F6" stroke="#171717" strokeWidth="3" />
        {/* Globe Grid */}
        <circle cx="27" cy="27" r="15" fill="#E0F2FE" stroke="#171717" strokeWidth="2" />
        <ellipse cx="27" cy="27" rx="7" ry="15" fill="none" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="12" y1="27" x2="42" y2="27" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="15" y1="20" x2="39" y2="20" stroke="#0284C7" strokeWidth="1.2" />
        <line x1="15" y1="34" x2="39" y2="34" stroke="#0284C7" strokeWidth="1.2" />
        {/* Chamakpatti Sparkle Corner Accent */}
        <circle cx="44" cy="10" r="3.5" fill="#FFC928" stroke="#171717" strokeWidth="1" />
      </g>

      {/* 2. Video Editing (YouTube Cinema Play) Badge */}
      <g transform="translate(378, 36)" filter="url(#badgeShadow)">
        <rect x="0" y="0" width="54" height="54" rx="16" fill="#DC2626" stroke="#171717" strokeWidth="3" />
        {/* Cinema Play Triangle */}
        <polygon points="21,17 21,37 38,27" fill="#FAF9F6" stroke="#171717" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Film Perforation Marks */}
        <rect x="7" y="6" width="4" height="5" rx="1" fill="#FFC928" />
        <rect x="43" y="6" width="4" height="5" rx="1" fill="#FFC928" />
        <rect x="7" y="43" width="4" height="5" rx="1" fill="#FFC928" />
        <rect x="43" y="43" width="4" height="5" rx="1" fill="#FFC928" />
      </g>

      {/* 3. Professional Authority & Growth (LinkedIn) Badge */}
      <g transform="translate(450, 48)" filter="url(#badgeShadow)">
        <rect x="0" y="0" width="54" height="54" rx="16" fill="#0284C7" stroke="#171717" strokeWidth="3" />
        {/* Clean 'in' Wordmark */}
        <text
          x="27"
          y="36"
          textAnchor="middle"
          fill="#FAF9F6"
          fontSize="24"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          in
        </text>
        {/* Little Crown on the 'i' */}
        <polygon points="17,14 19,17 21,14" fill="#FFC928" />
      </g>

      {/* 4. Creative Visuals & Short-Form (Instagram Sunset) Badge */}
      <g transform="translate(522, 60)" filter="url(#badgeShadow)">
        <rect x="0" y="0" width="54" height="54" rx="16" fill="url(#igSunset)" stroke="#171717" strokeWidth="3" />
        {/* Camera Outer Box */}
        <rect x="14" y="14" width="26" height="26" rx="8" fill="none" stroke="#FAF9F6" strokeWidth="2.5" />
        {/* Camera Lens */}
        <circle cx="27" cy="27" r="7" fill="none" stroke="#FAF9F6" strokeWidth="2.5" />
        {/* Flash Dot */}
        <circle cx="34" cy="20" r="2" fill="#FAF9F6" />
      </g>

      {/* Floating Speed & Sparkle Accents */}
      <g>
        {/* Chamakpatti Stars hovering */}
        <path d="M290 85 L294 93 L302 96 L294 99 L290 107 L286 99 L278 96 L286 93 Z" fill="#FFC928" />
        <path d="M592 110 L595 116 L601 118 L595 120 L592 126 L589 120 L583 118 L589 116 Z" fill="#FFC928" />
        {/* Motion Speed Dashes */}
        <line x1="20" y1="214" x2="34" y2="214" stroke="#FFC928" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="222" x2="30" y2="222" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="230" x2="36" y2="230" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </motion.svg>
  );
};
