"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We typically respond within one business day. For urgent requests, we'll do our best to reply as quickly as possible.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We specialize in helping small and growing businesses build a strong digital presence with practical, scalable solutions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. Whether your website needs a visual refresh, better performance, or a complete rebuild, we can help.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, updates, performance improvements, and technical support to keep your website performing at its best.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Every project begins with a consultation to understand your goals. From there, we move through planning, design, development, testing, launch, and continued support.",
  },
  {
    question: "Do you work with businesses outside California?",
    answer:
      "Yes. We work remotely with businesses throughout the United States and can collaborate virtually throughout every stage of the project.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="contact-faq section">
      <SectionHeading
        badge="FAQs"
        title="Questions Before"
        highlight="Getting Started?"
        description="Here are answers to some of the most common questions we receive before beginning a new project."
      />

      <div className="contact-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.question}
              className="contact-faq-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <button
                className="contact-faq-question"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={isOpen ? "rotate" : ""}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="contact-faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}