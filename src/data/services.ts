import { ServiceItem, ProcessStep } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    slug: "web-development",
    number: "01",
    title: "Website Design & Development",
    shortTitle: "Web Design & Dev",
    description:
      "Modern, scalable, and high-performance websites that turn visitors into customers.",
    longDescription:
      "We architect digital flagships that feel effortless to use and impossible to forget. Whether you need a custom Next.js application, a high-converting Shopify storefront, or a flexible WordPress publishing platform, every line of code and editorial layout is crafted for speed, accessibility, and conversion.",
    features: [
      "WordPress Development",
      "Shopify Development",
      "Custom Web Development",
    ],
    deliverables: [
      {
        title: "Custom Web Development",
        description:
          "Bespoke Next.js, React, and TypeScript web applications engineered for performance, SEO, and interactive storytelling.",
      },
      {
        title: "Shopify Development",
        description:
          "Conversion-focused e-commerce storefronts, custom theme architecture, and seamless checkout experiences.",
      },
      {
        title: "WordPress Development",
        description:
          "Clean, editorial-grade custom block themes and headless setups that empower your team to publish without friction.",
      },
      {
        title: "Interactive Design Systems",
        description:
          "Component libraries, responsive wireframes, and custom hand-drawn SVG illustration systems tailored to your brand.",
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Shopify", "WordPress", "Tailwind CSS", "Framer Motion"],
    doodleType: "browser",
    accentColor: "#FFC928",
    timelineEstimate: "3 – 8 Weeks",
  },
  {
    id: "service-02",
    slug: "video-editing",
    number: "02",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "Turn ideas into compelling visual stories that capture attention.",
    longDescription:
      "Great video editing is rhythm, pacing, and narrative clarity. We transform raw footage into magnetic stories—from documentary-style YouTube episodes and crisp promotional films to thumb-stopping vertical edits designed for high retention across social feeds.",
    features: [
      "YouTube Video Editing",
      "Short-form Content",
      "Social Media Videos",
      "Promotional Videos",
    ],
    deliverables: [
      {
        title: "YouTube Video Editing",
        description:
          "Long-form narrative structure, custom motion graphics, sound design, and retention-driven pacing for creators and brands.",
      },
      {
        title: "Short-form Content",
        description:
          "High-impact Reels, Shorts, and TikTok edits with dynamic typography, kinetic captions, and hook optimization.",
      },
      {
        title: "Social Media Videos",
        description:
          "Platform-native video assets tailored for LinkedIn, Instagram, and paid social campaigns.",
      },
      {
        title: "Promotional Videos",
        description:
          "Brand reels, product launch films, and studio explainers with custom color grading and audio mastering.",
      },
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Custom Motion Graphics"],
    doodleType: "clapperboard",
    accentColor: "#F28C5A",
    timelineEstimate: "48h Turnaround / Ongoing Retainers",
  },
  {
    id: "service-03",
    slug: "marketing",
    number: "03",
    title: "Marketing",
    shortTitle: "Marketing",
    description:
      "Grow your brand with creative campaigns and smart marketing strategies.",
    longDescription:
      "Marketing works best when creative storytelling meets disciplined distribution. We pair distinctive visual campaigns with technical SEO, organic community building, and targeted paid acquisition so your message reaches the right audience and earns lasting trust.",
    features: [
      "Organic Marketing",
      "Paid Advertising",
      "SEO",
      "Social Media Marketing",
    ],
    deliverables: [
      {
        title: "Organic Marketing",
        description:
          "Editorial content calendars, brand storytelling, and multi-channel organic growth frameworks.",
      },
      {
        title: "Paid Advertising",
        description:
          "Creative-first ad campaigns across Meta, Google, and YouTube with structured creative testing.",
      },
      {
        title: "SEO (Search Engine Optimization)",
        description:
          "Technical site audits, on-page architecture, schema markup, and search-intent content strategies.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Cohesive visual direction, copywriting, and community engagement that turns followers into advocates.",
      },
    ],
    tools: ["Google Search Console", "Meta Ads", "Google Ads", "Ahrefs", "Analytics", "Content Studio"],
    doodleType: "megaphone",
    accentColor: "#6BA3E8",
    timelineEstimate: "Monthly Sprints & Campaigns",
  },
  {
    id: "service-04",
    slug: "business-automations",
    number: "04",
    title: "Business Automations",
    shortTitle: "Business Automations",
    description:
      "Automate repetitive workflows, streamline operations, and save valuable time.",
    longDescription:
      "Your team shouldn't spend hours copying data between spreadsheets or chasing manual follow-ups. We design and connect reliable sales funnels, marketing sequences, and custom internal workflows that run quietly in the background—freeing your team for high-value creative work.",
    features: [
      "Sales Funnels",
      "Marketing Funnels",
      "Workflow Automation",
      "Business Process Automation",
    ],
    deliverables: [
      {
        title: "Sales Funnels",
        description:
          "Automated lead capture, qualification routing, CRM synchronization, and instant proposal triggers.",
      },
      {
        title: "Marketing Funnels",
        description:
          "Behavior-driven email sequences, onboarding journeys, and multi-touch nurture pipelines.",
      },
      {
        title: "Workflow Automation",
        description:
          "Custom API integrations connecting your forms, Slack, Notion, CRM, and billing systems.",
      },
      {
        title: "Business Process Automation",
        description:
          "End-to-end operational audits and custom webhook pipelines that eliminate manual bottlenecks.",
      },
    ],
    tools: ["Make", "Zapier", "n8n", "HubSpot", "Custom Webhooks", "REST APIs", "CRM Pipelines"],
    doodleType: "gears",
    accentColor: "#A695E7",
    timelineEstimate: "1 – 4 Weeks",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand your goals.",
    description:
      "We start with an open conversation around your brand, audience, and business bottlenecks—listening closely before sketching a single wireframe.",
    doodleType: "speech-lightbulb",
    deliverables: ["Discovery Workshop", "Audience & Brand Audit", "Project Scope Brief"],
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Craft the strategy.",
    description:
      "We map out the architecture, creative direction, storyboards, and technical workflows so every milestone is clear and predictable.",
    doodleType: "pencil-notebook",
    deliverables: ["Editorial Wireframes", "Creative Direction", "Technical Roadmap"],
  },
  {
    number: "03",
    title: "Create",
    subtitle: "Bring it to life.",
    description:
      "Our designers, developers, and editors build your project in collaborative sprints—combining handcrafted visuals with clean engineering.",
    doodleType: "gears-tools",
    deliverables: ["Design & Development", "Motion & Video Production", "Automation Setup"],
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Launch and grow.",
    description:
      "After rigorous quality assurance across devices, we launch smoothly, train your team, and support ongoing iteration and growth.",
    doodleType: "rocket",
    deliverables: ["QA & Performance Tuning", "Launch Deployment", "Ongoing Growth Support"],
  },
];

