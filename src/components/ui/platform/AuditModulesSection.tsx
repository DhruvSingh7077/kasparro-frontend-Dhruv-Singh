import { Card, CardContent } from "@/components/ui/card";
import { PLATFORM_AUDIT_MODULES } from "@/lib/platform-data";
import { Badge } from "@/components/ui/badge";

export function AuditModulesSection() {
  return (
    <section className="mt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Core Modules
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            7 Dimensions of AI Visibility
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Each module evaluates a critical aspect of how AI models perceive
            and present your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_AUDIT_MODULES.map((module) => (
            <AuditModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditModuleCard({ module }: { module: any }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-zinc-200 hover:border-zinc-300 cursor-pointer">
      <CardContent className="p-6">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <module.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-2">{module.name}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">
          {module.description}
        </p>
      </CardContent>
    </Card>
  );
}
