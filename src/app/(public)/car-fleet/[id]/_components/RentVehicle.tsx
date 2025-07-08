"use client";
import { useState } from "react";
import { differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { DateTimePicker } from "@/components/ui/date-picker";
import { ICar } from "@/types";
import { Input } from "@/components/ui/input";
import { useAddNewOrderMutation } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import { LoginDialog } from "@/components/shared/LoginDialog";
import { getDiscountAmount } from "@/utils/getDiscountAmount";
import { toast } from "sonner";
import { Error_Modal } from "@/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import { title } from "process";

type Extra = {
  id: string;
  label: string;
  price: number;
  checked: boolean;
  select: number;
};

export function RentVehicle({ data }: { data: ICar }) {
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>();
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");
  const [addOrder, { isLoading }] = useAddNewOrderMutation();
  const user: any = useAppSelector((state) => state.auth.user);
  const isLoggedIn = Cookies.get("avavico-car-hire-access-token");
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const [extras, setExtras] = useState<Extra[]>([
    {
      id: "childSeat",
      label: "Child Seat",
      select: data?.childSeat?.select,
      price: data?.childSeat?.price,
      checked: false,
    },
    {
      id: "additionalDriver",
      label: "Additional Driver",
      price: data?.additionalDriver?.price,
      checked: false,
      select: data?.additionalDriver?.select,
    },
    {
      id: "youngDriver",
      label: "Young Driver",
      select: data?.youngDriver?.select,
      price: data?.youngDriver?.price,
      checked: false,
    },
    {
      id: "oneWayFees",
      label: "One way fees",
      select: data?.oneWayFees?.select,
      price: data?.oneWayFees?.price,
      checked: false,
    },
    {
      id: "gpsNavigation",
      label: "GPS Navigation System",
      price: data?.gps?.price,
      select: data?.gps?.select,
      checked: false,
    },
    {
      id: "crossBorder",
      label: "Cross Border",
      select: data?.crossBorder?.select,
      price: data?.crossBorder?.price,
      checked: false,
    },
    // {
    //   id: "insuranceCoverage",
    //   label: "Insurance Coverage",
    //   price: 750,
    //   checked: true,
    // },
  ]);

  const toggleExtra = (id: string) => {
    setExtras(
      extras.map((extra) =>
        extra.id === id ? { ...extra, checked: !extra.checked } : extra
      )
    );
  };

  // Calculate rental days
  const days =
    pickupDate && dropoffDate
      ? Math.max(1, differenceInDays(dropoffDate, pickupDate))
      : 0;

  // Calculate base rental cost
  const baseRental = days * Number(data?.price);

  // Calculate extras cost
  const extrasCost = extras
    .filter((extra) => extra.checked)
    .reduce((sum, extra) => sum + extra.price, 0);

  // Calculate subtotal
  const subtotal = baseRental + extrasCost;

  const discount = getDiscountAmount(Number(subtotal), Number(data?.discount)) || 0;

  // Calculate grand total
  const grandTotal = subtotal - discount;

  // post api to rent car

  const handleRentCar = async () => {
    if (!isLoggedIn || !user) {
      setOpenLoginModal(true);
      return;
    }

    if (user?.role === "Vendor") {
      Error_Modal({
        title:
          "A vendor are not allowed to rent a car. Please login with a user account.",
      });
      return;
    }

    const extraData = {
      childSeat: extras.find((extra) => extra.id === "childSeat")?.checked,
      additionalDriver: extras.find((extra) => extra.id === "additionalDriver")
        ?.checked,
      youngDriver: extras.find((extra) => extra.id === "youngDriver")?.checked,
      oneWayFees: extras.find((extra) => extra.id === "oneWayFees")?.checked,
      gps: extras.find((extra) => extra.id === "gpsNavigation")?.checked,
      crossBorder: extras.find((extra) => extra.id === "crossBorder")?.checked,
    };

    const orderData = {
      data: {
        carId: data?.id,
        pickUp: pickupDate,
        dropOff: dropoffDate,
        pickUpLocation: pickupLocation,
        dropOffLocation: dropoffLocation,
        subTotal: subtotal,
        addExtra: extraData,
        discount: discount,
        total: grandTotal,
      },
    };

    try {
      await addOrder(orderData).unwrap();
      toast.success("Car rented successfully");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <>
      <Card>
        <h3 className="text-xl font-bold px-4 border-b pb-2 text-[#101010]">
          Rent This Vehicle
        </h3>

        <CardContent className="p-0">
          <div className="border-b">
            <div className="flex items-center justify-between px-4 pb-2">
              <div className="font-medium">Pick-Up</div>
              <div className="border rounded-md ">
                <DateTimePicker
                  value={pickupDate}
                  onChange={setPickupDate}
                  className="bg-gray-100"
                />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 border-b pb-2">
              <div className="font-medium">Drop-Off</div>
              <div className="border rounded-md ">
                <DateTimePicker
                  value={dropoffDate}
                  onChange={setDropoffDate}
                  disableBefore={pickupDate}
                  placeholder="Drop Off"
                  className="bg-gray-100"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 ">
              <div className="font-medium">Rent :</div>
              <div className="flex items-center gap-1">
                <span className="ml-auto font-medium">
                  ${baseRental?.toFixed(2)}
                </span>
                (
                <span className="text-xs">
                  ${Number(data?.price)} x {days} days
                </span>
                )
              </div>
            </div>
          </div>

          <div className="p-4 border-b">
            <div className="font-medium mb-2">Add Extra:</div>
            <div className="space-y-2">
              {extras?.map((extra) => (
                <div
                  key={extra?.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      disabled={extra?.select === 0}
                      className="border-primary-gray data-[state=checked]:bg-[#00B74A] data-[state=checked]:border-[#00B74A]"
                      id={extra?.id}
                      checked={extra?.checked}
                      onCheckedChange={() => toggleExtra(extra?.id)}
                    />
                    <label
                      htmlFor={extra?.id}
                      className=" xl:text-base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#4e4c4c]"
                    >
                      {extra?.label}
                    </label>
                  </div>
                  <div
                    className={cn(
                      "xl:text-base text-sm",
                      extra?.select === 0 && "text-[#737373]"
                    )}
                  >
                    ${extra?.price?.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-b-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">Subtotal</div>
              <div className="font-medium">${subtotal?.toFixed(2)}</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="font-medium">Discount</div>
              <div className="font-medium text-primary-cyan">
                -$
                {discount}
                <span className="text-xs ">({data?.discount}%)</span>
              </div>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="font-medium text-lg">Grand Total</div>
              <div className="font-bold text-lg">${grandTotal?.toFixed(2)}</div>
            </div>
          </div>

          <div className="p-4 border-b-2 space-y-3">
            <div className="flex gap-x-4 items-center justify-between">
              <div className="font-medium w-32 text-sm ">
                Pickup Location :{" "}
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Enter easiest location"
                  className="bg-gray-100"
                  onChange={(e) => setPickupLocation(e.target.value)}
                ></Input>
              </div>
            </div>
            <div className="flex gap-x-4 items-center justify-between">
              <div className="font-medium w-32 text-sm">
                Dropoff Location :{" "}
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Enter easiest location"
                  className="bg-gray-100"
                  onChange={(e) => setDropoffLocation(e.target.value)}
                ></Input>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 ">
          <Button
            onClick={handleRentCar}
            className="w-full bg-primary-cyan hover:bg-cyan-600 group"
            disabled={
              pickupLocation === "" ||
              dropoffLocation === "" ||
              !pickupDate ||
              !dropoffDate ||
              isLoading
            }
          >
            Rent Now <AnimatedArrow></AnimatedArrow>{" "}
            {isLoading && <LoadingSpin />}
          </Button>
        </CardFooter>
      </Card>
      <LoginDialog open={openLoginModal} setOpen={setOpenLoginModal} />
    </>
  );
}
