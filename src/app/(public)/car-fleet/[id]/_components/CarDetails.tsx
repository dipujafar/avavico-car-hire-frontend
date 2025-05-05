"use client";
import { Star } from "lucide-react";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { BagIcon, DoorsIcons, MiterIcon, PuleIcon, PuleTypeIcon, SeatsIcons, SettingIcon2, SUVsIcons } from "@/components/icons";

type CarSpecification = {
  icon: ReactNode;
  text: string;
};

const carSpecifications: CarSpecification[] = [
  { icon: <MiterIcon></MiterIcon>, text: "100 miles" },
  { icon:<PuleTypeIcon></PuleTypeIcon>, text: "Diesel" },
  { icon: <SettingIcon2></SettingIcon2>, text: "Automatic" },
  { icon: <SeatsIcons></SeatsIcons>, text: "4 seats" },
  { icon: <BagIcon></BagIcon>, text: "3 Large bags" },
  { icon: <SUVsIcons></SUVsIcons>, text: "SUVs" },
  { icon: <DoorsIcons></DoorsIcons>, text: "4 Doors" },
  { icon: <PuleIcon></PuleIcon>, text: "2.5L" },
];

export default function CarDetails() {
  return (
    <div className="space-y-4">
      <div className="space-y-2.5">
        <h2 className="xl:text-4xl md:text-3xl text-2xl  font-bold tracking-tight">
          Mercedes AMG Sports
        </h2>
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
          <span className="font-medium">4.95</span>
          <span className="text-[#737373]">(672 reviews)</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-baseline">
          <span className="xl:text-3xl md:text-2xl text-xl font-bold">$450</span>
          <span className=" text-muted-foreground">/day</span>
        </div>

        <p className="md:text-base text-sm text-[#333]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {carSpecifications.map((spec, index) => (
            <div
              key={index}
              className="bg-primary-cyan text-white p-4 rounded-md flex items-center gap-3"
            >
              {spec.icon}
              <span className="font-medium md:text-base text-sm truncate">{spec.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
