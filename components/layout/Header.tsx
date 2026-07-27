"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Portfolio", "/portfolio"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          background: "var(--announcement-bg)",
          color: "var(--announcement-text)",
          textAlign: "center",
          padding: ".55rem",
          fontSize: 14,
        }}
      >
        🚀 Free 30-Minute Digital Growth Consultation
      </div>

      <motion.header
        animate={{
          height: scrolled ? 72 : 80,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--header-bg)",
          backdropFilter: scrolled
            ? "blur(18px)"
            : "blur(10px)",
          borderBottom: "1px solid var(--border-color)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(15,23,42,.08)"
            : "none",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
          >
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
                  width: "auto",
                  height: "80px",
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            {links.map(([label, href]) => {
              const active = pathname === href;

              return (
                <motion.div
                  key={href}
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  style={{
                    position: "relative",
                  }}
                >
                  <Link
                    href={href}
                    className="navlink"
                    style={{
                      color: active
                        ? "var(--blue)"
                        : undefined,
                      fontWeight: active ? 700 : undefined,
                    }}
                  >
                    {label}
                  </Link>

                  {active && (
                    <motion.div
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -8,
                        height: 2,
                        borderRadius: 999,
                        background: "var(--blue)",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            <ThemeToggle />

            <Link
              href="/consultation"
              className="btn btn-primary"
            >
              Book a Free Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle Navigation"
            style={{
              display: "none",
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              color: "var(--text-color)",
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
              transition={{
                duration: 0.25,
              }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border-color)",
                background: "var(--card-bg)",
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
                    style={{
                      color:
                        pathname === href
                          ? "var(--blue)"
                          : undefined,
                      fontWeight:
                        pathname === href
                          ? 700
                          : undefined,
                    }}
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
      </motion.header>
    </>
  );
}