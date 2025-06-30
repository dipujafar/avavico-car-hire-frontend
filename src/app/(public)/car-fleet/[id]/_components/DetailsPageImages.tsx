"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { scaleUpChildVariant, scaleUpVariant } from "@/animation/motionVariant";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DetailsPageImages = ({ carImages = [] }: { carImages: string[] }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        key={"destinations"}
        variants={scaleUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid h-full w-full lg:gap-4 sm:gap-2 gap-1  grid-cols-6 grid-rows-3 "
      >
        <motion.div
          key={"destinations_image1"}
          variants={scaleUpChildVariant}
          className="col-span-4 row-span-2  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[0] && (
              <Image
                src={carImages?.[0]}
                alt="details_image1"
                className="w-full h-full object-cover rounded-md xl:max-h-[450px] lg:max-h-[370px] md:max-h-[300px] max-h-[200px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image2"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[1] && (
              <Image
                src={carImages?.[1]}
                alt="details_image2"
                className="w-full h-full object-cover rounded-md xl:max-h-[225px] lg:max-h-[185px] md:max-h-[150px] max-h-[100px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image3"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[2] && (
              <Image
                src={carImages?.[2]}
                alt="details_image3"
                className="w-full h-full object-cover rounded-md xl:max-h-[225px] lg:max-h-[185px] md:max-h-[150px] max-h-[100px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image4"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[3] && (
              <Image
                src={carImages?.[3]}
                alt="details_image4"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image5"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[4] && (
              <Image
                src={carImages?.[4]}
                alt="details_image5"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image6"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[5] && (
              <Image
                src={carImages?.[5]}
                alt="details_image6"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image7"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[6] && (
              <Image
                src={carImages?.[6]}
                alt="details_image7"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image8"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[7] && (
              <Image
                src={carImages?.[7]}
                alt="details_image8"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image9"}
          variants={scaleUpChildVariant}
          className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center zoom-in"
        >
          <Zoom>
            {carImages?.[8] && (
              <Image
                src={carImages?.[8]}
                alt="details_image9"
                className="w-full h-full object-cover rounded-md max-h-[220px]"
                width={1900}
                height={1900}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            )}
          </Zoom>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DetailsPageImages;
