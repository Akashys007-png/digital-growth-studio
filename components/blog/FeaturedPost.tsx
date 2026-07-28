import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({
  post,
}: FeaturedPostProps) {
  return (
    <article className="featured-post">
      <div className="featured-post-content">
        <span className="featured-badge">
          Featured Article
        </span>

        <span className="featured-category">
          {post.category}
        </span>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>

        <div className="featured-meta">
          <span>{post.author}</span>

          <span>•</span>

          <span>{post.publishedAt}</span>

          <span>•</span>

          <span>{post.readingTime}</span>
        </div>

        <Link
          href={`/resources/${post.slug}`}
          className="featured-button"
        >
          Read Article →
        </Link>
      </div>

      <div className="featured-image">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 900px) 100vw, 560px"
        />
      </div>
    </article>
  );
}