"use client";
import { RangeSlider } from "@/components/ui/dual-range-slider";
import { motion } from "motion/react";
import { useState } from "react";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/FramerMotionValiants";

const containerVariants = {
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: "0.75rem",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const PriceCategory = () => {
  const [show, hide] = useState(true);
  const [values, setValues] = useState([0, 500]);
  return (
    <div className="xl:space-y-7 space-y-5 p-4 rounded-xl border border-[#DDE1DE] bg-[#FBFBFB]  ">
      <h4 className="text-lg font-bold uppercase">Filter Price</h4>

      {/* =============== user types ================ */}
      <motion.div
        initial={show ? "visible" : "hidden"}
        animate={show ? "visible" : "hidden"}
        exit="hidden"
        variants={containerVariants}
      >
        <motion.div
          variants={parentVariants}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
        >
          <motion.div variants={childrenVariants}>
            <RangeSlider
              value={values}
              onValueChange={(price) => setValues(price)}
              max={values[1] >= 950 ? values[1] + 100 : 1000}
              step={1}
            />
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className=" flex items-center justify-between mt-5 gap-x-2"
          >
            <div className="font-medium">
              ${values[0]}
            </div>
            {/* <Image src={reverseIcon} alt="reverseIcon"></Image> */}
            <div className="font-medium">
              ${values[1]}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      
    </div>
  );
};

export default PriceCategory;
