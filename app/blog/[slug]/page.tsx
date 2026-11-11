import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return { title: p?.title, description: p?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-2xl py-16">
      <time className="text-xs text-sand/60">{p.date}</time>
      <h1 className="mt-2 text-4xl font-bold">{p.title}</h1>
      <div className="mt-8 space-y-4 text-sand/85">{p.body.map((t, i) => <p key={i}>{t}</p>)}</div>
    </article>
  );
}
