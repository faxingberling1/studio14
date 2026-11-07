import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Studio14Logo } from "@/components/doodles/Studio14Logo";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24 bg-[#FAF9F6]">
      <div className="max-w-lg w-full text-center rounded-3xl bg-[#F4F1EA] border-3 border-[#171717] p-8 sm:p-12 shadow-[8px_8px_0px_#FFC928] space-y-5">
        <div className="flex justify-center">
          <Studio14Logo variant="navbar" />
        </div>
        <span className="inline-block font-hand text-2xl font-bold px-3.5 py-1 rounded-full bg-[#FFC928] border border-[#171717] text-[#171717]">
          404 — Page Off the Sketchbook
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#171717]">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-sm sm:text-base text-[#666666]">
          The page you are looking for may have moved or hasn&apos;t been
          sketched yet. Let&apos;s head back to the Studio14 main desk.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC928] text-[#171717] font-bold text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio14 Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

