import type { Metadata } from "next";
import { CheckCircle2, ClipboardList, CalendarCheck } from "lucide-react";
import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Consultation",

  description:
    "The consultation is designed to clarify the opportunity, not pressure you into a purchase.",

  openGraph: {
    title: "Book a Free Consultation | Digital Growth Studio",
    description:
      "A focused conversation about your customers, goals, current website, and next practical step.",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Book a Consultation with Digital Growth Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation | Digital Growth Studio",
    description:
      "A focused conversation about your customers, goals, current website, and next practical step.",
    images: ["/images/og/home.png"],
  },
};

const expectations = [
  "Business and customer overview",
  "Current website or digital challenges",
  "Priority features and timeline",
  "Recommended next step",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="A focused conversation about your customers, goals, current website, and next practical step."
        copy="The consultation is designed to clarify the opportunity, not pressure you into a purchase."
        icon={CalendarCheck}
      />

      <section className="section">
        <div className="container">
          <div className="grid2">
            <div>
              <h2 className="consultation-heading">What to expect</h2>

              <ul className="consultation-list">
                {expectations.map((item) => (
                  <li key={item} className="consultation-list-item">
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="consultation-prepare">
                <div className="consultation-prepare-icon">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h3>Prepare</h3>
                  <p>
                    Bring your existing website, examples you like, key
                    services, target customers, and any known deadlines.
                  </p>
                </div>
              </div>

              <CalendlyEmbed />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
