
import AllCarBrands from "@/components/shared/AllCarBrands";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";


const CarBrands = () => {
  return (
    <div className="lg:pt-36 pt-14 pb-20 bg-[#F2F4F6] lg:space-y-12 space-y-6">
      <Container className="flex md:flex-row flex-col gap-y-2 gap-x-2 justify-between">
        <SectionTitle
          title="Car Brands"
          subtitle="Discover the Ultimate Collection of Luxury Vehicles"
        ></SectionTitle>
      </Container>

      {/* display all car brands */}
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default CarBrands;
