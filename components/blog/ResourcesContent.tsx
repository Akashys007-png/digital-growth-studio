"use client";

import { useMemo, useState } from "react";

import type { BlogPost } from "@/data/blogPosts";
import FeaturedPost from "./FeaturedPost";
import BlogGrid from "./BlogGrid";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface ResourcesContentProps {
  posts: BlogPost[];
}

export default function ResourcesContent({
  posts,
}: ResourcesContentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const featuredPost = posts.find((post) => post.featured);

  const categories = useMemo(
    () => [...new Set(posts.map((post) => post.category))],
    [posts]
  );

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      category === "All" || post.category === category;

    const query = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query);

    return (
      !post.featured &&
      matchesCategory &&
      matchesSearch
    );
  });

  return (
    <>
      {featuredPost && (
        <FeaturedPost post={featuredPost} />
      )}

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <BlogGrid posts={filteredPosts} />
    </>
  );
}