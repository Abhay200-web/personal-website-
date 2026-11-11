import { Suspense } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { categories } from "@/lib/site";

export const metadata = { title: "Products" };

export default function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <Suspense fallback={<p className="py-12 text-sand/70">Loading…</p>}>
      <Products searchParams={searchParams} />
    </Suspense>
  );
}

async function Products({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const list = category ? products.filter((p) => p.category === category) : products;
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <Link href="/products" className={`rounded-full border px-4 py-1.5 ${!category ? "border-claude bg-claude text-white" : "border-sand/30"}`}>All</Link>
        {categories.map((c) => (
          <Link key={c.id} href={`/products?category=${c.id}`} className={`rounded-full border px-4 py-1.5 ${category === c.id ? "border-claude bg-claude text-white" : "border-sand/30"}`}>
            {c.label}
          </Link>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && <p className="mt-8 text-sand/70">Nothing here yet.</p>}
    </section>
  );
}
