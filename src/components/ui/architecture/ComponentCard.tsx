import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";
interface ComponentItem {
  name: string;
  description: string;
  icon: LucideIcon | ComponentType<any>;
}

interface ComponentCardProps {
  title: string;
  icon: LucideIcon | ComponentType<any>;
  description: string;
  items: ComponentItem[];
  colorScheme: "blue" | "purple";
}

export function ComponentCard({
  title,
  icon: TitleIcon,
  description,
  items,
  colorScheme,
}: ComponentCardProps) {
  const colors = {
    blue: {
      titleIcon: "text-blue-600",
      itemBg: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-600",
    },
    purple: {
      titleIcon: "text-purple-600",
      itemBg: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-600",
    },
  };

  const scheme = colors[colorScheme];

  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TitleIcon className={`w-5 h-5 ${scheme.titleIcon}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-600 mb-4">{description}</p>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-3 ${scheme.itemBg} border rounded-lg`}
            >
              <div
                className={`w-8 h-8 ${scheme.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm text-zinc-900">{item.name}</p>
                <p className="text-xs text-zinc-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
