"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { AUDIT_MODULES_PREVIEW, AI_PLATFORMS } from "@/lib/home-data";
import { AuditPreviewCard } from "./AuditPreviewCard";

export function HeroSection() {
  return (
    <section className="mt-8 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-100 via-zinc-50 to-white rounded-[32px] border border-zinc-200 shadow-2xl p-8 md:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <HeroContent />

          {/* Visual Panel */}
          <AuditPreviewCard modules={AUDIT_MODULES_PREVIEW} />
        </div>

        {/* AI Platforms Strip */}
        <AIPlatformsStrip platforms={AI_PLATFORMS} />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="space-y-6 max-w-xl">
      <Badge
        variant="secondary"
        className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 border-0"
      >
        <Sparkles className="w-3 h-3 mr-1" />
        <span className="font-semibold">AI-Native SEO Platform</span>
      </Badge>

      <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
        Win in the
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Search Era
        </span>
      </h1>

      <p className="text-lg text-zinc-700 leading-relaxed">
        AI-native SEO & Brand Intelligence for ChatGPT, Gemini, and Perplexity.
        Optimize your brand visibility where search is heading.
      </p>

      <TrustIndicators />
      <CTAButtons />
    </div>
  );
}

function TrustIndicators() {
  return (
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
  );
}

function CTAButtons() {
  return (
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
  );
}

function AIPlatformsStrip({ platforms }: { platforms: any[] }) {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-200">
      <p className="text-center text-sm text-zinc-500 mb-6 font-medium">
        Optimized for AI-First Search Platforms
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {platforms.map((platform, i) => (
          <div
            key={i}
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className={`w-8 h-8 ${platform.gradient} rounded-lg`} />
            <span className="font-semibold text-zinc-700">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
