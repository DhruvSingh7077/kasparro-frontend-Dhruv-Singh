import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, LucideIcon } from "lucide-react";
import { ComponentType } from "react";

interface Module {
  name: string;
  icon: LucideIcon | ComponentType<any>;
  color: string;
}

interface ModulesGridProps {
  modules: Module[];
}

export function ModulesGrid({ modules }: ModulesGridProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-pink-600" />7 Audit Modules
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-600 mb-6">
          Each module analyzes a specific dimension of AI visibility using
          specialized algorithms and heuristics.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {modules.map((module, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className={`w-full aspect-square bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <module.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-xs text-center text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">
                {module.name}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
