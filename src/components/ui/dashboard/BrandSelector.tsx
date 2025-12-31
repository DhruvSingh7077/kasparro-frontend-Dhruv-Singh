import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Brand {
  id: string;
  name: string;
}

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrandId: string;
  onBrandChange: (brandId: string) => void;
}

export function BrandSelector({
  brands = [],
  selectedBrandId,
  onBrandChange,
}: BrandSelectorProps) {
  const hasBrands = Array.isArray(brands) && brands.length > 0;

  const handleChange = (value: string) => {
    if (typeof onBrandChange === "function") {
      onBrandChange(value);
    } else {
      console.warn("onBrandChange handler not provided");
    }
  };

  // Ensure selected value exists in list
  const isValidSelection = brands.some((b) => b.id === selectedBrandId);
  const safeSelectedId = isValidSelection ? selectedBrandId : undefined;

  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <label className="text-sm text-zinc-600 font-medium">
            Select brand:
          </label>
          {!hasBrands ? (
            <p className="text-sm text-zinc-500">No brands available.</p>
          ) : (
            <Select value={safeSelectedId} onValueChange={handleChange}>
              <SelectTrigger className="w-full sm:w-64 bg-white border-zinc-300">
                <SelectValue placeholder="Choose a brand" />
              </SelectTrigger>

              <SelectContent className="bg-white border-zinc-200">
                {brands.map((brand) => {
                  if (!brand?.id || !brand?.name) {
                    console.warn("Invalid brand object", brand);
                    return null;
                  }

                  return (
                    <SelectItem
                      key={brand.id}
                      value={brand.id}
                      className="text-zinc-900 focus:bg-zinc-100"
                    >
                      {brand.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
