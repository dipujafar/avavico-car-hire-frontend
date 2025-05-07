import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TABLE_HEADERS = [
  "Car Name",
  "Pick Up Location",
  "Drop Off Location",
  "Pick Up Date",
  "Return Date",
  "Status",
];

const UserDashboardTable = ({
  data,
  showLength = data?.length,
}: {
  data: any;
  showLength?: number;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TABLE_HEADERS?.map((header) => (
            <TableHead key={header} className="text-[#B0B0B0] py-4">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="p-6  font-medium">
        {data?.slice(0, showLength)?.map((data: any) => (
          <TableRow key={data._id}>
            <TableCell className="py-4">{data?.name}</TableCell>
            <TableCell className="py-4 text-[#B0B0B0]">
              {data?.pick_up_location}
            </TableCell>
            <TableCell className="py-4 text-[#B0B0B0]">
              {data?.drop_off_location}
            </TableCell>
            <TableCell className="py-4 text-[#B0B0B0]">{data?.date}</TableCell>
            <TableCell className="py-4 text-[#B0B0B0]">
              {data?.return_date}
            </TableCell>

            <TableCell className="py-4">
              <h5
                className={cn(
                  "capitalize text-white flex justify-center rounded-md px-2 py-0.5",
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
                href={`/user/orders/${data._id}?status=${data.status}`}
                className="underline text-primary-cyan hover:text-cyan-600"
              >
                View Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserDashboardTable;
