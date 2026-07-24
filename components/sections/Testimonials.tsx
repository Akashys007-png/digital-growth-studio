"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">

        <SectionHeading
  badge="Testimonials"
  title="What Businesses"
  highlight="Love About Working With Us"
  description="Our portfolio concepts reflect the type of results and experiences we aim to deliver for every client."
/>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const initials = testimonial.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2);

            return (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
              >
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
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

                    <span>
                      {testimonial.role}
                    </span>

                    <small>
                      {testimonial.company}
                    </small>
                  </div>

                </div>

                <div className="testimonial-tag">
                  {testimonial.projectType}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}