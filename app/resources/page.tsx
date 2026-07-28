import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/blogPosts";
import ResourcesContent from "@/components/blog/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources",

  description:
    "Practical articles on web design, SEO, performance, and technology for small businesses.",

  openGraph: {
    title: "Resources | Digital Growth Studio",
    description:
      "Insights, guides, and digital growth strategies for small businesses.",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Resources",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resources | Digital Growth Studio",
    description:
      "Insights, guides, and digital growth strategies for small businesses.",
    images: ["/images/og/home.png"],
  },
};

export default function ResourcesPage() {
  return (
    <Section>
      <div className="resources-hero">
        <div className="page-hero-banner">
          <div className="page-hero-banner-icon">
            <BookOpen size={28} strokeWidth={2} />
          </div>

          <span className="eyebrow">Resources</span>

          <h1>
            Insights, guides, and digital growth strategies
          </h1>

          <p>
            Explore practical articles covering web design,
            SEO, performance, branding, and technology.
          </p>
        </div>
      </div>

      <ResourcesContent posts={blogPosts} />
    </Section>
  );
}