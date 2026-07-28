
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Digital Growth Studio | Modern Websites & Digital Solutions",
  description:
    "Helping small businesses grow through modern websites, branding, SEO, automation, and digital solutions.",

  openGraph: {
    title: "Digital Growth Studio",
    description:
      "Helping small businesses grow through modern websites, branding, SEO, and automation.",
    url: "/",
    siteName: "Digital Growth Studio",

    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Homepage",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Growth Studio",
    description:
      "Helping small businesses grow through modern websites and digital solutions.",
    images: ["/images/og/home.png"],
  },
};
export default function HomePage() {
  return (
    <main>
      <Hero />

      <Services />

      <Industries />

      <WhyChooseUs />

      <Process />

      <Portfolio />

      <Testimonials />

      <Pricing />

      <FAQ items={faqs} />

      <CTA />
    </main>
  );
}