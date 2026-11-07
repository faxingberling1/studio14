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

  // 9. Knowledge Base & Client Resource Center
  {
    id: "knowledge-base",
    keywords: [
      "knowledge",
      "knowledge base",
      "documentation",
      "docs",
      "guides",
      "resource",
      "resources",
      "faq",
      "faqs",
      "learn",
      "playbook",
      "standards",
      "protocols",
    ],
    title: "Studio14 Knowledge Base & Client Resource Center",
    summary:
      "Comprehensive, transparent client documentation covering engineering stacks, video pipelines, sprint cadences, and warranties.",
    content: `The **Studio14 Knowledge Base** (available at **/knowledge-base**) serves as our open client handbook:

• **Next.js & Shopify Architecture**: Why hand-coded modern stacks outperform bloated page builders with 95+ mobile Lighthouse scores.
• **Video Post-Production Pipeline**: File transfer specs (ProRes/Log), -14 LUFS sound mastering, and 0–3 second retention hooks.
• **The 2-Week Sprint Cadence**: Kickoff checkpoints, asynchronous Loom walkthroughs, and staged delivery milestones.
• **Client IP & Code Ownership**: Complete copyright and GitHub repository transfer with zero licensing locks.
• **30-Day Launch Bug Warranty**: Priority patches for any post-launch code defects at zero extra cost.
• **Brand Deliverable Kits**: Vector SVGs, open-source font licenses, and responsive brand books.`,
    suggestedFollowUps: [
      "Who owns the source code?",
      "What is your 30-day bug warranty?",
      "How do revision rounds work?",
    ],
    actionLink: {
      label: "Open Studio14 Knowledge Base →",
      href: "/knowledge-base",
    },
  },

  // 10. Client IP & Code Ownership
  {
    id: "ip-code-ownership",
    keywords: [
      "ip",
      "intellectual property",
      "code ownership",
      "who owns the code",
      "source code",
      "github",
      "repo",
      "ownership",
      "figma files",
      "rights",
      "license",
      "lock-in",
    ],
    title: "100% Client Intellectual Property & Source Code Ownership",
    summary:
      "You own everything we build for you upon final invoice settlement.",
    content: `At Studio14, our intellectual property policy is crystal clear: **You own 100% of what you pay for.**

• **Complete Source Code Transfer**: Your GitHub repository is transferred directly to your organization upon final milestone payment.
• **Full Design & Asset Ownership**: All Figma source files, vector SVGs, 4K video exports, and audio assets belong to you.
• **Zero Vendor Lock-In**: We write modular, well-documented TypeScript and Tailwind CSS that any competent senior engineer can maintain.
• **Independent Hosting Freedom**: Deploy freely on Vercel, AWS, Cloudflare, Shopify, or your private servers without agency restrictions.`,
    suggestedFollowUps: [
      "Tell me about the 30-day bug warranty",
      "Visit the Knowledge Base",
      "How do sprints work?",
    ],
    actionLink: {
      label: "Read IP Policy in Knowledge Base →",
      href: "/knowledge-base",
    },
  },

  // 11. 30-Day Launch Bug Warranty
  {
    id: "bug-warranty",
    keywords: [
      "warranty",
      "guarantee",
      "bug warranty",
      "30-day",
      "30 day warranty",
      "bugs",
      "fixes",
      "post launch",
      "support",
      "broken",
      "defect",
      "maintenance",
    ],
    title: "30-Day Post-Launch Technical Bug Warranty",
    summary:
      "Complimentary priority bug fixing for 30 days after your project goes live.",
    content: `We stand firmly behind the quality of our engineering and creative builds:

• **30-Day Coverage**: Starting on the official launch day of your website or digital application, any unexpected technical defect, display anomaly, or broken script is patched with top priority.
• **Zero Extra Invoicing**: As long as the issue falls within the originally approved project scope, fixes are 100% free of charge.
• **Multi-Device Compatibility**: Tested and guaranteed across modern iOS Safari, Android Chrome, MacOS, and Windows edge browsers.
• **Ongoing Care Retainers**: Optional monthly maintenance retainers are available after the 30-day period for continuous feature updates.`,
    suggestedFollowUps: [
      "How do revision rounds work?",
      "Who owns the source code?",
      "Start a project with Studio14",
    ],
    actionLink: {
      label: "View Warranties in Knowledge Base →",
      href: "/knowledge-base",
    },
  },

  // 12. Sprint Operations & Revision Protocols
  {
    id: "sprint-revisions",
    keywords: [
      "revisions",
      "revision",
      "rounds",
      "sprint",
      "two week sprint",
      "review",
      "feedback",
      "loom",
      "turnaround",
      "how many revisions",
      "changes",
    ],
    title: "2-Week Sprints & Revision Protocols",
    summary:
      "Structured collaboration with 2 revision rounds per milestone and async Loom walkthroughs.",
    content: `To ensure projects launch on schedule without scope drag, Studio14 utilizes a disciplined sprint workflow:

• **2 Structured Revision Rounds**: Each sprint milestone includes two formal rounds of consolidated feedback.
• **Asynchronous Loom Demos**: We record clear, 3-minute video walkthroughs presenting our deliverables and reasoning.
• **Private Staging Environments**: Test live Next.js builds on private staging URLs with your team before approving production deployment.
• **Rapid Turnaround**: Feedback changes are implemented and re-submitted within 48–72 hours.`,
    suggestedFollowUps: [
      "What is the 30-day warranty?",
      "Read full Knowledge Base",
      "Schedule an alignment call",
    ],
    actionLink: {
      label: "Explore Sprint Guides in Knowledge Base →",
      href: "/knowledge-base",
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
        "Who owns the code?",
        "30-Day Bug Warranty",
        "Browse Knowledge Base",
      ],
      actionLink: { label: "Explore Knowledge Base & Guides →", href: "/knowledge-base" },
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
      text: "Hey there! Welcome to **Studio14**. We specialize in four core creative disciplines:\n\n1. **Website Design & Development** (Next.js, Shopify, WordPress)\n2. **Video Editing** (YouTube, Shorts, Brand Films)\n3. **Marketing** (Organic, Paid, SEO)\n4. **Business Automations** (Sales Funnels, Zapier/Make)\n\nYou can also explore our **Knowledge Base** for detailed guides on our 2-week sprints, 30-day bug warranties, and code ownership.",
      suggestedChips: [
        "Browse Knowledge Base",
        "Tell me about Web Development",
        "Who owns the source code?",
        "What is your 30-day warranty?",
        "How to start a project?",
      ],
      actionLink: { label: "Open Knowledge Base →", href: "/knowledge-base" },
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

