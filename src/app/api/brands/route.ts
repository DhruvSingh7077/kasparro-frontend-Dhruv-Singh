// src/app/api/brands/route.ts

import { NextResponse } from "next/server";

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

// Mock data - replace with actual database query
const BRANDS: Brand[] = [
  { id: "brand-1", name: "Acme Corp", logo: "/logos/acme.png" },
  { id: "brand-2", name: "TechStart Inc", logo: "/logos/techstart.png" },
  { id: "brand-3", name: "Global Solutions", logo: "/logos/global.png" },
];

export async function GET() {
  try {
    // TODO: Replace with actual database query
    // const brands = await db.brands.findMany();

    return NextResponse.json(BRANDS, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      { error: "Failed to fetch brands" },
      { status: 500 }
    );
  }
}
