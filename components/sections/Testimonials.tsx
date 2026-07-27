"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";

import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal>
          <SectionHeading
            badge="Testimonials"
            title="What Businesses"
            highlight="Love About Working With Us"
            description="Our portfolio concepts reflect the type of results and experiences we aim to deliver for every client."
          />
        </Reveal>

        <StaggerContainer className="testimonials-grid">
          {testimonials.map((testimonial) => {
            const initials = testimonial.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2);

            return (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: {
                      duration: 0.22,
                    },
                  }}
                >
                  <div className="testimonial-stars">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="testimonial-quote">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="testimonial-result">
                    {testimonial.result}
                  </div>

                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      {initials}
                    </div>

                    <div>
                      <h4>{testimonial.name}</h4>

                      <span>{testimonial.role}</span>

                      <small>{testimonial.company}</small>
                    </div>
                  </div>

                  <div className="testimonial-tag">
                    {testimonial.projectType}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}