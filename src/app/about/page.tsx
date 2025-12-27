"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  ArrowRight,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  Search,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

export default function AboutPage() {
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
            <Link href="/about" className="text-black font-semibold">
              About
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
              <Link href="/app/dashboard">Start Free Audit</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="mt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            About Kasparro
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building the future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              brand visibility
            </span>
          </h1>

          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We're creating the infrastructure for brands to win in the AI-first
            search era—where ChatGPT, Gemini, and Perplexity are becoming the
            new front door to the internet.
          </p>
        </div>
      </section>

      {/* ---------------- MISSION SECTION ---------------- */}
      <section className="mt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-10 blur-3xl" />
              <Card className="relative bg-white border-zinc-200 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Our Mission</h3>
                        <p className="text-sm text-zinc-600">Why we exist</p>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

                    <div className="space-y-4">
                      {[
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
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-sm text-zinc-700 group-hover:text-black transition-colors">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                      <p className="text-sm font-medium text-blue-900">
                        We're building the tools that help brands understand and
                        optimize for how AI models perceive, retrieve, and
                        present information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                The Search Paradigm Has Shifted
              </h2>

              <p className="text-lg text-zinc-700 leading-relaxed">
                For 25 years, brands optimized for Google's algorithms.
                Keywords, backlinks, page speed—these were the pillars of
                digital visibility.
              </p>

              <p className="text-lg text-zinc-700 leading-relaxed">
                But the game has fundamentally changed. AI models like ChatGPT
                and Gemini don't just index web pages—they understand context,
                evaluate trust signals, and synthesize answers from distributed
                sources.
              </p>

              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <p className="text-zinc-700 leading-relaxed">
                  <span className="font-semibold text-black">
                    Traditional SEO
                  </span>{" "}
                  asked: "How do I rank on page one?"
                </p>
                <p className="text-zinc-700 leading-relaxed mt-3">
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-SEO
                  </span>{" "}
                  asks: "How do I become the source AI models cite and trust?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PHILOSOPHY SECTION ---------------- */}
      <section className="mt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Product Philosophy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Think About AI-SEO
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our approach is rooted in system thinking, data precision, and
              engineering rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((principle, i) => (
              <Card
                key={i}
                className="group hover:shadow-xl transition-all duration-300 border-zinc-200 hover:border-zinc-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <principle.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VISION SECTION ---------------- */}
      <section className="mt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 md:p-16 text-white">
              <div className="max-w-3xl">
                <Badge className="mb-6 bg-white/20 text-white border-white/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Our Vision
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  A world where brands own their AI presence
                </h2>

                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  In 5 years, every brand will have an "AI Visibility Strategy"
                  the same way they have an SEO strategy today. We're building
                  the foundation for that future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Real-time AI presence monitoring",
                    "Automated trust signal optimization",
                    "Cross-platform visibility analytics",
                    "Predictive brand intelligence",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <p className="text-white/90">{item}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-zinc-100 rounded-full"
                >
                  <Link href="/platform" className="flex items-center gap-2">
                    See How We're Building It
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- FOUNDER CREDIBILITY SECTION ---------------- */}
      <section className="mt-32 px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Built By Engineers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Founder-Led Engineering
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Kasparro is built by engineers who understand both the technical
              architecture of AI systems and the strategic needs of brands.
            </p>
          </div>

          <Card className="bg-white border-zinc-200 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-3xl font-bold">K</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
                    <p className="text-zinc-600 leading-relaxed mb-4">
                      We're not a marketing agency offering "AI-SEO consulting."
                      We're engineers building product infrastructure that makes
                      AI visibility measurable, actionable, and systematic.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                  {[
                    { label: "System Thinking", value: "First Principles" },
                    { label: "Data Architecture", value: "Production-Grade" },
                    { label: "Product Focus", value: "Engineering-Led" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 bg-zinc-50 rounded-xl border border-zinc-200"
                    >
                      <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold text-zinc-900">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <p className="text-zinc-700 leading-relaxed">
                    We believe the future of brand visibility will be won by
                    those who understand the technical underpinnings of AI
                    retrieval systems—not by those who optimize for vanity
                    metrics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-zinc-600 mb-6">
              Ready to see how Kasparro can transform your AI visibility?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-zinc-800 rounded-full"
              >
                <Link href="/app/audit" className="flex items-center gap-2">
                  Run Your First Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
