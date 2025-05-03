"use client";
import { cn } from "@/lib/utils";
import Container from "./Container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/animation/motionVariant";
type TPropsType = {
  backgroundImage?: string;
  image: string;
  title: string;
  description?: string;
  className?: string;
  style?: Record<string, any>;
};

const PageTopBanner = ({
  backgroundImage,
  image,
  title,
  description,
  className,
  style,
}: TPropsType) => {
  return (
    <div
      className={cn(
        "xl:min-h-[60vh] lg:min-h-[50vh] md:min-h-[40vh] min-h-[30vh]  bg-cover   bg-no-repeat bg-center relative  px-4 ",
        className
      )}
      style={{
        backgroundImage: backgroundImage || `url(${image})`,
        ...style,
      }}
    >
      <div>
        <Container>
          <div className="overflow-x-hidden">
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
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
    </div>
  );
};

export default PageTopBanner;
