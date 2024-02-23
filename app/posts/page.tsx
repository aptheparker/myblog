import { get } from "http";
import { getAllPosts } from "../libs/posts-util";


export const metadata = {
  title: "All Posts | aptheparker",
  description: "A list of all programming-related tutorials and posts!",
};

export default function PostsPage() {
  return getAllPosts().map((post) => {
    return (
      <div key={post.slug}>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
    );
  });
}
