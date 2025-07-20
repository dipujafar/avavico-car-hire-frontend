"use client";
import CCountUp from "@/components/shared/CCountUp";
import Container from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";
import useStaticSectionData from "@/hooks/useStaticSectionData";
import { motion } from "motion/react";

const fadeUpVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const StaticSection = () => {
  const { staticSectionData, isLoading } = useStaticSectionData();
  return (
    <div className="bg-[url('/static_section_bg.png')]  bg-cover origin-center lg:py-20 py-10 overflow-hidden">
      <Container className="flex flex-col xl:flex-row gap-y-2 justify-between gap-x-10 text-white">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: "-10%" }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className=" lg:text-[32px] text-2xl font-bold max-w-2xl line"
          >
            We offer customers a wide range of{" "}
            <span className="text-primary-cyan"> commercial cars </span> and{" "}
            <span className="text-primary-cyan"> luxury cars </span> for any
            occasion.
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex-1 font-medium lg:text-lg"
        >
          At our car rental company, we believe everyone deserves the joy of
          driving a reliable and comfortable vehicle no matter their budget. Our
          diverse fleet includes everything from sleek sedans to spacious SUVs,
          all carefully maintained and offered at competitive prices. With our
          fast and hassle-free booking process, you can easily reserve the
          perfect vehicle in just a few clicks.
        </motion.p>
      </Container>

      <Container>
        <motion.div
        // @ts-ignore
          variants={fadeUpVariants}
          key={"static"}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="xl:mt-24 md:mt-20 mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 sm:gap-4 gap-2 text-white"
        >
          {staticSectionData.map((item) => (
            <motion.div
            // @ts-ignore
              variants={fadeUpVariants}
              key={item._id}
              className="flex flex-col items-center gap-x-4 bg-[#121212] 2xl:px-16 xl:px-10 md:px-5 px-1 py-8 rounded-lg"
            >
             { isLoading? <Skeleton className="h-7 bg-gray-400 w-full mb-2.5"/>: <p className="sm:text-[32px] text-2xl text-primary-cyan font-bold">
                <CCountUp end={item?.number} />+
              </p>}
              <h3 className="font-medium sm:text-base text-sm">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default StaticSection;
