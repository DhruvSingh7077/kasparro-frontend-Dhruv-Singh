import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import { VISION_FEATURES } from "@/lib/about-data";

export function VisionSection() {
  return (
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
                the same way they have an SEO strategy today. We're building the
                foundation for that future.
              </p>

              <VisionFeaturesList features={VISION_FEATURES} />

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
  );
}

function VisionFeaturesList({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {features.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-white/90">{item}</p>
        </div>
      ))}
    </div>
  );
}
