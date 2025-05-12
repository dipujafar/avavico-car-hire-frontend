"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { carData } from "@/lib/dummyData";
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

const AllCar = () => {
  return (
    <>
      <motion.div
        key={"cars"}
        variants={fadeUpVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3     gap-4 xl:gap-6 "
      >
        {carData?.map((carData) => (
          <motion.div variants={fadeUpVariants} key={carData.id}>
            {/*  @ts-ignore */}
            <ProductCard data={carData}></ProductCard>
          </motion.div>
        ))}
      </motion.div>
      <PaginationSection></PaginationSection>
    </>
  );
};

export default AllCar;
