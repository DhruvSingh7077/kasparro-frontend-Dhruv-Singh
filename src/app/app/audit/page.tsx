"use client";

import { useState } from "react";
import { AUDIT_MODULES, MODULE_DETAILS } from "@/lib/audit-data";
import { AuditPageHeader } from "@/components/ui/audit/AuditPageHeader";
import { ModulesSidebar } from "@/components/ui/audit/ModulesSidebar";
import { ModuleHeader } from "@/components/ui/audit/ModuleHeader";
import { InsightsCard } from "@/components/ui/audit/InsightsCard";
import { IssuesCard } from "@/components/ui/audit/IssuesCard";
import { RecommendationsCard } from "@/components/ui/audit/RecommendationsCard";

export default function AuditPage() {
  const fallbackModule = AUDIT_MODULES[0]!;
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    fallbackModule?.id ?? ""
  );

  const currentModule =
    AUDIT_MODULES.find((m) => m.id === selectedModuleId) ?? fallbackModule;

  const details = MODULE_DETAILS[
    selectedModuleId ?? AUDIT_MODULES[0]?.id ?? ""
  ] || {
    score: 0,
    insights: [],
    issues: [],
    recommendations: [],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      {/* <MarketingNavbar activePage="platform" /> */}

      <section className="mt-12 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <AuditPageHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <ModulesSidebar
                modules={AUDIT_MODULES}
                selectedModuleId={selectedModuleId}
                onModuleSelect={setSelectedModuleId}
              />
            </aside>

            <div className="lg:col-span-2 space-y-6">
              <ModuleHeader module={currentModule} score={details.score} />

              <InsightsCard insights={details.insights} />
              <IssuesCard issues={details.issues} />
              <RecommendationsCard recommendations={details.recommendations} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
