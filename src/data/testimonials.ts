import { TestimonialItem } from "@/types";

/**
 * Studio14 Testimonials Data
 * Note per brief Section 05, 07 & 10:
 * "Use actual approved testimonials when available. Never present fictional testimonials as real customer feedback."
 * These cards are transparently marked as Studio14 Partner Feedback Templates / Verified Workflow Expectations
 * ready to be swapped with live client quotes upon approval, never fabricating fake individuals or fake companies.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-01",
    clientName: "Your Future Review Here",
    roleOrCompany: "Verified Client Slot • Website Design & Development",
    avatarUrl: "/studio/avatar-web.svg",
    quote:
      "We never fabricate client quotes or invent fake names. As Studio14 partners share approved feedback on our WordPress, Shopify, and custom Next.js builds, their verified words and project links appear right here.",
    projectAssociated: "Website Design & Development",
    serviceTag: "Web Development",
    isSamplePlaceholder: true,
  },
  {
    id: "testimonial-02",
    clientName: "Creative Partner Slot",
    roleOrCompany: "Verified Client Slot • Video Editing & Production",
    avatarUrl: "/studio/avatar-video.svg",
    quote:
      "What you can expect working with our editing desk: clear storyboards, rhythmic pacing for YouTube and short-form social content, custom motion graphics, and dependable turnaround times without chaotic revisions.",
    projectAssociated: "Video Editing & Post-Production",
    serviceTag: "Video Editing",
    isSamplePlaceholder: true,
  },
  {
    id: "testimonial-03",
    clientName: "Growth Partner Slot",
    roleOrCompany: "Verified Client Slot • Marketing & Automations",
    avatarUrl: "/studio/avatar-growth.svg",
    quote:
      "Our commitment on every marketing and automation engagement: transparent campaign reporting, clean CRM and funnel architecture, and workflows that genuinely save your team hours every week.",
    projectAssociated: "Marketing & Business Automations",
    serviceTag: "Marketing & Automation",
    isSamplePlaceholder: true,
  },
];

