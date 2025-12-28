// src/lib/home-data.ts

export interface AuditModulePreview {
  name: string;
  status: "complete" | "in-progress";
  score?: number;
}

export interface AIPlatform {
  name: string;
  gradient: string;
}

export interface SEOComparisonColumn {
  title: string;
  items: string[];
  color: "zinc" | "blue";
}

export const AUDIT_MODULES_PREVIEW: AuditModulePreview[] = [
  {
    name: "Brand Presence",
    status: "complete",
    score: 94,
  },
  {
    name: "Context Coverage",
    status: "complete",
    score: 88,
  },
  {
    name: "Trust Signals",
    status: "in-progress",
  },
];

export const AI_PLATFORMS: AIPlatform[] = [
  {
    name: "ChatGPT",
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
  },
  {
    name: "Gemini",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600",
  },
  {
    name: "Perplexity",
    gradient: "bg-gradient-to-br from-teal-400 to-blue-600",
  },
  {
    name: "Claude",
    gradient: "bg-gradient-to-br from-orange-400 to-red-600",
  },
];

export const SEO_COMPARISON_COLUMNS: SEOComparisonColumn[] = [
  {
    title: "Traditional SEO",
    items: [
      "Keyword rankings",
      "Backlink profiles",
      "Page speed optimization",
      "Meta tags & schema",
    ],
    color: "zinc",
  },
  {
    title: "AI-Native SEO",
    items: [
      "Context understanding",
      "Brand entity recognition",
      "Trust & authority signals",
      "Retrieval-optimized content",
    ],
    color: "blue",
  },
];
