// src/lib/about-data.ts

import { LucideIcon } from "lucide-react";
import { Brain, Search, TrendingUp, Globe, Zap } from "lucide-react";

export interface MissionItem {
  icon: LucideIcon;
  text: string;
}

export interface PhilosophyPrinciple {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface FounderStat {
  label: string;
  value: string;
}

export const MISSION_ITEMS: MissionItem[] = [
  {
    icon: Brain,
    text: "AI models (GPT-4, Claude, Perplexity) now mediate 40%+ of search traffic",
  },
  {
    icon: Search,
    text: "Traditional keyword SEO ignores vector embeddings and semantic retrieval",
  },
  {
    icon: TrendingUp,
    text: "Brands need RAG-optimized content and entity graph positioning",
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    icon: Brain,
    title: "Context Over Keywords",
    description:
      "AI models use transformer attention mechanisms and cosine similarity (threshold >0.85) to match semantic intent—not TF-IDF keyword density. We optimize for embedding space proximity using text-embedding-3-large.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Trust Architecture",
    description:
      "E-E-A-T is quantified via structured data (JSON-LD Schema.org markup), backlink domain authority (DR >50), author credentials (LinkedIn API verification), and content freshness (<90 days). We measure these as weighted signals (not subjective checklists).",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Retrieval Optimization",
    description:
      "RAG systems chunk content at 512-1024 token boundaries with overlap. We structure content with rich metadata (headers, summaries, entities), optimize for top-k retrieval (k=5-10), and ensure embedding quality via reranking models (Cohere Rerank).",
    gradient: "from-orange-500 to-red-500",
  },
];

export const VISION_FEATURES: string[] = [
  "Real-time AI presence monitoring (polling GPT-4/Claude APIs every 6 hours)",
  "Automated trust signal optimization (Schema.org generator, backlink crawler)",
  "Cross-platform visibility analytics (unified dashboard: ChatGPT, Perplexity, Gemini)",
  "Predictive brand intelligence (time-series forecasting via Prophet/ARIMA)",
];

export const FOUNDER_STATS: FounderStat[] = [
  { label: "System Thinking", value: "First Principles" },
  { label: "Data Architecture", value: "TypeScript + Zustand + JSON-LD" },
  { label: "Product Focus", value: "Engineering-Led (API-First)" },
];
