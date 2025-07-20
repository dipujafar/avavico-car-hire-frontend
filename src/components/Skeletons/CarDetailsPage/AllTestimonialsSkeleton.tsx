"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AllTestimonialsSkeleton({ count = 2 }: { count?: number }) {
  const [showReview, setShowReview] = useState(2);

  const skeletonsToShow = Math.min(count, showReview);

  return (
    <div className="space-y-4">
      {Array.from({ length: skeletonsToShow }).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      ))}

      {/* Show More / See Less button simulation */}
      <div className="flex justify-end">
        <Button
          disabled
          variant="outline"
          className="border-black/50 rounded-full opacity-50"
        >
          Loading...
        </Button>
      </div>
    </div>
  );
}
