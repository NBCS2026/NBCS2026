import { NextRequest, NextResponse } from "next/server";
import { createBizzaboOrder } from "@/lib/bizzabo";

/**
 * API route to create an order for an event (v2 API)
 * Supports multiple registrations, promo codes, and payment processing
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ eventId: string }> }
) {
  try {
    const { eventId } = await params;
    const body = await request.json();
    
    const { registrations, promoCode, payment, locale } = body;

    // Validate required fields
    if (!registrations || !Array.isArray(registrations) || registrations.length === 0) {
      return NextResponse.json(
        { error: "At least one registration is required" },
        { status: 400 }
      );
    }

    // Validate each registration
    for (const reg of registrations) {
      if (!reg.registrationTypeId || !reg.quantity || !reg.attendee) {
        return NextResponse.json(
          { error: "Each registration must have registrationTypeId, quantity, and attendee" },
          { status: 400 }
        );
      }

      const { firstName, lastName, email } = reg.attendee;
      if (!firstName || !lastName || !email) {
        return NextResponse.json(
          { error: "Each attendee must have firstName, lastName, and email" },
          { status: 400 }
        );
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: `Invalid email address: ${email}` },
          { status: 400 }
        );
      }
    }

    // Create order
    const order = await createBizzaboOrder(eventId, {
      registrations,
      promoCode: promoCode || undefined,
      payment: payment || undefined,
      locale: locale || "en-US",
    });
    
    return NextResponse.json(order);
  } catch (error) {
    console.error("Bizzabo order API error:", error);
    return NextResponse.json(
      {
        error: "Failed to create order",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
