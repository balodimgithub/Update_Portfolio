export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  category: "Technical Writing" | "Research" | "Deep Dive" | "Opinion";
  tags: string[];
  publishedAt: string;
  readTime: string;
  url: string;
  thumbnail?: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Prompt Engineering: Why AI Isn't Reading Your Mind (And What to Do About It).",
    summary:
      "An analytical look into using a mental model to shape AI output, using a step by step guide on prompt engineering. People send high quality prompts which brings awesome result online, Have you ever wondered how they did it ? This is a deep dive on how you can think like them, maybe better and create your own.",
    category: "Technical Writing",
    tags: ["Artificial Intelligence", "Thinking", "LLM", "Context Accumulation", "Prompt Engineering"],
    publishedAt: "June 2025",
    readTime: "12 min read",
    url: "https://wdcconsult.substack.com/p/prompt-engineering-formatt-perspective?r=8k4okc",
    thumbnail: "/images/PromptWDC.jpeg",
    featured: true,
  },
 
];
