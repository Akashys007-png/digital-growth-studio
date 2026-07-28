"use client";

import { useEffect, useId } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => string;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

export default function TurnstileWidget({ onVerify }: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const containerId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!siteKey) return;

    const renderWidget = () => {
      if (window.turnstile) {
        window.turnstile.render(`#${containerId}`, {
          sitekey: siteKey,
          callback: onVerify,
          "expired-callback": () => onVerify(""),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [siteKey, containerId, onVerify]);

  // Turnstile isn't configured yet — the honeypot field still protects the form.
  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div id={containerId} />
    </>
  );
}
