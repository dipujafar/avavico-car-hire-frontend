"use client";
import { OrderCarRentalCard } from "@/components/shared/cards/OrderCarRentalCard";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import VendorOrderSkeleton from "@/components/Skeletons/VendorOrderSkeleton";
import Empty from "@/components/ui/empty";
import { findOutRunningOrders } from "@/lib/utils";
import { useGetOrderReceiveQuery } from "@/redux/api/orderApi";
import { IOrderData } from "@/types";
import { useSearchParams } from "next/navigation";
const carRentals = [
  {
    id: "1",
    name: "Mercedes AMG Sports",
    description: "Powerful engine, luxurious interiors, perfect for road trips",
    image: "/details_image1.png",
    pickUpDate: "May 1, 2025",
    dropOffDate: "May 3, 2025",
    pickUpLocation: "New York City, Central Park",
    dropOffLocation: "New York City, Downtown",
    duration: "1 days",
    price: 125.0,
  },
  {
    id: "2",
    name: "BMW M4 Competition",
    description: "High-performance sports car with premium features",
    image: "/details_image1.png",
    pickUpDate: "June 10, 2025",
    dropOffDate: "June 15, 2025",
    pickUpLocation: "Los Angeles, Airport",
    dropOffLocation: "San Francisco, Downtown",
    duration: "5 days",
    price: 175.0,
  },
  {
    id: "3",
    name: "Tesla Model S Plaid",
    description: "Electric luxury sedan with incredible acceleration",
    image: "/details_image1.png",
    pickUpDate: "July 5, 2025",
    dropOffDate: "July 8, 2025",
    pickUpLocation: "Miami, South Beach",
    dropOffLocation: "Miami, Airport",
    duration: "3 days",
    price: 200.0,
  },
];

export default function Orders({ status }: { status: string }) {
  if (status === "processing") {
    const { data: orderData, isLoading } = useGetOrderReceiveQuery({
      limit: 999,
    });

    const runningData = findOutRunningOrders(orderData?.data?.orders);

    if (isLoading) {
      return (
        <div className="space-y-5">
          {" "}
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <VendorOrderSkeleton key={index} />
            ))}
        </div>
      );
    }

    if (runningData?.length === 0) {
      return (
        <div className="md:min-h-[400px] min-h-[250px] flex justify-center items-center">
          <Empty message="No processing orders yet"></Empty>
        </div>
      );
    }

    return (
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {runningData?.map((carRental: IOrderData) => (
          <OrderCarRentalCard
            status={status}
            key={carRental.id}
            carRental={carRental}
            onAccept={(id) => console.log(`Accepted rental for car ID: ${id}`)}
          />
        ))}
      </div>
    );
  }

  //  ------------------------------------- if oder status is not processing -------------------------------
  const limit = 5;
  const page = useSearchParams()?.get("page");
  const query: Record<string, string | number> = {};
  query["limit"] = limit;
  query["page"] = page || 1;
  query["status"] = status;
  const { data: orderData, isLoading } = useGetOrderReceiveQuery(query);

  if (isLoading) {
    return (
      <div className="space-y-5">
        {" "}
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <VendorOrderSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (!orderData?.data?.meta?.total) {
    return (
      <div className="md:min-h-[400px] min-h-[250px] flex justify-center items-center">
        <Empty message="No data found"></Empty>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {orderData?.data?.orders?.map((carRental: IOrderData) => (
          <OrderCarRentalCard
            status={status}
            key={carRental.id}
            carRental={carRental}
            onAccept={(id) => console.log(`Accepted rental for car ID: ${id}`)}
          />
        ))}
      </div>
      <PaginationSection
        totalItems={orderData?.data?.meta?.total}
        pagePostsLimitProps={limit}
        id="vendor-orders"
      ></PaginationSection>
    </div>
  );
}
