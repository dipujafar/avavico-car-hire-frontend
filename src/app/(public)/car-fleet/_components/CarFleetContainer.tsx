import Categories from "@/components/shared/categories/Categories";
import { carAmenitiesFilterData } from "@/lib/carAmenitiesFilterData";
import { carBrandsFilterData } from "@/lib/carBrandsFilterData";
import { carTypeFilterData } from "@/lib/carTypeFilterData";
import { fuelTypeFilterData } from "@/lib/fuelTypeFilterData";
import { rentingLocationFilterData } from "@/lib/rentingLocationFilterData";
import AllCar from "./AllCar";
import PriceCategory from "./PriceCategory";
import { FilterSort } from "./FilterSort";
import { SmallDeviceFilter } from "./SmallDeviceFilter";
import ReviewCategories from "@/components/shared/categories/ReviewCategories";

const CarFleetContainer = () => {
  return (
    <div className=" grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5	lg:gap-8 gap-4 xl:mt-8 mt-4">
      <div className=" space-y-3 hidden lg:block">
        <PriceCategory></PriceCategory>
        <Categories title="Car Brands" data={carBrandsFilterData}></Categories>
        <Categories title="Car type" data={carTypeFilterData}></Categories>
        <Categories
          title="Car Amenities"
          data={carAmenitiesFilterData}
        ></Categories>
        <Categories title="Fuel Type" data={fuelTypeFilterData}></Categories>
        <ReviewCategories title="Review Score"></ReviewCategories>
        <Categories
          title="Renting Location"
          data={rentingLocationFilterData}
        ></Categories>
      </div>

      <div className="2xl:col-span-4 xl:col-span-3 md:col-span-2 ">
        {/* =============================== categories ========================== */}
        <div className="flex justify-between items-center gap-x-5  mb-4 ">
          <FilterSort></FilterSort>

          <div className="lg:hidden block">
            <SmallDeviceFilter></SmallDeviceFilter>
          </div>
        </div>
        {/* ========================= all products ========================== */}
        <AllCar></AllCar>
      </div>
    </div>
  );
};

export default CarFleetContainer;
