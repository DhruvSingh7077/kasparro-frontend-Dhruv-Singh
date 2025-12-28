import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuditModuleSummary } from "@/lib/audit-data";
import { ModuleListItem } from "./ModuleListItem";

interface ModulesSidebarProps {
  modules: AuditModuleSummary[];
  selectedModuleId: string;
  onModuleSelect: (moduleId: string) => void;
}

export function ModulesSidebar({
  modules,
  selectedModuleId,
  onModuleSelect,
}: ModulesSidebarProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg sticky top-6">
      <CardHeader>
        <CardTitle className="text-lg">Audit Modules</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {modules.map((module) => (
          <ModuleListItem
            key={module.id}
            module={module}
            isSelected={selectedModuleId === module.id}
            onClick={() => onModuleSelect(module.id)}
          />
        ))}
      </CardContent>
    </Card>
  );
}
