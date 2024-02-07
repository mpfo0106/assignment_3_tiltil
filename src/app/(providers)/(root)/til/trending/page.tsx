"use client";
import React, { useEffect, useState } from "react";
import PostsList from "../../_components/PostsList";
import api from "@/app/(providers)/_services/_posts.api.ts/api";
import { PostInList } from "@/app/(providers)/_services/_posts.api.ts/posts.response";

function TILTrendingPage() {
  const [posts, setPosts] = useState<PostInList[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await api.posts.getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export default TILTrendingPage;
