"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Website Design",
  "SEO",
  "Brand Identity",
  "Business Automation",
  "AI Solutions",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
              aria-label="Digital Growth Studio Home"
            >
              Digital Growth Studio
            </Link>

            <p>
              Helping small businesses grow through modern websites,
              automation, branding, and digital experiences that convert
              visitors into customers.
            </p>

            <button
              type="button"
              className="back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4>Quick Links</h4>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4>Services</h4>

            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="footer-contact">
            <h4>Contact</h4>

            <div>
              <Mail size={18} />

              <a href="mailto:akash.yerehalli.satish@gmail.com">
                akash.yerehalli.satish@gmail.com
              </a>
            </div>

            <div>
              <Phone size={18} />

              <a href="tel:+16575258336">
                (657) 525-8336
              </a>
            </div>

            <div>
              <MapPin size={18} />

              <span>
                Fullerton, California
              </span>
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Digital Growth Studio. All rights
            reserved.
          </p>

          <div className="footer-legal">
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}