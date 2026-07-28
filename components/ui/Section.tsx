import type { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: "compact" | "normal" | "large";
}

const spacingMap = {
  compact: "py-10 lg:py-14",
  normal: "py-14 lg:py-20",
  large: "py-20 lg:py-28",
};

export default function Section({
  children,
  id,
  className = "",
  spacing = "normal",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${spacingMap[spacing]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}