import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO = "enquiry@macrokinetic.com";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured — skip in dev

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    }
  );
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

function enquiryHtml(
  name: string,
  email: string,
  company: string,
  message: string
) {
  const esc = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:12px 0;border-top:1px solid #e5e5e5;font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:#999;width:140px;vertical-align:top">${label}</td><td style="padding:12px 0;border-top:1px solid #e5e5e5;font-size:14px;color:#111">${value}</td></tr>`
      : "";
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111;max-width:600px;margin:0 auto;padding:24px">
  <p style="color:#15A04A;font-size:11px;letter-spacing:.18em;text-transform:uppercase;margin:0 0 24px">MacroKinetic · New Enquiry</p>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    ${row("From", esc(name))}
    ${row("Email", `<a href="mailto:${esc(email)}" style="color:#111">${esc(email)}</a>`)}
    ${row("Company", esc(company))}
  </table>
  <div style="border-top:1px solid #e5e5e5;padding-top:20px">
    <p style="font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:#999;margin:0 0 12px">Message</p>
    <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;margin:0">${esc(message)}</p>
  </div>
</body></html>`;
}

function confirmationHtml(name: string) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111;max-width:600px;margin:0 auto;padding:24px">
  <p style="color:#15A04A;font-size:11px;letter-spacing:.18em;text-transform:uppercase;margin:0 0 24px">MacroKinetic</p>
  <h1 style="font-size:22px;font-weight:500;margin:0 0 16px;letter-spacing:-.01em">Thank you, ${name}.</h1>
  <p style="font-size:15px;line-height:1.7;color:#555;margin:0 0 24px">We have received your enquiry and will follow up as soon as possible.</p>
  <p style="font-size:13px;color:#999;border-top:1px solid #e5e5e5;padding-top:20px;margin:0">MacroKinetic Global · London · Hong Kong · Shenzhen</p>
</body></html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name: string;
      email: string;
      company?: string;
      message: string;
      turnstileToken?: string;
    };

    const { name, email, company = "", message, turnstileToken = "" } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const captchaOk = await verifyTurnstile(turnstileToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Security check failed. Please try again." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM } =
      process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.warn("[contact] SMTP not configured — skipping email delivery");
      return NextResponse.json(
        {
          error:
            "Email delivery is not yet configured. Please contact us directly at enquiry@macrokinetic.com.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const from = SMTP_FROM ?? "website@macrokinetic.com";
    const subject = `Enquiry from ${name}${company ? ` — ${company}` : ""}`;

    await transporter.sendMail({
      from,
      to: TO,
      replyTo: email,
      subject,
      html: enquiryHtml(name, email, company, message),
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: "We've received your MacroKinetic enquiry",
      html: confirmationHtml(name),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or reach us at enquiry@macrokinetic.com.",
      },
      { status: 500 }
    );
  }
}
