import type { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: "normal" | "large";
}

export default function Section({
  children,
  id,
  className = "",
  spacing = "normal",
}: SectionProps) {
  const spacingClasses =
    spacing === "large"
      ? "py-28 lg:py-36"
      : "py-20 lg:py-28";

  return (
    <section
      id={id}
      className={`${spacingClasses} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}