"use client";
import Image from "next/image";
import aboutPageImage from "@/assets/images/about_page_image.png";
import Container from "@/components/shared/Container";
import { motion } from "motion/react";
const MissionVision = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 items-center overflow-x-hidden">
        <div className="lg:space-y-8 space-y-5">
          <motion.section
            initial={{ opacity: 0, x: "-10%", filter: "blur(4px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="lg:space-y-2"
          >
            <h2 className="lg:text-[32px] text-2xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-primary-gray leading-relaxed xl:text-xl">
              Pioneering a global standard in car rentals to ensure every
              journey is backed by trust, innovation, and unmatched service. We
              aim to create a seamless, accessible, and enjoyable experience for
              every customer, empowering them to explore the world with ease and
              confidence.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: "-10%", filter: "blur(4px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="lg:space-y-2"
          >
            <h2 className="lg:text-[32px] text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-primary-gray leading-relaxed xl:text-xl">
              Our mission is to provide exceptional car rental services that
              make urban travel easy, affordable, and enjoyable. We aim to
              create a seamless experience by offering a diverse fleet of
              vehicles, flexible rental options, and outstanding customer
              support.
            </p>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "10%", filter: "blur(4px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            transition: { duration: 0.8, delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="relative "
        >
          <Image
            src={aboutPageImage}
            alt="Business professionals discussing car rental services"
            className="object-cover rounded-md"
            priority
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default MissionVision;
