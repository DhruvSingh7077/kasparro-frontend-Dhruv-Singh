"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Shield,
  Eye,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Mock data
const brands = [
  { id: "acme-corp", name: "Acme Corp" },
  { id: "techstart", name: "TechStart Inc" },
  { id: "global-retail", name: "Global Retail Co" },
];

const dashboardData = {
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

export default function DashboardPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("acme-corp");
  const data = dashboardData[selectedBrand as keyof typeof dashboardData];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 24) {
      return `${diffHours} hours ago`;
    }
    return `${Math.floor(diffHours / 24)} days ago`;
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
              <Link href="/app/audit">View Audit</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <section className="mt-12 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Brand Overview</h1>
              <p className="text-zinc-600">
                Monitor your AI visibility metrics at a glance
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Run New Audit
            </Button>
          </div>

          {/* Brand Selector */}
          <Card className="bg-white border-zinc-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <label className="text-sm text-zinc-600 font-medium">
                  Select Brand:
                </label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="w-64 bg-white border-zinc-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-zinc-200">
                    {brands.map((brand) => (
                      <SelectItem
                        key={brand.id}
                        value={brand.id}
                        className="text-zinc-900 focus:bg-zinc-100"
                      >
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Visibility Score */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2 text-blue-900">
                    <Eye className="w-5 h-5" />
                    AI Visibility Score
                  </span>
                  {data.visibilityTrend > 0 ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-blue-900">
                    {data.aiVisibilityScore}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        data.visibilityTrend > 0 ? "default" : "destructive"
                      }
                      className={
                        data.visibilityTrend > 0 ? "bg-green-600" : "bg-red-600"
                      }
                    >
                      {data.visibilityTrend > 0 ? "+" : ""}
                      {data.visibilityTrend}% this week
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-700 mt-4">
                    Measures how frequently AI models mention your brand
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust / E-E-A-T Score */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2 text-purple-900">
                    <Shield className="w-5 h-5" />
                    Trust Score
                  </span>
                  {data.trustTrend > 0 ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-purple-900">
                    {data.trustScore}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={data.trustTrend > 0 ? "default" : "destructive"}
                      className={
                        data.trustTrend > 0 ? "bg-green-600" : "bg-red-600"
                      }
                    >
                      {data.trustTrend > 0 ? "+" : ""}
                      {data.trustTrend}% this week
                    </Badge>
                  </div>
                  <p className="text-sm text-purple-700 mt-4">
                    E-E-A-T signals that influence AI model trust
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Non-Branded Keyword Coverage */}
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2 text-teal-900">
                    <Target className="w-5 h-5" />
                    Keyword Coverage
                  </span>
                  {data.coverageTrend > 0 ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-teal-900">
                    {data.keywordCoverage}%
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        data.coverageTrend > 0 ? "default" : "destructive"
                      }
                      className={
                        data.coverageTrend > 0 ? "bg-green-600" : "bg-red-600"
                      }
                    >
                      {data.coverageTrend > 0 ? "+" : ""}
                      {data.coverageTrend}% this week
                    </Badge>
                  </div>
                  <p className="text-sm text-teal-700 mt-4">
                    Non-branded queries where your brand appears
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Audit Info */}
          <Card className="bg-white border-zinc-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-600">Last Audit</p>
                    <p className="font-semibold text-zinc-900 text-lg">
                      {formatDate(data.lastAudit)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100 rounded-full"
                >
                  View Full Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <Card className="bg-white border-zinc-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Quick Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.aiVisibilityScore >= 85 && (
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-green-900">
                        Strong AI Visibility
                      </p>
                      <p className="text-sm text-green-700">
                        Your brand is performing well across AI search platforms
                      </p>
                    </div>
                  </div>
                )}

                {data.trustScore >= 90 && (
                  <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-purple-900">
                        Excellent Trust Signals
                      </p>
                      <p className="text-sm text-purple-700">
                        AI models recognize your brand as authoritative
                      </p>
                    </div>
                  </div>
                )}

                {data.keywordCoverage < 70 && (
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-yellow-900">
                        Improvement Opportunity
                      </p>
                      <p className="text-sm text-yellow-700">
                        Expand coverage in non-branded keyword queries
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
