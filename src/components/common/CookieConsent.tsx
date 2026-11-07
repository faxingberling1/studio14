"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, Check, Settings, X } from "lucide-react";

interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "studio14_cookie_consent_v1";

export const CookieConsent: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Preference state
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setAnalytics(parsed.analytics ?? true);
        setMarketing(parsed.marketing ?? true);
        setShowBanner(false);
      } else {
        // First visit: wait 1.2s for pleasant entrance
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable fallback
      setShowBanner(false);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Listen for custom trigger to open preferences from anywhere on the site (e.g. footer/legal page)
  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowPreferences(true);
      setShowBanner(false);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const savePreferences = (preferences: { analytics: boolean; marketing: boolean }) => {
    const payload: CookiePreferences = {
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Silent catch
    }

    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    savePreferences({ analytics: true, marketing: true });
  };

  const handleEssentialOnly = () => {
    setAnalytics(false);
    setMarketing(false);
    savePreferences({ analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    savePreferences({ analytics, marketing });
  };

  if (!hasLoaded) return null;

  return (
    <>
      {/* 1. Main Bottom Cookie Notification Banner */}
      <AnimatePresence>
        {showBanner && !showPreferences && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md md:max-w-lg z-40"
            role="region"
            aria-label="Cookie consent banner"
          >
            <div className="relative rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-5 sm:p-6 shadow-[8px_8px_0px_#171717] text-[#171717]">
              {/* Top Accent Badge */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#FFC928] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                    <Cookie className="w-4 h-4 text-[#171717]" />
                  </div>
                  <span className="font-editorial text-base sm:text-lg font-bold">
                    Cookie &amp; Privacy Notice
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#047857] border border-[#047857]/30">
                  GDPR &amp; CCPA Compliant
                </span>
              </div>

              {/* Message */}
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                We use cookies and lightweight telemetry to ensure smooth navigation,
                analyze performance, and deliver personalized creative content. You
                retain 100% control over your preferences.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#FFC928] text-[#171717] font-bold text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] transition-all cursor-pointer text-center"
                >
                  Accept All
                </button>

                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#F4F1EA] text-[#171717] font-bold text-xs sm:text-sm border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#EFECE4] transition-all cursor-pointer text-center"
                >
                  Essential Only
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-[#171717] text-xs font-bold hover:bg-[#171717]/5 transition-colors cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>
              </div>

              {/* Read Policy Links */}
              <div className="mt-3.5 pt-3 border-t border-[#171717]/10 flex items-center justify-between text-[11px] text-[#666666]">
                <div className="flex items-center gap-3">
                  <Link href="/privacy" className="underline hover:text-[#171717]">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link href="/legal" className="underline hover:text-[#171717]">
                    Legal Portal
                  </Link>
                </div>
                <span className="font-mono text-[10px] text-[#888888]">
                  Studio14 Security Desk
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Granular Preferences Modal */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-8 shadow-[10px_10px_0px_#171717] text-[#171717]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-preferences-title"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-[#171717]/10">
                <div>
                  <span className="font-hand text-lg font-bold text-[#FFC928] bg-[#171717] px-2.5 py-0.5 rounded-lg inline-block mb-1">
                    رضامندی • Your Privacy Controls
                  </span>
                  <h3 id="cookie-preferences-title" className="font-editorial text-2xl font-bold">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="p-1.5 rounded-xl hover:bg-[#F4F1EA] border border-[#171717]/20 transition-colors cursor-pointer"
                  aria-label="Close preferences"
                >
                  <X className="w-5 h-5 text-[#171717]" />
                </button>
              </div>

              {/* Toggles */}
              <div className="mt-6 space-y-4">
                {/* Category 1: Essential (Always Active) */}
                <div className="p-4 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717]/20 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <h4 className="font-bold text-sm text-[#171717]">
                        Strictly Necessary Cookies
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#171717] text-[#FAF9F6] font-bold">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Essential for security, form token validation, CSRF defense, and saving
                      your interface preferences. These cannot be switched off.
                    </p>
                  </div>
                </div>

                {/* Category 2: Analytics & Performance */}
                <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-2">
                    <h4 className="font-bold text-sm text-[#171717]">
                      Analytics &amp; Performance
                    </h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Collects anonymous telemetry on page speeds, scroll depth, and interaction
                      hotspots to help us refine the Studio14 digital flagship experience.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#EFECE4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#171717] peer-checked:after:bg-[#FAF9F6] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFC928] border-2 border-[#171717]"></div>
                  </label>
                </div>

                {/* Category 3: Marketing & Personalization */}
                <div className="p-4 rounded-2xl bg-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-2">
                    <h4 className="font-bold text-sm text-[#171717]">
                      Marketing &amp; Personalization
                    </h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Remembers your service inquiries, video showreel progress, and ensures
                      social campaign links show relevant creative case studies.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#EFECE4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#171717] peer-checked:after:bg-[#FAF9F6] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFC928] border-2 border-[#171717]"></div>
                  </label>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-7 pt-5 border-t-2 border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href="/privacy#cookies"
                  className="text-xs font-medium text-[#666666] hover:text-[#171717] underline"
                >
                  Learn how we handle cookies
                </Link>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleEssentialOnly}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#F4F1EA] text-[#171717] font-bold text-xs border-2 border-[#171717] hover:bg-[#EFECE4] transition-all cursor-pointer"
                  >
                    Reject All
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FFC928] text-[#171717] font-bold text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save My Choices</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

