import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface BrandPaletteProps {
  project: PortfolioProject;
}

export default function BrandPalette({
  project,
}: BrandPaletteProps) {
  const { brand } = project;

  return (
    <Section>
      <div className="brand-palette">
        <CaseStudySectionHeader
  eyebrow="Brand Identity"
  title="Visual language crafted for consistency"
  description="Every visual element was carefully selected to create a recognizable, trustworthy, and memorable digital brand."
/>

        <div className="brand-colors">
          {[brand.primary, brand.secondary, brand.accent, brand.background].map(
            (color) => (
              <div key={color} className="brand-color-card">
                <div
                  className="brand-color-preview"
                  style={{ backgroundColor: color }}
                />

                <strong>{color}</strong>
              </div>
            )
          )}
        </div>

        <div className="brand-details">
          <div>
            <strong>Typography</strong>
            <p>{brand.fonts.join(" / ")}</p>
          </div>

          <div>
            <strong>Design Style</strong>
            <p>{brand.style}</p>
          </div>

          <div>
            <strong>Logo</strong>
            <p>{brand.logo}</p>
          </div>

          <div>
            <strong>Buttons</strong>
            <p>{brand.buttons}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}