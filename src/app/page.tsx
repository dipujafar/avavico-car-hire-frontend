import CarBrands from "@/components/modules/home/CarBrands";
import Destinations from "@/components/modules/home/Destinations";
import HeroSection from "@/components/modules/home/HeroSection";
import RentCar from "@/components/modules/home/RentCar";

export default function Home() {
  return (
    <div className="xl:space-y-20 md:space-y-14 space-y-10">
      <div>
        <div className="relative">
          <HeroSection></HeroSection>
          <div className="lg:absolute my-5 lg:my-0 -bottom-24 w-full">
            <RentCar></RentCar>
          </div>
        </div>
        <CarBrands></CarBrands>
      </div>

      <Destinations></Destinations>
    </div>
  );
}
