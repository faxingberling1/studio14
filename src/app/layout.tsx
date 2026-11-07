import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Studio14AIChat } from "@/components/chat/Studio14AIChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://studio14.creative"),
  title: {
    default: "Studio14 — Crafting Digital Resonance | Creative Digital Studio",
    template: "%s | Studio14 Creative Studio",
  },
  description:
    "We are Studio14, a creative digital studio that transforms ideas into powerful digital experiences across Website Design & Development, Video Editing, Marketing, and Business Automations.",
  keywords: [
    "Studio14",
    "Creative Digital Studio",
    "Website Design & Development",
    "Next.js Studio",
    "Shopify Development",
    "WordPress Development",
    "Video Editing Studio",
    "Digital Marketing",
    "Business Automations",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studio14.creative",
    siteName: "Studio14",
    title: "Studio14 — Crafting Digital Resonance",
    description:
      "We are Studio14, a creative studio that transforms ideas into powerful digital experiences.",
    images: [
      {
        url: "/logo/studio14-original.jpg",
        width: 800,
        height: 800,
        alt: "Studio14 — اسٹوڈیو 14 Creative Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio14 — Crafting Digital Resonance",
    description:
      "Modern Creative Studio × Handcrafted Web Design, Video Editing, Marketing & Business Automations.",
    images: ["/logo/studio14-original.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://studio14.creative/#organization",
        name: "Studio14",
        alternateName: "اسٹوڈیو 14",
        url: "https://studio14.creative",
        logo: "https://studio14.creative/logo/studio14-original.jpg",
        slogan: "Crafting Digital Resonance",
        description:
          "Creative digital studio specializing in Website Design & Development, Video Editing, Marketing, and Business Automations.",
      },
      {
        "@type": "WebSite",
        "@id": "https://studio14.creative/#website",
        url: "https://studio14.creative",
        name: "Studio14",
        publisher: {
          "@id": "https://studio14.creative/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..800&family=Playfair+Display:ital,wght@0,600..800;1,600..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#171717] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#FFC928] focus:text-[#171717] focus:font-bold focus:border-2 focus:border-[#171717]"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Studio14AIChat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
