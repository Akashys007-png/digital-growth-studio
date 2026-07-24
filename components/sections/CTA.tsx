"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <SectionHeading
          badge="Let's Talk"
          title="Ready to Grow"
          highlight="Your Business?"
          description="Schedule a free consultation and discover how we can help you attract more customers with a professional digital presence."
        />

        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-content">
            <div className="cta-buttons">
              <Link href="/consultation" className="cta-primary">
                Book a Free Consultation
                <ArrowRight size={18} />
              </Link>

              <Link href="/portfolio" className="cta-secondary">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="cta-card">
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <span>akash.yerehalli.satish@gmail.com</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={20} />
              <div>
                <strong>Phone</strong>
                <span>(657) 525-8336</span>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={20} />
              <div>
                <strong>Response Time</strong>
                <span>Within 24 Hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}