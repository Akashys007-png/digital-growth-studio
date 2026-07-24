import { notFound } from "next/navigation";
import { posts } from "@/data/site";
import PageHero from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";
import RelatedArticles from "@/components/blog/RelatedArticles";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  return {
    title: post?.title || "Resource",
    description: post?.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
  .filter((item) => item.slug !== post.slug)
  .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Resource"
        title={post.title}
        copy={post.excerpt}
        crumbs={[
          {
            label: "Resources",
            href: "/resources",
          },
          {
            label: post.title,
          },
        ]}
      />

      <article className="section">
        <div className="container legal prose">

          <div className="resource-meta">
            <span>{post.category}</span>

            <span>•</span>

            <span>{post.author}</span>

            <span>•</span>

            <span>{post.readingTime}</span>

            <span>•</span>

            <span>{post.date}</span>
          </div>

          {post.content.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>
              {paragraph}
            </p>
          ))}

          <ButtonLink href="/consultation">
            Discuss Your Digital Presence
          </ButtonLink>

        </div>
      </article>

      <RelatedArticles posts={relatedPosts} />
    </>
  );
}