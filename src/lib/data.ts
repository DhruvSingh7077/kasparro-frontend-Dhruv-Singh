export interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}

export interface Brand {
  id: string;
  name: string;
  visibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAudit: string;
}

export const BRANDS: Brand[] = [
  {
    id: "nike",
    name: "Nike",
    visibilityScore: 92,
    trustScore: 87,
    keywordCoverage: 78,
    lastAudit: "Dec 26, 2025",
  },
  {
    id: "apple",
    name: "Apple",
    visibilityScore: 95,
    trustScore: 91,
    keywordCoverage: 84,
    lastAudit: "Dec 25, 2025",
  },
  {
    id: "adidas",
    name: "Adidas",
    visibilityScore: 88,
    trustScore: 82,
    keywordCoverage: 71,
    lastAudit: "Dec 27, 2025",
  },
];

export const MODULES: AuditModule[] = [
  {
    id: "brandPresence",
    name: "Brand Presence",
    score: 85,
    insights: ["Appears in 92% AI responses"],
    issues: ["Weak conversational mentions"],
    recommendations: ["Optimize for voice queries"],
  },
  {
    id: "keywordGap",
    name: "Keyword Gap",
    score: 72,
    insights: ["Missing 23 conversational keywords"],
    issues: ["Over‑reliance on legacy SEO"],
    recommendations: ["Map conversational intents"],
  },
  {
    id: "trustSignals",
    name: "Trust Signals (EEAT)",
    score: 88,
    insights: ["Strong authority sites reference brand"],
    issues: ["Few expert bios"],
    recommendations: ["Add author profiles, citations"],
  },
  {
    id: "contentFreshness",
    name: "Content Freshness",
    score: 91,
    insights: ["Most key pages updated in last 30 days"],
    issues: ["Stale long‑tail content"],
    recommendations: ["Rotate AI‑trending topics"],
  },
  {
    id: "technicalAiSeo",
    name: "Technical AI‑SEO",
    score: 79,
    insights: ["Schema markup present"],
    issues: ["No conversational FAQ schema"],
    recommendations: ["Add QA structured data"],
  },
  {
    id: "competitorBenchmark",
    name: "Competitor Benchmark",
    score: 82,
    insights: ["Leads Adidas by 12% in AI visibility"],
    issues: ["Lags one emerging competitor"],
    recommendations: ["Close specific topic gaps"],
  },
  {
    id: "voiceSearch",
    name: "Voice & Chat Search",
    score: 67,
    insights: ["Brand rarely suggested in generic queries"],
    issues: ["Answers sound like ads"],
    recommendations: ["Create neutral, helper‑style content"],
  },
];
