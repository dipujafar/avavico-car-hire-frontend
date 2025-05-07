import { Star, MapPin, Gauge, Cog, Fuel, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TCar } from "@/types";
import Link from "next/link";
import { MiterIcon2, PuleIcon2, SeatsIcon, SettingIcon3 } from "../icons";

export default function ProductCard({ data }: { data: TCar }) {
  return (
    <Link href={`/car-fleet/${data?.id}`}>
      <Card className=" overflow-hidden border rounded-lg py-0 gap-0 hover:shadow-md duration-500 transition-all ">
        <div className="relative w-full z-0">
          <Image
            src={data?.imageUrl}
            alt={`${data?.name} image`}
            width={1200}
            height={1200}
            className="object-cover origin-center  "
          />
        </div>

        <CardContent className="px-4 space-y-5 -translate-y-3 bg-white z-10 rounded-2xl ">
          <div className="flex justify-end -translate-y-3">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-sm border shadow-sm">
              <Star className="w-4 h-4 mr-1 text-primary-cyan fill-primary-cyan" />
              <span className="text-sm font-medium">
                {data?.rating} ({data?.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="xl:text-2xl text-xl font-bold">{data?.name}</h2>

            <div className="flex items-center text-primary-gray">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{data?.location}</span>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-x-1">
              <MiterIcon2 />
              <span className="text-sm">{data?.distanceIncluded}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <SettingIcon3 />
              <span className="text-sm">{data?.transmission}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <PuleIcon2></PuleIcon2>
              <span className="text-sm">{data.fuelType}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <SeatsIcon />
              <span className="text-sm">{data?.seatingCapacity} seats</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between p-4  ">
          <div>
            <p className="xl:text-2xl text-xl font-bold">$498.25</p>
          </div>
          <Button className="hover:bg-primary-cyan bg-[#F2F4F6] text-black font-bold duration-300">
            Rent Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
