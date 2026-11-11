import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  // Placeholder mark until the real logo is decided
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-claude text-sm font-bold text-white">
        {site.name[0]}
      </span>
      <span>{site.name}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-sand/15 bg-charcoal/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="flex gap-6 text-sm text-sand/80">
          <Link href="/products" className="hover:text-claude">Products</Link>
          <Link href="/blog" className="hover:text-claude">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sand/15 py-10 text-center text-sm text-sand/60">
      © 2026 {site.name}. Contact: {site.email}
    </footer>
  );
}
