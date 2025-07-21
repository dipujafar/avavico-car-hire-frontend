"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useGetAllFeedbacksQuery } from "@/redux/api/feedbacksApi";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

type TCategory = {
  id: string;
  name: string;
  message: string;
  email: string;
  createdAt: string;
};

const AllReceivedFeedbacks = () => {
  const { data: allFeedbacks, isLoading } = useGetAllFeedbacksQuery(undefined);

  console.log(allFeedbacks?.data?.feedbacks);
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 60,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="overflow-hidden"
    >
      <CarouselContent>
        {allFeedbacks?.data?.feedbacks
          ?.slice(0, 8)
          ?.map((category: TCategory) => (
            <CarouselItem
              key={category?.id}
              className="md:basis-1/2  lg:basis-1/4 "
            >
              <Tooltip>
                <TooltipTrigger className="w-full h-full text-start">
                  <div
                    className={cn(
                      "p-2  rounded w-full flex flex-col gap-y-3  bg-primary-gray/20 cursor-pointer h-full text-sm md:text-base pl-7 relative"
                    )}
                  >
                    <Quote
                      className="rotate-180 absolute top-2 left-1 text-gray-500"
                      size={20}
                    />
                    {category?.message}
                    <p className=" text-gray-700 mt-auto ">
                      -- {category?.name}
                    </p>
                  </div>
                </TooltipTrigger>
              </Tooltip>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AllReceivedFeedbacks;
