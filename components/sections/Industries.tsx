"use client";

import Reveal from "@/components/motion/Reveal";


import { industries } from "@/data/site";
import IndustriesGrid from "@/components/shared/IndustriesGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            badge="Industries"
            title="Solutions Tailored"
            highlight="For Your Industry"
            description="Every business is different. We create websites and digital systems designed around the unique needs of your industry."
          />
        </Reveal>

        
          <IndustriesGrid
            items={industries}
            limit={4}
          />
        
      </div>
    </section>
  );
}