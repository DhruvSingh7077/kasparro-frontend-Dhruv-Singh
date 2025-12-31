import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuditModuleSummary } from "@/lib/audit-data";
import { ModuleListItem } from "./ModuleListItem";
import { AlertCircle } from "lucide-react";

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
  // Error handling: Check if modules array is empty or undefined
  if (!modules || modules.length === 0) {
    return (
      <Card className="bg-white border-zinc-200 shadow-lg sticky top-6">
        <CardHeader>
          <CardTitle className="text-lg">Audit Modules</CardTitle>
        </CardHeader>
        <CardContent className="py-8">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-zinc-400" />
            <p className="text-sm text-zinc-500 font-medium">
              No audit modules available
            </p>
            <p className="text-xs text-zinc-400">
              Please run an audit to see module data
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error handling: Ensure selectedModuleId exists in modules
  const isValidSelection = modules.some((m) => m.id === selectedModuleId);
  if (!isValidSelection) {
    //  FIX: Safely access first module with optional chaining
    const firstModule = modules[0];
    if (firstModule?.id) {
      onModuleSelect(firstModule.id);
    }
  }
  return (
    <Card className="bg-white border-zinc-200 shadow-lg sticky top-6">
      <CardHeader>
        <CardTitle className="text-lg">Audit Modules</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {modules.map((module) => {
          // Error handling: Skip modules with invalid data
          if (!module.id || !module.name) {
            console.warn("Skipping invalid module:", module);
            return null;
          }

          return (
            <ModuleListItem
              key={module.id}
              module={module}
              isSelected={selectedModuleId === module.id}
              onClick={() => onModuleSelect(module.id)}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
