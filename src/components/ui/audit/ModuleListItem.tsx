import { Badge } from "@/components/ui/badge";
import { AuditModuleSummary } from "@/lib/audit-data";

interface ModuleListItemProps {
  module: AuditModuleSummary;
  isSelected: boolean;
  onClick: () => void;
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

export function ModuleListItem({
  module,
  isSelected,
  onClick,
}: ModuleListItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all ${
        isSelected
          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-sm"
          : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-sm text-zinc-900">{module.name}</p>
        <span className={`text-2xl font-bold ${getScoreColor(module.score)}`}>
          {module.score}
        </span>
      </div>
      <Badge
        variant="outline"
        className={`text-xs ${getStatusBadge(module.status)}`}
      >
        {module.status.replace("-", " ")}
      </Badge>
    </button>
  );
}
