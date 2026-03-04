import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  const { name, company, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const safeName    = escapeHtml(String(name));
  const safeCompany = company ? escapeHtml(String(company)) : "";
  const safeEmail   = escapeHtml(String(email));
  const safePhone   = phone ? escapeHtml(String(phone)) : "";
  const safeMessage = escapeHtml(String(message));

  const { error } = await resend.emails.send({
    from: "GreenMech Contact <onboarding@resend.dev>",
    to: "enmadhavan@gmail.com",
    replyTo: email,
    subject: `New enquiry from ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
    html: `
      <p><strong>Name:</strong> ${safeName}</p>
      ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${safeMessage}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
