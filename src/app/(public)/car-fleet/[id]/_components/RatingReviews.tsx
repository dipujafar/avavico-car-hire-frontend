"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetSingleCarAvarageReviewQuery } from "@/redux/api/reviewsApi";
import RatingReviewsSkeleton from "@/components/skeletons/CarDetailsPage/RatingReviewsSkeleton";
import { IAvarageRating } from "@/types";
import StarRating from "@/components/shared/StarRating";

interface RatingCategory {
  name: string;
  value: number;
}

interface RatingProps {
  className?: string;
  averageReview: IAvarageRating;
  isReviewLoading: boolean;
}

export default function RatingReviews({ averageReview, isReviewLoading, className }: RatingProps) {

  if (isReviewLoading) {
    return <RatingReviewsSkeleton />;
  }

  const categories = [
    { name: "Price", value: averageReview?.avgPrice || 0 },
    { name: "Service", value: averageReview?.avgService || 0 },
    { name: "Safety", value: averageReview?.avgSafety || 0 },
    {
      name: "Entertainment",
      value: averageReview?.avgEntertainment || 0,
    },
    {
      name: "Accessibility",
      value: averageReview?.avgAccessibility || 0,
    },
    { name: "Support", value: averageReview?.avgSupport || 0 },
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="text-xl font-bold mb-3">Rate & Reviews</h2>

      <div className="flex flex-col sm:flex-row gap-6   ">
        {/* Left side - Overall rating */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 border-2 border-[#DDE1DE] rounded-lg min-w-[200px]">
          <div className="text-2xl font-bold text-[#101010]">
            {averageReview?.overallRating || 0} / 5
          </div>
          <div className="text-sm text-[#8E8E8E] mb-2">
            ({averageReview?.totalReviews || 0} reviews)
          </div>
          <div className="flex gap-0.5">
           <StarRating rating={averageReview?.overallRating || 0} size="md" />
          </div>
        </div>

        {/* Right side - Category ratings */}
        <div className="flex-grow space-y-3 max-w-sm">
          {categories?.map((category) => (
            <div key={category.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{category.name}</span>
                <span>{category.value}/5</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${(category.value / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
