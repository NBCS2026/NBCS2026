import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const FORM_LIMITS = {
  name: 120, email: 200, message: 4000, comments: 4000, topic: 180,
  location: 160, organization: 180, role: 180, otherExpertise: 240,
  otherContribution: 240, insights: 5000, projects: 4000, mediaUrl: 1000,
  caption: 1500, credit: 180, session: 160, locale: 5, website: 200,
  submissionKind: 20, feedbackType: 20, rating: 1,
} as const;
const booleanFields = ["permission", "contactConsent", "anonymizedConsent", "anonymous"];
const arrayFields = ["expertise", "contributions"];
export class FormError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
export function formError(locale: string, status = 400) {
  const message = status === 429
    ? locale === "fr" ? "Veuillez patienter avant de réessayer." : "Please wait before trying again."
    : status >= 500
      ? locale === "fr" ? "Impossible d’envoyer le formulaire. Veuillez réessayer plus tard." : "Unable to send the form. Please try again later."
      : locale === "fr" ? "Veuillez vérifier les champs du formulaire." : "Please check the form fields.";
  return NextResponse.json({ error: message }, { status, headers: { "Cache-Control": "no-store", ...(status === 429 ? { "Retry-After": "600" } : {}) } });
}
export function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
/** Reject malformed/oversized input before any provider call; never silently truncate. */
export function validateFormShape(value: unknown): asserts value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new FormError(400, "Invalid object");
  for (const [key, field] of Object.entries(value)) {
    const limit = Object.hasOwn(FORM_LIMITS, key) ? FORM_LIMITS[key as keyof typeof FORM_LIMITS] : undefined;
    if (limit !== undefined) {
      if (typeof field !== "string" || field.length > limit) throw new FormError(400, "Invalid field");
    } else if (booleanFields.includes(key)) {
      if (typeof field !== "boolean") throw new FormError(400, "Invalid boolean");
    } else if (arrayFields.includes(key)) {
      if (!Array.isArray(field) || field.length > 20 || field.some(item => typeof item !== "string" || item.length > 240)) throw new FormError(400, "Invalid list");
    } else throw new FormError(400, "Unknown field");
  }
  const fields = value as Record<string, unknown>;
  if (fields.locale !== undefined && !["en", "fr"].includes(fields.locale as string)) throw new FormError(400, "Invalid locale");
  if (fields.submissionKind !== undefined && !["media", "survey"].includes(fields.submissionKind as string)) throw new FormError(400, "Invalid submission");
  if (fields.feedbackType !== undefined && !["session", "general"].includes(fields.feedbackType as string)) throw new FormError(400, "Invalid feedback type");
}
export async function readFormJson(request: Request): Promise<Record<string, unknown>> {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) throw new FormError(415, "JSON required");
  const origin = request.headers.get("origin");
  if (origin) {
    let originHost: string;
    try { originHost = new URL(origin).host; } catch { throw new FormError(403, "Origin rejected"); }
    if (originHost !== new URL(request.url).host && originHost !== request.headers.get("host")) throw new FormError(403, "Origin rejected");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new FormError(400, "Body required");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 32768) { await reader.cancel(); throw new FormError(413, "Body too large"); }
    chunks.push(value);
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new FormError(400, "Invalid JSON"); }
  validateFormShape(body);
  if (body.website) throw new FormError(400, "Form rejected");
  return body;
}

// Best-effort, bounded, per-instance throttling; not a distributed quota.
const rateWindows = new Map<string, { count: number; expires: number }>();
export function checkFormRate(request: Request) {
  const now = Date.now();
  for (const [key, value] of rateWindows) if (value.expires <= now) rateWindows.delete(key);
  const address = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") || "unknown" : "local";
  const key = createHash("sha256").update(address).digest("hex");
  const current = rateWindows.get(key);
  if (current && current.count >= 20) throw new FormError(429, "Rate limited");
  if (!current && rateWindows.size >= 10000) throw new FormError(429, "Rate capacity");
  rateWindows.set(key, { count: (current?.count || 0) + 1, expires: current?.expires || now + 600000 });
}

// Shared by both routes. Coalesce simultaneous identical requests, including retries.
// Provider-independent and best-effort: a durable provider idempotency key is also used.
const submissions = new Map<string, { expires: number; promise: Promise<NextResponse> }>();
export async function oncePerSubmission(request: Request, body: unknown, send: () => Promise<NextResponse>) {
  const token = request.headers.get("idempotency-key");
  if (token && !/^[a-zA-Z0-9-]{16,80}$/.test(token)) throw new FormError(400, "Invalid submission key");
  if (!token) { checkFormRate(request); return send(); }
  const now = Date.now();
  for (const [key, value] of submissions) if (value.expires <= now) submissions.delete(key);
  const key = createHash("sha256").update(request.url + token + JSON.stringify(body)).digest("hex");
  const existing = submissions.get(key);
  if (existing) return (await existing.promise).clone();
  checkFormRate(request);
  if (submissions.size >= 1000) throw new FormError(429, "Submission capacity");
  const promise = send();
  submissions.set(key, { expires: now + 600000, promise });
  try {
    const response = await promise;
    if (!response.ok) submissions.delete(key);
    return response.clone();
  } catch (error) { submissions.delete(key); throw error; }
}

export function providerSubmissionHeaders(request: Request, body: unknown) {
  const token = request.headers.get("idempotency-key");
  return token ? { headers: { "Idempotency-Key": createHash("sha256").update(request.url + token + JSON.stringify(body)).digest("hex") } } : undefined;
}
