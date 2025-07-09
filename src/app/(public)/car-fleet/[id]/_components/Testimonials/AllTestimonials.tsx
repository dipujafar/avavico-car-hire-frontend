"use client";
import { IReview, TTestimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetSingleCarReviewesQuery } from "@/redux/api/reviewsApi";
import { AllTestimonialsSkeleton } from "@/components/skeletons/CarDetailsPage/AllTestimonialsSkeleton";
import Empty from "@/components/ui/empty";

export function AllTestimonials({ id }: { id: string }) {
  const [showReview, setShowReview] = useState(2);
  const { data: testimonialData, isLoading } = useGetSingleCarReviewesQuery(
    id,
    { skip: !id }
  );

  if (isLoading) {
    return <AllTestimonialsSkeleton />;
  }

  if(testimonialData?.data?.length === 0){
    return (
      <div>
        <Empty message="No Reviews Found"/>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {testimonialData?.data
        ?.slice(0, showReview)
        ?.map((testimonial: IReview) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}

      {/* slice testimonials */}
      {testimonialData?.data?.length > 2 && (
        <div className="flex justify-end">
          {testimonialData?.data?.length <= showReview ? (
            <Button
              onClick={() => setShowReview(2)}
              variant="outline"
              className=" border-black/50 rounded-full duration-500"
            >
              See Less
            </Button>
          ) : (
            <Button
              onClick={() => setShowReview((prev) => prev + 2)}
              variant="outline"
              className=" border-black/50 rounded-full duration-500"
            >
              See More
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
