"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryPageFAQProps {
  faqs: FAQ[];
}

export default function IndustryPageFAQ({
  faqs,
}: IndustryPageFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="industry-page-faq section">
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Answers to Common"
        highlight="Questions"
        description="Everything you need to know before starting your project."
      />

      <div className="industry-page-faq-list">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="industry-page-faq-item"
          >
            <button
              className="industry-page-faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              <ChevronDown
                className={open === index ? "rotate" : ""}
              />
            </button>

            <AnimatePresence>
              {open === index && (
                <motion.div
                  className="industry-page-faq-answer"
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}