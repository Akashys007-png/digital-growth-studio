import type { LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy: string;
  crumbs?: { label: string; href?: string }[];
  icon?: LucideIcon;
}

export default function PageHero({
  eyebrow,
  title,
  copy,
  crumbs = [],
  icon: Icon,
}: PageHeroProps) {
  if (Icon) {
    return (
      <section className="hero section">
        <div className="container">
          {crumbs.length > 0 && <Breadcrumbs items={crumbs} />}

          <div className="page-hero-banner">
            <div className="page-hero-banner-icon">
              <Icon size={28} strokeWidth={2} />
            </div>

            <div className="eyebrow">{eyebrow}</div>

            <h1 className="display" style={{ maxWidth: 780, margin: ".7rem auto 1rem" }}>
              {title}
            </h1>

            <p className="lead" style={{ maxWidth: 640, margin: "0 auto" }}>
              {copy}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero section">
      <div className="container">
        {crumbs.length > 0 && <Breadcrumbs items={crumbs} />}

        <div className="eyebrow">{eyebrow}</div>

        <h1 className="display" style={{ maxWidth: 950, margin: ".7rem 0 1rem" }}>
          {title}
        </h1>

        <p className="lead" style={{ maxWidth: 780 }}>
          {copy}
        </p>
      </div>
    </section>
  );
}
