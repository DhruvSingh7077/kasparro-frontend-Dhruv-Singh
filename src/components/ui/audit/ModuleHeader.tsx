import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuditModuleSummary } from "@/lib/audit-data";

interface ModuleHeaderProps {
  module: AuditModuleSummary;
  score: number;
}

function getScoreColor(score: number) {
  if (score >= 90) return "text-green-600";
  if (score >= 80) return "text-blue-600";
  if (score >= 70) return "text-yellow-600";
  return "text-orange-600";
}

function getStatusBadge(status: AuditModuleSummary["status"]) {
  const styles = {
    excellent: "bg-green-100 text-green-700 border-green-300",
    good: "bg-blue-100 text-blue-700 border-blue-300",
    moderate: "bg-yellow-100 text-yellow-700 border-yellow-300",
    "needs-improvement": "bg-orange-100 text-orange-700 border-orange-300",
  } as const;
  return styles[status] ?? styles.moderate;
}

export function ModuleHeader({ module, score }: ModuleHeaderProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-1">
              {module.name}
            </h2>
            <Badge variant="outline" className={getStatusBadge(module.status)}>
              {module.status.replace("-", " ")}
            </Badge>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-zinc-600 mb-1">Overall Score</p>
            <p className={`text-5xl font-bold ${getScoreColor(score)}`}>
              {score}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
