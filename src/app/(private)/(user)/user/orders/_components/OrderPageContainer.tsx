"use client";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import UserDashboardTable from "@/components/shared/Table/UserDashboardTable";
import { useGetMyOrdersQuery } from "@/redux/api/orderApi";
import { orderData } from "@/utils/order-data";
import { useSearchParams } from "next/navigation";

const OrderPageContainer = () => {
  const limit = 5;
  const scheduledPage = useSearchParams()?.get("scheduledPage");
  const completedPage = useSearchParams()?.get("completedPage");

  const scheduledQuery = {
    limit: limit,
    page: scheduledPage || 1,
    status: "inProgress",
  };
  const completedQuery = {
    limit: limit,
    page: completedPage || 1,
    status: "complete",
  };

  const { data: inProgressOrderData, isLoading: isInProgressOrderDataLoading } =
    useGetMyOrdersQuery(scheduledQuery);
  const {
    data: compoletedOrderData,
    isLoading: isCompoletededOrderDataOrderDataLoading,
  } = useGetMyOrdersQuery(completedQuery);

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

        <UserDashboardTable
          data={inProgressOrderData?.data?.orders}
          loading={isInProgressOrderDataLoading}
        />
        <PaginationSection
          totalItems={inProgressOrderData?.data?.meta?.total}
          pagePostsLimitProps={limit}
          className="mt-3"
          setName="scheduledPage"
        ></PaginationSection>
      </div>
      {/* ALL Completed Orders */}
      <div
        style={{
          boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
        }}
        className="md:p-5 p-2 bg-white rounded-md "
      >
        <h3 className="md:text-2xl text-xl font-medium text-[#474747] mb-5">
          Completed Orders
        </h3>

        <UserDashboardTable
          data={compoletedOrderData?.data?.orders}
          loading={isCompoletededOrderDataOrderDataLoading}
        />
        <PaginationSection
          totalItems={compoletedOrderData?.data?.meta?.total}
          pagePostsLimitProps={limit}
          className="mt-3"
          setName="completePage"
        ></PaginationSection>
      </div>
      {/* ALL Canceled  Orders */}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default OrderPageContainer;
