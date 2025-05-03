import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PriceCategory from "./PriceCategory";
import { SlidersHorizontal } from "lucide-react";
import { carBrandsFilterData } from "@/lib/carBrandsFilterData";
import Categories from "@/components/shared/categories/Categories";
import { carTypeFilterData } from "@/lib/carTypeFilterData";
import { carAmenitiesFilterData } from "@/lib/carAmenitiesFilterData";
import { fuelTypeFilterData } from "@/lib/fuelTypeFilterData";
import { rentingLocationFilterData } from "@/lib/rentingLocationFilterData";

export function SmallDeviceFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SlidersHorizontal />
      </SheetTrigger>
      <SheetContent side={"left"} className="h-screen overflow-scroll ">
        <div className="2xl:space-y-10 space-y-6 mt-10 px-2 mb-10 ">
          <PriceCategory></PriceCategory>
          <Categories
            title="Car Brands"
            data={carBrandsFilterData}
          ></Categories>
          <Categories title="Car type" data={carTypeFilterData}></Categories>
          <Categories
            title="Car Amenities"
            data={carAmenitiesFilterData}
          ></Categories>
          <Categories title="Fuel Type" data={fuelTypeFilterData}></Categories>
          <Categories
            title="Renting Location"
            data={rentingLocationFilterData}
          ></Categories>
        </div>
      </SheetContent>
    </Sheet>
  );
}
