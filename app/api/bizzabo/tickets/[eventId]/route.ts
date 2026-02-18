import { NextRequest, NextResponse } from "next/server";
import { getBizzaboTickets } from "@/lib/bizzabo";

/**
 * API route to get ticket types for an event
 * Supports locale parameter via query string or Accept-Language header
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ eventId: string }> }
) {
  try {
    const { eventId } = await params;
    
    // Get locale from query string or Accept-Language header
    const searchParams = request.nextUrl.searchParams;
    const localeFromQuery = searchParams.get("locale");
    const acceptLanguage = request.headers.get("accept-language");
    
    // Determine locale: query param > Accept-Language header > default
    let locale: string | undefined;
    if (localeFromQuery) {
      locale = localeFromQuery;
    } else if (acceptLanguage) {
      // Extract primary language from Accept-Language header (e.g., "fr-CA,fr;q=0.9" -> "fr-CA")
      locale = acceptLanguage.split(",")[0].trim();
    }
    
    // Map common locale codes
    if (locale === "fr" || locale?.startsWith("fr-")) {
      locale = "fr-CA"; // Use Canadian French
    } else if (locale === "en" || locale?.startsWith("en-")) {
      locale = "en-US"; // Use US English
    }
    
    console.log(`[Tickets API] Fetching tickets for event ${eventId} with locale: ${locale || "default"}`);
    
    const tickets = await getBizzaboTickets(eventId, false, locale);
    
    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Bizzabo tickets API error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch ticket information",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
