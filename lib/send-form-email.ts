import { providerSubmissionHeaders } from "./form-security";

type FormEmail = { from: string; to: string; reply_to?: string; subject: string; text: string; html: string };

/** The same Resend email API, with durable retry protection and a bounded timeout. */
export async function sendFormEmail(request: Request, body: unknown, email: FormEmail) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        ...providerSubmissionHeaders(request, body)?.headers,
      },
      body: JSON.stringify(email),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });
    const result = await response.json();
    return response.ok && typeof result.id === "string"
      ? { data: { id: result.id }, error: null }
      : { data: null, error: true };
  } catch { return { data: null, error: true }; }
}
