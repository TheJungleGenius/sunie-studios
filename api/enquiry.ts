import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, eventType, eventDate, message } = req.body ?? {};

  if (!name || !email || !eventType || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "The Sunie Studio <onboarding@resend.dev>",
    to: "hohethan4@gmail.com",
    replyTo: email,
    subject: `New Enquiry — ${eventType} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#2C2A29">
        <h2 style="font-size:24px;margin-bottom:24px">New Enquiry</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:140px"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Phone</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Event Type</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${eventType}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Event Date</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${eventDate || "Not specified"}</td></tr>
        </table>
        <h3 style="margin-bottom:12px">Message</h3>
        <p style="line-height:1.6;white-space:pre-wrap">${message}</p>
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
        <p style="font-size:12px;color:#999;margin-top:16px">Reply to this email to respond directly to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ message: error.message });
  }

  return res.status(200).json({ message: "Enquiry sent successfully" });
}
