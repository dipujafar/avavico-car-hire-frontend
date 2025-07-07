"use client";
import Container from "@/components/shared/Container";
import CustomAvatar from "@/components/shared/CustomeAvater";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "motion/react";

import { IReview } from "@/types";
import Empty from "../ui/empty";
import { useGetAllReviewesQuery } from "@/redux/api/reviewsApi";

const userImages = [ "/user_Image1.png", "/userAvatar3.jpg", "/user_Image2.png"];

const CustomersFeedbacks = () => {
   const { data: allReviews, isLoading } = useGetAllReviewesQuery(undefined);

  return (
    <Container>
      <div className="flex items-center  gap-x-3 border w-fit mb-4 p-3 rounded-full bg-[#F8F9FA]">  
        <div className="flex flex-shrink-0 items-center -space-x-3  ">
          {userImages?.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, x: "5%", filter: "blur(3px)" }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.08 * index,
                },
              }}
              viewport={{ once: true }}
              key={index}
            >
              <Image
                src={data}
                alt="user avatar"
                width={1200}
                height={1200}
                className="size-8 rounded-full"
              />
            </motion.div>
          ))}
        </div>
        <motion.h5
              initial={{ opacity: 0, x: "5%", filter: "blur(3px)" }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.24
                },
              }}
              viewport={{ once: true }}
              key={"testimonials"}
            className="font-bold">Testimonials</motion.h5>
      </div>
      <Carousel
        opts={{
          loop: true,
          duration: 100,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 6500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <div className="flex">
          <SectionTitle titleClassName="text-xl" title="What Our Customers Say"></SectionTitle>
          <div>
            <CarouselPrevious className="top-5  md:!right-12 !right-10 md:size-10 hover:bg-primary-cyan hover:text-white duration-500" />
            <CarouselNext className="top-5 right-0 md:size-10 hover:bg-primary-cyan hover:text-white duration-500" />
          </div>
        </div>

        <CarouselContent>
          {allReviews?.data?.reviews?.length > 0 ? allReviews?.data?.reviews?.map((data: IReview) => (
            <CarouselItem key={data?.id}>
              <Card className={cn("py-6  border-none shadow-none bg-transparent")}>
                <div className="flex flex-col space-y-4">
                  <p className="text-[#333] italic xl:text-3xl lg:text-2xl  md:text-xl leading-relaxed">
                    {data?.comment}
                  </p>

                  <div className="flex items-center mt-4 md:gap-x-4 gap-x-2">
                    <CustomAvatar
                      img={data?.userId?.photo?.[0]}
                      name="John Doe"
                      className="md:size-16 size-10"
                    ></CustomAvatar>
                    <div>
                      <p className="font-bold md:text-xl text-lg">
                        {data?.userId?.userName}
                      </p>
                      <p className="md:text-lg text[#8A8A8A]">
                        From {data?.userId?.location?.state}{data?.userId?.location?.city && ", "} {data?.userId?.location?.city}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          )) : <div className="flex justify-center items-center  h-[300px] w-full"><Empty message="No Feedbacks Found"></Empty></div>}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default CustomersFeedbacks;
