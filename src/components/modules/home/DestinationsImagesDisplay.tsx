"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { scaleUpChildVariant, scaleUpVariant } from "@/animation/motionVariant";

const DestinationsImagesDisplay = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        key={"destinations"}
        variants={scaleUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid max-h-[700px] w-full gap-4  grid-cols-4 grid-rows-5 rounded-lg"
      >
        <motion.div key={"destinations_image1"}  variants={scaleUpChildVariant} className="col-span-2 row-span-3  flex items-center justify-center">
          <Image
            src={"/destination_section_bg.png"}
            alt="blog_details_image"
            className="w-full h-full object-cover rounded-md"
            width={1200}
            height={1200}
          ></Image>
        </motion.div>

        <motion.div key={"destinations_image2"}  variants={scaleUpChildVariant}  className="col-span-2 row-span-2  flex items-center justify-center">
          <Image
            src={"/reviews_page_bg.png"}
            alt="blog_details_image"
            className="w-full h-full object-cover rounded-md"
            width={1200}
            height={1200}
          ></Image>
        </motion.div>

        <motion.div key={"destinations_image3"}  variants={scaleUpChildVariant} className="col-span-2 row-span-3  flex items-center justify-center">
          <Image
            src={"/blog_details_image.png"}
            alt="blog_details_image"
            className="w-full h-full object-cover rounded-md"
            width={1200}
            height={1200}
          ></Image>
        </motion.div>

        <motion.div key={"destinations_image4"}  variants={scaleUpChildVariant} className="col-span-2 row-span-2  flex items-center justify-center">
          <Image
            src={"/service_page_bg.png"}
            alt="blog_details_image"
            className="w-full h-full object-cover rounded-md"
            width={1200}
            height={1200}
          ></Image>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DestinationsImagesDisplay;
