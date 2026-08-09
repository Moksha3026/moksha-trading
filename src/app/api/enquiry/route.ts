import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/content";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const {
    name = "",
    company = "",
    email = "",
    phone = "",
    qty = "",
    country = "",
    notes = "",
    product = "",
    method = "",
  } = body as Record<string, string>;

  if (!name.trim() || !email.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const lines = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `WhatsApp: ${phone}`,
    `Product: ${product}`,
    `Print method: ${method}`,
    `Quantity: ${qty}`,
    `Delivery country: ${country}`,
    "",
    "Notes:",
    notes,
  ];

  try {
    await transporter.sendMail({
      from: `"Moksha Trading Website" <${gmailUser}>`,
      to: CONTACT.email,
      replyTo: email,
      subject: `Quote enquiry — ${company || name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("Failed to send enquiry email", err);
    return NextResponse.json(
      { error: "Could not send the enquiry. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
