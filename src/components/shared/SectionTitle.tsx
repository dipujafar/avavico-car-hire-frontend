"use client";
import { fadeUpWithBlurVariants } from "@/animation/motionVariant";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
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
        className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold"
      >
        {title}
      </motion.h4>
      <motion.p
        key={subtitle}
        variants={fadeUpWithBlurVariants()}
        className="lg:text-lg text-primary-gray max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;
