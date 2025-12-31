// src/lib/api.ts

export interface DashboardData {
  aiVisibilityScore: number;
  visibilityTrend: number;
  trustScore: number;
  trustTrend: number;
  keywordCoverage: number;
  coverageTrend: number;
  lastAudit: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

/**
 * Fetches dashboard data from API
 */
export async function fetchDashboardData(
  brandId: string
): Promise<DashboardData> {
  try {
    const response = await fetch(`/api/dashboard/${brandId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure fresh data
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
}

/**
 * Fetches list of available brands from API
//  */
// export async function fetchBrands(): Promise<Brand[]> {
//   try {
//     const response = await fetch("/api/brands", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "force-cache", // Brands don't change often
//     });

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Failed to fetch brands:", error);
//     throw error;
//   }
// }
// src/lib/api.ts - Make fetchBrands() return empty array
export async function fetchBrands(): Promise<Brand[]> {
  try {
    const response = await fetch("/api/brands", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
    });

    if (!response.ok) {
      console.warn(`Brands API: ${response.status}`); // warn not error
      return []; // ✅ Never throw
    }

    return await response.json();
  } catch (error) {
    console.error("fetchBrands failed:", error);
    return []; // ✅ Always return array
  }
}
