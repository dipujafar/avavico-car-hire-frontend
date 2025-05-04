import AnimatedMoveIcon from "@/components/animatedArrows/AnimatedMoveIcon";
import AllCarBrands from "@/components/shared/AllCarBrands";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { carBrandsData } from "@/lib/CarBrandsData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CarBrands = () => {
  return (
    <div className="pt-36 pb-20 bg-[#F2F4F6] lg:space-y-12 space-y-6">
      <Container className="flex md:flex-row flex-col gap-y-2 gap-x-2 justify-between">
        <SectionTitle
          title="Car Brands"
          subtitle="Discover the Ultimate Collection of Luxury Vehicles"
        ></SectionTitle>

        <div className="flex gap-x-1 group">
            <h5 className="md:font-bold font-semibold">Show All Brands</h5>
            <AnimatedMoveIcon></AnimatedMoveIcon>
        </div>
      </Container>

      {/* display all car brands */}
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default CarBrands;
