import { NeedHelp } from "./_components/NeedHelp";
import OrderDetails from "./_components/OrderDetails";
import { OrderStatus } from "./_components/OrderStatus";
import { RentalDetails } from "./_components/RentalDetails";

const OrderDetailsPage = () => {
  return (
    <div className="grid grid-cols-2 gap-5 2xl:gap-x-8">
      <OrderDetails
        title="Mercedes AMG Sports"
        description="Powerful engine, luxurious interiors, perfect for road trips"
        imageUrl="/details_image1.png"
        pickUpDate="May 1, 2025"
        dropOffDate="May 3, 2025"
        pickUpLocation="New York City, Central Park"
        dropOffLocation="New York City, Downtown"
        basePrice={900}
        basePriceDays={2}
        discount={50}
        insurance={2500}
        insuranceType="Basic Coverage"
      />

      <div className="space-y-5 xl:space-y-8">
        <RentalDetails
          miles={100}
          seats={4}
          fuelType="Diesel"
          transmission="Automatic"
          paymentStatus="Payment Successful"
          paymentMethod="Paid via Credit Card ending in 1234"
        />

        <OrderStatus></OrderStatus>
        <NeedHelp></NeedHelp>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
