"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { scaleUpChildVariant, scaleUpVariant } from "@/animation/motionVariant";

const DetailsPageImages = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        key={"destinations"}
        variants={scaleUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} className="grid h-full w-full lg:gap-4 sm:gap-2 gap-1  grid-cols-6 grid-rows-3 ">
       <motion.div key={"destinations_image1"}  variants={scaleUpChildVariant} className="col-span-4 row-span-2  shadow-md rounded-md  flex items-center justify-center">
          <Image src="/details_image1.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image2"}  variants={scaleUpChildVariant} className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center">
        <Image src="/details_image2.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image3"}  variants={scaleUpChildVariant} className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center">
        <Image src="/details_image3.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image4"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image4.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image5"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image5.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image6"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image6.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image7"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image7.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image8"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image9.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>

        <motion.div key={"destinations_image9"}  variants={scaleUpChildVariant} className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image10.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DetailsPageImages;
