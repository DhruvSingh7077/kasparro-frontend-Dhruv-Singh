import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

export function ArchitectureHeader() {
  return (
    <div className="text-center">
      <Badge
        variant="secondary"
        className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
      >
        <Brain className="w-3 h-3 mr-1" />
        System Architecture
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        How Kasparro Works
      </h1>
      <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
        Understanding the pipeline that analyzes AI visibility data.
      </p>
    </div>
  );
}
