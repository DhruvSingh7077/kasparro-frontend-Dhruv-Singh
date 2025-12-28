import { Card, CardContent } from "@/components/ui/card";
import { Database, Brain, FileText, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export function AuditPipelineSection() {
  return (
    <section className="mt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Audit Pipeline
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            From data collection to actionable insights—here&apos;s how Kasparro
            analyzes your AI visibility.
          </p>
        </div>
        <PipelineGrid />
      </div>
    </section>
  );
}

function PipelineGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 z-0" />
      <PipelineStep
        step="1"
        title="Input"
        icon={Database}
        color="blue"
        description="InputAssembler collects brand data from multiple sources."
        items={[
          "Website content & structure",
          "Public APIs & datasets",
          "Social signals & mentions",
          "Industry context data",
        ]}
      />
      <PipelineStep
        step="2"
        title="Process"
        icon={Brain}
        color="purple"
        description="7 Audit Modules analyze different dimensions of AI visibility."
        items={[
          "Brand entity recognition",
          "Trust signal evaluation",
          "Context coverage analysis",
          "Competitive benchmarking",
        ]}
      />
      <PipelineStep
        step="3"
        title="Output"
        icon={FileText}
        color="pink"
        description="Actionable Reports with scores, insights, and recommendations."
        items={[
          "AI Visibility Score (0-100)",
          "Key issues & flags",
          "Optimization roadmap",
          "Competitive positioning",
        ]}
      />
    </div>
  );
}

interface PipelineStepProps {
  step: string;
  title: string;
  icon: any;
  color: "blue" | "purple" | "pink";
  description: string;
  items: string[];
}

function PipelineStep({
  step,
  title,
  icon: Icon,
  color,
  description,
  items,
}: PipelineStepProps) {
  return (
    <Card
      className={`relative z-10 border-2 border-${color}-200 bg-gradient-to-br from-${color}-50 to-white shadow-lg hover:shadow-xl transition-all`}
    >
      <CardContent className="p-6">
        <div
          className={`w-14 h-14 bg-gradient-to-br from-${color}-600 to-${
            color === "blue" ? "cyan" : color === "purple" ? "pink" : "red"
          }-600 rounded-2xl flex items-center justify-center mb-4`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="mb-3 flex items-center gap-2">
          <Badge className={`bg-${color}-600`}>Step {step}</Badge>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-zinc-600 mb-4">
          <strong className="text-black">{description}</strong>
        </p>
        <ul className="space-y-2 text-sm text-zinc-700">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 text-${color}-600 mt-0.5 flex-shrink-0`}
              />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
