import AllCarBrands from "@/components/shared/AllCarBrands";
import DetailsPageContainer from "./_components/DetailsPageContainer";

export const metadata = {
        title: "Car Fleet Details",
        description: "Here find all details about the car fleet",
    };

const CarFleetPage = () => {
    return (
        <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA] md:py-12  py-8">
            <DetailsPageContainer></DetailsPageContainer>
            <AllCarBrands></AllCarBrands>
        </div>
    );
};

export default CarFleetPage;