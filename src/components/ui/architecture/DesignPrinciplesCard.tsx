import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const principles = [
  {
    title: "Modularity",
    description:
      "Each audit module operates independently with a consistent interface.",
  },
  {
    title: "Scalability",
    description:
      "InputAssembler and ContextPack are designed for parallel processing.",
  },
  {
    title: "Extensibility",
    description:
      "New audit modules can be added without modifying core pipeline.",
  },
  {
    title: "Data Integrity",
    description: "All data transformations are logged and auditable.",
  },
];

export function DesignPrinciplesCard() {
  return (
    <Card className="bg-gradient-to-br from-zinc-100 to-zinc-50 border-zinc-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 text-zinc-900">
              System Design Principles
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              {principles.map((principle, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    <strong>{principle.title}:</strong> {principle.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
