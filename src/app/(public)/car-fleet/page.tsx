import Container from "@/components/shared/Container";
import PageTopBanner from "@/components/shared/PageTopBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";

const CarFleetPage = () => {
  return (
    <div>
      <PageTopBanner
        image="/carFleetPageBanner.png"
        title="Find Your Perfect Car"
        description="Search and find your best car rental with easy way"
      ></PageTopBanner>
      <Container className="mt-16">
        <SectionTitle
          title="Our Vehicle Fleet"
          subtitle="Turning dreams into reality with versatile vehicles.
"
        ></SectionTitle>
      </Container>
    </div>
  );
};

export default CarFleetPage;
