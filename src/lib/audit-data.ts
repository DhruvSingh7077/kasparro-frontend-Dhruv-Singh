// src/lib/audit-data.ts

export type ModuleStatus =
  | "excellent"
  | "good"
  | "moderate"
  | "needs-improvement";

export interface Issue {
  severity: "high" | "medium" | "low";
  title: string;
  description: string;
}

export interface ModuleDetail {
  score: number;
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}

export interface AuditModuleSummary {
  id: string;
  name: string;
  score: number;
  status: ModuleStatus;
}

// Sidebar list
export const AUDIT_MODULES: AuditModuleSummary[] = [
  {
    id: "brand-presence",
    name: "Brand Presence Analysis",
    score: 94,
    status: "excellent",
  },
  {
    id: "context-coverage",
    name: "Context Coverage Audit",
    score: 88,
    status: "good",
  },
  {
    id: "trust-signals",
    name: "Trust Signal Detection",
    score: 92,
    status: "excellent",
  },
  {
    id: "citations",
    name: "Citation & Attribution",
    score: 76,
    status: "moderate",
  },
  {
    id: "keyword-mapping",
    name: "Keyword Entity Mapping",
    score: 68,
    status: "needs-improvement",
  },
  {
    id: "competitive",
    name: "Competitive Intelligence",
    score: 82,
    status: "good",
  },
  {
    id: "retrieval",
    name: "Retrieval Optimization",
    score: 71,
    status: "moderate",
  },
];

// Detailed content for EVERY id above
export const MODULE_DETAILS: Record<string, ModuleDetail> = {
  "brand-presence": {
    score: 94,
    insights: [
      "Your brand entity is recognized across all major AI platforms",
      "Strong Wikipedia and knowledge graph presence detected",
      "Brand mentions appear in 89% of relevant industry contexts",
    ],
    issues: [
      {
        severity: "low",
        title: "Inconsistent brand description",
        description: "Brand descriptions vary across platforms by 15%",
      },
    ],
    recommendations: [
      "Standardize brand messaging across all owned properties",
      "Update Wikipedia article with recent achievements",
      "Strengthen association with key industry terms",
    ],
  },

  "context-coverage": {
    score: 88,
    insights: [
      "Content covers 12 of 15 key topic clusters in your industry",
      "Average content depth is above industry standard",
      "Strong semantic relationships detected in core topics",
    ],
    issues: [
      {
        severity: "medium",
        title: "Gaps in emerging topics",
        description: "Missing coverage in 3 high-growth topic clusters",
      },
      {
        severity: "low",
        title: "Shallow content depth",
        description: "5 topics have below-average content depth",
      },
    ],
    recommendations: [
      "Create comprehensive guides for AI ethics and regulation",
      "Expand content on sustainability practices",
      "Deepen technical documentation on implementation",
    ],
  },

  "trust-signals": {
    score: 92,
    insights: [
      "Strong E-E-A-T signals across all dimensions",
      "High-quality backlinks from authoritative sources",
      "Author credentials are well-established and verified",
    ],
    issues: [
      {
        severity: "low",
        title: "Limited expert bylines",
        description: "Only 60% of content has clear author attribution",
      },
    ],
    recommendations: [
      "Add author bios and credentials to all content",
      "Pursue more citations from academic sources",
      "Increase contributions to industry publications",
    ],
  },

  citations: {
    score: 76,
    insights: [
      "Brand is cited in 45 authoritative industry sources",
      "Citation frequency has increased 23% in the last quarter",
      "Most citations come from technical documentation",
    ],
    issues: [
      {
        severity: "medium",
        title: "Low mainstream media citations",
        description: "Limited presence in major media outlets",
      },
      {
        severity: "medium",
        title: "Competitor citation gap",
        description: "Top competitors have 2.3x more citations",
      },
    ],
    recommendations: [
      "Develop newsworthy research and reports",
      "Build relationships with industry journalists",
      "Create more cite-worthy original data and studies",
    ],
  },

  "keyword-mapping": {
    score: 68,
    insights: [
      "Brand appears for 34 of 50 target non-branded queries",
      "Strong presence in technical/product-specific queries",
      "Weak presence in broader industry category queries",
    ],
    issues: [
      {
        severity: "high",
        title: "Missing from key category queries",
        description: "Brand absent from 16 high-volume category searches",
      },
      {
        severity: "medium",
        title: "Competitor dominance",
        description: "Competitors own 75% of top industry keyword responses",
      },
    ],
    recommendations: [
      "Create category-level content (not just product-focused)",
      "Build stronger semantic associations with industry terms",
      "Develop comprehensive comparison and evaluation content",
    ],
  },

  competitive: {
    score: 82,
    insights: [
      "You rank 3rd in overall AI visibility in your category",
      "Strongest relative performance in trust signals",
      "Competitive gap is narrowing by 8% per quarter",
    ],
    issues: [
      {
        severity: "medium",
        title: "Citation volume gap",
        description: "Top 2 competitors have 45% more citations",
      },
    ],
    recommendations: [
      "Focus on increasing external citations and mentions",
      "Benchmark against top performer's content strategy",
      "Identify and target competitor content gaps",
    ],
  },

  retrieval: {
    score: 71,
    insights: [
      "Content structure is optimized for 65% of pages",
      "Strong use of semantic HTML and structured data",
      "Internal linking strategy is well-implemented",
    ],
    issues: [
      {
        severity: "high",
        title: "Suboptimal content chunking",
        description: "35% of pages have poor section organization",
      },
      {
        severity: "medium",
        title: "Missing context indicators",
        description: "Key pages lack clear topic and entity markup",
      },
    ],
    recommendations: [
      "Restructure content with clear hierarchical sections",
      "Add explicit context and prerequisite statements",
      "Implement consistent entity tagging across all content",
    ],
  },
};

// ---------- Dashboard overview data (unchanged) ----------

export interface BrandOverview {
  id: string;
  name: string;
}

export interface DashboardMetrics {
  aiVisibilityScore: number;
  visibilityTrend: number;
  trustScore: number;
  trustTrend: number;
  keywordCoverage: number;
  coverageTrend: number;
  lastAudit: string;
}

export const DASHBOARD_BRANDS: BrandOverview[] = [
  { id: "acme-corp", name: "Acme Corp" },
  { id: "techstart", name: "TechStart Inc" },
  { id: "global-retail", name: "Global Retail Co" },
];

export const DASHBOARD_DATA: Record<string, DashboardMetrics> = {
  "acme-corp": {
    aiVisibilityScore: 87,
    visibilityTrend: 12,
    trustScore: 92,
    trustTrend: 5,
    keywordCoverage: 68,
    coverageTrend: -3,
    lastAudit: "2025-12-26T14:30:00",
  },
  techstart: {
    aiVisibilityScore: 72,
    visibilityTrend: 8,
    trustScore: 78,
    trustTrend: -2,
    keywordCoverage: 54,
    coverageTrend: 15,
    lastAudit: "2025-12-25T09:15:00",
  },
  "global-retail": {
    aiVisibilityScore: 94,
    visibilityTrend: 3,
    trustScore: 96,
    trustTrend: 1,
    keywordCoverage: 89,
    coverageTrend: 7,
    lastAudit: "2025-12-27T11:45:00",
  },
};
