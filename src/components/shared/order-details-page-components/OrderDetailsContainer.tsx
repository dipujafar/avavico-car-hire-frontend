"use client";
import { useGetOrderSingleOrderQuery } from "@/redux/api/orderApi";
import { NeedHelp } from "./NeedHelp";
import OrderDetails from "./OrderDetails";

import OrderSummarySkeleton from "@/components/Skeletons/OrderSummarySkeleton";
import { RentalDetails } from "./RentalDetails";
import { OrderStatus } from "./OrderStatus";
import { useAppSelector } from "@/redux/hooks";
import ListedBy from "../ListedBy";
import OrderBy from "../OrderBy";

export default function OrderDetailsContainer({ id }: { id: string }) {
  const { data: orderDetailsData, isLoading } = useGetOrderSingleOrderQuery(
    id,
    { skip: !id }
  );

  const user: any = useAppSelector((state) => state.auth.user);

  if (isLoading) return <OrderSummarySkeleton />;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 2xl:gap-x-8">
      <OrderDetails
        title={orderDetailsData?.data?.order?.carId?.carName}
        description={orderDetailsData?.data?.order?.carId?.model}
        imageUrl={orderDetailsData?.data?.order?.carId?.carImage?.[0]}
        pickUpDate={orderDetailsData?.data?.order?.pickUp}
        dropOffDate={orderDetailsData?.data?.order?.dropOff}
        pickUpLocation={orderDetailsData?.data?.order?.pickUpLocation}
        dropOffLocation={orderDetailsData?.data?.order?.dropOffLocation}
        discount={orderDetailsData?.data?.order?.discount}
        basePriceDays={orderDetailsData?.data?.order?.carId?.price}
        carLocation={`${
          orderDetailsData?.data?.order?.carId?.rentingLocation?.city
        } ${
          orderDetailsData?.data?.order?.carId?.rentingLocation
            ?.streetAddress && ","
        } ${
          orderDetailsData?.data?.order?.carId?.rentingLocation?.streetAddress
        }`}
        carid={orderDetailsData?.data?.order?.carId?.id}
        total={orderDetailsData?.data?.order?.total}
        addExtra={orderDetailsData?.data?.order?.addExtra}
        carData={orderDetailsData?.data?.order?.carId}
      />

      <div className="space-y-5 xl:space-y-8">
        <RentalDetails
          carData={orderDetailsData?.data?.order?.carId}
          extraFeatures={orderDetailsData?.data?.order?.addExtra}
          paymentStatus="Payment Successful"
        />

        {user?.role === "User" && <OrderStatus orderId={orderDetailsData?.data?.order?.id} cardId={orderDetailsData?.data?.order?.carId?.id} orderData={orderDetailsData?.data?.order}></OrderStatus>}
        {user?.role === "User" && <ListedBy data={orderDetailsData?.data?.order?.carId?.vendor}></ListedBy>}
        {user?.role === "Vendor" && <OrderBy data={orderDetailsData?.data?.order?.userId}></OrderBy>}
        <NeedHelp></NeedHelp>
      </div>
    </div>
  );
}
