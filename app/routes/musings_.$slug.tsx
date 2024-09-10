import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { BlogPost, posts } from "../data/blogPosts";
import { mapping } from "../data/blogPosts";

export const loader: LoaderFunction = async ({ params }) => {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return post;
};

export default function BlogPostPage() {
  const post = useLoaderData<BlogPost>();
  const CustomBlog = mapping.get(post.slug);

  return (
    <div className="container mx-auto py-8 px-6">
      <Link to="/musings" className="text-blue-600 hover:underline mb-6 block">
        &larr; Back to Musings
      </Link>
      <p className="text-gray-600 dark:text-gray-300">{post.date}</p>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <CustomBlog />
    </div>
  );
}
