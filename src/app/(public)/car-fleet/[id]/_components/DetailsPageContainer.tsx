import Container from "@/components/shared/Container";
import React from "react";
import PathRoutes from "./PathRoutes";
import DetailsPageImages from "./DetailsPageImages";
import CarDetails from "./CarDetails";
import InsuranceCoverage from "./InsuranceCoverage";
import { RentVehicle } from "./RentVehicle";
import ListedBy from "./ListedBy";

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
