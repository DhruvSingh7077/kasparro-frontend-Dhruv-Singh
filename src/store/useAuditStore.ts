import { create } from "zustand";
import { AuditModule, Brand, BRANDS, MODULES } from "@/lib/data";

interface AuditState {
  selectedBrand?: Brand;
  selectedModule?: AuditModule;
  setBrand: (brandId: string) => void;
  setModule: (moduleId: string) => void;
}

export const useAuditStore = create<AuditState>((set) => ({
  selectedBrand: BRANDS[0],
  selectedModule: MODULES[0],
  setBrand: (brandId) =>
    set(() => ({
      selectedBrand: BRANDS.find((b) => b.id === brandId) ?? BRANDS[0],
    })),
  setModule: (moduleId) =>
    set(() => ({
      selectedModule: MODULES.find((m) => m.id === moduleId) ?? MODULES[0],
    })),
}));
