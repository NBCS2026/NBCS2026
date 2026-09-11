"use client";

import { useState } from "react";
import { useFormSubmission } from "@/lib/use-form-submission";
import { FormHoneypot } from "./form-honeypot";

import { EXPERTISE, CONTRIBUTIONS } from "@/data/survey-options";

export function DelegateSurvey({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const submission = useFormSubmission();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[#D8C1C9] bg-white px-4 py-3 text-[#1E1E1E] outline-none transition focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/20";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submission.begin()) return;
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      submissionKind: "survey",
      website: String(formData.get("website") || ""),
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      organization: String(formData.get("organization") || ""),
      role: String(formData.get("role") || ""),
      expertise: formData.getAll("expertise").map(String),
      otherExpertise: String(formData.get("otherExpertise") || ""),
      contributions: formData.getAll("contributions").map(String),
      otherContribution: String(formData.get("otherContribution") || ""),
      insights: String(formData.get("insights") || ""),
      projects: String(formData.get("projects") || ""),
      contactConsent: formData.get("contactConsent") === "yes",
      anonymizedConsent: formData.get("anonymizedConsent") === "yes",
      locale,
    };

    try {
      const { response, result } = await submission.send("/api/feedback", payload);
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit the survey.");
      }
      form.reset();
      setStatus({
        type: "success",
        message: isFr
          ? "Merci. Votre sondage a été transmis."
          : "Thank you. Your survey has been submitted.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : isFr
              ? "Impossible de transmettre le sondage."
              : "Unable to submit the survey.",
      });
    } finally {
      submission.end();
      setIsSubmitting(false);
    }
  }

  return (
    <section id="delegate-survey" className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1060px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            Moving Forward Together · Ensemble, allons de l’avant
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#5D1831]">
            {isFr
              ? "Sondage sur les connaissances et les contributions"
              : "Delegate knowledge & contribution survey"}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Aidez-nous à mieux comprendre les connaissances, l’expérience et les réseaux présents au Sommet. Vos réponses orienteront l’approfondissement de la recherche, la validation communautaire, les recommandations de politiques publiques et les cadres des prochains Sommets."
              : "Help us understand the knowledge, experience and networks present at the Summit. Your responses will inform deeper research, community validation, policy recommendations and frameworks for future Summits."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8 rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-[0_16px_45px_rgba(93,24,49,0.08)] sm:p-8 lg:p-10"
        >
          <fieldset disabled={isSubmitting} className="contents">
          <FormHoneypot />
          <fieldset>
            <legend className="font-heading text-xl font-black text-[#5D1831] sm:text-2xl">
              {isFr ? "À propos de vous" : "About you"}
            </legend>
            <p className="mt-2 text-sm leading-relaxed text-[#1E1E1E]/65">
              {isFr
                ? "Le nom, le courriel et la ville avec la province ou le territoire sont obligatoires."
                : "Name, email, and city with province or territory are required."}
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="block font-semibold">
                {isFr ? "Nom (obligatoire)" : "Name (required)"}
                <input required autoComplete="name" name="name" maxLength={120} className={fieldClass} />
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
              <label className="block font-semibold">
                {isFr
                  ? "Ville, province ou territoire (obligatoire)"
                  : "City, province or territory (required)"}
                <input required name="location" maxLength={160} className={fieldClass} />
              </label>
              <label className="block font-semibold">
                {isFr
                  ? "Organisation ou communauté"
                  : "Organization or community"}
                <input
                  name="organization"
                  maxLength={180}
                  className={fieldClass}
                />
              </label>
              <label className="block font-semibold sm:col-span-2">
                {isFr ? "Rôle ou fonction" : "Role or position"}
                <input name="role" maxLength={180} className={fieldClass} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-heading text-xl font-black text-[#5D1831] sm:text-2xl">
              {isFr ? "Domaines d’expertise" : "Areas of expertise"}
            </legend>
            <p className="mt-2 text-sm text-[#1E1E1E]/65">
              {isFr
                ? "Sélectionnez tout ce qui s’applique."
                : "Select all that apply."}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {EXPERTISE.map(([en, fr]) => (
                <label
                  key={en}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E8D4DB] bg-[#FAF6F7] p-3.5 text-sm font-semibold"
                >
                  <input
                    type="checkbox"
                    name="expertise"
                    value={en}
                    className="mt-0.5"
                  />
                  <span>{isFr ? fr : en}</span>
                </label>
              ))}
            </div>
            <label className="mt-4 block font-semibold">
              {isFr ? "Autre expertise" : "Other expertise"}
              <input
                name="otherExpertise"
                maxLength={240}
                className={fieldClass}
              />
            </label>
          </fieldset>



          <fieldset className="space-y-5">
            <legend className="font-heading text-xl font-black text-[#5D1831] sm:text-2xl">
              {isFr
                ? "Perspectives et possibilités"
                : "Insights & opportunities"}
            </legend>
            <label className="block font-semibold">
              {isFr
                ? "Quelles priorités, lacunes ou connaissances devraient guider la suite?"
                : "What priorities, gaps or knowledge should guide the work ahead?"}
              <textarea
                name="insights"
                required
                minLength={20}
                maxLength={5000}
                rows={6}
                className={fieldClass}
              />
            </label>
            <label className="block font-semibold">
              {isFr
                ? "Quels projets, réseaux ou ressources pourriez-vous mettre en lien avec ce travail?"
                : "What projects, networks or resources could you connect to this work?"}
              <textarea
                name="projects"
                maxLength={4000}
                rows={5}
                className={fieldClass}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend className="font-heading text-xl font-black text-[#5D1831] sm:text-2xl">
              {isFr
                ? "Comment aimeriez-vous vous impliquer davantage?"
                : "How would you like to get more involved?"}
            </legend>
            <p className="mt-2 text-sm text-[#1E1E1E]/65">
              {isFr
                ? "Sélectionnez tout ce qui s’applique."
                : "Select all that apply."}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {CONTRIBUTIONS.map(([en, fr]) => (
                <label
                  key={en}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E8D4DB] bg-[#FAF6F7] p-3.5 text-sm font-semibold"
                >
                  <input
                    type="checkbox"
                    name="contributions"
                    value={en}
                    className="mt-0.5"
                  />
                  <span>{isFr ? fr : en}</span>
                </label>
              ))}
            </div>
            <label className="mt-5 block font-semibold">
              {isFr ? "Autre — précisez" : "Other — please specify"}
              <input name="otherContribution" type="text" maxLength={240} className={fieldClass} />
            </label>
          </fieldset>

          <div className="space-y-3 rounded-2xl bg-[#FAF6F7] p-5 text-sm leading-relaxed">
            <label className="flex items-start gap-3 font-semibold">
              <input
                type="checkbox"
                name="contactConsent"
                value="yes"
                className="mt-1"
              />
              <span>
                {isFr
                  ? "Vous pouvez communiquer avec moi au sujet de collaborations liées à ce travail."
                  : "You may contact me about collaboration related to this work."}
              </span>
            </label>
            <label className="flex items-start gap-3 font-semibold">
              <input
                type="checkbox"
                name="anonymizedConsent"
                value="yes"
                required
                className="mt-1"
              />
              <span>
                {isFr
                  ? "J’accepte que mes réponses soient regroupées et utilisées sous forme anonymisée pour l’évaluation, la recherche, la validation communautaire et la planification future."
                  : "I agree that my responses may be aggregated and used anonymously for evaluation, research, community validation and future planning."}
                <span className="ml-1">{isFr ? "(obligatoire)" : "(required)"}</span>
              </span>
            </label>
            <p className="text-[#1E1E1E]/65">
              {isFr
                ? "Vos coordonnées ne seront pas publiées et ne seront utilisées pour un suivi que si vous y consentez."
                : "Your contact details will not be published and will only be used for follow-up if you consent."}
            </p>
          </div>

          {status.type && (
            <output
              role={status.type === "error" ? "alert" : "status"}
              className={`block rounded-xl border px-4 py-3 text-sm font-semibold ${
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
                ? "Envoyer le sondage"
                : "Submit survey"}
          </button>
        </fieldset>
        </form>
      </div>
    </section>
  );
}
