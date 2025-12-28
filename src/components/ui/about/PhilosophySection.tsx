import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PHILOSOPHY_PRINCIPLES } from "@/lib/about-data";

export function PhilosophySection() {
  return (
    <section className="mt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Product Philosophy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Think About AI-SEO
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Our approach is rooted in system thinking, data precision, and
            engineering rigor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((principle, i) => (
            <PhilosophyCard key={i} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophyCard({ principle }: { principle: any }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-zinc-200 hover:border-zinc-300">
      <CardContent className="p-6">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <principle.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
        <p className="text-zinc-600 leading-relaxed">{principle.description}</p>
      </CardContent>
    </Card>
  );
}
