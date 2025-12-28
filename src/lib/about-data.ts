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
    text: "AI models are the new gatekeepers",
  },
  {
    icon: Search,
    text: "Traditional SEO is becoming obsolete",
  },
  {
    icon: TrendingUp,
    text: "Brands need new visibility strategies",
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    icon: Brain,
    title: "Context Over Keywords",
    description:
      "AI models don't parse keywords—they understand semantic relationships, entity graphs, and contextual relevance.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Trust Architecture",
    description:
      "E-E-A-T isn't a checklist. It's a measurable signal system that AI models use to weight source credibility.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Retrieval Optimization",
    description:
      "Content must be structured for how AI models retrieve, parse, and present information—not just for human readers.",
    gradient: "from-orange-500 to-red-500",
  },
];

export const VISION_FEATURES: string[] = [
  "Real-time AI presence monitoring",
  "Automated trust signal optimization",
  "Cross-platform visibility analytics",
  "Predictive brand intelligence",
];

export const FOUNDER_STATS: FounderStat[] = [
  { label: "System Thinking", value: "First Principles" },
  { label: "Data Architecture", value: "Production-Grade" },
  { label: "Product Focus", value: "Engineering-Led" },
];
