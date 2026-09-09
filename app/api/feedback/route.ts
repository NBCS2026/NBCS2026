import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const feedbackType =
      body.feedbackType === "general" ? "general" : "session";
    const session = String(body.session || "").trim();
    const rating = String(body.rating || "").trim();
    const comments = String(body.comments || "").trim();
    const name = String(body.name || "Anonymous")
      .trim()
      .slice(0, 120);
    const email = String(body.email || "")
      .trim()
      .slice(0, 200);
    const locale = body.locale === "fr" ? "fr" : "en";

    if (
      !["1", "2", "3", "4", "5"].includes(rating) ||
      comments.length < 2 ||
      comments.length > 4000 ||
      (feedbackType === "session" && !session)
    ) {
      return NextResponse.json(
        {
          error:
            locale === "fr"
              ? "Veuillez remplir les champs obligatoires."
              : "Please complete the required fields.",
        },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          error:
            locale === "fr"
              ? "Adresse courriel invalide."
              : "Invalid email address.",
        },
        { status: 400 },
      );
    }

    const apiKey =
      process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            locale === "fr"
              ? "Le service de commentaires n’est pas configuré."
              : "The feedback service is not configured.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const subjectTarget =
      feedbackType === "session"
        ? session.replace(/[\r\n]+/g, " ").slice(0, 140)
        : "General Summit feedback";
    const result = await resend.emails.send({
      from: "NBCS 2026 Feedback <onboarding@resend.dev>",
      to: "nbcs-spcn@fmjf.ca",
      ...(email ? { reply_to: email } : {}),
      subject: `NBCS feedback (${rating}/5): ${subjectTarget}`,
      text: `Type: ${feedbackType}\nSession: ${session || "N/A"}\nRating: ${rating}/5\nName: ${name}\nEmail: ${email || "Not provided"}\n\nComments:\n${comments}`,
      html: `
        <h2>NBCS 2026 feedback</h2>
        <p><strong>Type:</strong> ${escapeHtml(feedbackType)}</p>
        <p><strong>Session:</strong> ${escapeHtml(session || "N/A")}</p>
        <p><strong>Rating:</strong> ${escapeHtml(rating)}/5</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Comments:</strong></p>
        <p>${escapeHtml(comments).replaceAll("\n", "<br>")}</p>
      `,
    });

    if ("error" in result && result.error) {
      return NextResponse.json(
        {
          error:
            locale === "fr"
              ? "Impossible de transmettre les commentaires."
              : "Unable to submit feedback.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Feedback submitted" });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit feedback." },
      { status: 500 },
    );
  }
}
