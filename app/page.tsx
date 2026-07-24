"use client";

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

import { faqs } from "@/data/faqs";

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