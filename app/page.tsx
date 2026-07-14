import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  LifeBuoy,
  MessageSquare,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import { caseStudies, industries, services } from "@/data/site";
import FAQ from "@/components/faq";
import { Reveal } from "@/components/motion";
import { ButtonLink, SectionHeading } from "@/components/ui";

const faqs = [
  {
    q: "How long does a website take?",
    a: "A focused small-business website often takes four to eight weeks. Complex content, integrations, or e-commerce can require more time.",
  },
  {
    q: "Do you provide hosting?",
    a: "We can help configure client-owned hosting or provide a managed hosting option with monitoring and support.",
  },
  {
    q: "Will I own my website?",
    a: "Ownership and licensing are defined clearly in the project agreement. Client content and final deliverables are handled according to that agreement.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can review your current site, preserve valuable content, and create a clearer, faster, and more modern experience.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Ongoing plans can include updates, backups, performance checks, security monitoring, and technical support.",
  },
  {
    q: "Can you write the website content?",
    a: "Content assistance is available. We can organize your information, improve clarity, and help prepare professional page copy.",
  },
  {
    q: "Will the website work on mobile devices?",
    a: "Yes. Responsive behavior is planned and tested for mobile, tablet, laptop, and large screens.",
  },
  {
    q: "How does payment work?",
    a: "Projects normally use an initial deposit followed by milestone payments defined before work begins.",
  },
  {
    q: "Do you provide SEO?",
    a: "Every website includes an SEO foundation. Ongoing local SEO and content SEO services can be added based on your goals.",
  },
  {
    q: "Can you add more features later?",
    a: "Yes. The website architecture is designed so useful features and integrations can be added as your business grows.",
  },
];

const trustItems = [
  [Globe2, "Business-focused solutions"],
  [Smartphone, "Mobile-first websites"],
  [MessageSquare, "Dedicated project communication"],
  [LifeBuoy, "Reliable long-term support"],
  [TrendingUp, "Built to grow with your business"],
];

const businessChallenges = [
  "No professional website",
  "Outdated design",
  "Weak online visibility",
  "Low customer trust",
  "Manual appointment handling",
  "Poor mobile experience",
  "No ongoing technical support",
];

const advantages = [
  "Business-first approach",
  "Customized solutions",
  "Transparent communication",
  "Modern technology",
  "Long-term support",
  "Analytics and AI readiness",
];

const processSteps = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Testing",
  "Launch",
  "Support",
];

const businessOutcomes = [
  "Stronger online credibility",
  "Easier customer communication",
  "Better mobile experience",
  "More efficient lead collection",
  "Improved digital visibility",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Starting from $999",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Google Maps",
      "Basic SEO",
      "Analytics setup",
    ],
  },
  {
    name: "Business",
    price: "Starting from $2,499",
    features: [
      "Up to 12 pages",
      "Blog or resource section",
      "Booking or advanced form",
      "Enhanced SEO",
      "Performance optimization",
      "Content assistance",
    ],
  },
  {
    name: "Premium",
    price: "Custom Quote",
    features: [
      "Custom UI/UX",
      "E-commerce or booking",
      "CRM integration",
      "AI chatbot",
      "Analytics dashboard",
      "Advanced automation",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero section">
        <div
          className="container hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <span className="badge">
              Helping Local Businesses Succeed in a Digital-First World
            </span>

            <h1 className="display" style={{ margin: "1rem 0" }}>
              Transform Your Business with Digital Solutions That Build Trust, 
              Attract Customers, and Drive Growth
            </h1>

            <p className="lead">
              Digital Growth Studio helps local businesses create a powerful
              online presence through modern websites, local SEO, business
              automation, and ongoing digital support. We build technology that
              helps you attract more customers, strengthen your brand, and grow
              with confidence.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 28,
              }}
            >
              <ButtonLink href="/consultation">
                Book a Free Strategy Session
              </ButtonLink>

              <ButtonLink href="/services" secondary>
                View Our Portfolio
              </ButtonLink>
            </div>
          </div>

          <Reveal>
            <div
              className="hero-visual"
              aria-label="Abstract website and business dashboard illustration"
            >
              <div className="browser">
                <div className="browserbar">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>

                <div className="mini-grid">
                  <div>
                    <div className="mini-panel dark" />

                    <div
                      style={{
                        height: 12,
                        background: "#cbd5e1",
                        borderRadius: 8,
                        marginTop: 12,
                        width: "75%",
                      }}
                    />

                    <div
                      style={{
                        height: 12,
                        background: "#e2e8f0",
                        borderRadius: 8,
                        marginTop: 8,
                        width: "55%",
                      }}
                    />
                  </div>

                  <div className="mini-panel" />
                </div>
              </div>

              <div className="float-card">
                <strong>Your Digital Growth Partner</strong>

                <p
                  className="muted"
                  style={{
                    fontSize: 13,
                  }}
                >
                  Professional Website • Local SEO • AI Solutions • Business
                  Growth
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Section */}
      <section
        style={{
          background: "white",
          borderBlock: "1px solid #F8FAFC",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 18,
            padding: "1.3rem 0",
          }}
        >
          {trustItems.map(([Icon, text]) => (
            <div
              key={text as string}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontWeight: 800,
              }}
            >
              <Icon size={19} color="#0F172A" />
              {text as string}
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The challenge"
            title="Your Business Deserves More Than Just a Website. It Deserves a Complete Digital Presence."
            copy="Many businesses provide exceptional products and services but struggle to stand out online. We help transform outdated websites and disconnected digital tools into a professional online presence that builds trust, attracts customers, and supports long-term growth."
          />

          <div className="grid3">
            {businessChallenges.map((challenge) => (
              <div className="card" key={challenge}>
                <CheckCircle2 color="#2457ff" />

                <h3>{challenge}</h3>

                <p className="muted">
                  A practical digital system can make information easier to
                  find, understand, and act on.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="section"
        style={{
          background: "white",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Start with the Right Digital Foundation and Add More as Your Business Grows."
            copy="From professional websites to SEO, automation, and analytics, our services are designed to support each stage of your business growth."
          />

          <div className="grid3">
            {services.slice(0, 8).map((service) => (
              <Reveal key={service.slug}>
                <article className="card">
                  <span className="badge">{service.title}</span>

                  <p>{service.short}</p>

                  <strong>{service.benefit}</strong>

                  <p>
                    <Link
                      href={`/services/${service.slug}`}
                      style={{
                        color: "#2457ff",
                        fontWeight: 800,
                      }}
                    >
                      Learn more{" "}
                      <ArrowRight
                        size={15}
                        style={{
                          display: "inline",
                        }}
                      />
                    </Link>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Digital Solutions Designed Around How Your Customers Search, Compare, and Buy."
            copy="We adapt the website experience and digital strategy to the specific needs of your industry and customers."
          />

          <div className="grid3">
            {industries.map((industry) => (
              <Link
                className="card"
                href={`/industries/${industry.slug}`}
                key={industry.slug}
              >
                <h3>{industry.title}</h3>

                <p className="muted">{industry.pain}</p>

                <strong>Explore solutions →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="section"
        style={{
          background: "#0b1f3a",
          color: "white",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="More Than a Web Design Agency—A Long-Term Digital Growth Partner."
            copy="We combine business strategy, modern technology, and continuous support to help small businesses compete confidently in today's digital world."
          />

          <div className="grid3">
            {advantages.map((advantage) => (
              <div
                className="card"
                style={{
                  background: "#10294b",
                  borderColor: "#1e3a5f",
                  color: "white",
                }}
                key={advantage}
              >
                <h3>{advantage}</h3>

                <p
                  style={{
                    color: "#b6c6dc",
                  }}
                >
                  Focused on practical value, maintainability, and a clear
                  client experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title="A Clear Path from the First Conversation to Long-Term Growth."
            copy="Every project follows a structured process so expectations, decisions, and progress remain clear."
          />

          <div className="grid3">
            {processSteps.map((step, index) => (
              <div className="card" key={step}>
                <span className="badge">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step}</h3>

                <p className="muted">
                  A defined checkpoint keeps decisions clear and the project
                  moving.
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: 24,
            }}
          >
            <ButtonLink href="/process" secondary>
              See the Full Process
            </ButtonLink>
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="section"
        style={{
          background: "white",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Concept portfolio"
            title="Examples of How Strategy, Design, and Technology Can Support Business Growth."
            copy="These projects are clearly labeled as concept work and are not presented as completed paying client engagements."
          />

          <div className="grid3">
            {caseStudies.map((caseStudy) => (
              <article
                className={`card bg-gradient-to-br ${caseStudy.accent}`}
                key={caseStudy.slug}
              >
                <span className="badge">Concept Project</span>

                <h3>{caseStudy.title}</h3>

                <p>{caseStudy.summary}</p>

                <Link
                  href={`/portfolio/${caseStudy.slug}`}
                  style={{
                    fontWeight: 800,
                    color: "#2457ff",
                  }}
                >
                  View case study →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Business outcomes"
            title="Digital Experiences Designed to Make Your Business Easier to Find, Trust, and Contact."
            copy="The goal is not only to improve how your website looks, but also to make the customer journey clearer and more effective."
          />

          <div className="grid3">
            {businessOutcomes.map((outcome) => (
              <div className="card" key={outcome}>
                <h3>{outcome}</h3>

                <p className="muted">
                  A stronger foundation for future marketing, customer
                  engagement, and operational improvements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="section"
        style={{
          background: "white",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear Starting Points for Different Stages of Business Growth."
            copy="Choose a foundation that fits your current needs, with the flexibility to add more functionality later."
          />

          <div className="grid3">
            {pricingPlans.map((plan, index) => (
              <div
                className="card"
                style={{
                  borderColor: index === 1 ? "#2457ff" : "#e2e8f0",
                }}
                key={plan.name}
              >
                <h3>{plan.name}</h3>

                <div
                  style={{
                    fontSize: 25,
                    fontWeight: 900,
                  }}
                >
                  {plan.price}
                </div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        margin: 8,
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink href="/consultation">
                  Discuss Your Project
                </ButtonLink>
              </div>
            ))}
          </div>

          <p className="muted">
            Final pricing depends on project scope, content, integrations,
            timeline, and technical requirements.
          </p>
        </div>
      </section>

      {/* Testimonials Placeholder Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Client feedback"
            title="Real Testimonials Will Be Added Only After Client Projects Are Completed."
            copy="We will never publish fake reviews, customer names, or unsupported claims."
          />

          <div className="grid3">
            {[1, 2, 3].map((item) => (
              <div className="card skeleton-quote" key={item}>
                <p>
                  Client testimonial will appear here after project completion.
                </p>

                <strong>Verified client name and business</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="section"
        style={{
          background: "white",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Straightforward Answers Before You Begin."
            copy="Learn more about timelines, ownership, hosting, maintenance, SEO, payment, and future website improvements."
          />

          <FAQ items={faqs} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #0b1f3a, #2457ff)",
          color: "white",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <h2 className="title">
            Let&apos;s Build the Future of Your Business Together.
          </h2>

          <p
            style={{
              color: "#dbeafe",
              fontSize: 19,
            }}
          >
            Whether you&apos;re launching your first website or transforming
            an existing business, we&apos;ll help you create a digital presence
            that builds trust, attracts customers, and supports long-term
            success.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <ButtonLink href="/consultation">
              Book a Free Consultation
            </ButtonLink>

            <ButtonLink href="/contact" secondary>
              Request a Quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}