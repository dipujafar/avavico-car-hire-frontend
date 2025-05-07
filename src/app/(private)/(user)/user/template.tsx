import Container from "@/components/shared/Container";
import DashboardSidebar from "./_components/DashboardSidebar";
import PageTopSection from "@/components/shared/PageTopSection";
import DashboardPageTopSection from "./_components/DashboardPageTopSection";
import SmallDeviceSidebar from "./_components/SmallDeviceSidebar";

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardPageTopSection></DashboardPageTopSection>
      <div className="min-h-screen bg-primary-white py-10 bg-[#F8F9FA]">
        <Container className="items-start gap-x-8 xl:flex">
          <div className=" xl:hidden mb-7 ">
            <SmallDeviceSidebar></SmallDeviceSidebar> 
          </div>
          <div className="sticky top-[108px] z-40 hidden xl:block ">
            <DashboardSidebar />
          </div>
          <div className="flex-grow ">{children}</div>
        </Container>
      </div>
    </div>
  );
}
