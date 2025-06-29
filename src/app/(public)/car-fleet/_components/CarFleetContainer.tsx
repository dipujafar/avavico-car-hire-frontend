"use client";
import Categories from "@/components/shared/categories/Categories";
import AllCar from "./AllCar";
import PriceCategory from "./PriceCategory";
import { FilterSort } from "./FilterSort";
import { SmallDeviceFilter } from "./SmallDeviceFilter";
import ReviewCategories from "@/components/shared/categories/ReviewCategories";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { useSearchParams } from "next/navigation";
import {
  useGetCarBrandsQuery,
  useGetCarLocationsQuery,
  useGetCarTypeQuery,
  useGetFuelTypeQuery,
} from "@/redux/api/carFilterApi";
import { ICar } from "@/types";
import { useDebounce } from "use-debounce";

const CarFleetContainer = () => {
  //  ------------------ get filter data --------------------
  const { data: fuelTypeData, isLoading: fuelTypeLoading } =
    useGetFuelTypeQuery(undefined);

  const { data: carBrandsData, isLoading: carBrandsLoading } =
    useGetCarBrandsQuery(undefined);
  const { data: carLocationsData, isLoading: carLocationsLoading } =
    useGetCarLocationsQuery(undefined);
  const { data: carTypeFilterData, isLoading: carTypeFilterLoading } =
    useGetCarTypeQuery(undefined);

  // ------------------- get all cars from database ---------------------
  const limit = useSearchParams()?.get("limit");
  const page = useSearchParams()?.get("page");
  const price = useSearchParams()?.get("price");
  const fuelType = useSearchParams()?.get("fuelType");
  const brand = useSearchParams()?.get("brand");
  const carType = useSearchParams()?.get("carType");
  const rentingLocation = useSearchParams()?.get("rentingLocation");
  const [searchPrice] = useDebounce(price, 500);

  // --------------------- set queries ---------------------
  const query: Record<string, string | number> = {};
  query["limit"] = Number(limit) || 9;
  query["page"] = Number(page) || 1;
  if (price) {
    query["minPrice"] = Number(searchPrice?.split("-")?.[0]);
    query["maxPrice"] = Number(searchPrice?.split("-")?.[1]);
  }

  if (fuelType) {
    if (fuelType === "all") {
      delete query["fuelType"];
    } else {
      query["fuelType"] = fuelType;
    }
  }

  if (brand) {
    if (brand === "all") {
      delete query["brand"];
    } else {
      query["brand"] = brand;
    }
  }

  if (carType) {
    if (carType === "all") {
      delete query["bodyStyle"];
    } else {
      query["bodyStyle"] = carType;
    }
  }

  if (rentingLocation) {
    if (rentingLocation === "all") {
      delete query["rentingLocation.city"];
    } else {
      query["rentingLocation.city"] = rentingLocation;
    }
  }

  const { data: allCardData, isLoading } = useGetAllCarsQuery(query);
  // ------------------------------------------------------------- //

  // ------------------ get high price car ---------------------
  const highPriceData = allCardData?.data?.car?.reduce(
    (max: ICar, car: ICar) => {
      return car.price > max.price ? car : max;
    },
    allCardData?.data?.car?.[0]
  );
  // ----------------------------------------------------------------
  return (
    <div className=" grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5	lg:gap-8 gap-4 xl:mt-8 mt-4">
      <div className=" space-y-3 hidden lg:block">
        <PriceCategory highPrice={highPriceData?.price}></PriceCategory>
        <Categories
          title="Car Brands"
          data={carBrandsData?.data}
          filterName="brand"
          loading={carBrandsLoading}
          checkedItem={brand || "all"}
        ></Categories>
        <Categories
          title="Car type"
          data={carTypeFilterData?.data}
          filterName="carType"
          loading={carTypeFilterLoading}
          checkedItem={carType || "all"}
        ></Categories>
        {/* <Categories
          title="Car Amenities"
          data={carAmenitiesFilterData}
        ></Categories> */}
        <Categories
          title="Fuel Type"
          data={fuelTypeData?.data}
          filterName="fuelType"
          loading={fuelTypeLoading}
          checkedItem={fuelType || "all"}
        ></Categories>
        <ReviewCategories title="Review Score"></ReviewCategories>
        <Categories
          title="Renting Location"
          data={carLocationsData?.data}
          filterName="rentingLocation"
          loading={carLocationsLoading}
          checkedItem={rentingLocation || "all"}
        ></Categories>
      </div>

      <div className="2xl:col-span-4 xl:col-span-3 md:col-span-2 ">
        {/* =============================== categories ========================== */}
        <div className="flex justify-between items-center gap-x-5  mb-4 ">
          <FilterSort
            limit={Number(limit) || 9}
            totalCars={allCardData?.data?.meta?.total || 0}
          ></FilterSort>

          <div className="lg:hidden block">
            <SmallDeviceFilter
              cardBrandsData={carBrandsData?.data}
              cardBrandsLoading={carBrandsLoading}
              carTypesData={carTypeFilterData?.data}
              carTypesLoading={carTypeFilterLoading}
              fuelTypesData={fuelTypeData?.data}
              fuelTypesLoading={fuelTypeLoading}
              carLocationsData={carLocationsData?.data}
              carLocationsLoading={carLocationsLoading}
              highPriceData={highPriceData?.price}
              totalCars={allCardData?.data?.meta?.total}
            ></SmallDeviceFilter>
          </div>
        </div>
        {/* ========================= all products ========================== */}
        <AllCar data={allCardData?.data?.car} isLoading={isLoading}></AllCar>

        <PaginationSection
          totalItems={allCardData?.data?.meta?.total}
          id={"car-section"}
        ></PaginationSection>
      </div>
    </div>
  );
};

export default CarFleetContainer;
