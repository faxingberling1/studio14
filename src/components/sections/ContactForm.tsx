"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validation";

interface ApiResponse {
  ok: boolean;
  configuredProvider: boolean;
  message: string;
  integrationNote?: string;
  timestamp?: string;
}

export const ContactForm: React.FC = () => {
  const [serverResponse, setServerResponse] = useState<ApiResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: "Website Design & Development",
      projectDetails: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setServerResponse(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.ok) {
        setSubmitError(
          data.message || "Something went wrong validating your request."
        );
        return;
      }

      setServerResponse(data);
      if (data.configuredProvider) {
        reset();
      }
    } catch {
      setSubmitError(
        "Unable to reach the contact endpoint. Please check your connection and try again."
      );
    }
  };

  return (
    <div className="rounded-3xl bg-[#FAF9F6] border-3 border-[#171717] p-6 sm:p-10 shadow-[8px_8px_0px_#171717] text-left">
      <div className="mb-6 pb-4 border-b-2 border-[#171717]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="font-hand text-xl font-bold text-[#171717]">
            Project Brief &amp; Inquiry Form
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#171717]">
            Tell Us About Your Idea
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC928]/35 border border-[#171717] text-xs font-bold text-[#171717] self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          Direct Studio Desk
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-bold text-[#171717] mb-1.5"
            >
              Full Name <span className="text-[#F28C5A]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g., Ayesha Khan"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
              className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-[#171717] placeholder:text-[#666666]/70 focus:outline-none focus:bg-[#FAF9F6] focus:ring-2 focus:ring-[#FFC928] transition-colors"
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                role="alert"
                className="mt-1.5 text-xs font-semibold text-[#C94A29] flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName.message}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-[#171717] mb-1.5"
            >
              Email Address <span className="text-[#F28C5A]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-[#171717] placeholder:text-[#666666]/70 focus:outline-none focus:bg-[#FAF9F6] focus:ring-2 focus:ring-[#FFC928] transition-colors"
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1.5 text-xs font-semibold text-[#C94A29] flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Company (Optional) */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-bold text-[#171717] mb-1.5"
            >
              Company{" "}
              <span className="text-xs font-normal text-[#666666]">
                (Optional)
              </span>
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your brand or organization"
              aria-invalid={!!errors.company}
              {...register("company")}
              className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-[#171717] placeholder:text-[#666666]/70 focus:outline-none focus:bg-[#FAF9F6] focus:ring-2 focus:ring-[#FFC928] transition-colors"
            />
            {errors.company && (
              <p
                role="alert"
                className="mt-1.5 text-xs font-semibold text-[#C94A29]"
              >
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Service Interested In */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-bold text-[#171717] mb-1.5"
            >
              Service Interested In <span className="text-[#F28C5A]">*</span>
            </label>
            <select
              id="service"
              aria-invalid={!!errors.service}
              {...register("service")}
              className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-[#171717] font-medium focus:outline-none focus:bg-[#FAF9F6] focus:ring-2 focus:ring-[#FFC928] transition-colors"
            >
              <option value="Website Design & Development">
                Website Design &amp; Development
              </option>
              <option value="Video Editing">Video Editing</option>
              <option value="Marketing">Marketing</option>
              <option value="Business Automations">Business Automations</option>
              <option value="Multiple Services / Full Partnership">
                Multiple Services / Full Partnership
              </option>
            </select>
            {errors.service && (
              <p
                role="alert"
                className="mt-1.5 text-xs font-semibold text-[#C94A29]"
              >
                {errors.service.message}
              </p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label
            htmlFor="projectDetails"
            className="block text-sm font-bold text-[#171717] mb-1.5"
          >
            Project Details <span className="text-[#F28C5A]">*</span>
          </label>
          <textarea
            id="projectDetails"
            rows={4}
            placeholder="Share your goals, timeline, and what you'd like to build together..."
            aria-invalid={!!errors.projectDetails}
            aria-describedby={
              errors.projectDetails ? "projectDetails-error" : undefined
            }
            {...register("projectDetails")}
            className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border-2 border-[#171717] text-[#171717] placeholder:text-[#666666]/70 focus:outline-none focus:bg-[#FAF9F6] focus:ring-2 focus:ring-[#FFC928] transition-colors resize-y"
          />
          {errors.projectDetails && (
            <p
              id="projectDetails-error"
              role="alert"
              className="mt-1.5 text-xs font-semibold text-[#C94A29] flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.projectDetails.message}</span>
            </p>
          )}
        </div>

        {/* Submit Error Feedback */}
        {submitError && (
          <div
            role="alert"
            className="p-4 rounded-2xl bg-[#F28C5A]/20 border-2 border-[#171717] text-sm text-[#171717] flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-[#C94A29] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Submission Error</p>
              <p className="text-xs sm:text-sm mt-0.5">{submitError}</p>
            </div>
          </div>
        )}

        {/* Server Response Feedback */}
        {serverResponse && (
          <div
            role="status"
            className="p-5 rounded-2xl bg-[#FFC928]/25 border-2 border-[#171717] space-y-2"
          >
            <div className="flex items-center gap-2 font-bold text-[#171717]">
              <CheckCircle2 className="w-5 h-5 text-[#171717] fill-[#FFC928]" />
              <span>{serverResponse.message}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#666666] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            Direct Studio Response · Privacy Protected
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFC928] text-[#171717] font-bold text-base border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#171717] disabled:opacity-60 transition-all cursor-pointer"
          >
            <span>
              {isSubmitting ? "Validating Inquiry..." : "Send Project Brief"}
            </span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

