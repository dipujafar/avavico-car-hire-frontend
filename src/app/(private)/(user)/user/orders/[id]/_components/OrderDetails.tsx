import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import moment from "moment";
import { differenceInDays } from "date-fns";
import { ICar } from "@/types";

interface OrderSummaryProps {
  title: string;
  description: string;
  imageUrl: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocation: string;
  dropOffLocation: string;
  basePriceDays: number;
  discount?: number;
  carLocation?: string;
  carid?: string;
  total?: number;
  addExtra?: Record<string, boolean>;
  carData?: ICar;
}

export default function OrderDetails({
  title,
  description,
  imageUrl,
  pickUpDate,
  dropOffDate,
  pickUpLocation,
  dropOffLocation,
  discount = 0,
  carLocation,
  basePriceDays,
  carid,
  total,
  carData,
  addExtra,
}: OrderSummaryProps) {
  // const total = basePrice + insurance - discount;

  const days =
    pickUpDate && dropOffDate
      ? Math.max(
          1,
          differenceInDays(new Date(dropOffDate), new Date(pickUpDate))
        )
      : 0;

  console.log(days);

  return (
    <div
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
      className=" bg-white rounded-xl overflow-hidden"
    >
      <div className="p-6 space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Order Summary
          </h2>
          <hr />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Link href={`/car-fleet/${carid}`}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={500}
              height={300}
              placeholder="blur"
              blurDataURL={"/blurImage.jpg"}
              className="w-full max-h-[217px] object-cover"
            />
          </Link>
        </div>

        <div>
          <Link href={`/car-fleet/${carid}`}>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </Link>
          <p className="text-sm text-[#6B7280] ">{description}</p>
          <div className="flex items-center text-primary-gray mb-2 line-clamp-1">
            <MapPin className="w-4 h-4 mr-1" size={14} />
            <span className="truncate text-sm">{carLocation}</span>
          </div>
          <hr />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-x-3 line-clamp-1">
            <div className="flex items-center text-[#333]">
              <CalendarDays className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="lg:text-sm text-xs truncate">Pick-Up</span>
            </div>
            <span className="lg:text-sm text-xs truncate">
              {moment(pickUpDate).format("llll")}
            </span>
          </div>

          <div className="flex items-center justify-between gap-x-3 line-clamp-1">
            <div className="flex items-center text-[#333]">
              <CalendarDays className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="lg:text-sm text-xs truncate">Drop-Off</span>
            </div>
            <span className="lg:text-sm text-xs truncate text-[#333] ">
              {moment(dropOffDate).format("llll")}
            </span>
          </div>

          <div className="flex items-center justify-between gap-x-3 line-clamp-1">
            <div className="flex items-center text-[#333]">
              <MapPin className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="lg:text-sm text-xs truncate">
                Pick-Up Location
              </span>
            </div>
            <span className="lg:text-sm text-xs truncate text-[#333]">
              {pickUpLocation}
            </span>
          </div>

          <div className="flex items-center justify-between gap-x-3 line-clamp-1">
            <div className="flex items-center text-[#333]">
              <MapPin className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="lg:text-sm text-xs truncate">
                Drop-Off Location
              </span>
            </div>
            <span className="lg:text-sm text-xs truncate text-[#333]">
              {dropOffLocation}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Price Breakdown</h4>
          <div className="space-y-2">
            {/* ---------------------------------- base price ------------------- */}
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Base Price ({days} days)
              </span>
              <span className="text-sm">${basePriceDays * days}</span>
            </div>

            {/* ------------------------------- extra child seat -----------------------------  */}
            {addExtra?.childSeat && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Child Seat</span>
                <span className="text-sm">${carData?.childSeat?.price}</span>
              </div>
            )}

            {/* ---------------------------------- extra driver ----------------------------- */}
            {addExtra?.additionalDriver && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Additional Driver</span>
                <span className="text-sm">
                  ${carData?.additionalDriver?.price}
                </span>
              </div>
            )}

            {/* ---------------------------------- extra young driver ---------------------------  */}
            {addExtra?.youngDriver && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Young Driver</span>
                <span className="text-sm">${carData?.youngDriver?.price}</span>
              </div>
            )}

            {/* ---------------------------------- one way fees --------------------------- */}
            {addExtra?.oneWayFees && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">One way fees</span>
                <span className="text-sm">${carData?.oneWayFees?.price}</span>
              </div>
            )}

            {/* ---------------------------------- add extra gps --------------------------- */}
            {addExtra?.gps && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">
                  GPS Navigation System
                </span>
                <span className="text-sm">${carData?.gps?.price}</span>
              </div>
            )}

            {/* ---------------------------------- cross border --------------------------- */}
            {addExtra?.crossBorder && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cross Border</span>
                <span className="text-sm">${carData?.crossBorder?.price}</span>
              </div>
            )}

            {discount > 0 && (
              <div className="flex justify-between">
                <span className="text-sm text-primary-cyan">Discount</span>
                <span className="text-sm text-primary-cyan">-${discount}</span>
              </div>
            )}

            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className=" text-lg">Total</span>
              <span className="textlg">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
