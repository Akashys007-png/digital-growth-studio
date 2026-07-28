import type { Metadata } from "next";
import { Check, Tag } from "lucide-react";

import PageHero from "@/components/page-hero";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",

  description:
    "Choose a practical foundation and expand only when additional functionality supports a real goal.",

  openGraph: {
    title: "Pricing | Digital Growth Studio",
    description:
      "Flexible starting points with clear scope and expectations for small business websites.",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Pricing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing | Digital Growth Studio",
    description:
      "Flexible starting points with clear scope and expectations for small business websites.",
    images: ["/images/og/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible starting points with clear scope and expectations."
        copy="Choose a practical foundation and expand only when additional functionality supports a real goal."
        icon={Tag}
      />

      <section className="section pricing">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${
                  plan.popular ? "pricing-popular" : ""
                }`}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}

                <h3>{plan.name}</h3>

                <div className="price">{plan.price}</div>

                <p>{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a className="pricing-btn" href="/consultation">
                  {plan.button}
                </a>
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: "2.5rem", textAlign: "center" }}>
            Pricing varies by content, complexity, integrations, and support
            requirements.
          </p>
        </div>
      </section>
    </>
  );
}
