"use client";
import CCountUp from "@/components/shared/CCountUp";
import Container from "@/components/shared/Container";
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

const staticSectionData = [
  {
    _id: 1,
    number: 12000,
    title: "Completed Orders",
  },
  {
    _id: 2,
    number: 7250,
    title: "Happy Customers",
  },
  {
    _id: 3,
    number: 235,
    title: "Vehicles Fleet",
  },
  {
    _id: 4,
    number: 8,
    title: "Years Experience",
  },
];

const StaticSection = () => {
  return (
    <div>
      <Container className="flex flex-col xl:flex-row justify-between gap-x-10 gap-y-2 text-[#333]">
        <div className="flex-1">
        <motion.h1 initial={{ opacity: 0, x: "-10%" }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} viewport={{ once: true }} className=" lg:text-[32px] text-xl font-bold max-w-2xl">
            We offer customers a wide range of{" "}
            <span className="text-primary-cyan"> commercial cars </span> and{" "}
            <span className="text-primary-cyan"> luxury cars </span> for any
            occasion.
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, x: "10%" }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} viewport={{ once: true }} className="flex-1 font-medium lg:text-lg text-[#545454]">
          At our car rental company, we believe everyone deserves the joy of
          driving a reliable and comfortable vehicle no matter their budget. Our
          diverse fleet includes everything from sleek sedans to spacious SUVs,
          all carefully maintained and offered at competitive prices. With our
          fast and hassle-free booking process, you can easily reserve the
          perfect vehicle in just a few clicks.
        </motion.p>
      </Container>

      <Container>
        <motion.div variants={fadeUpVariants} key={"static"} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8 gap-4 text-[#8A8A8A]">
          {staticSectionData.map((item) => (
            <motion.div
              variants={fadeUpVariants}
              key={item._id}
              className="flex flex-col items-center gap-x-4 bg-[#F4F4F4] px-16 py-8 rounded-lg"
            >
              <p className="text-[32px] text-primary-cyan font-bold">
                <CCountUp end={item?.number} />+
              </p>
              <h3 className="font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default StaticSection;
