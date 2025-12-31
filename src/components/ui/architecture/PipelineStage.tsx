import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { ComponentType } from "react";
type ColorScheme = "blue" | "purple" | "pink" | "green";

interface PipelineStageProps {
  stageNumber: number;
  title: string;
  subtitle: string;
  icon: LucideIcon | ComponentType<any>;
  //   colorScheme: "blue" | "purple" | "pink" | "green";
  colorScheme: ColorScheme;

  showArrow?: boolean;
}

const colorSchemes = {
  blue: {
    badge: "bg-blue-600",
    gradient: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "from-blue-600 to-cyan-600",
    text: "text-blue-900",
    subtitle: "text-blue-700",
    arrow: "text-blue-600",
  },
  purple: {
    badge: "bg-purple-600",
    gradient: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "from-purple-600 to-pink-600",
    text: "text-purple-900",
    subtitle: "text-purple-700",
    arrow: "text-purple-600",
  },
  pink: {
    badge: "bg-pink-600",
    gradient: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    iconBg: "from-pink-600 to-rose-600",
    text: "text-pink-900",
    subtitle: "text-pink-700",
    arrow: "text-pink-600",
  },
  green: {
    badge: "bg-green-600",
    gradient: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "from-green-600 to-emerald-600",
    text: "text-green-900",
    subtitle: "text-green-700",
    arrow: "text-green-600",
  },
};

export function PipelineStage({
  stageNumber,
  title,
  subtitle,
  icon: Icon,
  colorScheme,
  showArrow = true,
}: PipelineStageProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <Badge className={colors.badge}>Stage {stageNumber}</Badge>
      </div>
      <Card
        className={`bg-gradient-to-br ${colors.gradient} ${colors.border} shadow-lg`}
      >
        <CardContent className="pt-6">
          <div className="text-center mb-4">
            <div
              className={`w-16 h-16 mx-auto bg-gradient-to-br ${colors.iconBg} rounded-2xl flex items-center justify-center mb-3`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className={`font-bold text-lg mb-1 ${colors.text}`}>{title}</h3>
            <p className={`text-xs ${colors.subtitle}`}>{subtitle}</p>
          </div>
        </CardContent>
      </Card>
      {showArrow && (
        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
          <ArrowRight className={`w-6 h-6 ${colors.arrow}`} />
        </div>
      )}
    </div>
  );
}
