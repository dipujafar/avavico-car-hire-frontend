import PageTopBanner from "@/components/shared/PageTopBanner";
import OurServices from "./_components/OurServices";
import AllCarBrands from "@/components/shared/AllCarBrands";
import Expertise from "./_components/Expertise";

const pathsData = [
  {
    name: "Home",
    href: "/",
    active: false,
  },
  {
    name: "Services",
    href: "/services",
    active: true,
  },
];
const ServicesPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA]  md:pb-16  pb-8">
      <PageTopBanner
        image="/service_page_bg.png"
        title="Our Services"
        description="Perfect service, top expert"
        className="opacity-35"
        pathsData={pathsData}
      ></PageTopBanner>
      <OurServices></OurServices>
      <Expertise></Expertise>
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default ServicesPage;
