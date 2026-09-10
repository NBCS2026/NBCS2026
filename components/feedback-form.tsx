"use client";

import { useMemo, useState } from "react";
import { DAY1_SCHEDULE } from "@/data/day1-schedule";
import { DAY1_SCHEDULE_FR } from "@/data/day1-schedule-fr";
import { DAY2_SCHEDULE } from "@/data/day2-schedule";
import { DAY2_SCHEDULE_FR } from "@/data/day2-schedule-fr";
import { DAY3_SCHEDULE } from "@/data/day3-schedule";
import { DAY3_SCHEDULE_FR } from "@/data/day3-schedule-fr";
import type { ScheduleBlock } from "@/data/schedule-types";

function feedbackOptions(blocks: ScheduleBlock[], dayLabel: string) {
  return blocks.flatMap((block) => {
    if (block.compact) {
      return [];
    }
    if (block.sessions?.length) {
      return block.sessions.map((session) => ({
        id: `${dayLabel}: ${session.title}`,
        label: `${dayLabel} · ${block.time} · ${session.title}`,
      }));
    }

    return [
      {
        id: `${dayLabel}: ${block.title}`,
        label: `${dayLabel} · ${block.time} · ${block.title}`,
      },
    ];
  });
}

export function FeedbackForm({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const [feedbackType, setFeedbackType] = useState<"session" | "general">(
    "session",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sessions = useMemo(() => {
    const schedules = isFr
      ? [DAY1_SCHEDULE_FR, DAY2_SCHEDULE_FR, DAY3_SCHEDULE_FR]
      : [DAY1_SCHEDULE, DAY2_SCHEDULE, DAY3_SCHEDULE];
    const dayLabels = isFr
      ? ["Jour 1 — vendredi", "Jour 2 — samedi", "Jour 3 — dimanche"]
      : ["Day 1 — Friday", "Day 2 — Saturday", "Day 3 — Sunday"];

    return schedules.flatMap((blocks, index) =>
      feedbackOptions(blocks, dayLabels[index]),
    );
  }, [isFr]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      feedbackType,
      session:
        feedbackType === "session" ? String(formData.get("session") || "") : "",
      topic:
        feedbackType === "general" ? String(formData.get("topic") || "") : "",
      rating: String(formData.get("rating") || ""),
      comments: String(formData.get("comments") || ""),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      anonymous: formData.get("anonymous") === "on",
      locale,
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit feedback.");
      }
      form.reset();
      setFeedbackType("session");
      setStatus({
        type: "success",
        message: isFr
          ? "Merci. Vos commentaires ont été transmis."
          : "Thank you. Your feedback has been submitted.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : isFr
              ? "Impossible de transmettre vos commentaires."
              : "Unable to submit feedback.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[#D8C1C9] bg-white px-4 py-3 text-[#1E1E1E] outline-none transition focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/20";

  return (
    <section className="px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1060px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#5D1831]">
            {isFr ? "Votre voix compte" : "Your voice matters"}
          </h2>

          <p className="mt-4 leading-relaxed text-[#1E1E1E]/75">
            {isFr
              ? "Réagissez à une séance ou à un sujet en particulier. Nous voulons vous entendre."
              : "Respond to a specific session or topic. We want to hear from you."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-[#E8D4DB] bg-[#FAF6F7] p-6 shadow-sm sm:p-8"
        >
          <fieldset>
            <legend className="font-heading font-bold text-[#1E1E1E]">
              {isFr ? "Type de commentaires" : "Feedback type"}
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#D8C1C9] bg-white p-4">
                <input
                  type="radio"
                  name="feedbackType"
                  value="session"
                  checked={feedbackType === "session"}
                  onChange={() => setFeedbackType("session")}
                />
                <span className="font-semibold">
                  {isFr ? "Une séance" : "A session"}
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#D8C1C9] bg-white p-4">
                <input
                  type="radio"
                  name="feedbackType"
                  value="general"
                  checked={feedbackType === "general"}
                  onChange={() => setFeedbackType("general")}
                />
                <span className="font-semibold">
                  {isFr
                    ? "Un sujet ou une idée"
                    : "A topic or idea"}
                </span>
              </label>
            </div>
          </fieldset>

          {feedbackType === "session" && (
            <label className="block font-semibold">
              {isFr ? "Séance" : "Session"}
              <select
                name="session"
                required
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  {isFr ? "Choisir une séance" : "Choose a session"}
                </option>
                {sessions.map((session) => (
                  <option key={session.id} value={session.id}>
                    {session.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          {feedbackType === "general" && (
            <label className="block font-semibold">
              {isFr ? "Sujet (facultatif)" : "Topic (optional)"}
              <input
                name="topic"
                type="text"
                maxLength={180}
                className={fieldClass}
                placeholder={
                  isFr
                    ? "Ex. justice, santé, leadership des jeunes"
                    : "e.g. justice, health, youth leadership"
                }
              />
            </label>
          )}

          <p className="text-sm text-[#1E1E1E]/70">
            {isFr ? "Vous pouvez aussi commenter l’accessibilité ou l’organisation en choisissant un sujet." : "You can also comment on accessibility or event organization by choosing a topic."}
          </p>

          <label className="block font-semibold">
            {isFr ? "Pertinence du contenu" : "Content relevance"}
            <select
              name="rating"
              required
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>
                {isFr ? "Choisir une évaluation" : "Choose a rating"}
              </option>
              <option value="5">5 — {isFr ? "Excellent" : "Excellent"}</option>
              <option value="4">4 — {isFr ? "Très bien" : "Very good"}</option>
              <option value="3">3 — {isFr ? "Bien" : "Good"}</option>
              <option value="2">
                2 — {isFr ? "À améliorer" : "Needs improvement"}
              </option>
              <option value="1">1 — {isFr ? "Insatisfaisant" : "Poor"}</option>
            </select>
          </label>

          <label className="block font-semibold">
            {isFr ? "Réflexions, questions et idées" : "Reflections, questions and ideas"}
            <textarea
              name="comments"
              required
              rows={6}
              maxLength={4000}
              className={fieldClass}
              placeholder={
                isFr
                  ? "Quelles idées vous ont marqué? Quelles perspectives manquent? Quelles questions ou actions souhaitez-vous approfondir?"
                  : "What ideas stood out? What perspectives were missing? What questions or actions would you like to explore further?"
              }
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-semibold">
              {isFr ? "Nom (obligatoire)" : "Name (required)"}
              <input
                name="name"
                required
                autoComplete="name"
                type="text"
                maxLength={120}
                className={fieldClass}
              />
            </label>
            <label className="block font-semibold">
              {isFr ? "Courriel (obligatoire)" : "Email (required)"}
              <input
                name="email"
                required
                autoComplete="email"
                type="email"
                maxLength={200}
                className={fieldClass}
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 font-semibold">
              <input type="checkbox" name="anonymous" className="mt-1" />
              <span>{isFr ? "Je souhaite que ma réponse soit anonyme." : "I wish my response to be anonymous."}</span>
            </label>
            <p className="text-sm leading-relaxed text-[#1E1E1E]/70">
              {isFr ? "Le nom et le courriel sont obligatoires pour envoyer le formulaire. Si vous choisissez l’anonymat, ils ne seront pas inclus dans les commentaires transmis à l’équipe du Sommet." : "Name and email are required to submit. If you choose anonymity, they will not be included in the feedback sent to the Summit team."}
            </p>
          </div>

          {status.type && (
            <output
              className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
            >
              {status.message}
            </output>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[#8C0C3A] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#5D1831] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? isFr
                ? "Envoi…"
                : "Submitting…"
              : isFr
                ? "Envoyer les commentaires"
                : "Submit feedback"}
          </button>
        </form>
      </div>
    </section>
  );
}
