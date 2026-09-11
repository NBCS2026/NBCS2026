"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { useFormSubmission } from "@/lib/use-form-submission";
import { FormHoneypot } from "./form-honeypot";

export function MediaContributionForm({ locale }: { locale: string }) {
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

    try {
      const { response, result } = await submission.send("/api/feedback", {
          submissionKind: "media",
          website: String(formData.get("website") || ""),
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          mediaUrl: String(formData.get("mediaUrl") || ""),
          caption: String(formData.get("caption") || ""),
          credit: String(formData.get("credit") || ""),
          permission: formData.get("permission") === "yes",
          locale,
      });
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit media.");
      }
      form.reset();
      setStatus({
        type: "success",
        message: isFr
          ? "Merci. Votre lien média a été transmis pour examen."
          : "Thank you. Your media link has been submitted for review.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : isFr
              ? "Impossible de transmettre le média."
              : "Unable to submit media.",
      });
    } finally {
      submission.end();
      setIsSubmitting(false);
    }
  }

  return (
    <section id="media-contribute" className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1060px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Contribuez à la galerie" : "Contribute to the gallery"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,48px)] font-black leading-tight text-[#5D1831]">
            {isFr
              ? "Partagez vos photos et vidéos"
              : "Share your photos & videos"}
          </h2>
          <p className="mt-4 leading-relaxed text-[#1E1E1E]/75">
            {isFr
              ? "Ajoutez vos fichiers dans votre espace infonuagique préféré, puis transmettez-nous un lien accessible. L’équipe du Sommet examinera chaque envoi avant publication."
              : "Upload files to your preferred cloud service, then send us an accessible link. The Summit team will review every submission before anything is published."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-sm sm:p-8"
        >
          <fieldset disabled={isSubmitting} className="contents">
          <FormHoneypot />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-semibold">
              {isFr ? "Nom" : "Name"}
              <input
                name="name"
                required
                maxLength={120}
                className={fieldClass}
              />
            </label>
            <label className="block font-semibold">
              {isFr ? "Courriel" : "Email"}
              <input
                name="email"
                type="email"
                required
                maxLength={200}
                className={fieldClass}
              />
            </label>
          </div>
          <label className="block font-semibold">
            {isFr ? "Lien vers les fichiers" : "Link to your files"}
            <input
              name="mediaUrl"
              type="url"
              required
              maxLength={1000}
              className={fieldClass}
              placeholder="https://"
            />
          </label>
          <label className="block font-semibold">
            {isFr ? "Légende ou contexte" : "Caption or context"}
            <textarea
              name="caption"
              required
              maxLength={1500}
              rows={4}
              className={fieldClass}
            />
          </label>
          <label className="block font-semibold">
            {isFr ? "Crédit photo ou vidéo" : "Photo or video credit"}
            <input
              name="credit"
              required
              maxLength={180}
              className={fieldClass}
            />
          </label>
          <label className="flex items-start gap-3 rounded-xl bg-[#FAF6F7] p-4 text-sm font-semibold leading-relaxed">
            <input
              type="checkbox"
              name="permission"
              value="yes"
              required
              className="mt-1"
            />
            <span>
              {isFr
                ? "Je confirme avoir le droit de partager ce contenu et j’autorise la Fondation Michaëlle Jean et le SPCN à l’examiner et, s’il est retenu, à le publier avec le crédit indiqué."
                : "I confirm that I have the right to share this content and authorize the Michaëlle Jean Foundation and NBCS to review it and, if selected, publish it with the credit provided."}
            </span>
          </label>

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
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8C0C3A] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#5D1831] disabled:opacity-60"
          >
            <Upload className="size-5" aria-hidden />
            {isSubmitting
              ? isFr
                ? "Envoi…"
                : "Submitting…"
              : isFr
                ? "Transmettre le lien"
                : "Submit media link"}
          </button>
        </fieldset>
        </form>
      </div>
    </section>
  );
}
