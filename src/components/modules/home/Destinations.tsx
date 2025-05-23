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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus.",
  },
  {
    title: "High Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus.",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus.",
  },
  {
    title: "Unlimited Miles",
    description:
      "Lorem ipsum dolor sit amet,  adipiscing elit. Luctus cum purus. consectetur",
  },
];

const Destinations = () => {
  return (
    <Container>
      <SectionTitle title="Ride To Destinations"></SectionTitle>
      <SectionTitle
        title="With Maximum Comfort"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin 
        ut lectus sed ut. Enim egestas enim id duis."
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
