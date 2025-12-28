import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOUNDER_STATS } from "@/lib/about-data";

export function FounderSection() {
  return (
    <section className="mt-32 px-4 pb-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeader />
        <FounderCard />
        <CTABlock />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
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
  );
}

function FounderCard() {
  return (
    <Card className="bg-white border-zinc-200 shadow-xl rounded-3xl overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="space-y-6">
          <FounderIntro />
          <FounderStats stats={FOUNDER_STATS} />
          <FounderPhilosophy />
        </div>
      </CardContent>
    </Card>
  );
}

function FounderIntro() {
  return (
    <div className="flex items-start gap-6">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
        <span className="text-white text-3xl font-bold">K</span>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
        <p className="text-zinc-600 leading-relaxed mb-4">
          We're not a marketing agency offering "AI-SEO consulting." We're
          engineers building product infrastructure that makes AI visibility
          measurable, actionable, and systematic.
        </p>
      </div>
    </div>
  );
}

function FounderStats({
  stats,
}: {
  stats: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="p-4 bg-zinc-50 rounded-xl border border-zinc-200"
        >
          <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">
            {stat.label}
          </p>
          <p className="text-lg font-bold text-zinc-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function FounderPhilosophy() {
  return (
    <div className="pt-6 border-t border-zinc-200">
      <p className="text-zinc-700 leading-relaxed">
        We believe the future of brand visibility will be won by those who
        understand the technical underpinnings of AI retrieval systems—not by
        those who optimize for vanity metrics.
      </p>
    </div>
  );
}

function CTABlock() {
  return (
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
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="/platform">Explore the Platform</Link>
        </Button>
      </div>
    </div>
  );
}
