"use client";

import { MarketingNavbar } from "@/components/ui/marketing-navbar";
import { PlatformHero } from "@/components/ui/platform/PlatformHero";
import { AuditPipelineSection } from "@/components/ui/platform/AuditPipelineSection";
import { AuditModulesSection } from "@/components/ui/platform/AuditModulesSection";
import { WhyKasparroSection } from "@/components/ui/platform/WhyKasparroSection";
import { DataConsumptionSection } from "@/components/ui/platform/DataConsumptionSection";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      <MarketingNavbar activePage="platform" />
      <PlatformHero />
      <AuditPipelineSection />
      <AuditModulesSection />
      <WhyKasparroSection />
      <DataConsumptionSection />
    </main>
  );
}
