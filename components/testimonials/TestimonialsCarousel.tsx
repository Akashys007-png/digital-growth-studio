"use client";

import { motion } from "motion/react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel() {
  return (
    <div className="testimonials-grid">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
        >
          <TestimonialCard testimonial={testimonial} />
        </motion.div>
      ))}
    </div>
  );
}