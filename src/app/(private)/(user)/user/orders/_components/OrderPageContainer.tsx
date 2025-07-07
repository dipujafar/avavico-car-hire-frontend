"use client";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import UserDashboardTable from "@/components/shared/Table/UserDashboardTable";
import { useGetMyOrdersQuery } from "@/redux/api/orderApi";
import { orderData } from "@/utils/order-data";

const OrderPageContainer = () => {
    const scheduledOrderData = orderData.filter((order) => order.status === "scheduled");
    const completedOrderData = orderData.filter((order) => order.status === "completed");
    const canceledOrderData = orderData.filter((order) => order.status === "canceled");

   const {data: inProgressOrderData, isLoading: isInProgressOrderDataLoading} = useGetMyOrdersQuery({status : "inProgress"});
   const {data: accpectedOrderData, isLoading: isAccpectedOrderDataOrderDataLoading} = useGetMyOrdersQuery({status : "accept"});
   const {data: compoletedOrderData, isLoading: isCompoletededOrderDataOrderDataLoading} = useGetMyOrdersQuery({status : "complete"});

  return (
    <div className="xl:space-y-8 space-y-5">
      {/* ALL Scheduled Orders */}
      <div
        style={{
          boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
        }}
        className="md:p-5 p-2 bg-white rounded-md "
      >
        <h3 className="md:text-2xl text-xl font-medium text-[#474747] mb-5">
          Scheduled Orders
        </h3>

        <UserDashboardTable data={inProgressOrderData?.data?.orders} loading={isInProgressOrderDataLoading} />
        <PaginationSection totalItems={10} className="mt-3"></PaginationSection>
      </div>
      {/* ALL Scheduled Orders */}
      <div
        style={{
          boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
        }}
        className="md:p-5 p-2 bg-white rounded-md "
      >
        <h3 className="md:text-2xl text-xl font-medium text-[#474747] mb-5">
          Completed Orders
        </h3>

        <UserDashboardTable data={accpectedOrderData?.data?.orders} loading={isAccpectedOrderDataOrderDataLoading}/>
        <PaginationSection totalItems={10} className="mt-3"></PaginationSection>
      </div>
      {/* ALL Canceled  Orders */}
      <div
        style={{
          boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
        }}
        className="md:p-5 p-2 bg-white rounded-md "
      >
        <h3 className="md:text-2xl text-xl font-medium text-[#474747] mb-5">
          Canceled Orders
        </h3>
        <UserDashboardTable data={compoletedOrderData?.data?.orders}  loading={isCompoletededOrderDataOrderDataLoading} />
        <PaginationSection totalItems={10} className="mt-3"></PaginationSection>
      </div>
    </div>
  );
};

export default OrderPageContainer;
