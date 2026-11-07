export interface GrowthStage {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  theme: string;
  headline: string;
  description: string;
  detailedExplanation: string;
  deliverables: string[];
  completionMessage: string;
  interactiveComponentId:
    | "brand-preview"
    | "digital-footprint"
    | "campaign-builder"
    | "marketing-funnel"
    | "customer-journey"
    | "business-workflow";
  accentColor: string;
  secondaryColor: string;
  truckArtMotif: "floral-sketchbook" | "truck-vehicle" | "megaphone-graffiti" | "acquisition-funnel" | "community-dialogue" | "operational-gears";
  urduPhrase: string;
  urduTranslation: string;
}

export const growthStagesData: GrowthStage[] = [
  {
    id: "stage-01",
    number: "01",
    title: "Brand Foundation",
    shortTitle: "Brand Identity",
    theme: "Give Your Business an Identity.",
    headline: "Before the World Knows Your Business, It Needs to Know Your Brand.",
    description:
      "Every successful business needs a recognizable identity. We help establish the personality, positioning, and visual direction that make your brand stand out.",
    detailedExplanation:
      "We dive deep into your market landscape and audience psychology to craft an enduring brand system—from handcrafted logos and typography pairings to strategic voice guidelines and tactile stationery.",
    deliverables: [
      "Brand discovery & market positioning",
      "Comprehensive brand strategy",
      "Logo design & primary mark suite",
      "Visual identity & design system",
      "Complete brand guidelines book",
      "Typography pairing & hierarchy",
      "Color palettes & accessibility tokens",
      "Brand messaging framework",
      "Tone of voice guidelines",
      "Brand communication direction",
      "Business stationery & print collateral",
    ],
    completionMessage: "Your business now has an identity worth recognizing.",
    interactiveComponentId: "brand-preview",
    accentColor: "#FFC928", // Studio14 yellow
    secondaryColor: "#DC2626", // Traditional truck-art red
    truckArtMotif: "floral-sketchbook",
    urduPhrase: "پہچان اور بنیاد",
    urduTranslation: "Identity & Foundation",
  },
  {
    id: "stage-02",
    number: "02",
    title: "Digital Footprint",
    shortTitle: "Digital Presence",
    theme: "Make Your Business Discoverable.",
    headline: "Your Brand Deserves to Exist Beyond Word of Mouth.",
    description:
      "A professional digital presence helps customers discover your business, understand your offerings, and build confidence in your brand.",
    detailedExplanation:
      "We build your digital flagship—blending custom web applications, e-commerce stores, unified social channels, and high-ranking search visibility so your audience finds you anytime, anywhere.",
    deliverables: [
      "Custom website design & Next.js development",
      "WordPress development & headless CMS",
      "Shopify e-commerce development",
      "Conversion-focused landing pages",
      "Social media profile establishment",
      "Cross-channel social media branding",
      "Google Workspace & business email setup",
      "Technical Search Engine Optimization (SEO)",
      "Generative Search Optimization (GEO/AI)",
      "Google Business Profile & local optimization",
      "Multi-platform digital content strategy",
    ],
    completionMessage: "Your business is now ready to be discovered.",
    interactiveComponentId: "digital-footprint",
    accentColor: "#06B6D4", // Turquoise
    secondaryColor: "#1D4ED8", // Cobalt blue
    truckArtMotif: "truck-vehicle",
    urduPhrase: "ڈیجیٹل موجودگی",
    urduTranslation: "Digital Presence",
  },
  {
    id: "stage-03",
    number: "03",
    title: "Creative & Advertising Preparation",
    shortTitle: "Creative & Ads",
    theme: "Create Something Worth Paying Attention To.",
    headline: "Make Your Brand Impossible to Ignore.",
    description:
      "Your business needs more than a digital presence. It needs creative content and compelling communication that capture attention and communicate value.",
    detailedExplanation:
      "We transform your message into captivating visual narratives—pairing documentary YouTube pacing, kinetic short-form reels, persuasive copywriting, and high-impact ad creatives.",
    deliverables: [
      "Holistic creative direction & moodboards",
      "Paid advertising strategy & testing roadmaps",
      "High-converting ad creative design",
      "Promotional brand video production",
      "Studio video editing & pacing",
      "Long-form YouTube video content",
      "Short-form retention reels & TikToks",
      "Platform-native social media assets",
      "Persuasive copywriting & hooks",
      "Campaign messaging architecture",
      "Editorial content production calendars",
      "Audience demographic research",
      "Multi-format promotional launches",
    ],
    completionMessage: "Your brand now has a creative voice and a marketing direction.",
    interactiveComponentId: "campaign-builder",
    accentColor: "#F97316", // Vibrant orange
    secondaryColor: "#D946EF", // Magenta
    truckArtMotif: "megaphone-graffiti",
    urduPhrase: "تخلیق اور تشہیر",
    urduTranslation: "Creation & Promotion",
  },
  {
    id: "stage-04",
    number: "04",
    title: "Campaign Launch & Customer Acquisition",
    shortTitle: "Campaign Launch",
    theme: "Get Your Brand in Front of the Right People.",
    headline: "Let's Get the Right People Talking About Your Business.",
    description:
      "Once your brand and creative assets are ready, it's time to reach relevant audiences through structured advertising campaigns and measurable marketing activities.",
    detailedExplanation:
      "We deploy targeted acquisition funnels across Meta, Google, and YouTube—pairing strict conversion tracking and landing page optimization with iterative creative testing to find your ideal buyers.",
    deliverables: [
      "Meta Ads management (Facebook & Instagram)",
      "Google Ads & Search PPC management",
      "YouTube video advertising campaigns",
      "Full-funnel campaign strategy & architecture",
      "Granular audience targeting & lookalikes",
      "Campaign setup & budget allocation",
      "Full conversion tracking & server-side API",
      "Meta Pixel & Google Tag Manager implementation",
      "Analytics configuration & attribution setup",
      "Landing page CRO (Conversion Rate Optimization)",
      "Weekly campaign monitoring & bid management",
      "Transparent performance reporting dashboards",
      "Continuous creative & audience optimization",
    ],
    completionMessage: "Your business is now actively reaching potential customers.",
    interactiveComponentId: "marketing-funnel",
    accentColor: "#DC2626", // Traditional red
    secondaryColor: "#FFC928", // Yellow
    truckArtMotif: "acquisition-funnel",
    urduPhrase: "مہم کا آغاز اور گاہک",
    urduTranslation: "Campaign Launch & Customers",
  },
  {
    id: "stage-05",
    number: "05",
    title: "Sales & Community Management",
    shortTitle: "Sales & Community",
    theme: "Turn Attention Into Relationships.",
    headline: "Attention Is Valuable. Relationships Build Businesses.",
    description:
      "Generating interest is only one part of business growth. Businesses need structured communication, consistent engagement, lead management, and customer relationships.",
    detailedExplanation:
      "Attention without nurturing leaks revenue. We implement CRM pipelines, automated follow-up sequences, community management, and sales workflows that convert curiosity into lasting customer loyalty.",
    deliverables: [
      "Social media channel & community management",
      "Proactive customer engagement & brand voice",
      "Direct message & comment inquiry routing",
      "Lead qualification & pipeline management",
      "HubSpot / CRM implementation & customization",
      "Multi-stage sales funnel development",
      "Automated email & SMS follow-up triggers",
      "Customer retention & repeat purchase strategies",
      "Sales qualification process optimization",
      "Customer communication playbooks & workflows",
    ],
    completionMessage: "Your business now has a more structured customer engagement and sales process.",
    interactiveComponentId: "customer-journey",
    accentColor: "#059669", // Emerald green
    secondaryColor: "#1D4ED8", // Cobalt blue
    truckArtMotif: "community-dialogue",
    urduPhrase: "تعلقات اور فروخت",
    urduTranslation: "Relationships & Sales",
  },
  {
    id: "stage-06",
    number: "06",
    title: "Optimization & Scalability",
    shortTitle: "Optimization & Scale",
    theme: "Build Systems That Grow With Your Business.",
    headline: "Don't Just Grow Your Business. Build It to Handle Growth.",
    description:
      "Long-term growth requires more than marketing. We help businesses improve their processes, connect their tools, understand performance, and establish systems that support sustainable operations.",
    detailedExplanation:
      "Scaling isn't about working more hours—it's about connecting your tech stack. We replace chaotic spreadsheets and manual handoffs with automated webhook pipelines, real-time reporting, and documented operations.",
    deliverables: [
      "End-to-end business process optimization",
      "Workflow automation (Make.com, Zapier, n8n)",
      "Marketing performance & CAC/LTV analysis",
      "Sales funnel bottlenecks & conversion audit",
      "CRM database cleanup & advanced automations",
      "Customer journey touchpoint analysis",
      "Executive business intelligence reporting",
      "Operational backend webhook pipelines",
      "Standard Operating Procedure (SOP) documentation",
      "KPI & milestone tracking systems",
      "Long-term sustainable growth strategy",
      "Quarterly continuous improvement sprints",
    ],
    completionMessage: "Your business has a stronger foundation for sustainable growth.",
    interactiveComponentId: "business-workflow",
    accentColor: "#1D4ED8", // Cobalt blue
    secondaryColor: "#059669", // Emerald green
    truckArtMotif: "operational-gears",
    urduPhrase: "بہتری اور وسعت",
    urduTranslation: "Optimization & Scale",
  },
];

