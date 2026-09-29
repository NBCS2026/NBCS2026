import { createHash, createHmac, randomUUID } from "node:crypto";

type Cell = string | number | boolean;
type Destination = "Feedback" | "Survey responses" | "Media submissions";

/** Save only validated, deliberately selected fields; never send raw request bodies. */
export async function saveFormSubmission(request: Request, body: unknown, sheet: Destination, values: Cell[]) {
  const endpoint = process.env.FORMS_SHEETS_URL;
  const secret = process.env.FORMS_SHEETS_SECRET;
  if (!endpoint || !secret || secret.length < 32) {
    console.error("Form storage unavailable: missing spreadsheet configuration", { sheet });
    throw new Error("Form storage unavailable");
  }
  const url = new URL(endpoint);
  if (url.origin !== "https://script.google.com" || !/^\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/.test(url.pathname) || url.search || url.hash) {
    throw new Error("Invalid spreadsheet endpoint");
  }
  const token = request.headers.get("idempotency-key") || randomUUID();
  const id = createHash("sha256").update(new URL(request.url).pathname + token + JSON.stringify(body)).digest("hex");
  const payload = JSON.stringify({ id, sheet, values, timestamp: Date.now() });
  const signature = createHmac("sha256", secret).update(payload).digest("hex");
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload, signature }),
      signal: AbortSignal.timeout(25000),
      redirect: "follow",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Spreadsheet request failed");
    const result = await response.json();
    if (result.ok !== true || result.id !== id) throw new Error("Spreadsheet did not confirm save");
  } catch {
    // No names, email addresses, answers, secrets or provider response bodies in logs.
    console.error("Form submission could not be saved", { sheet, submissionId: id });
    throw new Error("Spreadsheet save failed");
  }
}

