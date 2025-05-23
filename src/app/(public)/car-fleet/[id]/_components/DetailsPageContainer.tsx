import Container from "@/components/shared/Container";
import React from "react";
import PathRoutes from "./PathRoutes";
import DetailsPageImages from "./DetailsPageImages";
import CarDetails from "./CarDetails";
import InsuranceCoverage from "./InsuranceCoverage";
import { RentVehicle } from "./RentVehicle";
import ListedBy from "./ListedBy";
import RatingReviews from "./RatingReviews";
import { AllTestimonials } from "./Testimonials/AllTestimonials";

const DetailsPageContainer = () => {
  return (
    <Container className="space-y-10 ">
      <div className="space-y-5">
        <PathRoutes></PathRoutes>
        <DetailsPageImages></DetailsPageImages>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:gap-x-16 xl:gap-x-10 lg:gap-x-7 gap-y-7">
        <div className="lg:col-span-2">
          <CarDetails></CarDetails>
          <div className="xl:mt-16 md:mt-10 mt-7 lg:space-y-10 space-y-7 bg-white md:p-8 px-2 py-4 rounded-md border border-[#DDE1DE]">
            <RatingReviews />
            <AllTestimonials></AllTestimonials>
          </div>
        </div>
        <div className="space-y-7">
          <InsuranceCoverage></InsuranceCoverage>
          <RentVehicle></RentVehicle>
          <ListedBy></ListedBy>
        </div>
      </div>
    </Container>
  );
};

export default DetailsPageContainer;
