import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

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

    const submittedAt = new Date().toISOString();

    const dbInsert = getSupabaseAdmin().from("contact_submissions").insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: body.phone?.trim() || null,
      organization: organization.trim(),
      role: body.role || null,
      service: body.service || null,
      message: body.message?.trim() || null,
      newsletter: body.newsletter === "yes",
      submitted_at: submittedAt,
    });

    const webhookUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;

    const webhookBody = { ...body, submitted_at: submittedAt };
    if (webhookBody.phone) {
      webhookBody.phone = ` ${webhookBody.phone.trim()}`;
    }

    const webhookCall = webhookUrl
      ? fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(webhookBody),
        })
      : Promise.resolve(null);

    const [dbResult, webhookResult] = await Promise.allSettled([dbInsert, webhookCall]);

    const dbFailed =
      dbResult.status === "rejected" ||
      (dbResult.status === "fulfilled" && dbResult.value.error);

    if (dbFailed) {
      const err = dbResult.status === "rejected" ? dbResult.reason : dbResult.value.error;
      console.error("Supabase insert failed:", err);
    }

    let webhookFailed = false;
    if (webhookUrl) {
      if (webhookResult.status === "rejected") {
        webhookFailed = true;
        console.error("Webhook error:", webhookResult.reason);
      } else {
        const res = webhookResult.value as Response | null;
        if (res && !res.ok) {
          webhookFailed = true;
          console.error("Webhook error: HTTP", res.status);
        }
      }
    }

    if (dbFailed && webhookFailed) {
      return NextResponse.json(
        { error: "Failed to submit your inquiry. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
