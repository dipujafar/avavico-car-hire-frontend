"use client";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IOrderData } from "@/types";
import moment from "moment";
import { differenceInDays } from "date-fns";

interface CarRentalCardProps {
  carRental: IOrderData;
  onAccept?: (id: string) => void;
  status: string;
}

export function OrderCarRentalCard({
  carRental,
  onAccept,
  status,
}: CarRentalCardProps) {
  const days =
    carRental?.dropOff && carRental?.pickUp
      ? Math.max(
          1,
          differenceInDays(
            new Date(carRental?.dropOff),
            new Date(carRental?.pickUp)
          )
        )
      : 0;

  return (
    <Card className="overflow-hidden px-3">
      <div className="flex flex-col lg:flex-row">
        <div className="relative  w-full md:h-auto lg:w-2/4">
          <Link href={`/car-fleet/${carRental?.carId?.id}`}>
            <Image
              src={carRental.carId?.carImage?.[0]}
              alt={`${carRental.carId?.carName} image`}
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={"/blurImage.jpg"}
              className="object-cover  rounded-md xl:h-[350px] lg:h-[310px] md:h-[300px]"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col md:px-4 px-1 mt-2 lg:mt-0">
          <div className="flex items-start justify-between">
            <Link href={`/car-fleet/${carRental?.carId?.id}`}>
              <h3 className="md:text-xl  font-bold line-clamp-1">
                {carRental?.carId?.carName}
              </h3>
            </Link>
          <Link href={`/vendor/orders/${carRental?.id}`}>
              <Button
                style={{ boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.20)" }}
                size="sm"
                onClick={() => onAccept?.(carRental.id)}
                className="bg-cyan-500 hover:bg-cyan-600 shadow-2xl"
              >
               More Details
              </Button>
          </Link>
           
          </div>
          <div>
            <p className="text-sm text-[#6B7280] ">{carRental?.carId?.model}</p>
            <div className="flex items-center text-primary-gray mb-2 line-clamp-1">
              <MapPin className="w-4 h-4 mr-1" size={14} />
              <span className="truncate text-sm">
                {carRental?.carId?.rentingLocation?.city},{" "}
                {carRental?.carId?.rentingLocation?.state}
              </span>
            </div>
          </div>

          <hr className="mt-2 border-[#D8D8D8]" />
          <div className="mt-4 grid grid-cols-1 gap-2 text-[#333]">
            <div className="flex items-center md:gap-2 gap-2">
              <Calendar className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Pick-Up
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {moment(carRental?.pickUp).format("lll")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Drop-Off
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {moment(carRental?.dropOff).format("lll")}
              </span>
            </div>
          </div>
          <hr className="mt-2 border-[#D8D8D8]" />
          <div className="mt-4 grid grid-cols-1 md:gap-2 gap-2 text-[#333]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Pick-Up Location
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {carRental?.pickUpLocation}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Drop-Off Location
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {carRental?.dropOffLocation}
              </span>
            </div>
          </div>
          <hr className="mt-2 border-[#D8D8D8]" />
          <div className=" flex items-center justify-between pt-2 text-[#333]">
            <div className="text-sm">
              <span className="font-medium">Duration: </span>
              {days}
            </div>
            <div className="text-right">
              <span className="text-sm truncate font-medium">Price: </span>
              <span className="text-lg font-bold">
                ${carRental?.total?.toFixed(2)}
              </span>
            </div>
          </div>
          <hr className="mt-2 border-[#D8D8D8]" />
          {/* ----------------------------------------------- user details data -------------------------------------- */}
          <div className="space-y-0.5">
            <h3 className=" font-semibold">User Information</h3>
            {/* ------------------------- user name ------------------------------------------------ */}
            <div className="flex items-center gap-x-1.5 line-clamp-1 text-sm">
              <h4 className="w-[40px] line-clamp-1 ">Name:</h4>
              <p className="line-clamp-1">
                {carRental?.userId?.firstName} {carRental?.userId?.lastName}
              </p>
            </div>
            {/* ------------------------- user email and phone number ------------------------------------------------ */}
            <div className="flex justify-between flex-wrap gap-x-3">
              <div className="flex items-center gap-x-1.5 text-sm">
                <h4 className="w-[40px] line-clamp-1 ">Email:</h4>
                <Link
                  href={`mailto:${carRental?.userId?.email}`}
                  className="line-clamp-1"
                >
                  {carRental?.userId?.email}
                </Link>
              </div>
              <div className="flex items-center gap-x-1.5  text-sm">
                <h4 className="w-[40px] line-clamp-1 ">Phone:</h4>
                <Link
                  href={`tel:${carRental?.userId?.mobile}`}
                  className="line-clamp-1"
                >
                  {carRental?.userId?.mobile}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
