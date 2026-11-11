export const site = {
  // TODO: replace once the name is decided
  name: "Brand Name",
  tagline: "Ready-to-use AI automations, workflows and open-source tools.",
  description:
    "Digital products for builders: AI automations, n8n/Make workflows, curated GitHub open-source tools and model setups.",
  url: "https://example.com",
  email: "hello@example.com",
};

export const categories = [
  { id: "automations", label: "AI Automations", blurb: "Plug-and-play automations that save hours." },
  { id: "workflows", label: "Workflows", blurb: "n8n, Make and Zapier templates." },
  { id: "github", label: "GitHub Tools", blurb: "Curated open-source repos and setups." },
  { id: "models", label: "Open-Source Models", blurb: "Run and fine-tune models locally." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
