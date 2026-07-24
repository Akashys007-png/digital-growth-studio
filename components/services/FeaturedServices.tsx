"use client";


import { motion } from "motion/react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/site";

export default function FeaturedServices() {
  return (
    <Section className="featured-services">
      <div className="section-eyebrow">Featured Services</div>
      <SectionHeading
        title="Solutions Designed Around Your Business"
        description="Every business is different. We offer flexible digital services that solve real problems and support long-term growth." badge={""}      />

      <div className="featured-services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >
            <Card className="featured-service-card">
              <span className="section-badge">
                Service
              </span>

              <h3>{service.title}</h3>

              <p>{service.short}</p>

              <strong className="service-benefit">
                {service.benefit}
              </strong>

              <Button
                href={`/services/${service.slug}`}
                variant="outline"
              >
                Learn More
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}