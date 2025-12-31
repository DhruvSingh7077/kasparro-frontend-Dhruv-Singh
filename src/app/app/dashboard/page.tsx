"use client";

import { useState, useEffect } from "react";
import { Eye, Shield, Target } from "lucide-react";
import {
  fetchDashboardData,
  fetchBrands,
  type DashboardData,
  type Brand,
} from "@/lib/api";
import { MetricCard } from "@/components/ui/dashboard/MetricCard";
import { BrandSelector } from "@/components/ui/dashboard/BrandSelector";
import { LastAuditCard } from "@/components/ui/dashboard/LastAuditCard";
import { DashboardHeader } from "@/components/ui/dashboard/DashboardHeader";

export default function DashboardPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<string>("");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch brands on mount
  useEffect(() => {
    async function loadBrands() {
      try {
        const fetchedBrands = await fetchBrands();
        setBrands(fetchedBrands);
        //  FIX: Safely access first brand with optional chaining
        const firstBrand = fetchedBrands[0];
        if (firstBrand?.id) {
          setSelectedBrandId(firstBrand.id);
        }
      } catch (err) {
        setError("Failed to load brands. Please try again later.");
        console.error(err);
      }
    }
    loadBrands();
  }, []);

  // Fetch dashboard data when brand changes
  useEffect(() => {
    if (!selectedBrandId) return;

    async function loadDashboardData() {
      try {
        setLoading(true);
        setError(null);
        const dashboardData = await fetchDashboardData(selectedBrandId);
        setData(dashboardData);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, [selectedBrandId]);

  if (loading && !data) {
    return (
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-zinc-200 rounded w-1/3"></div>
            <div className="h-12 bg-zinc-200 rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-zinc-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <DashboardHeader />

        <BrandSelector
          brands={brands}
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
