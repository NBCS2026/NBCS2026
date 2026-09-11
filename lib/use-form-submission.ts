"use client";
import { useRef } from "react";

/** A synchronous lock prevents double clicks before React has updated button state. */
export function useFormSubmission() {
  const busy = useRef(false);
  const previous = useRef({ body: "", key: "" });
  return {
    begin() { if (busy.current) return false; busy.current = true; return true; },
    end() { busy.current = false; },
    async send(url: string, payload: unknown) {
      const body = JSON.stringify(payload);
      if (previous.current.body !== body) previous.current = { body, key: crypto.randomUUID() };
      const isFr = (payload as { locale?: string }).locale === "fr";
      const fallback = isFr ? "Impossible d’envoyer le formulaire. Veuillez réessayer plus tard." : "Unable to send the form. Please try again later.";
      const response = await fetch(url, {
        method: "POST",
        signal: AbortSignal.timeout(20000),
        headers: { "Content-Type": "application/json", "Idempotency-Key": previous.current.key },
        body,
      }).catch(() => { throw new Error(fallback); });
      const result = await response.json().catch(() => ({}));
      if (!response.ok && typeof result.error !== "string") result.error = fallback;
      return { response, result };
    },
  };
}
