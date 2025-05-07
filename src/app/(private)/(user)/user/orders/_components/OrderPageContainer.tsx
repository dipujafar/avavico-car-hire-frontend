import UserDashboardTable from "@/components/shared/Table/UserDashboardTable";
import { orderData } from "@/utils/order-data";
import React from "react";

const OrderPageContainer = () => {
    const scheduledOrderData = orderData.filter((order) => order.status === "scheduled");
    const completedOrderData = orderData.filter((order) => order.status === "completed");
    const canceledOrderData = orderData.filter((order) => order.status === "canceled");
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

        <UserDashboardTable data={scheduledOrderData} showLength={5}  />
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

        <UserDashboardTable data={completedOrderData} showLength={5} />
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
        {<UserDashboardTable data={canceledOrderData}  showLength={5} />}
      </div>
    </div>
  );
};

export default OrderPageContainer;
