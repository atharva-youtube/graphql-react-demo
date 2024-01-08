"use client";

import { Post } from "@/types";
import { getAllPosts } from "@/utils/requests";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const posts = await getAllPosts();
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="my-5 text-lg">
          {post.title}
        </div>
      ))}
    </main>
  );
}
