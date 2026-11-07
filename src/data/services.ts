import { ServiceItem, ProcessStep } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    slug: "web-development",
    number: "01",
    title: "Website Design & Development",
    shortTitle: "Web Design & Dev",
    description:
      "Custom, high-speed digital flagships so polished and memorable you’ll actually be proud to drop the link in your bio.",
    longDescription:
      "Your website is your 24/7 digital storefront. We architect bespoke Next.js flagships, high-converting Shopify storefronts, and frictionless WordPress publishing hubs engineered for sub-second speed, tactile storytelling, and effortless conversions without the agency bloat.",
    features: [
      "WordPress Development",
      "Shopify Development",
      "Custom Web Development",
    ],
    deliverables: [
      {
        title: "Custom Web Development",
        description:
          "Bespoke Next.js, React, and TypeScript applications engineered for lightning-fast speeds, tactile micro-interactions, and high-conversion paths.",
      },
      {
        title: "Shopify Development",
        description:
          "Conversion-focused e-commerce storefronts, custom theme architecture, and frictionless checkout flows built to boost order value.",
      },
      {
        title: "WordPress Development",
        description:
          "Clean, editorial-grade custom block setups and lightweight themes that empower your team to publish without needing a developer every Tuesday.",
      },
      {
        title: "Interactive Design Systems",
        description:
          "Modern component libraries, responsive wireframes, and custom hand-drawn SVG illustration systems tailored to your brand's unique soul.",
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
      "Rhythm, narrative pacing, and sound design that turn 3-second scroll drop-offs into binge-worthy retention.",
    longDescription:
      "Nobody remembers a boring video. We cut long-form YouTube episodes that viewers watch to the outro, dynamic vertical Reels and TikToks that stop thumbs in 0.5 seconds, and brand films with custom kinetic motion graphics, cinematic color grading, and brain-tickling sound design.",
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
          "Bingeable long-form narrative structure, custom lower thirds, cinematic sound design, and retention curves that the algorithm rewards.",
      },
      {
        title: "Short-form Content",
        description:
          "High-impact Reels, Shorts, and TikTok edits with dynamic typography, kinetic captions, and hook optimization that halt the scroll instantly.",
      },
      {
        title: "Social Media Videos",
        description:
          "Platform-native visual assets tailored for LinkedIn authority, Instagram aesthetic, and paid ad sequences.",
      },
      {
        title: "Promotional Videos",
        description:
          "Brand reels, product launch films, and studio explainers with custom color grading and professional audio mastering.",
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
      "Creative-first campaigns, sharp positioning, and paid ad funnels that sell without feeling like cringe infomercials.",
    longDescription:
      "Good creative does 80% of the targeting. We pair thumb-stopping visual hooks with disciplined Meta and Google paid acquisition, technical SEO, and organic storytelling that turns casual scrollers into paying, loyal brand advocates.",
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
          "Editorial content calendars, human-led brand storytelling, and multi-channel organic growth frameworks.",
      },
      {
        title: "Paid Advertising",
        description:
          "High-converting ad creatives, scroll-stopping video scripts, and multi-stage testing funnels across Meta and Google with clear ROI.",
      },
      {
        title: "SEO (Search Engine Optimization)",
        description:
          "Technical audits, on-page architecture, schema markup, and search-intent content strategies that drive compounding organic traffic.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Cohesive visual direction, persuasive copywriting, and community engagement that turns followers into passionate advocates.",
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
      "Quiet automations that handle the tedious admin, lead routing, and follow-ups—so you can stop copy-pasting at 11 PM.",
    longDescription:
      "You started a business to build great things, not to be a human copy-paste machine. We design and connect bulletproof sales funnels, CRM syncs, and automated onboarding sequences that run silently in the background while you sleep.",
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
          "Automated lead capture, instant qualification routing, CRM synchronization, and customized proposal triggers.",
      },
      {
        title: "Marketing Funnels",
        description:
          "Behavior-driven email sequences, customer onboarding journeys, and multi-touch nurture pipelines.",
      },
      {
        title: "Workflow Automation",
        description:
          "Custom API and webhook integrations connecting your website forms, WhatsApp, Slack, Notion, and billing tools into one seamless engine.",
      },
      {
        title: "Business Process Automation",
        description:
          "End-to-end operational audits and custom webhook pipelines that eliminate manual bottlenecks and reclaim hours every week.",
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

