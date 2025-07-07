import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ReviewCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg relative">
      <div className="flex justify-between items-start">
        <Skeleton className="size-12 rounded-full" />
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-5 w-full lg:w-11/12" />
        <Skeleton className="h-5 w-10/12 lg:w-4/5" />
        <Skeleton className="h-5 w-3/4 lg:w-3/5" />
        <Skeleton className="h-4 w-20 lg:w-24" />{" "}
        {/* Simulate "...Read more" */}
      </div>
      <div className="mt-4">
        <Skeleton className="h-5 w-32 lg:w-40" />
      </div>
    </div>
  );
}
