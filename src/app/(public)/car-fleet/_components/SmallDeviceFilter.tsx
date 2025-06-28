"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PriceCategory from "./PriceCategory";
import { SlidersHorizontal } from "lucide-react";
import Categories from "@/components/shared/categories/Categories";
import { useSearchParams } from "next/navigation";

export function SmallDeviceFilter(props: any) {
  const fuelType = useSearchParams()?.get("fuelType");
  const brand = useSearchParams()?.get("brand");
  const carType = useSearchParams()?.get("carType");
  const rentingLocation = useSearchParams()?.get("rentingLocation");

  const {
    highPriceData,
    carLocationsLoading,
    carLocationsData,
    fuelTypesLoading,
    fuelTypesData,
    carTypesLoading,
    carTypesData,
    cardBrandsLoading,
    cardBrandsData,
    totalCars,
  } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SlidersHorizontal />
      </SheetTrigger>
      <SheetContent side={"left"} className="h-screen overflow-scroll ">
        <div className="2xl:space-y-10 space-y-6 mt-10 px-2 mb-10 ">
          <PriceCategory highPrice={highPriceData}></PriceCategory>
          <Categories
            title="Car Brands"
            data={cardBrandsData}
            filterName="brand"
            loading={cardBrandsLoading}
            checkedItem={brand || "all"}
          ></Categories>
          <Categories
            title="Car type"
            data={carTypesData}
            filterName="carType"
            loading={carTypesLoading}
            checkedItem={carType || "all"}
          ></Categories>
          {/* <Categories
            title="Car Amenities"
            data={carAmenitiesFilterData}
          ></Categories> */}
          <Categories
            title="Fuel Type"
            loading={fuelTypesLoading}
            filterName="fuelType"
            data={fuelTypesData}
            checkedItem={fuelType || "all"}
          ></Categories>
          <Categories
            title="Renting Location"
            filterName="rentingLocation"
            data={carLocationsData}
            loading={carLocationsLoading}
            checkedItem={rentingLocation || "all"}
          ></Categories>
        </div>
      </SheetContent>
    </Sheet>
  );
}
