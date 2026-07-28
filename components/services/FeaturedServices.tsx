"use client";


import { motion } from "motion/react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";
import { serviceIcons } from "@/data/serviceIcons";

export default function FeaturedServices() {
  return (
    <Section className="featured-services">
      <div className="section-eyebrow">Featured Services</div>
      <SectionHeading
        title="Solutions Designed Around Your Business"
        description="Every business is different. We offer flexible digital services that solve real problems and support long-term growth." badge={""}      />

      <div className="featured-services-grid">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.slug];

          return (
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
                <div className="service-icon">
                  <Icon size={26} strokeWidth={2} />
                </div>

                <span className="section-badge">
                  Service
                </span>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <strong className="service-benefit">
                  {service.headline} {service.highlight}
                </strong>

                <Button
                  href={`/services/${service.slug}`}
                  variant="outline"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}