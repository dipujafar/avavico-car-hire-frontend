"use client";
import Link from "next/link";
import { orderData } from "@/utils/order-data";
import UserDashboardTable from "@/components/shared/Table/UserDashboardTable";


const TABLE_HEADERS = [
  "Car Name",
  "Pick Up Location",
  "Drop Off Location",
  "Pick Up Date",
  "Return Date",
  "Status",
];

const RecentOrders = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="md:p-5 p-2 bg-white rounded-md "
    >
      <div className="mb-5 flex items-center justify-between ">
        <h3 className="text-2xl font-medium text-[#474747]">
          My Recent Orders
        </h3>
        <Link
          href="/user/orders"
          type="button"
          className=" text-primary-cyan underline hover:text-cyan-600"
        >
          View All
        </Link>
      </div>
      <UserDashboardTable data={orderData} showLength={5}/>
    </div>
  );
};

export default RecentOrders;
