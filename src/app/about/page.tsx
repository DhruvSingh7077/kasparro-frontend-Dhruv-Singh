"use client";

import { MarketingNavbar } from "@/components/ui/marketing-navbar";
import { AboutHero } from "@/components/ui/about/AboutHero";
import { MissionSection } from "@/components/ui/about/MissionSection";
import { PhilosophySection } from "@/components/ui/about/PhilosophySection";
import { VisionSection } from "@/components/ui/about/VisionSection";
import { FounderSection } from "@/components/ui/about/FounderSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      <MarketingNavbar activePage="about" />
      <AboutHero />
      <MissionSection />
      <PhilosophySection />
      <VisionSection />
      <FounderSection />
    </main>
  );
}
