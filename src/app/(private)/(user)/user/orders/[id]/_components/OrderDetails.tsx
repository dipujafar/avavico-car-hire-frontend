import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

interface OrderSummaryProps {
  title: string;
  description: string;
  imageUrl: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocation: string;
  dropOffLocation: string;
  basePrice: number;
  basePriceDays: number;
  discount?: number;
  insurance: number;
  insuranceType?: string;
}

export default function OrderDetails({
  title,
  description,
  imageUrl,
  pickUpDate,
  dropOffDate,
  pickUpLocation,
  dropOffLocation,
  basePrice,
  basePriceDays,
  discount = 0,
  insurance,
  insuranceType = "Basic Coverage",
}: OrderSummaryProps) {
  const total = basePrice + insurance - discount;

  return (
    <div
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
      className=" bg-white rounded-xl overflow-hidden"
    >
      <div className="p-6 space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
          <hr />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="w-full max-h-[217px] object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-[#6B7280] mb-2">{description}</p>
          <hr />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#333]">
              <CalendarDays className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="text-sm">Pick-Up</span>
            </div>
            <span className="text-sm">{pickUpDate}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#333]">
              <CalendarDays className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="text-sm">Drop-Off</span>
            </div>
            <span className="text-sm text-[#333] ">{dropOffDate}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#333]">
              <MapPin className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="text-sm">Pick-Up Location</span>
            </div>
            <span className="text-sm text-[#333]">{pickUpLocation}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#333]">
              <MapPin className="h-4 w-4 text-cyan-500 mr-2" />
              <span className="text-sm">Drop-Off Location</span>
            </div>
            <span className="text-sm text-[#333]" >{dropOffLocation}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Price Breakdown</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Base Price ({basePriceDays} days)
              </span>
              <span className="text-sm">${basePrice}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between">
                <span className="text-sm text-primary-cyan">Discount</span>
                <span className="text-sm text-primary-cyan">-${discount}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Insurance ({insuranceType})
              </span>
              <span className="text-sm">${insurance}</span>
            </div>

            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className=" text-lg">Total</span>
              <span className="textlg">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
