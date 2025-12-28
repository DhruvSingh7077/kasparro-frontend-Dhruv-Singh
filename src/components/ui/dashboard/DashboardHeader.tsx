import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface DashboardHeaderProps {
  onNewAudit?: () => void;
}

export function DashboardHeader({ onNewAudit }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">Brand Overview</h1>
        <p className="text-zinc-600">
          Monitor your AI visibility metrics at a glance.
        </p>
      </div>
      <Button
        className="bg-blue-600 hover:bg-blue-700 rounded-full"
        onClick={onNewAudit}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Run New Audit
      </Button>
    </div>
  );
}
