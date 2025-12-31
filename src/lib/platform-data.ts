// src/lib/platform-data.ts

import {
  Globe,
  Database,
  Shield,
  Link2,
  Target,
  BarChart3,
  Zap,
} from "lucide-react";

export interface PlatformAuditModule<TIcon = any> {
  id: number;
  name: string;
  description: string;
  color: string;
  icon: TIcon;
}

export const PLATFORM_AUDIT_MODULES: PlatformAuditModule[] = [
  {
    id: 1,
    name: "Brand Presence Analysis",
    icon: Globe,
    description:
      "Queries GPT-4, Claude 3.5, and Perplexity APIs with 500+ branded prompts to measure entity recognition accuracy and citation frequency across model responses",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Context Coverage Audit",
    icon: Database,
    description:
      "Analyzes semantic embeddings (via OpenAI text-embedding-3-large) across your content corpus to identify topic gaps in vector space representation",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Trust Signal Detection",
    icon: Shield,
    description:
      "Parses structured data markup (Schema.org), backlink authority (Moz/Ahrefs API), author credentials, and publication dates to quantify E-E-A-T indicators",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Citation & Attribution",
    icon: Link2,
    description:
      "Tracks citation patterns via LLM API responses and web crawlers (Scrapy/Playwright) to map where AI models source and attribute your brand content",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Keyword Entity Mapping",
    icon: Target,
    description:
      "Uses NER (spaCy/transformers) and knowledge graph queries (Wikidata API) to discover non-branded semantic relationships where your entity should rank",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "Competitive Intelligence",
    icon: BarChart3,
    description:
      "Benchmarks your visibility against 10+ competitors via parallel LLM queries, calculating relative mention share and sentiment analysis (VADER/TextBlob)",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 7,
    name: "Retrieval Optimization",
    icon: Zap,
    description:
      "Evaluates content structure for RAG systems: chunk size optimization (512-1024 tokens), metadata richness, and embedding similarity scores (cosine >0.85)",
    color: "from-yellow-500 to-orange-500",
  },
];
export interface DataCategory {
  title: string;
  items: string[];
}

export const DATA_CATEGORIES: DataCategory[] = [
  {
    title: "Brand Assets",
    items: [
      "Website content & structure (sitemap.xml parsing, robots.txt compliance)",
      "Published articles & resources (RSS feeds, API endpoints)",
      "Social media presence (Twitter/LinkedIn API, engagement metrics)",
      "Public company information (Crunchbase/LinkedIn Company API)",
    ],
  },
  {
    title: "External Signals",
    items: [
      "Media mentions & citations (Google News API, Common Crawl index)",
      "Industry publications (PubMed, arXiv, IEEE Xplore API integrations)",
      "Third-party reviews (G2/Capterra API, sentiment scoring)",
      "Knowledge base entries (Wikipedia API, Wikidata SPARQL queries)",
    ],
  },
];
