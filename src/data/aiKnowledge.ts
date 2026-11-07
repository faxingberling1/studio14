/**
 * Studio14 AI — Core Knowledge Base & Autonomous Response Engine
 * Designed to be easily expanded with more FAQs, services, and team knowledge.
 */

export interface KnowledgeTopic {
  id: string;
  keywords: string[];
  title: string;
  summary: string;
  content: string;
  serviceSlug?: string;
  suggestedFollowUps?: string[];
  actionLink?: {
    label: string;
    href: string;
  };
}

export const studio14Knowledge: KnowledgeTopic[] = [
  // 1. Web Development
  {
    id: "web-development",
    keywords: [
      "web",
      "website",
      "development",
      "developer",
      "frontend",
      "shopify",
      "wordpress",
      "nextjs",
      "react",
      "typescript",
      "code",
      "ecommerce",
      "store",
      "design",
      "ui",
      "ux",
    ],
    title: "Website Design & Development",
    summary:
      "Modern, scalable, and high-performance websites that turn visitors into customers.",
    content: `At Studio14, our **Website Design & Development** discipline engineers custom digital flagships built for speed, conversion, and editorial storytelling:

• **Custom Next.js & React Applications**: Tailored, high-performance web apps with smooth animations, zero layout shift, and exceptional SEO scores.
• **Shopify Development**: High-converting e-commerce storefronts, custom theme architecture, and friction-free checkout flows.
• **WordPress Development**: Clean, editorial-grade custom block themes and headless setups that empower publishing teams.
• **Interactive Design Systems**: Hand-drawn SVG doodle collections, custom UI components, and accessible design systems.

**Typical Timeline**: 3 – 8 Weeks depending on scope.
**Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Shopify Liquid, WordPress.`,
    serviceSlug: "web-development",
    suggestedFollowUps: [
      "Tell me about Video Editing",
      "What automations do you build?",
      "How do we start a website project?",
    ],
    actionLink: {
      label: "Explore Web Design & Development →",
      href: "/services/web-development",
    },
  },

  // 2. Video Editing
  {
    id: "video-editing",
    keywords: [
      "video",
      "editing",
      "editor",
      "youtube",
      "shorts",
      "reels",
      "tiktok",
      "motion",
      "footage",
      "clip",
      "content",
      "social media",
      "sound",
      "color grade",
      "post production",
    ],
    title: "Video Editing & Post-Production",
    summary:
      "Turn raw footage into compelling visual stories that capture retention.",
    content: `Great video editing is all about rhythm, pacing, and hook retention. Studio14's **Video Editing** desk crafts:

• **Long-Form YouTube Episodes**: Documentary-style pacing, custom chapter graphics, sound design, and narrative retention.
• **Short-Form Vertical Edits**: High-impact Instagram Reels, YouTube Shorts, and TikTok cuts with kinetic typography and 0–3 second retention hooks.
• **Promotional Brand Films & Launch Reels**: Product explainers, mixed-media doodle motion graphics, and commercial trailers.
• **Social Media Content Suites**: Multi-aspect video toolkits (16:9 and 9:16) with color grading and audio mastering.

**Typical Turnaround**: 48-Hour delivery for sprints or ongoing monthly creator/brand retainers.
**Tools**: Premiere Pro, After Effects, DaVinci Resolve, Audition.`,
    serviceSlug: "video-editing",
    suggestedFollowUps: [
      "What is your turnaround time for video?",
      "Tell me about Marketing services",
      "Can we request a sample edit?",
    ],
    actionLink: {
      label: "Explore Video Editing →",
      href: "/services/video-editing",
    },
  },

  // 3. Marketing
  {
    id: "marketing",
    keywords: [
      "marketing",
      "growth",
      "seo",
      "campaign",
      "ads",
      "advertising",
      "paid",
      "organic",
      "meta",
      "google",
      "social",
      "strategy",
      "traffic",
      "leads",
    ],
    title: "Marketing & Growth Strategy",
    summary:
      "Grow your brand with creative campaigns and smart distribution strategies.",
    content: `Marketing delivers results when creative storytelling meets disciplined distribution. Studio14's **Marketing** practice offers:

• **Organic Marketing & Content Strategy**: Multi-channel brand storytelling frameworks, content calendars, and audience positioning.
• **Paid Social & Search Advertising**: Creative-first ad campaigns across Meta, Google, and YouTube with structured creative testing.
• **Technical SEO**: Architecture audits, on-page optimization, search intent research, and schema markup that drive compound search traffic.
• **Social Media Direction**: Cohesive visual identity, copywriting, and engagement strategies that turn casual followers into brand advocates.

**Engagement Model**: Monthly growth sprints and structured campaign launches.`,
    serviceSlug: "marketing",
    suggestedFollowUps: [
      "How do marketing funnels connect with automations?",
      "Tell me about Business Automations",
      "How do we begin a marketing sprint?",
    ],
    actionLink: {
      label: "Explore Marketing →",
      href: "/services/marketing",
    },
  },

  // 4. Business Automations
  {
    id: "business-automations",
    keywords: [
      "automation",
      "automations",
      "workflow",
      "workflows",
      "crm",
      "zapier",
      "make",
      "n8n",
      "webhook",
      "funnel",
      "funnels",
      "sales",
      "leads",
      "operations",
      "ops",
      "slack",
      "integration",
      "api",
    ],
    title: "Business Automations & Operations",
    summary:
      "Automate repetitive workflows, streamline operations, and save 10+ hours weekly.",
    content: `Stop wasting team hours manually transferring leads or synchronizing spreadsheets. Studio14 builds robust **Business Automations**:

• **Sales & Lead Capture Funnels**: Automated qualification, instant routing into HubSpot/CRM, and auto-generated proposal pipelines.
• **Marketing & Nurture Funnels**: Behavior-triggered email journeys, onboarding drips, and customer lifecycle sequences.
• **Internal Workflow Automation**: Seamless integrations connecting web forms, Slack alerts, Notion project hubs, Stripe billing, and CRMs.
• **Operational Audits & Webhook Pipelines**: Comprehensive workflow architecture audits to eliminate communication bottlenecks.

**Typical Timeline**: 1 – 4 Weeks for turnkey integrations.
**Platforms**: Make.com, Zapier, n8n, Webhooks, REST APIs, HubSpot.`,
    serviceSlug: "business-automations",
    suggestedFollowUps: [
      "How does Studio14 connect web forms to automations?",
      "Tell me about all 4 services",
      "Can we combine web dev with automations?",
    ],
    actionLink: {
      label: "Explore Business Automations →",
      href: "/services/business-automations",
    },
  },

  // 5. Creative Process & Workflow
  {
    id: "creative-process",
    keywords: [
      "process",
      "how do you work",
      "workflow",
      "timeline",
      "steps",
      "discover",
      "plan",
      "create",
      "deliver",
      "stages",
      "phases",
      "sprint",
    ],
    title: "Our 4-Stage Creative Process",
    summary: "Simple. Transparent. Effective.",
    content: `Studio14 follows a disciplined, transparent 4-stage process so you always know what to expect:

1. **01 — Discover**: We begin with an open dialogue around your goals, audience, and challenges before writing code or designing frames.
2. **02 — Plan**: We map out clear editorial wireframes, creative direction, storyboards, and technical roadmaps.
3. **03 — Create**: Collaborative design, development, and editing sprints where handcrafted visuals meet clean code.
4. **04 — Deliver**: Rigorous QA across devices, deployment, team onboarding, and ongoing iteration support.`,
    suggestedFollowUps: [
      "How do we start a project?",
      "What are typical project timelines?",
      "Can I talk to the team?",
    ],
    actionLink: {
      label: "See Creative Process on Homepage →",
      href: "/#process",
    },
  },

  // 6. Starting a Project / Contact
  {
    id: "contact-inquiry",
    keywords: [
      "contact",
      "hire",
      "start",
      "quote",
      "pricing",
      "cost",
      "estimate",
      "book",
      "call",
      "email",
      "proposal",
      "inquiry",
      "brief",
    ],
    title: "How to Start a Project with Studio14",
    summary:
      "Ready to build something extraordinary? Here is how to collaborate with us.",
    content: `Starting a collaboration with Studio14 is simple and straightforward:

1. **Submit a Project Brief**: Fill out the brief on our Contact page with your name, service of interest, and goals.
2. **25-Minute Discovery Call**: We review your ideas and schedule a focused alignment conversation.
3. **Tailored Roadmap & Scope**: You receive a transparent scope document with milestones and pricing.

**Direct Email**: hello@studio14.creative
**Response Window**: Within 1–2 business days.`,
    suggestedFollowUps: [
      "Open Project Brief Form",
      "Tell me about Web Development",
      "What is Studio14's design ethos?",
    ],
    actionLink: {
      label: "Go to Contact & Project Brief →",
      href: "/contact",
    },
  },

  // 7. About Studio14 / Ethos
  {
    id: "about-ethos",
    keywords: [
      "about",
      "who are you",
      "studio",
      "ethos",
      "philosophy",
      "team",
      "why studio14",
      "culture",
      "hand drawn",
      "doodle",
      "urdu",
      "logo",
    ],
    title: "About Studio14 — More Than a Studio",
    summary:
      "A creative digital partner blending design, technology, and personality.",
    content: `**Studio14 (اسٹوڈیو 14)** is a creative studio founded on the belief that digital experiences should feel human, memorable, and crafted—not like generic agency templates.

• **Craft Over Hype**: We balance thoughtful editorial typography with playful hand-drawn SVG doodles and clean code.
• **Direct Maker Collaboration**: You collaborate directly with the engineers, designers, and editors building your vision.
• **End-to-End Capabilities**: Web, video editing, marketing, and business automations under one unified roof.`,
    suggestedFollowUps: [
      "What services do you offer?",
      "View Portfolio Showcases",
      "How do we get in touch?",
    ],
    actionLink: {
      label: "Read Full Studio Story →",
      href: "/about",
    },
  },

  // 8. Portfolio & Case Studies
  {
    id: "portfolio-work",
    keywords: [
      "portfolio",
      "work",
      "projects",
      "case studies",
      "examples",
      "showcase",
      "clients",
      "past work",
      "samples",
    ],
    title: "Our Work & Concept Showcases",
    summary:
      "Explore recent showcases across Websites, Branding, Video, and Automations.",
    content: `Our portfolio showcases the versatility and technical craft of Studio14:

• **Artisan Roastery**: E-commerce & editorial flagship with custom SVG brew guides and subscription builders.
• **Craft & Frame**: Documentary-style YouTube editing with kinetic title packs and social cuts.
• **Kala & Co.**: Tactile editorial brand identity and bilingual lettering system.
• **Launchpad**: Integrated marketing ad campaign connected to automated lead routing.
• **Forma Studio**: Minimalist architectural portfolio hub with smooth page transitions.
• **Tempo**: Mixed-media promotional video toolkit with hand-drawn motion overlays.`,
    suggestedFollowUps: [
      "Tell me about Web Development",
      "Tell me about Video Editing",
      "Start a new project",
    ],
    actionLink: {
      label: "Browse Work Gallery →",
      href: "/portfolio",
    },
  },
];

/**
 * Autonomous response engine that matches user queries to Studio14's knowledge base.
 */
export function generateStudio14AIResponse(query: string): {
  text: string;
  suggestedChips: string[];
  actionLink?: { label: string; href: string };
  matchedTopicTitle?: string;
} {
  const normalized = query.toLowerCase().trim();

  if (!normalized) {
    return {
      text: "Hello! I am **Studio14 AI**, your guide to our creative digital studio. What service or project can I help you explore today?",
      suggestedChips: [
        "Web Design & Development",
        "Video Editing",
        "Marketing",
        "Business Automations",
      ],
      actionLink: { label: "Explore Services Directory →", href: "/services" },
    };
  }

  // Common greetings
  if (
    /^(hi|hello|hey|greetings|hola|salaam|good morning|good evening)\b/.test(
      normalized
    ) &&
    normalized.length < 25
  ) {
    return {
      text: "Hey there! Welcome to **Studio14**. We specialize in four core creative disciplines:\n\n1. **Website Design & Development** (Next.js, Shopify, WordPress)\n2. **Video Editing** (YouTube, Shorts, Brand Films)\n3. **Marketing** (Organic, Paid, SEO)\n4. **Business Automations** (Sales Funnels, Zapier/Make)\n\nWhich area would you like to explore?",
      suggestedChips: [
        "Tell me about Web Development",
        "Tell me about Video Editing",
        "How do Automations work?",
        "How to start a project?",
      ],
      actionLink: { label: "View All Services →", href: "/services" },
    };
  }

  // Score each topic based on keyword matches
  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of studio14Knowledge) {
    let score = 0;

    // Check title match
    if (normalized.includes(topic.title.toLowerCase())) {
      score += 15;
    }

    // Check keywords
    for (const keyword of topic.keywords) {
      if (normalized.includes(keyword)) {
        score += keyword.length > 5 ? 5 : 3;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  // If a high-confidence topic match was found
  if (bestTopic && highestScore >= 3) {
    return {
      text: bestTopic.content,
      suggestedChips: bestTopic.suggestedFollowUps || [
        "Web Design & Dev",
        "Video Editing",
        "Start a Project",
      ],
      actionLink: bestTopic.actionLink,
      matchedTopicTitle: bestTopic.title,
    };
  }

  // Fallback intelligent general studio response
  return {
    text: `That is a great question! Studio14 is a modern creative studio specializing in **Website Design & Development**, **Video Editing**, **Marketing Strategy**, and **Business Automations**.\n\nWhether you are looking to build a high-performance web flagship, produce retention-focused video content, launch a multi-channel campaign, or automate your operational workflows, our team has you covered.`,
    suggestedChips: [
      "Website Design & Dev",
      "Video Editing",
      "Business Automations",
      "Start a Project Brief",
    ],
    actionLink: { label: "Browse Services Directory →", href: "/services" },
  };
}

