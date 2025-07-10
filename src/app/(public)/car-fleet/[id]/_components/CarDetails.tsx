"use client";
import { MapPin, SearchCheck, Star } from "lucide-react";

import { ReactNode } from "react";
import { motion } from "motion/react";
import {
  DoorsIcons,
  MiterIcon,
  PuleIcon,
  PuleTypeIcon,
  SeatsIcons,
  SettingIcon2,
  SUVsIcons,
} from "@/components/icons";
import { IAvarageRating, ICar } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CarSpecification = {
  icon: ReactNode;
  text: string;
  title?: string;
};

export default function CarDetails({
  data,
  averageReview,
}: {
  data: ICar;
  averageReview: IAvarageRating;
}) {
  const carSpecifications: CarSpecification[] = [
    {
      icon: <MiterIcon></MiterIcon>,
      text: `${data?.mileage?.rate} ${data?.mileage?.type}`,
      title: "Mileage",
    },
    {
      icon: <PuleTypeIcon></PuleTypeIcon>,
      text: data?.fuelType,
      title: "Fuel Type",
    },
    {
      icon: <SettingIcon2></SettingIcon2>,
      text: data?.gearType,
      title: "Gear Type",
    },
    {
      icon: <SeatsIcons></SeatsIcons>,
      text: `${data?.seat} seats`,
      title: "Seats",
    },
    { icon: <SearchCheck size={20} />, text: data?.vin, title: "VIN" },
    {
      icon: <SUVsIcons></SUVsIcons>,
      text: data?.bodyStyle?.map((type) => type).join(", "),
      title: "Body Style",
    },
    {
      icon: <DoorsIcons></DoorsIcons>,
      text: `${data?.door} Doors`,
      title: "Doors",
    },
    {
      icon: <PuleIcon></PuleIcon>,
      text: `${data?.fuel}L`,
      title: "Fuel Capacity",
    },
  ];
  return (
    <div className="space-y-4">
      <div className="space-y-2.5">
        <div>
          <h2 className="xl:text-4xl md:text-3xl text-2xl  font-bold tracking-tight">
            {data?.carName}
          </h2>
          <p className="text-black/70">{data?.brand} -- {data?.model}</p>
          <div className="flex items-center text-primary-gray">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">
              {data?.rentingLocation?.state !== data?.rentingLocation?.city
                ? `${data?.rentingLocation?.state}, `
                : ""}{" "}
              {data?.rentingLocation?.city},{" "}
              {data?.rentingLocation?.streetAddress}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 border px-4 py-1 w-fit rounded-full bg-white">
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              delay: 0,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Star className="h-4 w-4 fill-current text-[#1EC1E2]" />
          </motion.span>
          <span className="font-medium">{averageReview?.overallRating || 0}</span>
          <span className="text-[#737373]">
            ({averageReview?.totalReviews || 0} reviews)
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-baseline">
          <span className="xl:text-3xl md:text-2xl text-xl font-bold">
            ${data?.price}
          </span>
          <span className=" text-muted-foreground">/day</span>
        </div>

        <p className="md:text-base text-sm text-[#333]">{data?.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {carSpecifications.map((spec, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="bg-primary-cyan text-white p-4 rounded-md flex items-center gap-3">
                  {spec.icon}
                  <span className="font-medium md:text-base text-sm truncate">
                    {spec.text}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {" "}
                  <span className="font-semibold">
                    {spec.title && `${spec.title} : `}{" "}
                  </span>
                  {spec.text}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
