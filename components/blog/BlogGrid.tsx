import type { BlogPost } from "@/data/blogPosts";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({
  posts,
}: BlogGridProps) {
  return (
    <section className="blog-grid">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          post={post}
        />
      ))}
    </section>
  );
}