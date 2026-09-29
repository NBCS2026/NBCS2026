import { type NextRequest, NextResponse } from "next/server";
import { saveFormSubmission } from "@/lib/save-form-submission";
import { EXPERTISE, CONTRIBUTIONS } from "@/data/survey-options";
import { getProgramEntries } from "@/data/program";
import { readFormJson, formError, FormError, oncePerSubmission } from "@/lib/form-security";

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

      await saveFormSubmission(request, body, "Media submissions", [locale, name, email, mediaUrl, caption, credit, permission]);

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

      await saveFormSubmission(request, body, "Survey responses", [locale, name, email, location, organization, role, expertise.join("; "), otherExpertise, contributions.join("; "), otherContribution, insights, projects, contactConsent, anonymizedConsent]);

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

    await saveFormSubmission(request, body, "Feedback", [locale, feedbackType, session, topic, Number(rating), comments, anonymous, anonymous ? "" : name, anonymous ? "" : email]);

    return NextResponse.json({ message: "Feedback submitted" });
  } catch {
    return formError(body.locale === "fr" ? "fr" : "en", 500);
  }
}

