import AnimatedMoveIcon from "@/components/animatedArrows/AnimatedMoveIcon";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { carBrandsData } from "@/lib/CarBrandsData";
import { MoveRight } from "lucide-react";
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
      <Marquee
        pauseOnHover
        gradient
        gradientWidth={50}
        gradientColor={"#ebe6e6"}
        speed={40}
      >
        {carBrandsData?.map((brand) => (
          <div key={brand._id} className="py-6 px-16 mx-10 flex flex-col items-center gap-y-3 bg-white rounded-sm ">
            <Image src={brand.image} alt={`${brand.name} logo`} width={1200} height={1200} className="w-[60px] h-[40px]"></Image>
            <h3 className="text-center">{brand.name}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CarBrands;
