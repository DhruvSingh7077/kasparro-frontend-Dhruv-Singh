"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Brain,
  FileText,
  Globe,
  Shield,
  Link2,
  Target,
  BarChart3,
  Zap,
  ArrowRight,
  Package,
  Sparkles,
} from "lucide-react";

export default function ArchitecturePage() {
  const inputComponents = [
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

  const auditModules = [
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

  const outputSurfaces = [
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
            >
              <Brain className="w-3 h-3 mr-1" />
              System Architecture
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Kasparro Works
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Understanding the pipeline that analyzes AI visibility data
            </p>
          </div>

          {/* Architecture Overview Diagram */}
          <Card className="bg-white border-zinc-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Pipeline Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Stage 1: Input */}
                  <div className="relative">
                    <div className="text-center mb-4">
                      <Badge className="bg-blue-600">Stage 1</Badge>
                    </div>
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-3">
                            <Database className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-1 text-blue-900">
                            InputAssembler
                          </h3>
                          <p className="text-xs text-blue-700">
                            Data Collection Layer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Stage 2: Context */}
                  <div className="relative">
                    <div className="text-center mb-4">
                      <Badge className="bg-purple-600">Stage 2</Badge>
                    </div>
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-3">
                            <Package className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-1 text-purple-900">
                            ContextPack
                          </h3>
                          <p className="text-xs text-purple-700">
                            Data Enrichment Layer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>

                  {/* Stage 3: Processing */}
                  <div className="relative">
                    <div className="text-center mb-4">
                      <Badge className="bg-pink-600">Stage 3</Badge>
                    </div>
                    <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-3">
                            <Brain className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-1 text-pink-900">
                            Audit Modules
                          </h3>
                          <p className="text-xs text-pink-700">
                            Analysis Layer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Arrow */}
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>

                  {/* Stage 4: Output */}
                  <div className="relative">
                    <div className="text-center mb-4">
                      <Badge className="bg-green-600">Stage 4</Badge>
                    </div>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-3">
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-1 text-green-900">
                            Output Surfaces
                          </h3>
                          <p className="text-xs text-green-700">
                            Presentation Layer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* InputAssembler Details */}
            <Card className="bg-white border-zinc-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Database className="w-5 h-5 text-blue-600" />
                  InputAssembler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 mb-4">
                  Collects and normalizes data from multiple sources to build a
                  comprehensive brand profile.
                </p>
                <div className="space-y-3">
                  {inputComponents.map((component, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <component.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-zinc-900">
                          {component.name}
                        </p>
                        <p className="text-xs text-zinc-600">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ContextPack Details */}
            <Card className="bg-white border-zinc-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Package className="w-5 h-5 text-purple-600" />
                  ContextPack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 mb-4">
                  Enriches raw data with semantic context, entity relationships,
                  and industry benchmarks.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      name: "Entity Resolution",
                      desc: "Maps brand mentions to canonical entities",
                    },
                    {
                      name: "Semantic Tagging",
                      desc: "Identifies topics and intent signals",
                    },
                    {
                      name: "Relationship Mapping",
                      desc: "Builds entity and topic graphs",
                    },
                    {
                      name: "Industry Context",
                      desc: "Adds competitive and market data",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-zinc-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-zinc-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Audit Modules Grid */}
          <Card className="bg-white border-zinc-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-pink-600" />7 Audit Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-6">
                Each module analyzes a specific dimension of AI visibility using
                specialized algorithms and heuristics.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {auditModules.map((module, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div
                      className={`w-full aspect-square bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xs text-center text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">
                      {module.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Output Surfaces */}
          <Card className="bg-white border-zinc-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-green-600" />
                Output Surfaces
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-4">
                Multiple interfaces for consuming audit insights and taking
                action.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outputSurfaces.map((surface, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <surface.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">
                        {surface.name}
                      </p>
                      <p className="text-sm text-zinc-600">
                        {surface.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Flow Notes */}
          <Card className="bg-gradient-to-br from-zinc-100 to-zinc-50 border-zinc-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-zinc-900">
                    System Design Principles
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        <strong>Modularity:</strong> Each audit module operates
                        independently with a consistent interface
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        <strong>Scalability:</strong> InputAssembler and
                        ContextPack are designed for parallel processing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        <strong>Extensibility:</strong> New audit modules can be
                        added without modifying core pipeline
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        <strong>Data Integrity:</strong> All data
                        transformations are logged and auditable
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
