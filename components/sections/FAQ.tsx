"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
}

export default function FAQ({
  items,
  badge = "FAQ",
  title = "Frequently Asked",
  highlight = "Questions",
  description = "Answers to the questions we hear most often before starting a new project.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <Section className="faq section">
      <SectionHeading
        badge={badge}
        title={title}
        highlight={highlight}
        description={description}
      />

      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <motion.div
              key={item.question}
              className="faq-item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => handleToggle(index)}
              >
                <span>{item.question}</span>

                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={isOpen ? "rotate" : ""}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={answerId}
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{item.answer}</p>
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