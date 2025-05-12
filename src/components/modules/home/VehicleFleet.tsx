"use client";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import ProductCard from "@/components/shared/cards/ProductCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { carData } from "@/lib/dummyData";
import Link from "next/link";
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

const VehicleFleet = () => {
  return (
    <Container className="lg:space-y-10 spy-7">
      <div className="flex flex-wrap gap-y-2 gap-x-2 justify-between">
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
        key={"cars"}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      >
        {carData?.slice(0, 8)?.map((car) => (
          <motion.div variants={fadeUpVariants}  key={car.id}  >
            {/*  @ts-ignore */}
            <ProductCard data={car}></ProductCard>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default VehicleFleet;
