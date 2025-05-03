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

const feedBacksData = [
  {
    _id: 1,
    userImage: "/user_Image1.png ",
    userName: "Tahalil Azim",
    userLocation: "Australia",
    comment: "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”",
  },
  {
    _id: 2,
    userImage: "/user_Image2.png ",
    userName: "Masum Raihan",
    userLocation: "Australia",
    comment: "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”",
  },
 
];

const CustomersFeedbacks = () => {
  return (
    <Container>
      <Carousel
        opts={{
          loop: true,
          duration: 60,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <div className="flex">
          <SectionTitle title="What Our Customers Say"></SectionTitle>
          <div>
            <CarouselPrevious className="top-5  !right-12 size-10 hover:bg-primary-cyan hover:text-white duration-500" />
            <CarouselNext className="top-5 right-0 size-10 hover:bg-primary-cyan hover:text-white duration-500" />
          </div>
        </div>

        <CarouselContent>
          {feedBacksData?.map((data) => (
            <CarouselItem key={data?._id}>
              <Card className={cn("py-6  border-none shadow-none")}>
                <div className="flex flex-col space-y-4">
                  <p className="text-[#333] italic xl:text-3xl lg:text-2xl  md:text-xl leading-relaxed">
                    {data?.comment}
                  </p>

                  <div className="flex items-center mt-4 gap-x-4">
                    <CustomAvatar
                      img={data?.userImage}
                      name="John Doe"
                      className="md:size-16 size-14"
                    ></CustomAvatar>
                    <div>
                      <p className="font-bold md:text-xl text-lg">{data?.userName}</p>
                      <p className="md:text-xl text[#8A8A8A]">From {data?.userLocation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default CustomersFeedbacks;
