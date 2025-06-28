"use client";
import { RangeSlider } from "@/components/ui/dual-range-slider";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/FramerMotionValiants";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";

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

const PriceCategory = ({ highPrice }: { highPrice: number }) => {
  const [show, hide] = useState(true);
  const [values, setValues] = useState([0, highPrice || 1000]);
  const updateSearchParam = useUpdateSearchParams();
  const searchPrice = useSearchParams()?.get("price");

 

  // -------------------- set high price when high price change ---------------------
  useEffect(() => {
    setValues([0, highPrice || 1000]);

    if (searchPrice) {
     
      setValues(searchPrice?.split("-")?.map(Number));
    }
  }, [highPrice, searchPrice]);
  // --------------------------------------------------------------------------------

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
              onValueChange={(price) => {
                setValues(price);
                updateSearchParam("price", price.join("-"));
              }}
              max={values[1] >= 950 ? values[1] + 100 : 1000}
              step={1}
            />
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className=" flex items-center justify-between mt-5 gap-x-2"
          >
            <div className="font-medium">${values[0]}</div>
            {/* <Image src={reverseIcon} alt="reverseIcon"></Image> */}
            <div className="font-medium">${values[1]}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PriceCategory;
