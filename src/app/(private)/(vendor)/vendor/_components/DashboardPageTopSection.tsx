"use client";
import PageTopSection from "@/components/shared/PageTopSection";
import { usePathname } from "next/navigation";

const DashboardPageTopSection = () => {
  const pathName = usePathname();

  console.log(pathName);

  const pageTitle = (pathName: string) => {
    switch (pathName) {
      case "/vendor/profile":
        return "Dashboard";
      case "/vendor/orders":
        return "Orders";
      case "/vendor/earning":
        return "Earning";
      case "/vendor/car-list":
        return "Car List";
      case "/vendor/blogs":
        return "Blogs";
      case "/vendor/account-settings":
        return "Settings";
      case `${pathName}`:
        return "Order Details";
      default:
        return "Dashboard";
    }
  };
  return (
    <div>
      <PageTopSection title={pageTitle(pathName)}></PageTopSection>
    </div>
  );
};

export default DashboardPageTopSection;
