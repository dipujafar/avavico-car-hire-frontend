import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { IOrderData } from "@/types";
import Link from "next/link";
import { ReactNode } from "react";
import moment from "moment";

const TABLE_HEADERS = [
  "Car Name",
  "Model",
  "Pick Up Location",
  "Drop Off Location",
  "Pick Up Date",
  "Return Date",
  "Status",
];

const UserDashboardTable = ({
  data,
  loading,
  button,
}: {
  data: IOrderData[];
  loading?: boolean;
  button?: ReactNode;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TABLE_HEADERS?.map((header) => (
            <TableHead key={header} className="text-[#000000] font-semibold ">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="p-6  font-medium">
        {data?.map((data: IOrderData) => (
          <TableRow key={data.id}>
            <TableCell className="py-4 "> <Link href={`/car-fleet/${data?.carId?.id}`}>{data?.carId?.carName} </Link></TableCell>
            <TableCell className="py-4 "> {data?.carId?.model}</TableCell>
            <TableCell className="py-4  text-[#B0B0B0]">
             {data?.pickUpLocation}
            </TableCell>
            <TableCell className="py-4  text-[#B0B0B0]">
              {data?.dropOffLocation}
            </TableCell>
            <TableCell className="py-4  text-[#B0B0B0]">{moment(data?.pickUp).format("ll")}</TableCell>
            <TableCell className="py-4  text-[#B0B0B0]">
              {moment(data?.dropOff).format("ll")}
            </TableCell>

            <TableCell className="py-4 ">
              <h5
                className={cn(
                  "capitalize text-white flex justify-center rounded-md px-2 py-0.5 bg-black",
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
              {button ? (
                button
              ) : (
                <Link
                  href={`/user/orders/${data?.id}?status=${data.status}`}
                  className="underline text-primary-cyan hover:text-cyan-600"
                >
                  View Details
                </Link>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserDashboardTable;
