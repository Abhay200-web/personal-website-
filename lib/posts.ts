export type Post = { slug: string; title: string; date: string; excerpt: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "getting-started-with-ai-automation",
    title: "Getting Started with AI Automation",
    date: "2026-11-01",
    excerpt: "The simplest way to automate your first repetitive task with AI.",
    body: [
      "Pick one repetitive task you do every week. That is your first automation.",
      "Map the trigger, the AI step and the output, then build it in a no-code tool like n8n.",
      "Start small, measure the time saved, then expand.",
    ],
  },
  {
    slug: "best-open-source-models",
    title: "Best Open-Source Models You Can Run Today",
    date: "2026-11-05",
    excerpt: "A quick tour of open models worth running locally.",
    body: [
      "Open models have caught up quickly for everyday tasks.",
      "Tools like Ollama make running them locally a one-line install.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
