export interface AdCampaign {
  id: string;
  category: "all-in-one" | "web-development" | "video-editing" | "marketing" | "automations";
  angleTitle: string;
  targetAudience: string;
  hook: string;
  primaryText: string;
  headline: string;
  description: string;
  ctaText: string;
  suggestedVisual: string;
}

export const adCampaigns: AdCampaign[] = [
  {
    id: "universal-chaotic-freelancer",
    category: "all-in-one",
    angleTitle: "The Chaotic Freelancer Reality Check",
    targetAudience: "Founders & Creators juggling multiple disconnected contractors",
    hook: "You've got a web dev who vanished into the mountains, a video editor who hasn't answered Slack in four days, and a marketing consultant who speaks in confusing acronyms.",
    primaryText:
      "Stop running an accidental circus. At Studio14, we do things differently: handcrafted Next.js websites that convert, video editing with rhythm and soul, paid ads that don't feel like cringe infomercials, and quiet automations that handle the grunt work while you sleep. One team. Zero drama. Handcrafted digital resonance.",
    headline: "Stop juggling 5 freelancers. Build with Studio14.",
    description: "Web • Video • Performance Ads • Automations",
    ctaText: "Let's Talk",
    suggestedVisual: "Split screen of chaotic 20 Slack notifications vs. clean Studio14 delivered flagship.",
  },
  {
    id: "universal-dekh-magar-pyaar-se",
    category: "all-in-one",
    angleTitle: "Dekh Magar Pyaar Se (Look, But With Love)",
    targetAudience: "Modern brands that refuse to blend into corporate beige",
    hook: "They say: 'Dekh magar pyaar se.' We say: Make your brand so memorable they have no choice.",
    primaryText:
      "In a sea of beige, cookie-cutter templates and AI-generated oatmeal, Studio14 crafts websites that stop thumbs, videos that hold retention, and automated funnels that turn curious visitors into paying clients. Your business isn't generic. Your digital presence shouldn't be either.",
    headline: "Your brand deserves more than a boring template.",
    description: "Handcrafted digital flagships & high-retention video.",
    ctaText: "Explore Studio14",
    suggestedVisual: "Bold Pakistani Truck Art chamakpatti badge morphing into modern high-speed editorial UI.",
  },
  {
    id: "web-the-apology",
    category: "web-development",
    angleTitle: "The Website Apology",
    targetAudience: "Founders whose current website is slow, embarrassing, or outdated",
    hook: "'Hey, don't judge our website, we're actually working on a redesign!'",
    primaryText:
      "If you've said this sentence to a potential investor or high-ticket client in the last 30 days, we need to have a gentle chat over chai. Your website is your 24/7 digital flagship. When someone visits, they decide in 3 seconds whether you're legitimate or amateur hour. We build bespoke Next.js, Shopify, and WordPress sites with sub-second load times, tactile micro-interactions, and conversion paths engineered to sell without being obnoxious.",
    headline: "A website so sharp you'll actually want to share it.",
    description: "Custom Next.js & Shopify • High-Speed Architecture",
    ctaText: "Get Your Website Audit",
    suggestedVisual: "Lighthouse 100/100 score animation with silky smooth Next.js page transitions.",
  },
  {
    id: "video-dopamine-rhythm",
    category: "video-editing",
    angleTitle: "Rhythm Over Noise",
    targetAudience: "YouTubers, creators, coaches, and brands with high audience drop-offs",
    hook: "Most video editing today is either a sleep-inducing slideshow or an over-caffeinated TikTok giving viewers a migraine.",
    primaryText:
      "Great video editing is rhythm, pacing, and narrative clarity. At Studio14, we cut YouTube episodes that keep people watching till the outro, and vertical shorts that feel native, authentic, and magnetic. Color grading that pops. Sound design that gives goosebumps. Captions with kinetic energy.",
    headline: "Turn 3-second drop-offs into binge-worthy retention.",
    description: "Long-form YouTube • Vertical Reels & Shorts • Brand Films",
    ctaText: "Watch Our Showreel",
    suggestedVisual: "Timeline scrub video with kinetic audio waveforms and colorful lower thirds.",
  },
  {
    id: "marketing-anti-cringe",
    category: "marketing",
    angleTitle: "The Anti-Cringe Playbook",
    targetAudience: "Founders burning budget on 'Boost Post' with zero measurable returns",
    hook: "Tired of ad creatives that look like a scam from 2007? So are your customers.",
    primaryText:
      "The modern audience has developed a super-immunity to generic ads. If it smells like a hard pitch, they swipe. Studio14 builds ad creative that feels like great content first—pairing thumb-stopping visual hooks with razor-sharp positioning. Backed by structured multi-stage funnels, transparent reporting, and zero smoke and mirrors.",
    headline: "Stop setting fire to your ad budget.",
    description: "Creative ad scripts, hooks, and multi-channel acquisition.",
    ctaText: "Claim Growth Strategy Call",
    suggestedVisual: "Thumb-stopping 3-second hook comparison with ad analytics dashboard overlay.",
  },
  {
    id: "automations-sunday-night",
    category: "automations",
    angleTitle: "The Sunday Night Spreadsheet",
    targetAudience: "Overwhelmed entrepreneurs doing manual data entry and lead chasing",
    hook: "It's 10:45 PM on a Sunday. Why are you copy-pasting lead emails from Google Forms into a spreadsheet?",
    primaryText:
      "You started a company to build cool things, not to be a human Zapier connector. We connect your website forms, WhatsApp, CRM, Slack, and billing into seamless automated workflows. A customer inquires? They get an instant personalized reply, an invite link, and a deal created in your pipeline—in 0.4 seconds. Work on your business. Let our automations run the repetitive stuff.",
    headline: "Fire yourself from manual copy-paste work.",
    description: "Custom API & Webhook Automations • CRM Sync • Zero Manual Admin",
    ctaText: "Automate Your Workflow",
    suggestedVisual: "Visual n8n / webhook flow executing in real time with '15 hours saved this week' tag.",
  },
];

