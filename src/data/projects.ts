import { ProjectItem, ProjectCategory } from "@/types";

export const portfolioCategories: ProjectCategory[] = [
  "All Projects",
  "Websites",
  "Branding",
  "Video & Content",
  "Marketing",
];

/**
 * Studio14 Demonstration Portfolio Data
 * Every item is explicitly flagged as a Studio14 Concept / Demonstration Showcase
 * so no real client names or fabricated performance metrics are ever misrepresented.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "proj-01",
    slug: "artisan-roastery-digital-flagship",
    title: "Artisan Roastery — E-Commerce & Editorial Flagship",
    category: "Websites",
    shortDescription:
      "A custom Shopify and Next.js storefront concept blending tactile packaging stories with a guided coffee subscription builder.",
    fullDescription:
      "Designed as an editorial digital flagship concept in the Studio14 sandbox, this project explores how specialty food and beverage brands can move beyond rigid product grids. We paired warm paper textures and hand-drawn brew guides with a lightning-fast custom storefront architecture.",
    challenge:
      "Standard e-commerce templates often strip away the craft and sensory storytelling behind small-batch products, making subscription choices confusing for first-time visitors.",
    approach:
      "We created an interactive flavor-profile quiz, custom SVG brewing illustrations, and a distraction-free slide-out cart engineered for smooth mobile browsing.",
    deliverables: [
      "Custom Storefront UI/UX",
      "Interactive Brew Guide Illustrations",
      "Subscription Flow Architecture",
      "Mobile-First Checkout Experience",
    ],
    tags: ["Shopify", "Next.js", "Custom Illustrations", "E-Commerce"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Concept Showcase — Demonstration project illustrating our Website Design & Development capabilities.",
    imageUrl: "/projects/project-websites-roastery.svg",
    imageAlt: "Editorial web design showcase for an artisan coffee roastery on a warm studio desk",
    galleryImages: [
      {
        url: "/projects/project-websites-roastery.svg",
        alt: "Desktop and mobile responsive layouts for Artisan Roastery concept",
        caption: "Editorial typography paired with hand-drawn tasting notes and brew ratio illustrations.",
      },
      {
        url: "/projects/project-branding-atelier.svg",
        alt: "Component system and mobile cards",
        caption: "Modular product cards and custom icon system built for rapid seasonal updates.",
      },
    ],
    featured: true,
    layoutSpan: "wide",
    accentColor: "#FFC928",
  },
  {
    id: "proj-02",
    slug: "nomad-journal-documentary-series",
    title: "Craft & Frame — Mini-Documentary & Reels System",
    category: "Video & Content",
    shortDescription:
      "A multi-format video editing showcase featuring rhythmic documentary storytelling, custom kinetic captions, and vertical social cuts.",
    fullDescription:
      "This studio demonstration showcases Studio14's end-to-end post-production workflow—taking raw studio interviews and b-roll and transforming them into a cohesive 12-minute YouTube episode alongside a suite of high-retention vertical clips.",
    challenge:
      "Creators and brands often struggle to repurpose long-form video interviews into short-form clips without losing narrative context or visual polish.",
    approach:
      "We developed a modular motion-graphics toolkit featuring hand-drawn lower thirds, tactile paper transitions, and dynamic chapter markers that translate seamlessly between 16:9 and 9:16 formats.",
    deliverables: [
      "Long-Form YouTube Edit",
      "Vertical Short-Form Cutdowns",
      "Hand-Drawn Motion Title Pack",
      "Sound Design & Color Grade",
    ],
    tags: ["YouTube Editing", "Short-Form Reels", "Motion Graphics", "Color Grading"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Production Reel Concept — Demonstration project illustrating our Video Editing workflow.",
    imageUrl: "/projects/project-video-documentary.svg",
    imageAlt: "Video editing timeline, clapperboard, and multi-format frame composition preview",
    galleryImages: [
      {
        url: "/projects/project-video-documentary.svg",
        alt: "16:9 and 9:16 video frame compositions with custom hand-drawn title overlays",
        caption: "Synchronized multi-aspect framing for YouTube episodes and vertical Reels.",
      },
    ],
    featured: true,
    layoutSpan: "tall",
    accentColor: "#F28C5A",
  },
  {
    id: "proj-03",
    slug: "studio-paper-brand-identity",
    title: "Kala & Co. — Tactile Brand Identity & Print System",
    category: "Branding",
    shortDescription:
      "An expressive visual identity system combining editorial serif typography, bilingual lettering inspiration, and custom doodle motifs.",
    fullDescription:
      "Built as a Studio14 design exploration, Kala & Co. demonstrates how hand-drawn illustration systems and disciplined Swiss editorial grids can coexist across digital touchpoints, packaging, and studio stationery.",
    challenge:
      "Many modern digital identities feel sterile and interchangeable, lacking the warmth and human signature of a physical creative workshop.",
    approach:
      "We crafted a bespoke badge system, custom scribble patterns, and an adaptable color palette anchored by warm paper tones and bold charcoal ink.",
    deliverables: [
      "Brand Identity Guidelines",
      "Custom SVG Doodle Library",
      "Editorial Typography System",
      "Packaging & Stationery Mockups",
    ],
    tags: ["Visual Identity", "Illustration System", "Typography", "Art Direction"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Design Exploration — Demonstration project illustrating our Branding & Illustration direction.",
    imageUrl: "/projects/project-branding-atelier.svg",
    imageAlt: "Brand identity style guide with custom typography, sketchbooks, and color swatches",
    galleryImages: [
      {
        url: "/projects/project-branding-atelier.svg",
        alt: "Brand guidelines book and custom illustration sheet",
        caption: "Cohesive identity guidelines spanning print collateral and web components.",
      },
    ],
    featured: true,
    layoutSpan: "standard",
    accentColor: "#A695E7",
  },
  {
    id: "proj-04",
    slug: "pulse-launch-campaign-automation",
    title: "Launchpad — Integrated Campaign & Lead Funnel",
    category: "Marketing",
    shortDescription:
      "A multi-channel campaign blueprint uniting organic search content, paid social creative, and an automated CRM onboarding sequence.",
    fullDescription:
      "This concept blueprint demonstrates how Studio14 connects creative marketing assets directly to automated backend pipelines—ensuring every campaign click leads to a tailored, high-converting follow-up experience.",
    challenge:
      "Marketing campaigns frequently lose momentum when ad creative, landing pages, and CRM follow-ups are built in disconnected silos.",
    approach:
      "We designed a unified campaign landing page paired with ad creative variations, technical SEO architecture, and an automated webhook workflow for instant lead routing.",
    deliverables: [
      "Campaign Landing Page",
      "Ad Creative Variations",
      "Technical SEO Structure",
      "Automated Lead Routing Funnel",
    ],
    tags: ["Organic & Paid Social", "SEO Architecture", "Sales Funnel", "Workflow Automation"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Campaign Blueprint — Demonstration project illustrating our Marketing & Business Automation services.",
    imageUrl: "/projects/project-marketing-campaign.svg",
    imageAlt: "Marketing campaign storyboard, analytics cards, and automated workflow nodes",
    galleryImages: [
      {
        url: "/projects/project-marketing-campaign.svg",
        alt: "Campaign funnel map and social ad creative layout",
        caption: "End-to-end alignment from social creative hooks to automated onboarding workflows.",
      },
    ],
    featured: false,
    layoutSpan: "standard",
    accentColor: "#6BA3E8",
  },
  {
    id: "proj-05",
    slug: "architectural-digest-web-platform",
    title: "Forma Studio — Editorial Architecture & Portfolio Hub",
    category: "Websites",
    shortDescription:
      "A minimalist editorial web platform featuring smooth page transitions, interactive floorplan annotations, and CMS-driven project archives.",
    fullDescription:
      "An architectural portfolio demonstration engineered with Next.js App Router and Framer Motion. Designed to showcase high-resolution photography with zero layout shift and intuitive category filtering.",
    challenge:
      "Image-heavy portfolio websites often suffer from slow load times and rigid templates that fail to highlight spatial storytelling.",
    approach:
      "We combined next/image optimization, asymmetric editorial grids, and subtle SVG sketch overlays that reveal architectural notes on hover.",
    deliverables: [
      "Next.js App Router Platform",
      "Headless CMS Schema",
      "Interactive Blueprint Overlays",
      "Accessibility & SEO Optimization",
    ],
    tags: ["Next.js", "Framer Motion", "WordPress / Headless", "Editorial Design"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Web Architecture Concept — Demonstration project illustrating custom web development.",
    imageUrl: "/projects/project-websites-architecture.svg",
    imageAlt: "Editorial architecture website layout with hand-drawn blueprint annotations",
    galleryImages: [
      {
        url: "/projects/project-websites-architecture.svg",
        alt: "Editorial grid layout for Forma Studio showcase",
        caption: "Asymmetric editorial grid with interactive sketch annotations.",
      },
    ],
    featured: false,
    layoutSpan: "wide",
    accentColor: "#FFC928",
  },
  {
    id: "proj-06",
    slug: "creator-retention-reel-system",
    title: "Tempo — Short-Form Series & Promotional Film Toolkit",
    category: "Video & Content",
    shortDescription:
      "A rhythmic promotional video concept combining live-action studio footage with frame-by-frame hand-drawn doodle animations.",
    fullDescription:
      "Tempo showcases how hand-drawn SVG animations and mixed-media overlays can elevate product explainers and social reels without relying on generic stock templates.",
    challenge:
      "Audiences scroll past generic corporate explainers within seconds; brands need distinctive visual hooks that feel human and crafted.",
    approach:
      "We blended crisp studio footage with custom frame-by-frame scribble highlights, tactile sound effects, and bold editorial captions.",
    deliverables: [
      "Promotional Brand Film",
      "Mixed-Media Doodle Overlays",
      "Social Cutdown Suite",
      "Custom Audio Mix",
    ],
    tags: ["Promotional Video", "Social Media Videos", "Mixed Media", "Sound Design"],
    year: "Studio Showcase",
    isDemoContent: true,
    demoNotice: "Studio14 Mixed-Media Concept — Demonstration project illustrating video editing and doodle motion.",
    imageUrl: "/projects/project-video-tempo.svg",
    imageAlt: "Promotional video storyboard with mixed-media hand-drawn overlays",
    galleryImages: [
      {
        url: "/projects/project-video-tempo.svg",
        alt: "Mixed media video frames",
        caption: "Hand-drawn scribble highlights layered over studio footage.",
      },
    ],
    featured: false,
    layoutSpan: "standard",
    accentColor: "#F28C5A",
  },
];

