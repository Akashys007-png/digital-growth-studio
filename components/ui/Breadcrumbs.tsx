"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: "1rem",
      }}
    >
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          flexWrap: "wrap",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: ".9rem",
        }}
      >
        <li>
          <Link
            href="/"
            style={{
              color: "var(--blue)",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <span>/</span>

            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: "var(--blue)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: "var(--text-color)",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}