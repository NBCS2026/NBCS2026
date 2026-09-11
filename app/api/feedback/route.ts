import { type NextRequest, NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/send-form-email";
import { EXPERTISE, CONTRIBUTIONS } from "@/data/survey-options";
import { getProgramEntries } from "@/data/program";
import { readFormJson, formError, FormError, escapeHtml, oncePerSubmission } from "@/lib/form-security";

export async function POST(request: NextRequest) {
  let locale = "en";
  try {
    const body = await readFormJson(request);
    locale = body.locale === "fr" ? "fr" : "en";
    return await oncePerSubmission(request, body, () => submitFeedback(request, body));
  } catch (error) { return formError(locale, error instanceof FormError ? error.status : 500); }
}


async function submitFeedback(request: NextRequest, body: Record<string, unknown>) {
  try {
    const locale = body.locale === "fr" ? "fr" : "en";

    if (body.submissionKind === "media") {
      const name = String(body.name || "")
        .trim()
        .slice(0, 120);
      const email = String(body.email || "")
        .trim()
        .slice(0, 200);
      const mediaUrl = String(body.mediaUrl || "")
        .trim()
        .slice(0, 1000);
      const caption = String(body.caption || "")
        .trim()
        .slice(0, 1500);
      const credit = String(body.credit || "")
        .trim()
        .slice(0, 180);
      const permission = body.permission === true;

      let validUrl = false;
      try {
        const parsedUrl = new URL(mediaUrl);
        validUrl =
          parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";
      } catch {
        validUrl = false;
      }

      if (
        !name ||
        !email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !validUrl ||
        !caption ||
        !credit ||
        !permission
      ) {
        return NextResponse.json(
          {
            error:
              locale === "fr"
                ? "Veuillez remplir tous les champs et confirmer l’autorisation."
                : "Please complete all fields and confirm permission.",
          },
          { status: 400 },
        );
      }

      const apiKey = process.env.RESEND_API_KEY;
      const recipient = process.env.FEEDBACK_RECIPIENT_EMAIL;
      if (!apiKey || !recipient) {
        return NextResponse.json(
          {
            error:
              locale === "fr" ? "Impossible d’envoyer le formulaire. Veuillez réessayer plus tard." : "Unable to send the form. Please try again later.",
          },
          { status: 500 },
        );
      }

      const result = await sendFormEmail(request, body, {
        from: "NBCS 2026 Media Submissions <onboarding@resend.dev>",
        to: recipient,
        reply_to: email,
        subject: `NBCS delegate media submission — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMedia link: ${mediaUrl}\nCredit: ${credit}\nPermission confirmed: Yes\n\nCaption/context:\n${caption}`,
        html: `
          <h2>NBCS 2026 delegate media submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Media link:</strong> <a href="${escapeHtml(mediaUrl)}">${escapeHtml(mediaUrl)}</a></p>
          <p><strong>Credit:</strong> ${escapeHtml(credit)}</p>
          <p><strong>Permission confirmed:</strong> Yes</p>
          <p><strong>Caption/context:</strong></p>
          <p>${escapeHtml(caption).replaceAll("\n", "<br>")}</p>
        `,
      });

      if (result.error || !result.data?.id) {
        return NextResponse.json(
          {
            error:
              locale === "fr"
                ? "Impossible de transmettre le média."
                : "Unable to submit media.",
          },
          { status: 500 },
        );
      }

      return NextResponse.json({ message: "Media submitted" });
    }

    if (body.submissionKind === "survey") {
      const name = String(body.name || "")
        .trim()
        .slice(0, 120);
      const email = String(body.email || "")
        .trim()
        .slice(0, 200);
      const location = String(body.location || "")
        .trim()
        .slice(0, 160);
      const organization = String(body.organization || "")
        .trim()
        .slice(0, 180);
      const role = String(body.role || "")
        .trim()
        .slice(0, 180);
      const expertise = Array.isArray(body.expertise)
        ? body.expertise.map(String).slice(0, 20)
        : [];
      const otherExpertise = String(body.otherExpertise || "")
        .trim()
        .slice(0, 240);
      if (expertise.some(item => !EXPERTISE.some(option => option[0] === item))) return formError(locale);
      const contributions = Array.isArray(body.contributions)
        ? body.contributions.map(String).slice(0, 20)
        : [];
      if (contributions.some(item => !CONTRIBUTIONS.some(option => option[0] === item))) return formError(locale);
      const otherContribution = String(body.otherContribution || "")
        .trim()
        .slice(0, 240);
      const insights = String(body.insights || "")
        .trim()
        .slice(0, 5000);
      const projects = String(body.projects || "")
        .trim()
        .slice(0, 4000);
      const contactConsent = body.contactConsent === true;
      const anonymizedConsent = body.anonymizedConsent === true;

      if (
        !name ||
        !email ||
        !location ||
        (!expertise.length && !otherExpertise) ||
        (!contributions.length && !otherContribution) ||
        insights.length < 20 ||
        !anonymizedConsent ||
        (contactConsent && !email)
      ) {
        return NextResponse.json(
          {
            error:
              locale === "fr"
                ? "Veuillez remplir les champs obligatoires, y compris le nom, le courriel et la ville avec la province ou le territoire."
                : "Please complete the required fields, including name, email, and city with province or territory.",
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

      const apiKey = process.env.RESEND_API_KEY;
      const recipient = process.env.FEEDBACK_RECIPIENT_EMAIL;
      if (!apiKey || !recipient) {
        return NextResponse.json(
          {
            error:
              locale === "fr" ? "Impossible d’envoyer le formulaire. Veuillez réessayer plus tard." : "Unable to send the form. Please try again later.",
          },
          { status: 500 },
        );
      }

      const expertiseText = [...expertise, otherExpertise]
        .filter(Boolean)
        .join(", ");
      const contributionsText = [...contributions, otherContribution].filter(Boolean).join(", ");
      const result = await sendFormEmail(request, body, {
        from: "NBCS 2026 Delegate Survey <onboarding@resend.dev>",
        to: recipient,
        ...(email ? { reply_to: email } : {}),
        subject: `NBCS Moving Forward Together survey: ${name || "Anonymous"}`,
        text: `Name: ${name}\nEmail: ${email || "Not provided"}\nLocation: ${location || "Not provided"}\nOrganization/community: ${organization || "Not provided"}\nRole: ${role || "Not provided"}\n\nExpertise: ${expertiseText}\n\nContribution interests: ${contributionsText}\nContact consent: ${contactConsent ? "Yes" : "No"}\nAnonymized-use consent: Yes\n\nPriorities, gaps and knowledge:\n${insights}\n\nProjects, networks and resources:\n${projects || "Not provided"}`,
        html: `
          <h2>NBCS 2026 — Moving Forward Together delegate survey</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
          <p><strong>Location:</strong> ${escapeHtml(location || "Not provided")}</p>
          <p><strong>Organization/community:</strong> ${escapeHtml(organization || "Not provided")}</p>
          <p><strong>Role:</strong> ${escapeHtml(role || "Not provided")}</p>
          <p><strong>Expertise:</strong> ${escapeHtml(expertiseText)}</p>
          <p><strong>Contribution interests:</strong> ${escapeHtml(contributionsText)}</p>
          <p><strong>Contact consent:</strong> ${contactConsent ? "Yes" : "No"}</p>
          <p><strong>Anonymized-use consent:</strong> Yes</p>
          <h3>Priorities, gaps and knowledge</h3>
          <p>${escapeHtml(insights).replaceAll("\n", "<br>")}</p>
          <h3>Projects, networks and resources</h3>
          <p>${escapeHtml(projects || "Not provided").replaceAll("\n", "<br>")}</p>
        `,
      });

      if (result.error || !result.data?.id) {
        return NextResponse.json(
          {
            error:
              locale === "fr"
                ? "Impossible de transmettre le sondage."
                : "Unable to submit the survey.",
          },
          { status: 500 },
        );
      }

      return NextResponse.json({ message: "Survey submitted" });
    }

    const feedbackType =
      body.feedbackType === "general" ? "general" : "session";
    const sessionId = String(body.session || "").trim();
    const entry = getProgramEntries(locale).find(item => item.id === sessionId);
    const session = entry ? `${entry.id} — ${entry.title}` : "";
    const topic = String(body.topic || "")
      .trim()
      .slice(0, 180);
    const rating = String(body.rating || "").trim();
    const comments = String(body.comments || "").trim();
    const name = String(body.name || "")
      .trim()
      .slice(0, 120);
    const email = String(body.email || "")
      .trim()
      .slice(0, 200);
    const anonymous = body.anonymous === true;
    if (
      !name ||
      !email ||
      !["1", "2", "3", "4", "5"].includes(rating) ||
      comments.length < 2 ||
      comments.length > 4000 ||
      (feedbackType === "session" && !entry)
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

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.FEEDBACK_RECIPIENT_EMAIL;
    if (!apiKey || !recipient) {
      return NextResponse.json(
        {
          error:
            locale === "fr" ? "Impossible d’envoyer le formulaire. Veuillez réessayer plus tard." : "Unable to send the form. Please try again later.",
        },
        { status: 500 },
      );
    }

    const subjectTarget =
      feedbackType === "session"
        ? session.replace(/[\r\n]+/g, " ").slice(0, 140)
        : topic.replace(/[\r\n]+/g, " ").slice(0, 140) ||
          "General Summit feedback";
    const responseName = anonymous ? "Anonymous" : name;
    const responseEmail = anonymous ? "Not disclosed" : email;
    const result = await sendFormEmail(request, body, {
      from: "NBCS 2026 Feedback <onboarding@resend.dev>",
      to: recipient,
      ...(!anonymous ? { reply_to: email } : {}),
      subject: `NBCS feedback (${rating}/5): ${subjectTarget}`,
      text: `Type: ${feedbackType}\nSession: ${session || "N/A"}\nTopic: ${topic || "N/A"}\nRating: ${rating}/5\nAnonymous response: ${anonymous ? "Yes" : "No"}\nName: ${responseName}\nEmail: ${responseEmail}\n\nComments:\n${comments}`,
      html: `
        <h2>NBCS 2026 feedback</h2>
        <p><strong>Type:</strong> ${escapeHtml(feedbackType)}</p>
        <p><strong>Session:</strong> ${escapeHtml(session || "N/A")}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic || "N/A")}</p>
        <p><strong>Rating:</strong> ${escapeHtml(rating)}/5</p>
        <p><strong>Anonymous response:</strong> ${anonymous ? "Yes" : "No"}</p>
        <p><strong>Name:</strong> ${escapeHtml(responseName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(responseEmail)}</p>
        <p><strong>Comments:</strong></p>
        <p>${escapeHtml(comments).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (result.error || !result.data?.id) {
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
    return formError(body.locale === "fr" ? "fr" : "en", 500);
  }
}
