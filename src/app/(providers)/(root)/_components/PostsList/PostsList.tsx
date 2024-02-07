import React from "react";
import PostsListItem from "../PostsListItem/PostsListItem";
import { PostInList } from "@/app/(providers)/_services/_posts.api.ts/posts.response";

interface PostsListProps {
  posts: PostInList[];
}

function PostsList({ posts }: PostsListProps) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-10 m-10">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <h3 className="font-bold m-3">{post.title}</h3>
            <p className="m-3">{post.content}</p>
            <span className="mt-3 mx-3">by: {post.author.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default PostsList;
