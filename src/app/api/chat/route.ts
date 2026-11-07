import { NextRequest, NextResponse } from "next/server";
import { generateStudio14AIResponse, studio14Knowledge } from "@/data/aiKnowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body as {
      message: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    // If a live Gemini API key is configured, query the model with Studio14 context
    if (geminiApiKey) {
      try {
        const knowledgeSummary = studio14Knowledge
          .map((k) => `### ${k.title}\n${k.content}`)
          .join("\n\n");

        const prompt = `You are Studio14 AI, the autonomous, friendly, and knowledgeable AI guide for Studio14 (اسٹوڈیو 14), a modern creative digital studio.
Studio14 offers 4 core disciplines:
1. Website Design & Development (Next.js, Shopify, WordPress)
2. Video Editing (YouTube, Short-form reels/TikTok, Brand films)
3. Marketing (Organic, Paid social, SEO)
4. Business Automations (CRM funnels, Make/Zapier/n8n)

Studio Ethos: Handcrafted editorial design, craft over hype, real maker collaboration, zero generic AI blobs or cookie-cutter templates.
Email: hello@studio14.creative

Official Studio Knowledge Base:
${knowledgeSummary}

Answer the user's question concisely, helpfully, and with personality. Use markdown bolding and bullet points where helpful.
User query: "${message}"`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const candidateText =
            data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return NextResponse.json({
              reply: candidateText,
              suggestedChips: [
                "Website Design & Dev",
                "Video Editing",
                "Business Automations",
                "Start a Project",
              ],
              actionLink: {
                label: "Explore Studio Services →",
                href: "/services",
              },
              source: "gemini-live",
            });
          }
        }
      } catch (err) {
        console.warn("Gemini API fallback to autonomous engine:", err);
      }
    }

    // Default autonomous response engine from local knowledge base
    const autonomousResponse = generateStudio14AIResponse(message);

    return NextResponse.json({
      reply: autonomousResponse.text,
      suggestedChips: autonomousResponse.suggestedChips,
      actionLink: autonomousResponse.actionLink,
      source: "studio14-autonomous-engine",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process chat query." },
      { status: 500 }
    );
  }
}

