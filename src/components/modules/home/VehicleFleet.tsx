import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import ProductCard from "@/components/shared/cards/ProductCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { carData } from "@/lib/dummyData";
import Link from "next/link";
import React from "react";

const VehicleFleet = () => {
  return (
    <Container className="lg:space-y-10 spy-7">
      <div className="flex flex-wrap gap-y-2 gap-x-2 justify-between">
        <SectionTitle
          title="Our Vehicle Fleet"
          subtitle="The world's leading car brands"
        ></SectionTitle>

        <div className="flex items-center cursor-pointer gap-x-1 group">
          <Link href="/car-fleet" className="md:font-bold font-semibold">View All</Link>
         <AnimatedArrow size={20}></AnimatedArrow>
        </div>
      </div>

      {/* display all cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {
            carData?.slice(0, 8)?.map((car) => (
              // @ts-ignore
                <ProductCard key={car.id} data={car}></ProductCard>
            ))
        }
      </div>
    </Container>
  );
};

export default VehicleFleet;
