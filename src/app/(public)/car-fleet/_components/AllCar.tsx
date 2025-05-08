import ProductCard from "@/components/shared/cards/ProductCard";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { carData } from "@/lib/dummyData";
import React from "react";

const AllCar = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3     gap-4 xl:gap-6 ">
        {carData?.map((carData) => (
          // @ts-ignore
          <ProductCard data={carData} key={carData.id}></ProductCard>
        ))}
      </div>
      <PaginationSection></PaginationSection>
    </>
  );
};

export default AllCar;
