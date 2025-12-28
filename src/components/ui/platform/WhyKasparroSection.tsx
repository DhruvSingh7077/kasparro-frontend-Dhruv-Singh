import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Brain, TrendingUp, ArrowRight } from "lucide-react";

export function WhyKasparroSection() {
  return (
    <section className="mt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 md:p-16 text-white">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Why Kasparro?
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                How we're different from traditional SEO tools
              </h2>

              <WhyKasparroFeatures />

              <Button
                asChild
                size="lg"
                className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full"
              >
                <Link href="/app/audit" className="flex items-center gap-2">
                  See It In Action
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function WhyKasparroFeatures() {
  const features = [
    {
      icon: AlertCircle,
      title: "AI-First Architecture",
      description:
        "We don't retrofit traditional SEO metrics. Our platform is built from the ground up to understand how AI models retrieve and present information.",
    },
    {
      icon: Brain,
      title: "Context Understanding",
      description:
        "Traditional tools track keywords. We model semantic relationships, entity graphs, and the contextual frameworks AI models use to understand topics.",
    },
    {
      icon: TrendingUp,
      title: "Actionable Intelligence",
      description:
        "No vanity metrics. Every score, insight, and recommendation is tied to measurable improvements in AI model visibility and citation rates.",
    },
  ];

  return (
    <div className="space-y-6 mb-8">
      {features.map((feature, i) => (
        <WhyFeature key={i} feature={feature} />
      ))}
    </div>
  );
}

function WhyFeature({ feature }: { feature: any }) {
  const Icon = feature.icon;
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-white/80 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
