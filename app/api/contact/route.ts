import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredFields = ["name", "email", "department", "message"] as const;
const defaultMailTo = "connect@ilkaybatur.com";

async function sendViaFormSubmit(body: Record<string, unknown>, to: string) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: `IAMILKAY® inquiry: ${String(body.department)}`,
      _template: "table",
      _captcha: "false",
      name: String(body.name),
      company: String(body.company || "-"),
      email: String(body.email),
      phone: String(body.phone || "-"),
      department: String(body.department),
      message: String(body.message)
    })
  });

  if (!response.ok) {
    throw new Error("FormSubmit delivery failed");
  }
}

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
    const to = process.env.MAIL_TO || defaultMailTo;

    if (!host || !user || !pass) {
      await sendViaFormSubmit(body, to);
      return NextResponse.json({ ok: true, provider: "formsubmit" });
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
