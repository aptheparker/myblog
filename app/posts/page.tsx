import AllPosts from "../components/post/all-posts";
import { getAllPosts } from "../libs/posts-util";

export const metadata = {
  title: "All Posts | aptheparker",
  description: "A list of all programming-related tutorials and posts!",
};

export default function PostsPage() {
  const allPosts = getPosts();
  return <AllPosts posts={allPosts} />;
}

function getPosts() {
  const projects = getAllPosts();

  return projects;
}
