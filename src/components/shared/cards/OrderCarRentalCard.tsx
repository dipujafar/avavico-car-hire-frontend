"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CarRental {
  id: string;
  name: string;
  description: string;
  image: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocation: string;
  dropOffLocation: string;
  duration: string;
  price: number;
}

interface CarRentalCardProps {
  carRental: CarRental;
  onAccept?: (id: string) => void;
  status: string;
}

export function OrderCarRentalCard({
  carRental,
  onAccept,
  status,
}: CarRentalCardProps) {
  return (
    <Card className="overflow-hidden px-3">
      <div className="flex flex-col lg:flex-row">
        <div className="relative  w-full md:h-auto lg:w-2/4">
          <Link href={`/car-fleet/${carRental.id}`}>
            <Image
              src={carRental.image}
              alt={carRental.name}
              width={1200}
              height={1200}
              className="object-cover h-full rounded-md"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col md:px-4 px-1 mt-2 lg:mt-0">
          <div className="flex items-start justify-between">
            <Link href={`/car-fleet/${carRental.id}`}>
              <h3 className="md:text-xl  font-bold">{carRental.name}</h3>
            </Link>
            {status === "pending" && (
              <Button
                style={{ boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.20)" }}
                size="sm"
                onClick={() => onAccept?.(carRental.id)}
                className="bg-cyan-500 hover:bg-cyan-600 shadow-2xl"
              >
                Accept
              </Button>
            )}
            {status !== "pending" && (
              <div
                style={{ boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.20)" }}
                className={cn(
                  "shadow-2xl capitalize px-2  rounded-full text-sm text-white",
                  status === "completed" && "bg-[#00B74A] hover:bg-green-600",
                  status === "canceled" && "bg-[#E12728] hover:bg-red-600",
                  status === "in progress" && "bg-[#FFB000] hover:bg-yellow-600"
                )}
              >
                {status}
              </div>
            )}
          </div>
          <Link
            href={`/car-fleet/${carRental.id}`}
            className="md:text-sm text-xs text-[#6B7280] mt-1"
          >
            {carRental.description}
          </Link>

          <hr className="mt-2 border-[#D8D8D8]" />
          <div className="mt-4 grid grid-cols-1 gap-2 text-[#333]">
            <div className="flex items-center md:gap-2 gap-2">
              <Calendar className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Pick-Up
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {carRental.pickUpDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Drop-Off
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {carRental.dropOffDate}
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
                {carRental.pickUpLocation}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-500" />
              <span className="md:text-sm text-xs truncate font-medium">
                Drop-Off Location
              </span>
              <span className="ml-auto md:text-sm truncate text-xs">
                {carRental.dropOffLocation}
              </span>
            </div>
          </div>
          <hr className="mt-2 border-[#D8D8D8]" />
          <div className=" flex items-center justify-between pt-2 text-[#333]">
            <div className="text-sm">
              <span className="font-medium">Duration: </span>
              {carRental.duration}
            </div>
            <div className="text-right">
              <span className="text-sm truncate font-medium">Price: </span>
              <span className="text-lg font-bold">
                ${carRental.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
