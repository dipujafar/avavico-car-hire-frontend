"use client";
import { TTestimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";
import { testimonialsData } from "@/lib/dummyData";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AllTestimonials({
  testimonials: customTestimonials,
}: {
  testimonials?: TTestimonial[];
}) {
  const [showReview, setShowReview] = useState(2);
  // Use provided testimonials or fall back to sample data
  const displayTestimonials = customTestimonials || testimonialsData;

  return (
    <div className="space-y-4">
      {displayTestimonials?.slice(0, showReview)?.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}


{/* slice testimonials */}
      {displayTestimonials?.length > 2 && (
        <div className="flex justify-end">
          {displayTestimonials?.length <= showReview ? (
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
