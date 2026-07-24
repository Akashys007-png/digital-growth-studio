import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/blogPosts";
import ResourcesContent from "@/components/blog/ResourcesContent";

export default function ResourcesPage() {
  return (
    <Section>
      <div className="resources-hero">
        <span>Resources</span>

        <h1>
          Insights, guides, and digital growth strategies
        </h1>

        <p>
          Explore practical articles covering web design,
          SEO, performance, branding, and technology.
        </p>
      </div>

      <ResourcesContent posts={blogPosts} />
    </Section>
  );
}