import AllCarBrands from "@/components/shared/AllCarBrands";
import PageTopBanner from "@/components/shared/PageTopBanner";
import ContactPageContainer from "./_components/ContactPageContainer";

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
    name: "Contact Us",
    href: "/contact-us",
    active: true,
  },
];

const ContactUsPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA] md:pb-16  pb-8">
      <PageTopBanner
        image="/contact_page_bg.png"
        title="Contact Us"
        className="opacity-40"
        pathsData={pathsData}
      ></PageTopBanner>
      <ContactPageContainer></ContactPageContainer>
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default ContactUsPage;
