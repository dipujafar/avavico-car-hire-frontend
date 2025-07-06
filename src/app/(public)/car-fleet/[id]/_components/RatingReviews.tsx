"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetSingleCarAvarageReviewQuery } from "@/redux/api/reviewsApi";

interface RatingCategory {
  name: string;
  value: number;
}

interface RatingProps {
  className?: string;
  id: string;
}

export default function RatingReviews({
  className,
  id,
}: RatingProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { data: averageReview, isLoading: isReviewLoading } =
    useGetSingleCarAvarageReviewQuery(id, { skip: !id });
  console.log(averageReview?.data?.totalReviews);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const categories = [
    { name: "Price", value: averageReview?.data?.avgPrice || 0},
    { name: "Service", value: averageReview?.data?.avgService || 0 },
    { name: "Safety", value: averageReview?.data?.avgSafety || 0 },
    { name: "Entertainment", value: averageReview?.data?.avgEntertainment || 0 },
    { name: "Accessibility", value: averageReview?.data?.avgAccessibility || 0 },
    { name: "Support", value: averageReview?.data?.avgSupport || 0 },
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="text-xl font-bold mb-3">Rate & Reviews</h2>

      <div className="flex flex-col sm:flex-row gap-6   ">
        {/* Left side - Overall rating */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 border-2 border-[#DDE1DE] rounded-lg min-w-[200px]">
          <div className="text-2xl font-bold text-[#101010]">
            {averageReview?.data?.overallRating} / 5
          </div>
          <div className="text-sm text-[#8E8E8E] mb-2">
            ({averageReview?.data?.totalReviews} reviews)
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Right side - Category ratings */}
        <div className="flex-grow space-y-3 max-w-sm">
          {categories.map((category) => (
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
