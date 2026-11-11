import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} – ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-charcoal text-sand antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
