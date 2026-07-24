import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({
  post,
}: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <span>Blog Image</span>
      </div>

      <div className="blog-card-content">
        <span className="blog-category">
          {post.category}
        </span>

        <h3>{post.title}</h3>

        <p>{post.excerpt}</p>

        <div className="blog-meta">
          <span>{post.author}</span>

          <span>•</span>

          <span>{post.readingTime}</span>
        </div>

        <Link
          href={`/resources/${post.slug}`}
          className="blog-read-more"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}