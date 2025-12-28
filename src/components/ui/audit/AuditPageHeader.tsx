import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AuditPageHeader() {
  return (
    <div className="text-center mb-12">
      <Badge
        variant="secondary"
        className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
      >
        <Sparkles className="w-3 h-3 mr-1" />
        AI‑SEO Audit
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Brand Audit Report
      </h1>
      <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
        Comprehensive analysis across 7 dimensions of AI visibility.
      </p>
    </div>
  );
}
