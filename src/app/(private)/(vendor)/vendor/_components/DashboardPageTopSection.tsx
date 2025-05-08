"use client";
import PageTopSection from "@/components/shared/PageTopSection";
import { usePathname } from "next/navigation";

const DashboardPageTopSection = () => {
  const pathName = usePathname();

  console.log(pathName);

  const pageTitle = (pathName: string) => {
    switch (pathName) {
      case "/user/profile":
        return "Dashboard";
      case "/user/orders":
        return "Orders";
      case "/user/account-settings":
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
