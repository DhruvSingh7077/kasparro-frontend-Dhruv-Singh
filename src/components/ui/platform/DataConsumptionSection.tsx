import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { DATA_CATEGORIES } from "@/lib/platform-data";

export function DataConsumptionSection() {
  return (
    <section className="mt-32 px-4 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Under the Hood
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Data We Consume
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Kasparro analyzes publicly available data to build a comprehensive
            picture of your brand's AI visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {DATA_CATEGORIES.map((category, i) => (
            <DataCategoryCard key={i} category={category} />
          ))}
        </div>

        <CTABlock />
      </div>
    </section>
  );
}

function DataCategoryCard({ category }: { category: any }) {
  return (
    <Card className="border-zinc-200">
      <CardHeader>
        <CardTitle className="text-xl">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {category.items.map((item: string, j: number) => (
            <li key={j} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function CTABlock() {
  return (
    <div className="text-center">
      <p className="text-zinc-600 mb-6 text-lg">
        Ready to understand how AI models see your brand?
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-black hover:bg-zinc-800 rounded-full"
        >
          <Link href="/app/audit" className="flex items-center gap-2">
            Start Your Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </div>
    </div>
  );
}
