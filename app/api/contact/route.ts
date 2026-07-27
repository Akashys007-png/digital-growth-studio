import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  business: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  industry: z.string(),
  website: z.string().optional(),
  services: z.string(),
  budget: z.string(),
  timeline: z.string(),
  details: z.string().min(20),
  consent: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const data = schema.parse(await req.json());

    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "Missing CONTACT_TO_EMAIL" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Digital Growth Studio <hello@digitalgrowth.studio>",
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject: `New inquiry from ${data.business}`,
        text: `
New Project Inquiry

Full Name: ${data.name}
Business: ${data.business}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Industry: ${data.industry}
Website: ${data.website || "Not provided"}

Service: ${data.services}
Budget: ${data.budget}
Timeline: ${data.timeline}

Project Details:
${data.details}
`,
      }),
    });

    const result = await response.text();

    console.log("Resend Status:", response.status);
    console.log("Resend Response:", result);

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result,
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}