"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Portfolio", "/portfolio"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        style={{
          background: "#0b1f3a",
          color: "white",
          textAlign: "center",
          padding: ".55rem",
          fontSize: 14,
        }}
      >
        🚀 Free 30-Minute Digital Growth Consultation
      </div>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          className="container"
          style={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/brand/logo.png"
              alt="Digital Growth Studio"
              width={210}
              height={60}
              priority
              style={{
                width:"auto",
                height:"80px",

              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="navlink"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/consultation"
              className="btn btn-primary"
            >
              Book a Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle Navigation"
            style={{
              display: "none",
              background: "white",
              border: "1px solid #cbd5e1",
              borderRadius: 10,
              padding: 8,
            }}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid #e2e8f0",
                background: "white",
              }}
            >
              <div
                className="container"
                style={{
                  display: "grid",
                  gap: 14,
                  padding: "1rem 0 1.5rem",
                }}
              >
                {links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="navlink"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  href="/consultation"
                  className="btn btn-primary"
                  onClick={() => setOpen(false)}
                >
                  Book a Free Consultation
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}