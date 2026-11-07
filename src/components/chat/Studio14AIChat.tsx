"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  Bot,
  User,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  actionLink?: {
    label: string;
    href: string;
  };
  suggestedChips?: string[];
  timestamp: string;
}

const INITIAL_CHIPS = [
  "Browse Knowledge Base",
  "Who owns the source code?",
  "What is your 30-day bug warranty?",
  "Tell me about Web Development",
  "How does Video Editing work?",
  "How do we start a project?",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  sender: "ai",
  text: "Hello! I am **Studio14 AI**, your autonomous guide to our creative studio. \n\nI can answer questions about our core disciplines (Web, Video, Marketing, Automations), or share guides from our **Knowledge Base** on IP ownership, 2-week sprints, and our 30-day bug warranty.",
  suggestedChips: INITIAL_CHIPS,
  actionLink: {
    label: "Explore Knowledge Base & Guides →",
    href: "/knowledge-base",
  },
  timestamp: "Just now",
};

/**
 * Custom Hand-Drawn Studio14 AI Icon
 */
export const Studio14ChatIcon: React.FC<{
  isOpen: boolean;
  className?: string;
}> = ({ isOpen, className = "w-7 h-7" }) => {
  if (isOpen) {
    return <X className={className} />;
  }

  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      className={`${className} overflow-visible`}
      aria-hidden="true"
    >
      {/* Hand-drawn Speech Bubble Outline */}
      <path
        d="M8 12C8 7.58172 11.5817 4 16 4H28C32.4183 4 36 7.58172 36 12V24C36 28.4183 32.4183 32 28 32H18L10 38V30C8.8 28.3 8 26.2 8 24V12Z"
        fill="#FFC928"
        stroke="#171717"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* Bot Eyes / Friendly Expression */}
      <circle cx="17" cy="18" r="2.2" fill="#171717" />
      <circle cx="27" cy="18" r="2.2" fill="#171717" />
      {/* Small Hand-drawn Smile */}
      <path
        d="M19 23C20.5 25 23.5 25 25 23"
        stroke="#171717"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Sparkle on upper-right */}
      <path
        d="M34 2C34.5 5 36.5 6.5 39 7C36.5 7.5 34.5 9 34 12C33.5 9 31.5 7.5 29 7C31.5 6.5 33.5 5 34 2Z"
        fill="#171717"
      />
    </svg>
  );
};

export const Studio14AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showPromptChip, setShowPromptChip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowPromptChip(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Wire up global open events (e.g. from Knowledge Base or CTA buttons)
  useEffect(() => {
    const handleOpenChat = (event: Event) => {
      const customEvent = event as CustomEvent<{ query?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.query) {
        setTimeout(() => {
          handleSendMessage(customEvent.detail.query);
        }, 200);
      }
    };

    window.addEventListener("open-studio14-ai-chat", handleOpenChat);
    return () => window.removeEventListener("open-studio14-ai-chat", handleOpenChat);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: data.reply || "I am here to help you explore Studio14's services.",
        actionLink: data.actionLink,
        suggestedChips: data.suggestedChips,
        timestamp: "Just now",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      // Graceful fallback
      const fallbackMessage: Message = {
        id: `ai-err-${Date.now()}`,
        sender: "ai",
        text: "Studio14 offers four core disciplines:\n\n• **Website Design & Development**\n• **Video Editing**\n• **Marketing**\n• **Business Automations**\n\nWould you like to explore one of these or start a project brief?",
        suggestedChips: [
          "Web Design & Dev",
          "Video Editing",
          "Business Automations",
          "Contact Studio14",
        ],
        actionLink: { label: "View Services Directory →", href: "/services" },
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
  };

  return (
    <aside aria-label="Studio14 AI Assistant" className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Prompt Notification Chip when closed */}
      <AnimatePresence>
        {!isOpen && showPromptChip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] cursor-pointer hover:bg-[#FFC928] hover:shadow-[4px_4px_0px_#171717] transition-all ml-auto w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-hand text-base font-bold text-[#171717]">
              Ask Studio14 AI ✦
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Dock: WhatsApp Chat + Studio14 AI Chat Button */}
      <div className="flex items-center gap-2.5 ml-auto justify-end">
        {/* WhatsApp Quick Chat Floating Button */}
        <motion.a
          href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Studio14 on WhatsApp (+971 50 497 4967)"
          title="Chat on WhatsApp (+971 50 497 4967)"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#25D366] text-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#171717] hover:-rotate-3 transition-all cursor-pointer group"
        >
          <WhatsAppIcon className="w-6 h-6 fill-white transition-transform group-hover:scale-110" />

          {/* Small online indicator dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#171717]" />
          </span>
        </motion.a>

        {/* Studio14 AI Chat Trigger Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close Studio14 AI Chat" : "Open Studio14 AI Chat"}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFC928] text-[#171717] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#171717] transition-shadow cursor-pointer"
        >
          <Studio14ChatIcon isOpen={isOpen} />

          {/* Small glowing AI Badge */}
          {!isOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#10B981] border-2 border-[#FAF9F6]" />
            </span>
          )}
        </motion.button>
      </div>

      {/* Expandable Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] sm:w-[410px] h-[580px] max-h-[82vh] rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] shadow-[8px_8px_0px_#171717] flex flex-col overflow-hidden z-50 text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#EFECE4] border-b-2 border-[#171717] shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFC928] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <Bot className="w-5 h-5 text-[#171717]" />
                  <span className="absolute -bottom-1 -right-1 text-[9px] font-mono font-black bg-[#171717] text-[#FFC928] px-1 rounded">
                    14
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-base font-bold text-[#171717]">
                      Studio14 AI
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#065F46] border border-[#10B981]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Autonomous
                    </span>
                  </div>
                  <p className="text-[11px] text-[#666666]">
                    Core Services &amp; Studio Companion
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1.5">
                <Link
                  href="/knowledge-base"
                  title="Open Knowledge Base & Guides"
                  aria-label="Open Knowledge Base"
                  className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#171717] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/971504974967?text=Hi%20Studio14%2C%20I%20would%20like%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Switch to WhatsApp Direct (+971 50 497 4967)"
                  aria-label="Chat on WhatsApp"
                  className="p-1.5 rounded-lg text-[#25D366] hover:bg-emerald-100/50 transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 rounded-lg text-[#666666] hover:text-[#171717] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg text-[#666666] hover:text-[#171717] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Thread Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      isUser ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? "bg-[#171717] text-[#FAF9F6] rounded-br-xs shadow-[2px_2px_0px_#FFC928]"
                          : "bg-[#F4F1EA] text-[#171717] border-2 border-[#171717] rounded-bl-xs shadow-[2px_2px_0px_#171717]"
                      }`}
                    >
                      {/* Formatted Markdown-like Text */}
                      <div className="space-y-1.5 whitespace-pre-wrap font-sans">
                        {msg.text.split("\n\n").map((paragraph, pIdx) => (
                          <p key={pIdx}>
                            {paragraph.split("**").map((chunk, cIdx) =>
                              cIdx % 2 === 1 ? (
                                <strong key={cIdx} className="font-bold">
                                  {chunk}
                                </strong>
                              ) : (
                                chunk
                              )
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Action Link Button if provided */}
                      {msg.actionLink && (
                        <div className="mt-3 pt-2.5 border-t border-[#171717]/15">
                          <Link
                            href={msg.actionLink.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFC928] text-[#171717] font-bold text-xs border border-[#171717] hover:bg-[#FAF9F6] transition-colors"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Suggested Chips if attached to latest message */}
                    {!isUser &&
                      msg.suggestedChips &&
                      msg.suggestedChips.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                          {msg.suggestedChips.map((chip) => (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => handleSendMessage(chip)}
                              className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FAF9F6] text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#FFC928] transition-colors cursor-pointer text-left"
                            >
                              ✦ {chip}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                );
              })}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#F4F1EA] border-2 border-[#171717] w-fit shadow-[2px_2px_0px_#171717]">
                  <span className="w-2 h-2 rounded-full bg-[#171717] animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-[#FFC928] border border-[#171717] animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[#171717] animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-[#EFECE4] border-t-2 border-[#171717] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Web, Video, Marketing, Automations..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border-2 border-[#171717] text-xs sm:text-sm text-[#171717] placeholder:text-[#666666]/70 focus:outline-none focus:ring-2 focus:ring-[#FFC928] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFC928] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FAF9F6] active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-2 flex items-center justify-between text-[10px] text-[#666666] px-1">
                <span className="flex items-center gap-1 font-mono">
                  <Sparkles className="w-3 h-3 text-[#FFC928]" />
                  Studio14 Autonomous Knowledge Engine
                </span>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-[#171717] hover:underline"
                >
                  Project Brief →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

