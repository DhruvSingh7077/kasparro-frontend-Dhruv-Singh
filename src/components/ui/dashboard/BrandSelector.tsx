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
  brands,
  selectedBrandId,
  onBrandChange,
}: BrandSelectorProps) {
  return (
    <Card className="bg-white border-zinc-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <label className="text-sm text-zinc-600 font-medium">
            Select brand:
          </label>
          <Select value={selectedBrandId} onValueChange={onBrandChange}>
            <SelectTrigger className="w-full sm:w-64 bg-white border-zinc-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-zinc-200">
              {brands.map((brand) => (
                <SelectItem
                  key={brand.id}
                  value={brand.id}
                  className="text-zinc-900 focus:bg-zinc-100"
                >
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
