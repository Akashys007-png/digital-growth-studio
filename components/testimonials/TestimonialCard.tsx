import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="testimonial-card">
      <div className="testimonial-card-top">
        <div
          className="testimonial-stars"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={17} fill="currentColor" />
          ))}
        </div>

        <Quote className="testimonial-quote-icon" size={34} />
      </div>

      <blockquote>{testimonial.quote}</blockquote>

      <div className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {initials}
        </div>

        <div>
          <h3>{testimonial.name}</h3>

          <p>
            {testimonial.role}, {testimonial.company}
          </p>

          <span>{testimonial.industry}</span>
        </div>
      </div>
    </article>
  );
}