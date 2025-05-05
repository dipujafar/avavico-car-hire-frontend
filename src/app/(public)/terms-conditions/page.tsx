import AllCarBrands from "@/components/shared/AllCarBrands";
import PageTopBanner from "@/components/shared/PageTopBanner";
import React from "react";
import TermsConditionsContainer from "./_components/TermsConditionsContainer";

const pathsData = [
  {
    name: "Home",
    href: "/",
    active: false,
  },
  {
    name: "Pages",
    href: "#",
    active: false,
    hasDropdown: true,
  },
  {
    name: "Terms & Conditions",
    href: "/terms-conditions",
    active: true,
  },
];

const TermsConditionsPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA]  md:pb-16  pb-8">
      <PageTopBanner
        image="/terms_conditions_page_bg.png"
        title="Terms & Conditions"
        description="Last update: 25 April, 2025"
        className="opacity-40"
        pathsData={pathsData}
      ></PageTopBanner>
      <TermsConditionsContainer></TermsConditionsContainer>
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default TermsConditionsPage;
