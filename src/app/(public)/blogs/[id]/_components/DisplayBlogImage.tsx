"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { scaleUpChildVariant, scaleUpVariant } from "@/animation/motionVariant";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DisplayBlogImage = ({ data }: { data: string }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        key={"destinations"}
        variants={scaleUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid max-h-[700px] w-full lg:gap-4 md:gap-3 gap-2  grid-cols-4 grid-rows-5 rounded-lg "
      >
        <motion.div
          key={"destinations_image1"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-3  flex items-center justify-center zoom-in shadow-lg rounded-md"
        >
          <Zoom>
            <Image
              src={data?.[0]}
              alt="blog_details_image"
              className="w-full lg:h-[300px] md:h-[200px] h-[130px]  object-cover rounded-md  border"
              width={1200}
              height={1200}
              placeholder="blur"
               blurDataURL={"/blurImage.jpg"}
            ></Image>
          </Zoom>
        </motion.div>

        <motion.div
          key={"destinations_image2"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-2  flex items-center justify-center zoom-in shadow-lg rounded-md"
        >
          {data?.[1] && (
            <Zoom>
              <Image
                src={data?.[1]}
                alt="blog_details_image"
                className="w-full lg:h-[200px] md:h-[133px] h-[88px] object-cover rounded-md  "
                width={1200}
                height={1200}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            </Zoom>
          )}
        </motion.div>

        <motion.div
          key={"destinations_image3"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-3  flex items-center justify-center zoom-in shadow-lg rounded-md"
        >
          {data?.[2] && (
            <Zoom>
              <Image
                src={data?.[2]}
                alt="blog_details_image"
                className="w-full lg:h-[300px] md:h-[200px] h-[130px] object-cover rounded-md"
                width={1200}
                height={1200}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            </Zoom>
          )}
        </motion.div>

        <motion.div
          key={"destinations_image4"}
          variants={scaleUpChildVariant}
          className="col-span-2 row-span-2  flex items-center justify-center zoom-in shadow-lg rounded-md"
        >
          {data?.[3] && (
            <Zoom>
              <Image
                src={data?.[3]}
                alt="blog_details_image"
                className="w-full lg:h-[200px] md:h-[133px] h-[88px] object-cover rounded-md"
                width={1200}
                height={1200}
                placeholder="blur"
                blurDataURL={"/blurImage.jpg"}
              ></Image>
            </Zoom>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DisplayBlogImage;
