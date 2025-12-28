import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface RecommendationsCardProps {
  recommendations: string[];
}

export function RecommendationsCard({
  recommendations,
}: RecommendationsCardProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <CheckCircle2 className="w-5 h-5 text-purple-600" />
          Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg"
            >
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">{i + 1}</span>
              </div>
              <p className="text-zinc-700 pt-1">{rec}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
