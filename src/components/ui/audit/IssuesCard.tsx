import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

interface Issue {
  severity: "high" | "medium" | "low";
  title: string;
  description: string;
}

interface IssuesCardProps {
  issues: Issue[];
}

export function IssuesCard({ issues }: IssuesCardProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          Issues & flags
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {issues.map((issue, i) => (
            <div
              key={i}
              className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-zinc-900">{issue.title}</h3>
                <Badge
                  variant="outline"
                  className={
                    issue.severity === "high"
                      ? "bg-red-100 text-red-700 border-red-300"
                      : issue.severity === "medium"
                      ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                      : "bg-blue-100 text-blue-700 border-blue-300"
                  }
                >
                  {issue.severity} priority
                </Badge>
              </div>
              <p className="text-sm text-zinc-600">{issue.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
