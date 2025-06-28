import { Star, MapPin, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ICar } from "@/types";
import Link from "next/link";
import { MiterIcon2, PuleIcon2, SeatsIcon, SettingIcon3 } from "../../icons";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function ProductCard({
  data,
  ownCar,
}: {
  data: ICar;
  ownCar?: boolean;
}) {
  return (
    <Link href={`/car-fleet/${data?.id}`}>
      <Card className=" overflow-hidden border rounded-lg py-0 gap-0 hover:shadow-md duration-500 transition-all ">
        <div className="relative w-full z-0">
          <Image
            src={data?.carImage?.[0]}
            alt={`${data?.carImage} image`}
            width={1200}
            height={1200}
            className="object-cover origin-center md:h-[200px] max-h-[250px]  "
          />
        </div>

        <CardContent className="px-4 space-y-2 -translate-y-3 bg-white z-10 rounded-2xl ">
          <div className={cn("flex justify-end -translate-y-3", data.discount && "justify-between gap-x-0.5")}>
          {/* -------------------------- discount -------------------------- */}

            <div className={cn("inline-flex items-center px-3 py-1 bg-white rounded-sm border shadow-sm", !data?.discount && "hidden")}>
              
              <span className="text-sm font-medium">
                {data?.discount}% Off
              </span>
              
            </div>

            {/* -------------------------- car rating -------------------------- */}

            <div className="inline-flex items-center px-3 py-1 bg-white rounded-sm border shadow-sm">
              <Star className="w-4 h-4 mr-1 text-primary-cyan fill-primary-cyan" />

              <span className="text-sm font-medium">
                {data?.rating} ({data?.reviewCount} reviews)
              </span>
            </div> 

             
          </div>

          <div className="space-y-1">
            <div>
              <h2 className="xl:text-2xl text-xl font-bold truncate">
                {data?.carName}
              </h2>
              <h2 className="text-sm text-primary-gray truncate">{data?.model}</h2>
            </div>

            <div className="flex items-center text-primary-gray">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="truncate">
                {data?.rentingLocation?.city},{" "}
                {data?.rentingLocation?.streetAddress}
              </span>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-x-1">
              <MiterIcon2 />
              <span className="text-sm">
                {data?.mileage?.rate} {data?.mileage?.type}
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <SettingIcon3 />
              <span className="text-sm">{data?.gearType}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <PuleIcon2></PuleIcon2>
              <span className="text-sm">{data.fuelType?.[0]}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <SeatsIcon />
              <span className="text-sm">{data?.seat} seats</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between px-4 pb-4 pt-2  ">
          <div>
            <p className="xl:text-2xl text-xl font-bold">
              ${data?.price}
              <span className="text-sm text-black/60">/day</span>
            </p>
          </div>

          {ownCar && (
            <div className="flex gap-x-1">
              <div className="size-7 bg-green-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer">
                <Edit size={16}></Edit>
              </div>
              <div className="size-7 bg-red-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer">
                <Trash2 size={16}></Trash2>
              </div>
            </div>
          )}
          {!ownCar && (
            <Button className="hover:bg-primary-cyan bg-[#F2F4F6] hover:text-white text-black font-bold duration-300">
              Rent Now
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
