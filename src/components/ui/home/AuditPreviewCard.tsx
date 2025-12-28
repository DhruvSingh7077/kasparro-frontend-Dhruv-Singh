import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AuditModulePreview {
  name: string;
  status: "complete" | "in-progress";
  score?: number;
}

export function AuditPreviewCard({
  modules,
}: {
  modules: AuditModulePreview[];
}) {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-8 -right-4 w-56 h-72 rounded-[32px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -z-10 opacity-90" />

        <div className="relative rounded-[32px] bg-white shadow-2xl border border-zinc-200 p-6">
          <div className="space-y-4">
            <AuditHeader />
            <ScoreCards />
            <ModuleList modules={modules} />
            <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View Full Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuditHeader() {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium">Live Audit</span>
      </div>
      <Badge variant="outline" className="text-xs">
        AI-Powered
      </Badge>
    </div>
  );
}

function ScoreCards() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ScoreCard
        title="AI Visibility"
        score={87}
        trend="↑ 12% this week"
        color="blue"
      />
      <ScoreCard
        title="Trust Score"
        score={92}
        trend="E-E-A-T Optimized"
        color="purple"
      />
    </div>
  );
}

function ScoreCard({
  title,
  score,
  trend,
  color,
}: {
  title: string;
  score: number;
  trend: string;
  color: "blue" | "purple";
}) {
  return (
    <Card
      className={`bg-gradient-to-br from-${color}-50 to-${color}-100 border-${color}-200`}
    >
      <CardContent className="p-4">
        <p className={`text-xs text-${color}-700 font-medium mb-1`}>{title}</p>
        <p className={`text-3xl font-bold text-${color}-900`}>{score}</p>
        <p className={`text-xs text-${color}-600 mt-1`}>{trend}</p>
      </CardContent>
    </Card>
  );
}

function ModuleList({ modules }: { modules: AuditModulePreview[] }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-zinc-600 uppercase tracking-wide">
        Audit Modules
      </p>
      {modules.map((module, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-200"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                module.status === "complete"
                  ? "bg-green-500"
                  : "bg-yellow-500 animate-pulse"
              }`}
            />
            <span className="text-sm font-medium">{module.name}</span>
          </div>
          {module.score && (
            <span className="text-sm font-bold">{module.score}</span>
          )}
        </div>
      ))}
    </div>
  );
}
