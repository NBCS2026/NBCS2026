import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/send-form-email";
import { readFormJson, formError, FormError, escapeHtml, oncePerSubmission } from "@/lib/form-security";

export async function POST(request: NextRequest) {
  let locale = "en";
  try {
    const body = await readFormJson(request);
    locale = body.locale === "fr" ? "fr" : "en";
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return formError(locale);
    return await oncePerSubmission(request, body, async () => {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) return formError(locale, 503);
      const result = await sendFormEmail(request, body, {
        from: "NBCS 2026 Contact <onboarding@resend.dev>",
        to: "nbcs-spcn@fmjf.ca",
        reply_to: email,
        subject: `Contact Form Submission from ${name.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
      });
      if (result.error || !result.data?.id) return formError(locale, 502);
      return NextResponse.json({ message: "Message sent successfully" }, { headers: { "Cache-Control": "no-store" } });
    });
  } catch (error) { return formError(locale, error instanceof FormError ? error.status : 500); }
}
