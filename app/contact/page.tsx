import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "A structured inquiry helps us prepare a useful first conversation.",

  openGraph: {
    title: "Contact Digital Growth Studio",
    description:
      "Tell us what your business needs and where your current digital experience is falling short.",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Contact Digital Growth Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Digital Growth Studio",
    description:
      "Tell us what your business needs and where your current digital experience is falling short.",
    images: ["/images/og/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your business needs and where the current digital experience is falling short."
        copy="A structured inquiry helps us prepare a useful first conversation."
        icon={MessageCircle}
      />
      <section className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}