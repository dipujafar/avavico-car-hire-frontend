import AllCarBrands from "@/components/shared/AllCarBrands";
import PageTopBanner from "@/components/shared/PageTopBanner";
import { FaqsSection } from "./_components/FaqsSection";
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
    name: "FAQs",
    href: "/faqs",
    active: true,
  },
];

const FAQsPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA] md:pb-16  pb-8">
      <PageTopBanner
        image="/faqs_page_bg.png"
        title="FAQs"
        className="opacity-40"
        pathsData={pathsData}
      ></PageTopBanner>
      <FaqsSection></FaqsSection>
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default FAQsPage;
