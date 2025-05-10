import PaginationSection from "@/components/shared/pagination/PaginationSection";
import CarListContainer from "./_components/CarListContainer";

export const metadata = {
    title: "Car List",
    description: "All your Uploaded Cars find here",
}

const CarListPage = () => {
    return (
        <>
            <CarListContainer></CarListContainer>
            <PaginationSection totalItems={10}></PaginationSection>
        </>
    );
};

export default CarListPage;