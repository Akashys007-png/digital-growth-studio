"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "Akash.yerehalli.satish@gmail.com",
    description: "We'll typically respond within one business day.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(657) 525-8336",
    description: "Available during normal business hours.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "California, USA",
    description: "Serving clients locally and remotely.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri | 9:00 AM – 6:00 PM",
    description: "Weekend appointments available by request.",
  },
];

export default function ContactInfo() {
  return (
    <Section className="contact-info section">
      <SectionHeading
        badge="Get In Touch"
        title="Multiple Ways to"
        highlight="Reach Us"
        description="Whether you have a question, need a proposal, or want to discuss your next project, we're here to help."
      />

      <div className="contact-info-grid">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="contact-info-card">
                <div className="contact-info-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <h4>{item.value}</h4>

                <p>{item.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}