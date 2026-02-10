import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check for API key - try both possible names
    const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
    
    if (!apiKey) {
      const envKeys = Object.keys(process.env).filter(key => 
        key.includes('RESEND') || key.includes('resend')
      );
      console.error("RESEND_API_KEY is not set.");
      console.error("Environment check - RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
      console.error("Environment check - NEXT_PUBLIC_RESEND_API_KEY exists:", !!process.env.NEXT_PUBLIC_RESEND_API_KEY);
      console.error("All RESEND-related env vars:", envKeys);
      
      return NextResponse.json(
        { 
          error: "Email service is not configured. Please check Vercel environment variables.",
          debug: process.env.NODE_ENV === 'development' ? { envKeys } : undefined
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "NBCS 2026 Contact <onboarding@resend.dev>",
      to: "nbcs-spcn@fmjf.ca",
      reply_to: email,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Resend returns { data: { id: '...' } } on success, or { error: {...} } on failure
    if ('error' in result && result.error) {
      console.error("Error sending contact email via Resend:", result.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    // Success - check if we have data.id (successful send)
    if ('data' in result && result.data) {
      console.log("Email sent successfully:", result.data);
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Fallback - if we get here, something unexpected happened
    console.warn("Unexpected Resend response format:", result);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

