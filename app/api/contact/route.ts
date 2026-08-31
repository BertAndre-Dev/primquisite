import { NextResponse } from "next/server";
import { SITE_CONTACT } from "@/constants/seo";

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error("SENDGRID_API_KEY is not configured");
    return NextResponse.json(
      { ok: false, message: "Email service is not configured." },
      { status: 503 },
    );
  }

  let payload: { name?: string; email?: string; message?: string };
  try {
    payload = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Invalid email address." },
      { status: 400 },
    );
  }

  const toEmail = process.env.SENDGRID_TO_EMAIL ?? SITE_CONTACT.email;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL ?? SITE_CONTACT.email;

  const textBody = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join(
    "\n",
  );
  const htmlBody = [
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
  ].join("");

  try {
    const response = await fetch(SENDGRID_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail },
        reply_to: { email },
        subject: `New contact inquiry from ${name}`,
        content: [
          { type: "text/plain", value: textBody },
          { type: "text/html", value: htmlBody },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("SendGrid API error:", response.status, errorBody);
      return NextResponse.json(
        { ok: false, message: "Unable to send message." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks, your request has been received.",
    });
  } catch (error) {
    console.error("SendGrid request failed:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to send message." },
      { status: 500 },
    );
  }
}
