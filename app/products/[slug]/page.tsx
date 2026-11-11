import { notFound } from "next/navigation";
import { price } from "@/components/ProductCard";
import { getProduct, products } from "@/lib/products";

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  return { title: p?.title, description: p?.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-2xl py-16">
      <span className="text-xs uppercase tracking-wider text-claude">{p.category}</span>
      <h1 className="mt-2 text-4xl font-bold">{p.title}</h1>
      <p className="mt-4 text-lg text-sand/75">{p.summary}</p>
      <ul className="mt-8 space-y-2">
        {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-claude">✓</span>{f}</li>)}
      </ul>
      <div className="mt-10 flex items-center gap-6">
        <span className="text-3xl font-bold">{price(p.price)}</span>
        <a href={p.buyUrl} className="rounded-full bg-claude px-8 py-3 font-medium text-white hover:bg-claude-dark">
          {p.price === 0 ? "Get it free" : "Buy now"}
        </a>
      </div>
    </article>
  );
}
