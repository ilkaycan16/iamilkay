import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredFields = ["name", "email", "department", "message"] as const;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim().length < 2) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (String(body.message).trim().length < 10) {
      return NextResponse.json({ error: "Message is too short" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.MAIL_TO || "info@iamilkay.co.uk";

    if (!host || !user || !pass) {
      return NextResponse.json({ error: "Mail service is not configured" }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to,
      replyTo: String(body.email),
      subject: `IAMILKAY® inquiry: ${body.department}`,
      text: [
        `Name: ${body.name}`,
        `Company: ${body.company || "-"}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone || "-"}`,
        `Department: ${body.department}`,
        "",
        String(body.message)
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process inquiry" }, { status: 500 });
  }
}
