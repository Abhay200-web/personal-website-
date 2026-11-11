import Link from "next/link";
import { categories } from "@/lib/site";
import type { Product } from "@/lib/products";

export const price = (p: number) => (p === 0 ? "Free" : `$${p}`);

export function ProductCard({ p }: { p: Product }) {
  const cat = categories.find((c) => c.id === p.category)?.label;
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-transparent bg-sand p-5 text-charcoal transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
    >
      <span className="text-xs uppercase tracking-wider text-claude">{cat}</span>
      <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm text-charcoal/70">{p.summary}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold">{price(p.price)}</span>
        <span className="text-sm text-claude group-hover:translate-x-1 transition">View →</span>
      </div>
    </Link>
  );
}
