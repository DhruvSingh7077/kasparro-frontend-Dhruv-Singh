import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { DATA_CATEGORIES, DataCategory } from "@/lib/platform-data";

export function DataConsumptionSection() {
  // --- Safe fallback in case import fails / API breaks ---
  const categories = Array.isArray(DATA_CATEGORIES) ? DATA_CATEGORIES : [];

  const hasCategories = categories.length > 0;

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
            picture of your brand&apos;s AI visibility.
          </p>
        </div>

        {/* --- Error / Empty State Handling --- */}
        {!hasCategories && (
          <div className="p-6 rounded-xl border bg-zinc-50 text-center mb-12">
            <p className="text-zinc-600">
              Data categories are temporarily unavailable.
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              Please refresh or try again later.
            </p>
          </div>
        )}

        {hasCategories && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category, i) => (
              <DataCategoryCard key={i} category={category} />
            ))}
          </div>
        )}

        <CTABlock />
      </div>
    </section>
  );
}

function DataCategoryCard({ category }: { category: DataCategory | null }) {
  const items = Array.isArray(category?.items) ? category.items : [];

  return (
    <Card className="border-zinc-200">
      <CardHeader>
        <CardTitle className="text-xl">
          {category?.title ?? "Untitled Category"}
        </CardTitle>
        {/* ✅ Added: Show the description */}
        {category?.description && (
          <p className="text-sm text-zinc-600 mt-2">{category.description}</p>
        )}
      </CardHeader>

      <CardContent>
        {/* Empty items fallback */}
        {items.length === 0 && (
          <p className="text-zinc-500">No items available.</p>
        )}

        {items.length > 0 && (
          <ul className="space-y-4">
            {items.map((item, j: number) => (
              <li key={j} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-zinc-900">{item.name}</p>
                  <p className="text-sm text-zinc-600 mt-1">
                    {item.simpleDescription}
                  </p>

                  {item.technicalDetails && (
                    <details className="mt-2">
                      <summary className="text-xs text-blue-600 cursor-pointer hover:underline">
                        Technical details
                      </summary>
                      <p className="text-xs text-zinc-500 mt-1 pl-4">
                        {item.technicalDetails}
                      </p>
                    </details>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
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
