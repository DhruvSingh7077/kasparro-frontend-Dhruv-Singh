"use client";

import { MarketingNavbar } from "@/components/ui/marketing-navbar";
import { HeroSection } from "@/components/ui/home/HeroSection";
import { WhyAISEOSection } from "@/components/ui/home/WhyAISEOSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      <MarketingNavbar activePage="home" />
      <HeroSection />
      <WhyAISEOSection />
    </main>
  );
}
