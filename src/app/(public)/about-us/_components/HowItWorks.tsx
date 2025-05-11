import { CarIcon, ClickIcon, MoneyIcon } from "@/components/icons";
import Container from "@/components/shared/Container";
import { Car, Wallet, Key } from "lucide-react";

export default function HowItWorks() {
  return (
    <Container>
      <div>
        <div className="text-left mb-5">
          <h2 className="text-sm font-semibold text-[#333] mb-1">
            How It Works
          </h2>
          <h3 className="text-3xl  text-black">
            Following working steps
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-md">
            <CarIcon></CarIcon>
            <h4 className="text-lg font-bold mb-2 text-[#101010]">
              Choose A Car
            </h4>
            <p className="text-sm text-[#737373] max-w-[250px]">
              Select car type that suits your needs, lifestyle, or long-term
              use.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-md">
            <MoneyIcon></MoneyIcon>
            <h4 className="text-lg font-bold mb-2 text-[#101010]">
              Customize Your Booking
            </h4>
            <p className="text-sm text-[#737373]  max-w-[250px]">
              Pick your rental dates, location & any additional services or
              coverage.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-md">
            <ClickIcon></ClickIcon>
            <h4 className="text-lg font-bold mb-2 text-[#101010]">
              Confirm & Drive
            </h4>
            <p className="text-sm text-[#737373] max-w-[250px]">
              Complete your reservation with easy payment options.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
