// app/components/CarRentalSkeleton.tsx
'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function CarRentalSkeleton() {
  return (
    <div className="w-full bg-white rounded-lg border 2xl:p-3 xl:p-3 lg:p-2 md:p-4 p-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center 2xl:mb-3 mb-2">
        <Skeleton className="h-6 w-60 mb-2 md:mb-0" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-4 md:border 2xl:p-3 p-2 rounded-lg">
        {/* Pick Up Location */}
        <div className="space-y-2 border-r pr-4">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>

        {/* Drop Off Location */}
        <div className="space-y-2 border-r pr-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>

        {/* Pick Up Date & Time */}
        <div className="space-y-2 border-r pr-4">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>

        {/* Return Date & Time */}
        <div className="space-y-2 border-r pr-4">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>

        {/* Button */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
