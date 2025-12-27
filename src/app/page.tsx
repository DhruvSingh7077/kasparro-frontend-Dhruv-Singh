"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="w-full flex justify-center pt-6 px-4">
        <div className="max-w-6xl w-full mx-auto rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-3 shadow-sm flex items-center justify-between">
          {/* Logo/Brand left */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="text-sm text-zinc-500 hidden sm:inline">
              kasparro.io
            </span>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <Link
              href="/platform"
              className="hover:text-black transition-colors"
            >
              Platform
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
          </nav>

          {/* Right side buttons */}
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
      <section className="mt-8 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-100 via-zinc-50 to-white rounded-[32px] border border-zinc-200 shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* -------- LEFT CONTENT BLOCK -------- */}
            <div className="space-y-6 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-sm">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 border-0"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span className="font-semibold">AI-Native SEO Platform</span>
                </Badge>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                Win in the
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Search Era
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-zinc-700 leading-relaxed">
                AI-native SEO & Brand Intelligence for ChatGPT, Gemini, and
                Perplexity. Optimize your brand visibility where search is
                heading.
              </p>

              {/* Trust indicators */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    B
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                </div>
                <p className="text-sm text-zinc-600">
                  Trusted by{" "}
                  <span className="font-semibold text-black">
                    forward-thinking brands
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Button
                  asChild
                  className="rounded-full px-8 py-6 bg-black hover:bg-zinc-800 text-base font-medium w-full sm:w-auto"
                >
                  <Link href="/app/audit" className="flex items-center gap-2">
                    Run AI-SEO Audit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Link
                  href="/platform"
                  className="text-sm font-medium hover:underline flex items-center gap-1 group"
                >
                  See how it works
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* -------- RIGHT VISUAL PANEL -------- */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Gradient background shape */}
                <div className="absolute -top-8 -right-4 w-56 h-72 rounded-[32px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -z-10 opacity-90" />

                {/* Main card container */}
                <div className="relative rounded-[32px] bg-white shadow-2xl border border-zinc-200 p-6">
                  {/* Audit Dashboard Preview */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Live Audit</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        AI-Powered
                      </Badge>
                    </div>

                    {/* Score Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <CardContent className="p-4">
                          <p className="text-xs text-blue-700 font-medium mb-1">
                            AI Visibility
                          </p>
                          <p className="text-3xl font-bold text-blue-900">87</p>
                          <p className="text-xs text-blue-600 mt-1">
                            ↑ 12% this week
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <CardContent className="p-4">
                          <p className="text-xs text-purple-700 font-medium mb-1">
                            Trust Score
                          </p>
                          <p className="text-3xl font-bold text-purple-900">
                            92
                          </p>
                          <p className="text-xs text-purple-600 mt-1">
                            E-E-A-T Optimized
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Module List Preview */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-zinc-600 uppercase tracking-wide">
                        Audit Modules
                      </p>
                      {[
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
                          status: "analyzing",
                          score: null,
                        },
                      ].map((module, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-200"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                module.status === "complete"
                                  ? "bg-green-500"
                                  : "bg-yellow-500 animate-pulse"
                              }`}
                            />
                            <span className="text-sm font-medium">
                              {module.name}
                            </span>
                          </div>
                          {module.score && (
                            <span className="text-sm font-bold">
                              {module.score}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA inside card */}
                    <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      View Full Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- AI PLATFORMS STRIP -------- */}
          <div className="mt-16 pt-8 border-t border-zinc-200">
            <p className="text-center text-sm text-zinc-500 mb-6 font-medium">
              Optimized for AI-First Search Platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg" />
                <span className="font-semibold text-zinc-700">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg" />
                <span className="font-semibold text-zinc-700">Gemini</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg" />
                <span className="font-semibold text-zinc-700">Perplexity</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg" />
                <span className="font-semibold text-zinc-700">Claude</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY AI-SEO SECTION ---------------- */}
      <section className="mt-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              The Paradigm Shift
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why AI-SEO Is Different
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Traditional SEO optimizes for search engines. AI-SEO optimizes for
              how AI models understand, retrieve, and present your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
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
            ].map((column, i) => (
              <Card
                key={i}
                className={`${
                  column.color === "blue"
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
                    : "bg-zinc-50"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            column.color === "blue"
                              ? "bg-blue-600"
                              : "bg-zinc-400"
                          }`}
                        >
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
