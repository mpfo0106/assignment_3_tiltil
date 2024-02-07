"use client";
import { useEffect, useState } from "react";
import PostsList from "./_components/PostsList";
import { PostInList } from "../_services/_posts.api.ts/posts.response";
import api from "../_services/_posts.api.ts/api";

function HomePage() {
  const [posts, setPosts] = useState<PostInList[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await api.posts.getAllPosts();
      setPosts(posts.filter((post) => post.author.name === "강준호"));
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl m-5 text-center">내가 쓴글</h2>
      <PostsList posts={posts} />
    </div>
  );
}

export default HomePage;
