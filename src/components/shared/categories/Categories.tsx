"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { childrenVariants, parentVariants } from "@/animation/FramerMotionValiants";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

const Categories = ({ title, data, filterName }: { title: string; data: any[], filterName: string }) => {
  const INITIAL_COUNT = 6;
  const [expanded, setExpanded] = useState(false);
   const updateSearchParam = useUpdateSearchParams();

  console.log(data);
  return (
    <div className="xl:space-y-4 space-y-3 p-4 rounded-xl border border-[#DDE1DE] bg-[#FBFBFB]">
      <div className="py-2 flex items-center justify-between">
        <h4 className="text-lg font-bold">{title}</h4>
      </div>

      {/* AnimatePresence for smooth collapse */}
      <AnimatePresence initial={true}>
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          viewport={{ once: true }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <motion.div
            variants={parentVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            className="space-y-4"
          >
            {(expanded ? data : data?.slice(0, INITIAL_COUNT))?.map((type) => (
              <motion.div
                variants={childrenVariants}
                key={type?._id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox onCheckedChange={() => console.log(type?.title)} value={type?.title} id={type?.title} className="border-[#D6D7D8]" />
                  <label
                    htmlFor={type?.title}
                    className="text-[#101010] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-base text-sm font-medium"
                  >
                    {type?.title}
                  </label>
                </div>
                <span className="bg-[#DDE1DE] rounded-full md:px-3 px-2 py-0.5 text-[#101010] md:font-medium md:text-sm text-xs">
                  {type?.count}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* See more / See less */}
      {data?.length > INITIAL_COUNT && (
        <div className="mt-5 w-fit mx-auto">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-[#101010] hover:text-primary-blue text-sm font-medium  transition-all duration-300 flex items-center gap-x-1 "
          >
            {expanded ? "See less" : "See more"}
            {!expanded ? <ChevronDown size={18} /> :<ChevronUp  size={18}/>}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
