"use client";

import { useEffect } from "react";

/**
 * ContentProtection Component
 * Protects website content, graphic assets, typography, and truck-art illustrations:
 * 1. Disables context menu (right-click).
 * 2. Prevents image and media dragging.
 * 3. Prevents selection and copying of content (while preserving full interactivity for form inputs).
 * 4. Prevents keyboard shortcuts for saving (Ctrl/Cmd+S), viewing source (Ctrl/Cmd+U), or bulk selecting (Ctrl/Cmd+A).
 */
export const ContentProtection: React.FC = () => {
  useEffect(() => {
    const isInputOrTextarea = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false;
      return (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        Boolean(target.closest("input, textarea, [contenteditable='true']"))
      );
    };

    // 1. Disable Right Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Image / Asset Dragging
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "svg" ||
          target.tagName === "PICTURE" ||
          target.tagName === "VIDEO" ||
          Boolean(target.closest("img, svg, picture, video")))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Disable Copy & Cut outside form fields
    const handleCopy = (e: ClipboardEvent) => {
      if (!isInputOrTextarea(e.target)) {
        e.preventDefault();
        return false;
      }
    };

    const handleCut = (e: ClipboardEvent) => {
      if (!isInputOrTextarea(e.target)) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Disable Save, View Source, Print, and Select-All shortcuts outside form fields
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // Prevent Save (Ctrl+S / Cmd+S), View Source (Ctrl+U / Cmd+U), Print (Ctrl+P / Cmd+P)
      if (isCtrlOrMeta && (key === "s" || key === "u" || key === "p")) {
        e.preventDefault();
        return false;
      }

      // Prevent Select All (Ctrl+A / Cmd+A) and Copy (Ctrl+C / Cmd+C) when not typing in inputs
      if (
        isCtrlOrMeta &&
        (key === "a" || key === "c") &&
        !isInputOrTextarea(e.target)
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    document.addEventListener("copy", handleCopy, { capture: true });
    document.addEventListener("cut", handleCut, { capture: true });
    document.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      document.removeEventListener("copy", handleCopy, { capture: true });
      document.removeEventListener("cut", handleCut, { capture: true });
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, []);

  return null;
};

