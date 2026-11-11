import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = { title: "Blog & Free Resources" };

export default function Blog() {
  return (
    <section className="mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold">Blog & Free Resources</h1>
      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-2xl bg-sand p-5 text-charcoal transition hover:-translate-y-1">
            <time className="text-xs text-charcoal/60">{p.date}</time>
            <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-charcoal/70">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
