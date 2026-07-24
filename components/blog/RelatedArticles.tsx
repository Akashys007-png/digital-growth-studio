import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  posts: Post[];
}

export default function RelatedArticles({
  posts,
}: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="related-articles">
      <h2>Continue Reading</h2>

      <div className="related-grid">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="related-card"
          >
            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <Link
              href={`/resources/${post.slug}`}
              className="related-link"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}