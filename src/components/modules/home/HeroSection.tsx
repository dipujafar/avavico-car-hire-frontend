"use client";
import { TextAnimation } from "@/animation/TextAnimation";
import bgImage from "@/assets/images/hero_section_bg.png";
import { BorderIcon } from "@/components/icons";
import Container from "@/components/shared/Container";
import Image from "next/image";
import {motion} from "motion/react";
import { fadeUpVariants } from "@/animation/motionVariant";

const HeroSection = () => {
  return (
    <motion.section
        variants={fadeUpVariants()}
        initial="initial"
        animate="animate"
        className=" relative"
      >
      <Image
        src={bgImage}
        alt="bgImage"
        className="max-h-[calc(100vh-124px)] object-cover"
      ></Image>
      <Container className="absolute inset-0 bg-black/40 flex flex-col justify-center 2xl:gap-y-6 md:gap-4 gap-2 ">
        <TextAnimation
          text="AVA VICO Car Hire"
          className=" font-bold text-primary-blue text-2xl md:text-5xl xl:text-7xl text-primary-cyan "
          initialDelay={0.5}
        />
        <TextAnimation
          text="Simplifies Your Journey"
          className="xl:text-6xl md:text-3xl text-xl text-white font-medium"
          initialDelay={1.3}
        />

        <motion.p
          key="hero-title"
          variants={fadeUpVariants(1.9)}
          className="xl:text-[28px] md:text-xl text-sm text-white max-w-2xl"
        >
          Discover the Best, Most Affordable and Convenient Car Rental Deals
          Across{" "}
          <span className="text-primary-cyan relative">
            {" "}
            Europe{" "}
            <span className="absolute -bottom-4 md:left-0 -left-6">
              {" "}
              <BorderIcon />
            </span>{" "}
          </span>
        </motion.p>
      </Container>
    </motion.section>
  );
};

export default HeroSection;
