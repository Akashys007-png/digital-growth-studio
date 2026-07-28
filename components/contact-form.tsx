"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TurnstileWidget from "@/components/TurnstileWidget";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  business: z.string().min(2, "Please enter your business name."),
  email: z.email("Enter a valid email."),
  phone: z.string().optional(),
  industry: z.string().min(1, "Select an industry."),
  website: z.string().optional(),
  services: z.string().min(1, "Select a service."),
  budget: z.string().min(1, "Select a budget."),
  timeline: z.string().min(1, "Select a timeline."),
  details: z.string().min(20, "Please provide at least 20 characters."),
  consent: z.literal(true, "Consent is required."),
  // Honeypot — left blank by real visitors, filled in by most spam bots.
  companyWebsite: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submit = async (data: FormData) => {
    setStatus("loading");

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      if (!r.ok) throw new Error();

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="card" noValidate>
      <div className="grid2">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} />
        </Field>

        <Field label="Business name" error={errors.business?.message}>
          <input {...register("business")} />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </Field>

        <Field label="Phone">
          <input {...register("phone")} />
        </Field>

        <Field label="Industry" error={errors.industry?.message}>
          <select {...register("industry")}>
            <option value="">Select</option>
            <option>Restaurant</option>
            <option>Retail</option>
            <option>Healthcare</option>
            <option>Salon or Spa</option>
            <option>Fitness</option>
            <option>Real Estate</option>
            <option>Professional Services</option>
            <option>Home Services</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Current website URL">
          <input placeholder="https://" {...register("website")} />
        </Field>

        <Field label="Primary service" error={errors.services?.message}>
          <select {...register("services")}>
            <option value="">Select</option>
            <option>New Website</option>
            <option>Website Redesign</option>
            <option>E-commerce</option>
            <option>SEO</option>
            <option>Maintenance</option>
            <option>AI or Automation</option>
          </select>
        </Field>

        <Field label="Estimated budget" error={errors.budget?.message}>
          <select {...register("budget")}>
            <option value="">Select</option>
            <option>Under $1,000</option>
            <option>$1,000–$2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000+</option>
          </select>
        </Field>

        <Field label="Preferred timeline" error={errors.timeline?.message}>
          <select {...register("timeline")}>
            <option value="">Select</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Exploring options</option>
          </select>
        </Field>
      </div>

      <Field label="Project details" error={errors.details?.message}>
        <textarea rows={6} {...register("details")} />
      </Field>

      {/* Honeypot field — hidden from real visitors via off-screen positioning,
          not display:none, since some bots skip fields hidden that way. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Company Website
          <input
            {...register("companyWebsite")}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label style={{ display: "flex", gap: 10, margin: "1rem 0" }}>
        <input type="checkbox" {...register("consent")} />
        I agree that Digital Growth Studio may contact me about this inquiry.
      </label>

      {errors.consent && <p className="error">{errors.consent.message}</p>}

      <TurnstileWidget onVerify={setTurnstileToken} />

      <div aria-live="polite">
        {status === "success" && (
          <p style={{ color: "#15803d" }}>
            Thank you. Your inquiry was received.
          </p>
        )}
        {status === "error" && (
          <p className="error">
            The form could not be submitted. Please try again.
          </p>
        )}
      </div>

      <button className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Project Inquiry"}
      </button>

      <p className="muted" style={{ fontSize: 13 }}>
        This form is protected against automated spam submissions.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span style={{ fontWeight: 800 }}>{label}</span>
      {children}
      {error && <span className="error">{error}</span>}
    </label>
  );
}
