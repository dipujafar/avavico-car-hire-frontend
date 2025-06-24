"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import { CarCardSkeleton } from "@/components/skeletons/CarCardSkeleton";
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
  console.log(isLoading);
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

  return (
    <>
      <motion.div
        key={carsData?.length}
        variants={fadeUpVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3     gap-4 xl:gap-6 "
      >
        {carsData?.map((carData) => (
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
