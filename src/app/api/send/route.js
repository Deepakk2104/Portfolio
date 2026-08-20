import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const resend = getResend();
    // 1️⃣ SEND EMAIL TO YOU
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["deepakk12435@gmail.com"], // Your inbox
      subject: `New portfolio message: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ AUTO-REPLY TO THE USER
    await resend.emails.send({
      from: "Deepak Kumar <onboarding@resend.dev>",
      to: [email], // Send back to user
      subject: "Thanks for contacting me!",
      html: `
        <h2>Hey there 👋</h2>
        <p>Thank you for reaching out! I received your message and I’ll get back to you as soon as possible.</p>
        <br />
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br />
        <p>Regards,<br/>Deepak Kumar</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
