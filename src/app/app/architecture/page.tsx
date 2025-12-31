import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  INPUT_COMPONENTS,
  ARCH_AUDIT_MODULES,
  OUTPUT_SURFACES,
  CONTEXT_PACK_ITEMS,
  PIPELINE_STAGES, // ← NEW
} from "@/lib/architecture-data";
import { ArchitectureHeader } from "@/components/ui/architecture/ArchitectureHeader";
import { PipelineStage } from "@/components/ui/architecture/PipelineStage";
import { ComponentCard } from "@/components/ui/architecture/ComponentCard";
import { ModulesGrid } from "@/components/ui/architecture/ModulesGrid";
import { Database, Package, Brain } from "lucide-react";
import { OutputSurfacesCard } from "@/components/ui/architecture/OutputSurfacesCard";
import { DesignPrinciplesCard } from "@/components/ui/architecture/DesignPrinciplesCard";

export default function ArchitecturePage() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <ArchitectureHeader />

        {/* Pipeline Overview */}
        <Card className="bg-white border-zinc-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              Pipeline Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {PIPELINE_STAGES.map((stage) => (
                <PipelineStage
                  key={stage.stageNumber}
                  stageNumber={stage.stageNumber}
                  title={stage.title}
                  subtitle={stage.subtitle}
                  icon={stage.icon}
                  colorScheme={stage.colorScheme}
                  showArrow={stage.showArrow}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Component Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComponentCard
            title="InputAssembler"
            icon={Database}
            description="Collects and normalizes data from multiple sources to build a comprehensive brand profile."
            items={INPUT_COMPONENTS}
            colorScheme="blue"
          />
          <ComponentCard
            title="ContextPack"
            icon={Package}
            description="Enriches raw data with semantic context, entity relationships, and industry benchmarks."
            items={CONTEXT_PACK_ITEMS}
            colorScheme="purple"
          />
        </div>

        <ModulesGrid modules={ARCH_AUDIT_MODULES} />
        <OutputSurfacesCard surfaces={OUTPUT_SURFACES} />
        <DesignPrinciplesCard />
      </div>
    </section>
  );
}
