import Container from "@/components/shared/Container";
import PageTopBanner from "@/components/shared/PageTopBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import CarFleetContainer from "./_components/CarFleetContainer";
import AllCarBrands from "@/components/shared/AllCarBrands";

const pathsData =[
  {
      name: "Home",
      href: "/",
      active: false
  },
  {
      name: "Car Fleet",
      href: "/car-fleet",
      active: true
  }
]


const CarFleetPage = () => {
  return (
    <div className="md:pb-16  pb-8 bg-[#F8F9FA]">
      <PageTopBanner
        image="/carFleetPageBanner.png"
        title="Find Your Perfect Car"
        description="Search and find your best car rental with easy way"
        className="opacity-25"
        pathsData={pathsData}
      ></PageTopBanner>
      <Container id="car-section" className="mt-16">
        <SectionTitle
          title="Our Vehicle Fleet"
          subtitle="Turning dreams into reality with versatile vehicles."
        ></SectionTitle>
        <CarFleetContainer></CarFleetContainer>
      </Container>
      <div className="xl:pt-28 pt-16">
        <AllCarBrands></AllCarBrands>
      </div>
    </div>
  );
};

export default CarFleetPage;
