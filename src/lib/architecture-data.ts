// src/lib/architecture-data.ts

import {
  Database,
  Globe,
  Link2,
  Sparkles,
  BarChart3,
  FileText,
  Target,
  Package,
  Shield,
  Zap,
  Brain, // ✅ Added missing import
} from "lucide-react";

// import type { ColorScheme } from '@/components/architecture/PipelineStage';

export interface ArchitectureItem<
  TIcon = React.ComponentType<{ className?: string }>
> {
  name: string;
  description: string;
  icon: TIcon;
}
export interface AuditModuleArch<
  TIcon = React.ComponentType<{ className?: string }>
> {
  name: string;
  color: string;
  icon: TIcon;
}

// InputAssembler building blocks
export const INPUT_COMPONENTS: ArchitectureItem[] = [
  {
    name: "Web Crawler",
    icon: Globe,
    description: "Scrapes and indexes brand content",
  },
  {
    name: "API Integrations",
    icon: Link2,
    description: "Connects to external data sources",
  },
  {
    name: "Social Signals",
    icon: Sparkles,
    description: "Monitors social mentions",
  },
  {
    name: "Knowledge Bases",
    icon: Database,
    description: "Accesses public datasets",
  },
];

// Seven audit modules (architecture representation)
export const ARCH_AUDIT_MODULES: AuditModuleArch[] = [
  { name: "Brand Presence", icon: Globe, color: "from-blue-500 to-cyan-500" },
  {
    name: "Context Coverage",
    icon: Database,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Trust Signals",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  { name: "Citations", icon: Link2, color: "from-orange-500 to-red-500" },
  {
    name: "Keyword Mapping",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Competitive Intel",
    icon: BarChart3,
    color: "from-teal-500 to-cyan-500",
  },
  { name: "Retrieval Opt", icon: Zap, color: "from-pink-500 to-rose-500" },
];

// Output surfaces
export const OUTPUT_SURFACES: ArchitectureItem[] = [
  {
    name: "Dashboard",
    icon: BarChart3,
    description: "Real-time metrics and KPIs",
  },
  {
    name: "Audit Reports",
    icon: FileText,
    description: "Detailed module insights",
  },
  {
    name: "Recommendations",
    icon: Target,
    description: "Actionable optimization steps",
  },
  {
    name: "API Endpoints",
    icon: Package,
    description: "Programmatic data access",
  },
];
export interface ContextPackItem {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CONTEXT_PACK_ITEMS: ContextPackItem[] = [
  {
    name: "Entity Resolution",
    description: "Maps brand mentions to canonical entities",
    icon: Sparkles,
  },
  {
    name: "Semantic Tagging",
    description: "Identifies topics and intent signals",
    icon: Sparkles,
  },
  {
    name: "Relationship Mapping",
    description: "Builds entity and topic graphs",
    icon: Sparkles,
  },
  {
    name: "Industry Context",
    description: "Adds competitive and market data",
    icon: Sparkles,
  },
];
export interface PipelineStageData {
  stageNumber: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  colorScheme: "blue" | "purple" | "pink" | "green";
  showArrow?: boolean;
}

export const PIPELINE_STAGES: PipelineStageData[] = [
  {
    stageNumber: 1,
    title: "InputAssembler",
    subtitle: "Data Collection Layer",
    icon: Database,
    colorScheme: "blue" as const,
  },
  {
    stageNumber: 2,
    title: "ContextPack",
    subtitle: "Data Enrichment Layer",
    icon: Package,
    colorScheme: "purple" as const,
  },
  {
    stageNumber: 3,
    title: "Audit Modules",
    subtitle: "Analysis Layer",
    icon: Brain,
    colorScheme: "pink" as const,
  },
  {
    stageNumber: 4,
    title: "Output Surfaces",
    subtitle: "Presentation Layer",
    icon: FileText,
    colorScheme: "green" as const,
    showArrow: false,
  },
];
