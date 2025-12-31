// src/app/api/dashboard/[brandId]/route.ts

import { NextResponse } from "next/server";

export interface DashboardData {
  aiVisibilityScore: number;
  visibilityTrend: number;
  trustScore: number;
  trustTrend: number;
  keywordCoverage: number;
  coverageTrend: number;
  lastAudit: string;
}

// Mock data - replace with actual database query
const MOCK_DASHBOARD_DATA: Record<string, DashboardData> = {
  "brand-1": {
    aiVisibilityScore: 78,
    visibilityTrend: 5,
    trustScore: 82,
    trustTrend: 3,
    keywordCoverage: 64,
    coverageTrend: -2,
    lastAudit: "2024-12-28",
  },
  "brand-2": {
    aiVisibilityScore: 65,
    visibilityTrend: -3,
    trustScore: 71,
    trustTrend: 2,
    keywordCoverage: 58,
    coverageTrend: 1,
    lastAudit: "2024-12-25",
  },
  "brand-3": {
    aiVisibilityScore: 88,
    visibilityTrend: 8,
    trustScore: 90,
    trustTrend: 5,
    keywordCoverage: 75,
    coverageTrend: 4,
    lastAudit: "2024-12-30",
  },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ brandId: string }> }
) {
  try {
    const { brandId } = await params;

    // TODO: Replace with actual database query
    // const dashboardData = await db.dashboardMetrics.findUnique({
    //   where: { brandId }
    // });

    const data = MOCK_DASHBOARD_DATA[brandId];

    if (!data) {
      return NextResponse.json({ error: "Brand not found" }, { status: 404 });
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
