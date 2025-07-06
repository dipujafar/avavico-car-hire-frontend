"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddCarModal } from "./AddCarModal";
import { useGetOwnCarsQuery } from "@/redux/api/carApi";
import { CarCardSkeleton } from "@/components/skeletons/CarCardSkeleton";
import { ICar } from "@/types";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { useSearchParams } from "next/navigation";
import Empty from "@/components/ui/empty";

const CarListContainer = () => {
  const [openAddCarModal, setOpenAddCarModal] = useState(false);

  // -------------------------- call api with query params --------------------------//
  const pagePostsLimit = 9;
  const page = useSearchParams()?.get("page");
  const query: Record<string, string | number> = {};
  query["limit"] = pagePostsLimit;
  query["page"] = Number(page) || 1;
  const { data: ownCarsData, isLoading } = useGetOwnCarsQuery(query);
  return (
    <>
      <div className="flex justify-between mb-5">
        <div></div>
        <Button
          className="bg-primary-cyan hover:bg-gray-500"
          onClick={() => setOpenAddCarModal(true)}
        >
          <Plus></Plus> Add a new car
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    gap-4 xl:gap-6 ">
        {isLoading
          ? Array(9)
              .fill(0)
              .map((_, i) => (
                // @ts-ignore
                <CarCardSkeleton key={i}></CarCardSkeleton>
              ))
          : ownCarsData?.data?.cars?.length  ? ownCarsData?.data?.cars?.map((carData: ICar) => (
              // @ts-ignore
              <ProductCard
                data={carData}
                key={carData.id}
                ownCar={true}
              ></ProductCard>
            )) :  (
            <div className="w-full md:h-[350px] h-[200px] flex justify-center items-center sm:col-span-2 lg:col-span-3">
              <Empty message="No Cars Uploaded"></Empty>{" "}
            </div>
          )
            
            }
      </div>
      <PaginationSection
        totalItems={ownCarsData?.data?.meta?.total || 0}
        pagePostsLimitProps={pagePostsLimit}
      ></PaginationSection>
      <AddCarModal
        open={openAddCarModal}
        setOpen={setOpenAddCarModal}
      ></AddCarModal>
    </>
  );
};

export default CarListContainer;
