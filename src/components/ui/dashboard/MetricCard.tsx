import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  value: number | string;
  trend: number;
  description: string;
  colorScheme: "blue" | "purple" | "teal";
}

const colorSchemes = {
  blue: {
    gradient: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    text: "text-blue-900",
    description: "text-blue-700",
  },
  purple: {
    gradient: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    text: "text-purple-900",
    description: "text-purple-700",
  },
  teal: {
    gradient: "from-teal-50 to-teal-100",
    border: "border-teal-200",
    text: "text-teal-900",
    description: "text-teal-700",
  },
};

export function MetricCard({
  title,
  icon: Icon,
  value,
  trend,
  description,
  colorScheme,
}: MetricCardProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <Card
      className={`bg-gradient-to-br ${colors.gradient} ${colors.border} shadow-lg hover:shadow-xl transition-all`}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          <span className={`flex items-center gap-2 ${colors.text}`}>
            <Icon className="w-5 h-5" />
            {title}
          </span>
          {trend > 0 ? (
            <TrendingUp className="w-5 h-5 text-green-600" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-600" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className={`text-5xl font-bold ${colors.text}`}>{value}</div>
          <Badge
            variant={trend > 0 ? "default" : "destructive"}
            className={trend > 0 ? "bg-green-600" : "bg-red-600"}
          >
            {trend > 0 ? "+" : ""}
            {trend}% this week
          </Badge>
          <p className={`text-sm ${colors.description} mt-4`}>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
