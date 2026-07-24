"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Do you work with businesses outside these industries?",
    answer:
      "Yes. While we highlight industries where we have strong experience and tailored solutions, we work with businesses across many sectors and adapt our approach to your specific goals.",
  },
  {
    question: "Will my website be customized for my business?",
    answer:
      "Absolutely. Every project is designed around your business, customers, and objectives. We never rely on generic one-size-fits-all solutions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your current website, improve performance, enhance user experience, and optimize it for search engines while maintaining your brand identity.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer maintenance, performance monitoring, SEO improvements, feature updates, and technical support to help your website continue growing with your business.",
  },
  {
    question: "Can you help improve my online visibility?",
    answer:
      "Yes. We build websites using SEO best practices and can also help with local SEO, content strategy, analytics, and ongoing optimization.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a free consultation or contact us. We'll learn about your business, discuss your goals, and recommend the best solution for your needs.",
  },
];

export default function IndustriesFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="industries-faq section">
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Have Questions?"
        highlight="We're Here to Help"
        description="Here are answers to some of the most common questions businesses ask before starting a project with us."
      />

      <div className="industries-faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            className="industries-faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            <button
              className="industries-faq-question"
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
                  className="industries-faq-answer"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
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