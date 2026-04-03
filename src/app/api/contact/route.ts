import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organization } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !organization?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields (first name, last name, email, organization)." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        console.error("Webhook error: HTTP", res.status);
        return NextResponse.json(
          { error: "Failed to submit your inquiry. Please try again later." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
