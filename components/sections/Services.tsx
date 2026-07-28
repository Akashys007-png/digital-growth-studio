"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "@/components/ui/SectionHeading";

import { fadeUp } from "@/constants/animations";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { serviceIcons } from "@/data/serviceIcons";

export default function Services() {
  return (
    <section className="services-section">

      <Reveal>
        <SectionHeading
          badge="Services"
          title="Everything Your Business Needs"
          highlight="To Grow Online"
          description="From high-converting websites to automation and SEO, we build digital solutions that help small businesses attract customers and grow."
        />
      </Reveal>

      <StaggerContainer className="services-grid">
        {services.map((service) => {
          const Icon = serviceIcons[service.slug];

          return (
            <StaggerItem key={service.slug}>
              <motion.article
                className="service-card"
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: {
                    duration: 0.22,
                  },
                }}
              >
                <div className="service-icon">
                  <Icon size={26} strokeWidth={2} />
                </div>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <Link href={`/services/${service.slug}`} className="service-link">
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <Reveal delay={0.25}>
        <div className="services-footer">
          <Link href="/services" className="btn btn-outline">
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>

    </section>
  );
}
