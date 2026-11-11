import type { CategoryId } from "./site";

export type Product = {
  slug: string;
  title: string;
  category: CategoryId;
  price: number; // USD, 0 = free
  summary: string;
  features: string[];
  // Replace with a Stripe Payment Link / Checkout URL later
  buyUrl: string;
};

export const products: Product[] = [
  {
    slug: "lead-gen-automation",
    title: "AI Lead Generation Automation",
    category: "automations",
    price: 49,
    summary: "Scrape, enrich and email leads automatically with an AI agent.",
    features: ["Importable workflow JSON", "Setup video guide", "Prompt pack", "Lifetime updates"],
    buyUrl: "#",
  },
  {
    slug: "n8n-content-pipeline",
    title: "n8n Content Pipeline",
    category: "workflows",
    price: 29,
    summary: "Turn one idea into blog, tweets and LinkedIn posts on autopilot.",
    features: ["n8n template", "Notion database", "Step-by-step docs"],
    buyUrl: "#",
  },
  {
    slug: "open-source-ai-stack",
    title: "Open-Source AI Starter Stack",
    category: "github",
    price: 19,
    summary: "A curated list of 50 repos with install scripts and use cases.",
    features: ["50 vetted repos", "One-click setup scripts", "Monthly refresh"],
    buyUrl: "#",
  },
  {
    slug: "local-llm-setup",
    title: "Local LLM Setup Kit",
    category: "models",
    price: 0,
    summary: "Run Llama, Mistral and Qwen on your own machine in minutes.",
    features: ["Ollama configs", "Hardware guide", "Benchmark sheet"],
    buyUrl: "#",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
