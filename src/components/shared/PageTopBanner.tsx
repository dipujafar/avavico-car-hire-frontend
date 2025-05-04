"use client";
import { cn } from "@/lib/utils";
import Container from "./Container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/animation/motionVariant";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
type TPropsType = {
  backgroundImage?: string;
  image: string;
  title: string;
  description?: string;
  className?: string;
  style?: Record<string, any>;
  pathsData?: Record<string, string | boolean>[];
};

const PageTopBanner = ({
  backgroundImage,
  image,
  title,
  description,
  className,
  style,
  pathsData
}: TPropsType) => {
  return (
    <div
      className={cn(
        "xl:min-h-[60vh] lg:min-h-[50vh] md:min-h-[40vh] min-h-[30vh]  bg-cover   bg-no-repeat bg-center relative  px-4  "
      )}
      style={{
        backgroundImage: backgroundImage || `url(${image})`,
        ...style,
      }}
    >
      <div>
        <Container>
          <div className="overflow-x-hidden">
            <div
              className={cn("absolute inset-0 bg-black opacity-40", className)}
            ></div>
            <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-full ">
              <motion.section
                variants={fadeUpVariants()}
                initial="initial"
                animate="animate"
                className="space-y-1 text-white "
              >
                <motion.h1
                  key="title"
                  variants={fadeUpVariants(0)}
                  className="lg:text-5xl md:text-3xl text-2xl font-bold text-center max-w-5xl mx-auto"
                >
                  {title}
                </motion.h1>
                <motion.p
                  key="sub-title"
                  variants={fadeUpVariants(0.6)}
                  className="md:text-lg font-medium text-center max-w-5xl mx-auto "
                >
                  {description}
                </motion.p>
              </motion.section>
            </div>
          </div>
        </Container>
      </div>
      {/* relavant paths */}
      {  pathsData?.length &&
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform  bg-white flex  gap-x-2.5 w-fit px-5 py-2 border rounded-md">
      {
        pathsData?.map((item, index) => (
          <div
            key={index}
           className="flex items-center gap-x-2.5"
          >
            <Link href={item?.href as string} className={cn(" font-medium text-[#4D4D4D]", item?.active && "text-[#101010] font-bold")}>{item?.name}</Link>
            {
              index !== pathsData.length - 1 && <ChevronRight color="#737373" size={24} />
            }
          </div>
        ))
      }
      </div>
}
    </div>
  );
};

export default PageTopBanner;
