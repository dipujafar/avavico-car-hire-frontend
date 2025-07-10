"use client";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/date-picker";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import LoadingSpin from "@/components/ui/loading-spin";
import { useUpdateOrderInfoMutation } from "@/redux/api/orderApi";
import { IOrderData } from "@/types";
import React, { useState } from "react";
import moment from "moment";
import { Error_Modal } from "@/modals";
import { toast } from "sonner";
import { differenceInDays } from "date-fns";

export default function MakeChangeOrderDetailsModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: IOrderData;
}) {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(
    new Date(data?.pickUp)
  );
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(
    new Date(data?.dropOff)
  );
  const [pickupLocation, setPickupLocation] = useState<string>(
    data?.pickUpLocation
  );
  const [dropoffLocation, setDropoffLocation] = useState<string>(
    data?.dropOffLocation
  );
  const [updateOrder, { isLoading }] = useUpdateOrderInfoMutation();

  const pickedDateWithOutThisOrder = data?.carId?.carPicDates?.filter((item) => item?.pickUp !== data?.pickUp && item?.dropOff !== data?.dropOff);

   // Calculate rental days
  const OrderDays =
    data?.dropOff && data?.pickUp
      ? Math.max(1, differenceInDays(new Date(data?.dropOff), new Date(data?.pickUp)))
      : 0;

    const updateOrderDays = pickupDate && dropoffDate
      ? Math.max(1, differenceInDays(new Date(dropoffDate), new Date(pickupDate)))
      : 0;

      console.log({updateOrderDays});



  const handleUpdateOrder = async () => {
    if (
      moment(pickupDate).isSame(moment(data?.pickUp)) &&
      moment(dropoffDate).isSame(moment(data?.dropOff)) &&
      pickupLocation === data?.pickUpLocation &&
      dropoffLocation === data?.dropOffLocation
    ) {
      return;
    }

    if(updateOrderDays > OrderDays) {
      Error_Modal({ title: "You can't update the order days more than the original order days" });
      return;
    }

    const updateData = {
      pickUp: pickupDate,
      dropOff: dropoffDate,
      pickUpLocation: pickupLocation,
      dropOffLocation: dropoffLocation,
    };

    try {
      await updateOrder({ id: data?.id, data: updateData });
      toast.success("Order Info updated successfully");
      setOpen(false);
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }

  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="flex items-center justify-between px-2 pb-2 mt-4">
          <div className="font-medium">Pick-Up</div>
          <div className="border rounded-md ">
            <DateTimePicker
              value={pickupDate}
              onChange={setPickupDate}
              className="bg-gray-100"
              placeholder="Pick Up"
              bookings={pickedDateWithOutThisOrder}
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-2 border-b pb-2">
          <div className="font-medium">Drop-Off</div>
          <div className="border rounded-md ">
            <DateTimePicker
              value={dropoffDate}
              onChange={setDropoffDate}
              disableBefore={pickupDate}
              placeholder="Drop Off"
              className="bg-gray-100"
              bookings={pickedDateWithOutThisOrder}
            />
          </div>
        </div>

        <div className="flex gap-x-4 items-center justify-between px-2">
          <div className="font-medium w-32 text-sm ">Pickup Location : </div>
          <div className="flex-1">
            <Input
              value={pickupLocation}
              defaultValue={data?.pickUpLocation}
              placeholder="Enter easiest location"
              className="bg-gray-100"
              onChange={(e) => setPickupLocation(e.target.value)}
            ></Input>
          </div>
        </div>
        <div className="flex gap-x-4 items-center justify-between px-2">
          <div className="font-medium w-32 text-sm">Dropoff Location : </div>
          <div className="flex-1">
            <Input
              value={dropoffLocation}
              defaultValue={data?.dropOffLocation}
              placeholder="Enter easiest location"
              className="bg-gray-100"
              onChange={(e) => setDropoffLocation(e.target.value)}
            ></Input>
          </div>
        </div>

        <Button
          onClick={handleUpdateOrder}
          disabled={isLoading}
          className="w-full bg-yellow-800 hover:bg-amber-900 mt-3 px-2"
        >
          Update {isLoading && <LoadingSpin />}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
