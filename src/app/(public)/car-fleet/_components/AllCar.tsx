"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import { CarCardSkeleton } from "@/components/Skeletons/CarCardSkeleton";
import Empty from "@/components/ui/empty";
import { ICar } from "@/types";
import { motion } from "motion/react";

const fadeUpVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const AllCar = ({
  data: carsData,
  isLoading,
}: {
  data: ICar[];
  isLoading?: boolean;
}) => {
  // -------------------- if data is loading --------------------
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 ">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <CarCardSkeleton key={i} />
          ))}
      </div>
    );
  }
  // ----------------------------------------------------------------//

  // ---------------------------if data is empty ---------------------//
  if (!carsData?.length) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-220px)]">
        <Empty message="No Cars Available"></Empty>
      </div>
    );
  }

  return (
    <>
      <motion.div
        key={carsData?.reduce((acc, car) => acc + car.id, "")}
        // @ts-ignore
        variants={fadeUpVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3     gap-4 xl:gap-6 "
      >
        {carsData?.map((carData) => (
          // @ts-ignore
          <motion.div variants={fadeUpVariants} key={carData.id}>
            {/*  @ts-ignore */}
            <ProductCard data={carData}></ProductCard>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AllCar;
