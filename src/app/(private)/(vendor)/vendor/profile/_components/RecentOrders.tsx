"use client";
import Link from "next/link";
import { orderData } from "@/utils/order-data";
import UserDashboardTable from "@/components/shared/Table/UserDashboardTable";
import { Button } from "@/components/ui/button";
import { useGetOrderReceiveQuery } from "@/redux/api/orderApi";


const RecentOrders = () => {
  const limit = 5;
   const {data: orderData} = useGetOrderReceiveQuery({limit});

   console.log(orderData?.data?.orders);
  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="md:p-5 p-2 bg-white rounded-md "
    >
      <div className="mb-5 flex items-center justify-between ">
        <h3 className="md:text-2xl text-xl font-medium text-[#474747]">
          Recent Orders
        </h3>
        <Link
          href="/vendor/orders"
          type="button"
          className=" text-primary-cyan underline hover:text-cyan-600"
        >
          View All
        </Link>
      </div>
      <UserDashboardTable
        data={orderData?.data?.orders}
      />
    </div>
  );
};

export default RecentOrders;
