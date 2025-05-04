import PageTopBanner from "@/components/shared/PageTopBanner";
import React from "react";
import AboutPageContainer from "./_components/AboutPageContainer";
import StaticSection from "./_components/StaticSection";
import HowItWorks from "./_components/HowItWorks";
import Culture from "./_components/Culture";
import CustomersFeedbacks from "@/components/shared/CustomersFeedbacks";
import Faq from "./_components/Faq";
import AllCarBrands from "@/components/shared/AllCarBrands";


const pathsData =[
    {
        name: "Home",
        href: "/",
        active: false
    },
    {
        name: "About US",
        href: "/about-us",
        active: true
    }
]

const AboutPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 md:pb-16  pb-8 bg-[#F8F9FA] ">
      <PageTopBanner
        image="/about_page_bg.png"
        title="About Us"
        description="Get the latest news, updates and tips"
        className="opacity-45"
        pathsData={pathsData}
      ></PageTopBanner>
      <StaticSection></StaticSection>
      <AboutPageContainer></AboutPageContainer>
      <HowItWorks></HowItWorks>
      <Culture></Culture>
      <CustomersFeedbacks></CustomersFeedbacks>
      <Faq></Faq>
      <div >
        <AllCarBrands></AllCarBrands>
      </div>
    </div>
  );
};

export default AboutPage;
