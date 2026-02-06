import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Add contact to Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
      });
    }

    // Send welcome email with PDF link
    await resend.emails.send({
      from: "Makkah Guide <hello@makkahguide.com>",
      to: email,
      subject: "Your Free Makkah Pocket Guide",
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h1 style="color: #1A1A1A; font-size: 24px;">Your Makkah Pocket Guide</h1>
          <p style="color: #4A4A4A; line-height: 1.6;">
            Assalamu alaikum! Thank you for downloading the Makkah Pocket Guide.
          </p>
          <p style="color: #4A4A4A; line-height: 1.6;">
            We've put together our best recommendations, practical tips, and insider knowledge
            into one beautifully designed PDF.
          </p>
          <a href="https://makkahguide.com/downloads/makkah-pocket-guide.pdf"
             style="display: inline-block; background-color: #5C7C5C; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: 600; margin: 16px 0;">
            Download Your Guide
          </a>
          <p style="color: #4A4A4A; line-height: 1.6; font-size: 14px;">
            If you have any questions or suggestions, just reply to this email. We read every message.
          </p>
          <p style="color: #4A4A4A; line-height: 1.6;">
            May your journey be blessed,<br/>
            The Makkah Guide Team
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
