"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServicesFAQProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope and complexity. Most business websites are completed within 3–6 weeks, while larger projects may take longer.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can refresh outdated websites, improve performance, modernize the design, and optimize the user experience while preserving your brand identity.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, updates, performance improvements, SEO enhancements, and technical support after your website goes live.",
  },
  {
    question: "Can you help improve my Google rankings?",
    answer:
      "Yes. We follow SEO best practices during development and can also provide ongoing SEO services to improve your online visibility.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply schedule a consultation or contact us. We'll discuss your goals, recommend the right solution, and provide a clear roadmap for your project.",
  },
];

export default function ServicesFAQ({
  badge = "Frequently Asked Questions",
  title = "Questions?",
  highlight = "We've Got Answers",
  description = "Here are some of the most common questions businesses ask before starting a project with us.",
  faqs = defaultFaqs,
}: ServicesFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="services-faq section">
      <SectionHeading
        badge={badge}
        title={title}
        highlight={highlight}
        description={description}
      />

      <div className="services-faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            className="services-faq-item"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            <button
              className="services-faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              aria-expanded={open === index}
            >
              <span>{faq.question}</span>

              <ChevronDown
                className={open === index ? "rotate" : ""}
                size={20}
              />
            </button>

            <AnimatePresence>
              {open === index && (
                <motion.div
                  className="services-faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}