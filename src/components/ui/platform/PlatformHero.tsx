import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";

export function PlatformHero() {
  return (
    <section className="mt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
        >
          <Sparkles className="w-3 h-3 mr-1" />
          Platform Overview
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          AI-Native SEO
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Infrastructure
          </span>
        </h1>

        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
          A complete platform for measuring, optimizing, and tracking your
          brand&apos;s visibility across AI-powered search engines.
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-full bg-black hover:bg-zinc-800"
        >
          <Link href="/app/audit" className="flex items-center gap-2">
            Run Your First Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
