import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface LastAuditCardProps {
  lastAuditDate: string;
  onViewReport?: () => void;
}

function formatRelative(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) return `${diffHours} hours ago`;
  return `${Math.floor(diffHours / 24)} days ago`;
}

export function LastAuditCard({
  lastAuditDate,
  onViewReport,
}: LastAuditCardProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-zinc-600" />
            </div>
            <div>
              <p className="text-sm text-zinc-600">Last audit</p>
              <p className="font-semibold text-zinc-900 text-lg">
                {formatRelative(lastAuditDate)}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-zinc-300 hover:bg-zinc-100 rounded-full"
            onClick={onViewReport}
          >
            View full report
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
