"use client";

import Script from "next/script";

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const isConfigured = calendlyUrl && !calendlyUrl.includes("your-link");

  if (!isConfigured) {
    return (
      <div className="card">
        <h3>Booking calendar not connected yet</h3>
        <p className="muted">
          Set NEXT_PUBLIC_CALENDLY_URL in .env.local (and in your hosting
          provider&apos;s environment variables) to show the live booking
          calendar here.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
