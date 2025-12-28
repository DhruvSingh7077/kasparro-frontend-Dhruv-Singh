import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, LucideIcon } from "lucide-react";
import { ComponentType } from "react";
interface OutputSurface {
  name: string;
  description: string;
  icon: LucideIcon | ComponentType<any>;
}

interface OutputSurfacesCardProps {
  surfaces: OutputSurface[];
}

export function OutputSurfacesCard({ surfaces }: OutputSurfacesCardProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="w-5 h-5 text-green-600" />
          Output Surfaces
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-600 mb-4">
          Multiple interfaces for consuming audit insights and taking action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {surfaces.map((surface, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <surface.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-zinc-900">{surface.name}</p>
                <p className="text-sm text-zinc-600">{surface.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
