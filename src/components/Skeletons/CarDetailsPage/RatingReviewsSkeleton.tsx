"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface RatingReviewsSkeletonProps {
  className?: string
  categoryCount?: number
}

export default function RatingReviewsSkeleton({
  className,
  categoryCount = 6,
}: RatingReviewsSkeletonProps) {
  return (
    <div className={cn("w-full", className)}>
      <Skeleton className="h-6 w-40 mb-4" /> {/* "Rate & Reviews" title */}

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left side - Overall rating */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 border-2 border-[#DDE1DE] rounded-lg min-w-[200px]">
          <Skeleton className="h-6 w-20 mb-1" />
          <Skeleton className="h-4 w-24 mb-2" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-4 rounded" />
            ))}
          </div>
        </div>

        {/* Right side - Category ratings */}
        <div className="flex-grow space-y-4 max-w-sm mt-4 sm:mt-0">
          {Array.from({ length: categoryCount }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-10" />
              </div>
              <Skeleton className="h-3 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
