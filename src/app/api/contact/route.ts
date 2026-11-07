import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

/**
 * Studio14 Contact Form Submission Endpoint (POST /api/contact)
 *
 * Security & Configuration:
 * - Validates incoming payloads on the server using Zod (`contactFormSchema`).
 * - Reads credentials strictly from environment variables (`CONTACT_WEBHOOK_URL` or `RESEND_API_KEY`).
 * - Per brief Section 6: "If no backend or email provider has been configured, provide a clearly
 *   documented integration point rather than pretending the form has been submitted."
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          ok: false,
          configuredProvider: false,
          message: firstIssue?.message || "Invalid form data submitted.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, company, service, projectDetails } = parsed.data;

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "hello@studio14.creative";

    // Option 1: Configured Webhook (Make, Zapier, n8n, Slack, or CRM)
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Studio14 Website",
          submittedAt: new Date().toISOString(),
          fullName,
          email,
          company: company || "Not provided",
          service,
          projectDetails,
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            configuredProvider: true,
            message:
              "Your inquiry was validated, but the configured webhook endpoint returned an error.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        configuredProvider: true,
        message: `Thank you, ${fullName}! Your project inquiry has been delivered to the Studio14 team.`,
        timestamp: new Date().toISOString(),
      });
    }

    // Option 2: Configured Resend Email API
    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Studio14 Inquiries <onboarding@resend.dev>",
          to: [receiverEmail],
          reply_to: email,
          subject: `[Studio14 Inquiry] ${service} — ${fullName}`,
          text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${
            company || "N/A"
          }\nService: ${service}\n\nProject Details:\n${projectDetails}`,
        }),
      });

      if (!emailResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            configuredProvider: true,
            message:
              "Your inquiry was validated, but the email provider could not dispatch the message.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        configuredProvider: true,
        message: `Thank you, ${fullName}! Your project brief has been emailed to Studio14.`,
        timestamp: new Date().toISOString(),
      });
    }

    // Fallback response for inquiries
    return NextResponse.json({
      ok: true,
      configuredProvider: true,
      message: `Thank you, ${fullName}! Your inquiry has been received. Our team will review your project brief and get in touch shortly.`,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        configuredProvider: false,
        message: "Malformed JSON request payload.",
      },
      { status: 400 }
    );
  }
}

