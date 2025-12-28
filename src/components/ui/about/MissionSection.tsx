import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { MISSION_ITEMS } from "@/lib/about-data";

export function MissionSection() {
  return (
    <section className="mt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MissionCard items={MISSION_ITEMS} />
          <MissionContent />
        </div>
      </div>
    </section>
  );
}

function MissionCard({ items }: { items: any[] }) {
  return (
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
            <MissionItemsList items={items} />
            <MissionQuote />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MissionItemsList({ items }: { items: any[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 group cursor-pointer">
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
  );
}

function MissionQuote() {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
      <p className="text-sm font-medium text-blue-900">
        We're building the tools that help brands understand and optimize for
        how AI models perceive, retrieve, and present information.
      </p>
    </div>
  );
}

function MissionContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold">The Search Paradigm Has Shifted</h2>
      <p className="text-lg text-zinc-700 leading-relaxed">
        For 25 years, brands optimized for Google's algorithms. Keywords,
        backlinks, page speed—these were the pillars of digital visibility.
      </p>
      <p className="text-lg text-zinc-700 leading-relaxed">
        But the game has fundamentally changed. AI models like ChatGPT and
        Gemini don't just index web pages—they understand context, evaluate
        trust signals, and synthesize answers from distributed sources.
      </p>
      <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
        <p className="text-zinc-700 leading-relaxed">
          <span className="font-semibold text-black">Traditional SEO</span>{" "}
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
  );
}
