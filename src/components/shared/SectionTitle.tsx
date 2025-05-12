"use client";
import { fadeUpWithBlurVariants } from "@/animation/motionVariant";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SectionTitle = ({
  title,
  subtitle,
  className,
  titleClassName,
  subTitleClassName,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) => {
  return (
    <motion.div
      variants={fadeUpWithBlurVariants()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn("space-y-2", className)}
    >
      <motion.h4
        key={title}
        variants={fadeUpWithBlurVariants()}
        className={cn("xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold", titleClassName)}
      >
        {title}
      </motion.h4>
      <motion.p
        key={subtitle}
        variants={fadeUpWithBlurVariants()}
        className={cn("lg:text-lg text-primary-gray max-w-2xl", subTitleClassName)}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;
