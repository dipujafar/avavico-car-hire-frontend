import { Car, Users, Fuel, Zap, CheckCircle, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MiterIcon2, PuleIcon2, SeatsIcon, SettingIcon3, WalletIcon } from "@/components/icons";
import { ICar } from "@/types";

interface RentalDetailsProps {
  paymentStatus: string;
  paymentMethod: string;
  carData: ICar
}

export function RentalDetails({
  carData ,
  paymentStatus = "Payment Successful",
  paymentMethod = "Paid via Credit Card ending in 1234",
}: RentalDetailsProps) {
  const carDetails = [
    {
      icon: <MiterIcon2 className="size-5"></MiterIcon2>,
      label: "Miles",
      value: carData?.mileage?.rate,
    },
    {
      icon: <PuleIcon2 className="size-4"></PuleIcon2>,
      label: "Fuel Type",
      value: carData?.fuelType,
    },
    {
      icon: <SeatsIcon className="size-6"></SeatsIcon>,
      label: "Seats",
      value: `${carData?.seat} Seats`,
    },
    {
      icon: <SettingIcon3 className="size-5"></SettingIcon3>,
      label: "Transmission",
      value: carData?.gearType,
    },
  ];

  return (
    <Card
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
      className="p-6  bg-white shadow-sm border-none"
    >
      <h2 className="text-xl font-semibold mb-1 ">Rental Details</h2>
      <hr />

      <div className="grid grid-cols-2 gap-4 mt-2">
        {carDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <div>
              <p className="text-sm text-[#4B5563]">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <p className="text-green-600 font-medium">{paymentStatus}</p>
        </div>

        {/* <div className="flex items-center gap-2">
          <WalletIcon className="h-5 w-5 text-gray-500" />
          <p className="text-sm text-[#4B5563]">{paymentMethod}</p>
        </div> */}
      </div>
    </Card>
  );
}
