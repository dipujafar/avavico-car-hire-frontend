"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { scaleUpChildVariant, scaleUpVariant } from "@/animation/motionVariant";

// Define the type for each step
type RentalStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

// Define the props for our component
interface RentalStepsProps {
  steps: RentalStep[];
  imageUrl: string;
  heading: string;
}

// Sample data array
const rentalStepsData = [
  {
    id: "choose",
    number: "01",
    title: "Choose your car",
    description:
      "Browse our wide selection of vehicles, from compact city cars to spacious SUVs. Pick the perfect ride that suits your needs.",
  },
  {
    id: "book",
    number: "02",
    title: "Book online",
    description:
      "Reserve your car in just a few clicks with our user-friendly booking system. Select your dates and locations, and confirm your reservation instantly.",
  },
  {
    id: "pickup",
    number: "03",
    title: "Pick up & drive",
    description:
      "Head to the nearest pickup location and grab your keys. Enjoy a smooth ride through the city with our reliable and well-maintained vehicles.",
  },
];

export default function RentalSteps() {
  return (
    <div className="flex flex-col lg:flex-row w-full overflow-hidden rounded-lg bg-black text-white">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
        <Image
          src={"/rent_steps_lmage.png"}
          alt="Car rental"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 xl:px-20 px-5 xl:py-20 py-12 bg-[#161618]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, stiffness: 280, damping: 30, mass: 0.1 }}
          className="md:text-3xl text-xl xl:text-4xl font-bold mb-8"
        >
          Rent your car in 3 easy steps
        </motion.h2>

        <motion.div
          variants={scaleUpVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {rentalStepsData.map((step) => (
            <motion.div
            // @ts-ignore
              variants={scaleUpChildVariant}
              key={step.id}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-medium">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold md:text-xl">{step.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
