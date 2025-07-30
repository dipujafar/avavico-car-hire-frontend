"use client";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import DestinationsImagesDisplay from "./DestinationsImagesDisplay";
import { motion } from "motion/react";
import { fadeUpWithBlurVariants } from "@/animation/motionVariant";

const featuredDestinations = [
  {
    title: "Unbeatable Price",
    description:
      "Get the best value with our competitive rates—no hidden fees, just transparent pricing and great deals on every ride.",
  },
  {
    title: "High Quality",
    description:
      "Choose from a wide selection of well-maintained vehicles, from economy cars to luxury SUVs, all fully inspected and road-ready.",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Have questions or need assistance? Our dedicated support team is here for you any time, day or night.",
  },
  {
    title: "Unlimited Miles",
    description:
      "Drive as far as you need with our unlimited mileage option—perfect for road trips, long-distance travel, or simply exploring more.",
  },
];

const Destinations = () => {
  return (
    <Container>
      <SectionTitle title="Ride To Destinations"></SectionTitle>
      <SectionTitle
        title="With Maximum Comfort"
        subtitle="Experience the freedom of the open road with our top-rated car rentals. Whether you're traveling for business or leisure, we ensure a smooth, comfortable journey every time."
      ></SectionTitle>

      {/* display all destinations featured */}
      <motion.div
        key={"destinations"}
        variants={fadeUpWithBlurVariants()}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="lg:mt-16 mt-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        {featuredDestinations?.map((destination, index) => (
          <motion.div variants={fadeUpWithBlurVariants()} key={index}>
            <h2 className="text-7xl text-[#C9C9C9] ">0{index + 1}</h2>
            <div className="-translate-y-7">
              <h3 className="text-2xl font-bold ">{destination.title}</h3>
              <p className="text-primary-gray">{destination.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* destination section image */}
      <DestinationsImagesDisplay></DestinationsImagesDisplay>
      {/* <Image
        src={destinationSectionImage}
        alt="destinationSectionImage"
        width={1200}
        height={1200}
        className="mt-2 w-full rounded-md object-cover object-center max-h-[740px] origin-center"
      ></Image> */}
    </Container>
  );
};

export default Destinations;
