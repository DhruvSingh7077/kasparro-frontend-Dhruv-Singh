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
      "Measure how AI models recognize and represent your brand entity",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Context Coverage Audit",
    icon: Database,
    description:
      "Evaluate content depth across key topic clusters AI models query",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Trust Signal Detection",
    icon: Shield,
    description:
      "Assess E-E-A-T signals that AI models use to weight credibility",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Citation & Attribution",
    icon: Link2,
    description: "Track where and how AI models cite your brand as a source",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Keyword Entity Mapping",
    icon: Target,
    description: "Identify non-branded queries where your brand should appear",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "Competitive Intelligence",
    icon: BarChart3,
    description: "Benchmark your AI visibility against industry competitors",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 7,
    name: "Retrieval Optimization",
    icon: Zap,
    description: "Optimize content structure for AI model retrieval patterns",
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
      "Website content & structure",
      "Published articles & resources",
      "Social media presence",
      "Public company information",
    ],
  },
  {
    title: "External Signals",
    items: [
      "Media mentions & citations",
      "Industry publications",
      "Third-party reviews",
      "Knowledge base entries",
    ],
  },
];
