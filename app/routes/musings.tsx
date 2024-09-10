import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { BlogPost, posts } from "../data/blogPosts";

export const loader: LoaderFunction = () => {
  return posts;
};

export default function Musings() {
  const posts = useLoaderData<BlogPost[]>();

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-6">Musings</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`${post.slug}`}
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-300">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
