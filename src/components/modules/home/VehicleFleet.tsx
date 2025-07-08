"use client";;
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import ProductCard from "@/components/shared/cards/ProductCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import { motion } from "motion/react";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { Skeleton } from "@/components/ui/skeleton";
import { ICar } from "@/types";
import { CarCardSkeleton } from "@/components/skeletons/CarCardSkeleton";
import Empty from "@/components/ui/empty";

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

const VehicleFleet = () => {
  const { data: allCardData, isLoading } = useGetAllCarsQuery({ limit: 8 });

  // -------------------- if data is loading --------------------
  if (isLoading) {
    return (
      <Container className="lg:space-y-10 space-y-5">
        <div className="flex flex-wrap gap-y-2 gap-x-2 justify-between">
          <div className="space-y-1.5 ">
            <Skeleton className="h-8 md:w-72" />
            <Skeleton className="h-3 w-52" />
          </div>

          <div className="flex items-center cursor-pointer gap-x-1 group">
            <Skeleton className="h-6 w-32" />
          </div>
        </div>

        {/* display all cars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <CarCardSkeleton key={i} />
            ))}
        </div>
      </Container>
    );
  }
  // -----------------------------------------------------------------//

  // -------------------- display actual data --------------------
  return (
    <Container className="lg:space-y-10 space-y-5">
      <div className="flex flex-wrap gap-y-2 gap-x-2 justify-between mb-3">
        <SectionTitle
          title="Our Vehicle Fleet"
          subtitle="The world's leading car brands"
        ></SectionTitle>

        <div className="flex items-center cursor-pointer gap-x-1 group">
          <Link href="/car-fleet" className="md:font-bold font-semibold">
            View All
          </Link>
          <AnimatedArrow size={20}></AnimatedArrow>
        </div>
      </div>

      {/* display all cars */}
      <motion.div
        variants={fadeUpVariants}
        key={allCardData?.data?.car?.length}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      >
        {allCardData?.data?.car?.length ? (
          allCardData?.data?.car?.map((car: ICar) => (
            <motion.div variants={fadeUpVariants} key={car.id}>
              {/*  @ts-ignore */}
              <ProductCard data={car}></ProductCard>
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center items-center min-h-80  sm:col-span-2 lg:col-span-3 2xl:col-span-4">
            <Empty message="No Cars Available"></Empty>
          </div>
        )}
      </motion.div>
    </Container>
  );
};

export default VehicleFleet;
