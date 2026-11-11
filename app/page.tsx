import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { categories, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="py-24 text-center">
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-sand md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sand/75">{site.description}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/products" className="rounded-full bg-claude px-6 py-3 font-medium text-white hover:bg-claude-dark">
            Browse products
          </Link>
          <Link href="/blog" className="rounded-full border border-sand/40 px-6 py-3 hover:bg-sand/10">
            Free resources
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link key={c.id} href={`/products?category=${c.id}`} className="rounded-2xl bg-sand p-5 text-charcoal hover:-translate-y-1 transition">
            <h3 className="font-semibold">{c.label}</h3>
            <p className="mt-1 text-sm text-charcoal/70">{c.blurb}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Featured</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  );
}
