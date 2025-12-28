"use client";

import { useState } from "react";
import { Eye, Shield, Target } from "lucide-react";
import { DASHBOARD_BRANDS, DASHBOARD_DATA } from "@/lib/audit-data";
import { MetricCard } from "@/components/ui/dashboard/MetricCard";
import { BrandSelector } from "@/components/ui/dashboard/BrandSelector";
import { LastAuditCard } from "@/components/ui/dashboard/LastAuditCard";
import { DashboardHeader } from "@/components/ui/dashboard/DashboardHeader";

export default function DashboardPage() {
  const [selectedBrandId, setSelectedBrandId] = useState(
    DASHBOARD_BRANDS[0].id
  );

  const data = DASHBOARD_DATA[selectedBrandId];

  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <DashboardHeader />

        <BrandSelector
          brands={DASHBOARD_BRANDS}
          selectedBrandId={selectedBrandId}
          onBrandChange={setSelectedBrandId}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="AI Visibility Score"
            icon={Eye}
            value={data.aiVisibilityScore}
            trend={data.visibilityTrend}
            description="Measures how frequently AI models mention your brand."
            colorScheme="blue"
          />

          <MetricCard
            title="Trust Score"
            icon={Shield}
            value={data.trustScore}
            trend={data.trustTrend}
            description="E‑E‑A‑T signals that influence AI model trust."
            colorScheme="purple"
          />

          <MetricCard
            title="Keyword Coverage"
            icon={Target}
            value={`${data.keywordCoverage}%`}
            trend={data.coverageTrend}
            description="Non‑branded queries where your brand appears."
            colorScheme="teal"
          />
        </div>

        <LastAuditCard lastAuditDate={data.lastAudit} />
      </div>
    </section>
  );
}
