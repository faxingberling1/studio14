export type ServiceCategory =
  | "web-development"
  | "video-editing"
  | "marketing"
  | "business-automations";

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: ServiceCategory;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: ServiceDeliverable[];
  tools: string[];
  doodleType: "browser" | "clapperboard" | "megaphone" | "gears";
  accentColor: string;
  timelineEstimate: string;
}

export type ProjectCategory =
  | "All Projects"
  | "Websites"
  | "Branding"
  | "Video & Content"
  | "Marketing";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All Projects">;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  tags: string[];
  year: string;
  isDemoContent: boolean;
  demoNotice: string;
  imageUrl: string;
  imageAlt: string;
  galleryImages: {
    url: string;
    alt: string;
    caption: string;
  }[];
  featured?: boolean;
  layoutSpan?: "wide" | "tall" | "standard";
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  doodleType: "speech-lightbulb" | "pencil-notebook" | "gears-tools" | "rocket";
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrCompany: string;
  avatarUrl: string;
  quote: string;
  projectAssociated?: string;
  serviceTag: string;
  isSamplePlaceholder: boolean;
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export interface CareerRole {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  summary: string;
}

