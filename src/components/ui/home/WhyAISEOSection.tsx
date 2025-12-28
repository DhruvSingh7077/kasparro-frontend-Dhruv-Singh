import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO_COMPARISON_COLUMNS } from "@/lib/home-data";

export function WhyAISEOSection() {
  return (
    <section className="mt-12 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <ComparisonGrid />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-12">
      <Badge variant="secondary" className="mb-4">
        The Paradigm Shift
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Why AI-SEO Is Different
      </h2>
      <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
        Traditional SEO optimizes for search engines. AI-SEO optimizes for how
        AI models understand, retrieve, and present your brand.
      </p>
    </div>
  );
}

function ComparisonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SEO_COMPARISON_COLUMNS.map((column, i) => (
        <ComparisonCard key={i} column={column} />
      ))}
    </div>
  );
}

function ComparisonCard({ column }: { column: any }) {
  return (
    <Card
      className={`${
        column.color === "blue"
          ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
          : "bg-zinc-50"
      }`}
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{column.title}</h3>
        <ul className="space-y-3">
          {column.items.map((item: string, j: number) => (
            <li key={j} className="flex items-start gap-2">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  column.color === "blue" ? "bg-blue-600" : "bg-zinc-400"
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
  );
}
