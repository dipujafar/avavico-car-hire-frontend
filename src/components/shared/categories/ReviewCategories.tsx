"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { childrenVariants, parentVariants } from "@/animation/FramerMotionValiants";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Rating } from "@/components/ui/rating";

const rating = [
    {
        _id: 1,
        value: "5",
        rating: 5
    },
    {
        _id: 2,
        value: "4",
        rating: 4
    },
    {
        _id: 3,
        value: "3",
        rating: 3
    },
    {
        _id: 4,
        value: "2",
        rating: 2
    },
    {
        _id: 5,
        value: "1",
        rating: 1
    }
]

const ReviewCategories = ({ title }: { title: string }) => {
  const INITIAL_COUNT = 6;


  return (
    <div className="xl:space-y-4 space-y-3 p-4 rounded-xl border border-[#DDE1DE] bg-[#FBFBFB]">
      <div className="py-2 flex items-center justify-between">
        <h4 className="text-lg font-bold">{title}</h4>
      </div>

      {/* AnimatePresence for smooth collapse */}
      <AnimatePresence initial={true}>
        <motion.div
          key={"expanded"}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <motion.div
            variants={parentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            {rating?.map((type) => (
              <motion.div
                variants={childrenVariants}
                key={type?._id}
                className=""
              >
                <div className="flex items-center space-x-2">
                  <Checkbox id={type?.value} className="border-[#D6D7D8]" />
                 <Rating rating={type?.rating}></Rating>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

     
     
    </div>
  );
};

export default ReviewCategories;
