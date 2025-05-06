"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { userData } from "@/utils/user-data";
import { orderData } from "@/utils/order-data";
import { checkPaymentStatus, checkStatus } from "@/utils/check-status";

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
          href="/user/order-history"
          type="button"
          className=" text-primary-cyan underline"
        >
          View All
        </Link>
      </div>
      <Table>
        <TableCaption>A list of {userData?.name} recent orders</TableCaption>
        <TableHeader>
          <TableRow >
            {TABLE_HEADERS?.map((header) => (
              <TableHead key={header} className="text-[#B0B0B0] py-4">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="p-6  font-medium">
          {orderData?.slice(0, 6)?.map((data) => (
            <TableRow key={data._id}>
              <TableCell className="py-4">{data?.name}</TableCell>
              <TableCell className="py-4">{data?.pick_up_location}</TableCell>
              <TableCell className="py-4">{data?.drop_off_location}</TableCell>
              <TableCell className="py-4">{data?.date}</TableCell>
              <TableCell className="py-4">{data?.return_date}</TableCell>

              <TableCell className="py-4">
                <h5
                  className={cn(
                    "capitalize text-white flex justify-center rounded",
                    data.status === "pending" && "bg-[#5B4373] ",
                    data.status === "canceled" && "bg-red-600",
                    data.status === "onTheWay" && "bg-[#2E3559]",
                    data.status === "scheduled" && "bg-yellow-700",
                    data.status === "completed" && "bg-green-600"
                  )}
                >
                  {data?.status}
                </h5>
                {/* {checkStatus(data.status)} */}
              </TableCell>
              <TableCell>
                <Link
                  href={`/user/order-history/${data._id}`}
                  className="underline text-primary-cyan"
                >
                  View Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrders;
