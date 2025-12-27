"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Database,
  Shield,
  Link2,
  Target,
  BarChart3,
  Zap,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// Mock audit data structure
const auditModules = [
  {
    id: "brand-presence",
    name: "Brand Presence Analysis",
    icon: Globe,
    score: 94,
    status: "excellent",
  },
  {
    id: "context-coverage",
    name: "Context Coverage Audit",
    icon: Database,
    score: 88,
    status: "good",
  },
  {
    id: "trust-signals",
    name: "Trust Signal Detection",
    icon: Shield,
    score: 92,
    status: "excellent",
  },
  {
    id: "citations",
    name: "Citation & Attribution",
    icon: Link2,
    score: 76,
    status: "moderate",
  },
  {
    id: "keyword-mapping",
    name: "Keyword Entity Mapping",
    icon: Target,
    score: 68,
    status: "needs-improvement",
  },
  {
    id: "competitive",
    name: "Competitive Intelligence",
    icon: BarChart3,
    score: 82,
    status: "good",
  },
  {
    id: "retrieval",
    name: "Retrieval Optimization",
    icon: Zap,
    score: 71,
    status: "moderate",
  },
];

const moduleDetails = {
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

export default function AuditPage() {
  const [selectedModule, setSelectedModule] = useState(auditModules[0].id);
  const currentModule = auditModules.find((m) => m.id === selectedModule)!;
  const details = moduleDetails[selectedModule as keyof typeof moduleDetails];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-orange-600";
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      excellent: "bg-green-100 text-green-700 border-green-300",
      good: "bg-blue-100 text-blue-700 border-blue-300",
      moderate: "bg-yellow-100 text-yellow-700 border-yellow-300",
      "needs-improvement": "bg-orange-100 text-orange-700 border-orange-300",
    };
    return styles[status as keyof typeof styles] || styles.moderate;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="w-full flex justify-center pt-6 px-4">
        <div className="max-w-6xl w-full mx-auto rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-3 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="text-sm text-zinc-500 hidden sm:inline">
              kasparro.io
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="/platform"
              className="hover:text-black transition-colors"
            >
              Platform
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link
              href="/pricing"
              className="hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex text-sm">
              Log in
            </Button>
            <Button
              asChild
              className="rounded-full bg-black hover:bg-zinc-800 text-sm"
            >
              <Link href="/app/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <section className="mt-12 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              AI-SEO Audit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Brand Audit Report
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive analysis across 7 dimensions of AI visibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Module List */}
            <aside className="lg:col-span-1">
              <Card className="bg-white border-zinc-200 shadow-lg sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">Audit Modules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {auditModules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setSelectedModule(module.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        selectedModule === module.id
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-sm"
                          : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedModule === module.id
                              ? "bg-gradient-to-br from-blue-600 to-purple-600"
                              : "bg-zinc-100"
                          }`}
                        >
                          <module.icon
                            className={`w-5 h-5 ${
                              selectedModule === module.id
                                ? "text-white"
                                : "text-zinc-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-zinc-900">
                            {module.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-2xl font-bold ${getScoreColor(
                            module.score
                          )}`}
                        >
                          {module.score}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getStatusBadge(module.status)}`}
                        >
                          {module.status.replace("-", " ")}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </aside>

            {/* Main Panel - Module Details */}
            <main className="lg:col-span-2 space-y-6">
              {/* Header */}
              <Card className="bg-white border-zinc-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <currentModule.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-1">
                          {currentModule.name}
                        </h2>
                        <Badge
                          variant="outline"
                          className={getStatusBadge(currentModule.status)}
                        >
                          {currentModule.status.replace("-", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-600 mb-1">
                        Overall Score
                      </p>
                      <p
                        className={`text-5xl font-bold ${getScoreColor(
                          details.score
                        )}`}
                      >
                        {details.score}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Insights */}
              <Card className="bg-white border-zinc-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {details.insights.map((insight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-zinc-700">{insight}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Issues / Flags */}
              <Card className="bg-white border-zinc-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Issues & Flags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {details.issues.map((issue, i) => (
                      <div
                        key={i}
                        className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-zinc-900">
                            {issue.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className={`${
                              issue.severity === "high"
                                ? "bg-red-100 text-red-700 border-red-300"
                                : issue.severity === "medium"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                                : "bg-blue-100 text-blue-700 border-blue-300"
                            }`}
                          >
                            {issue.severity} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-600">
                          {issue.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="bg-white border-zinc-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {details.recommendations.map((rec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg hover:shadow-sm transition-shadow"
                      >
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-zinc-700 pt-1">{rec}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}
