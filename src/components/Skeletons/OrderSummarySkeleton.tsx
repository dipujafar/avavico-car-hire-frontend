"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function OrderSummarySkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 p-4">
      {/* Left Column */}
      <div className="md:col-span-1 space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            {/* Image */}
            <Skeleton className="h-56 w-full rounded-xl" />

            {/* User Info */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-5 w-1/4" />
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-5 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-5 w-full" />
              </div>
              <div className="space-y-2 col-span-1">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-5 w-1/2" />
              </div>
              <div className="space-y-2 col-span-1">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-5 w-1/2" />
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 mt-4">
              <Skeleton className="h-5 w-1/3" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Rental Details */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-5 w-1/2 my-4" />
            <Skeleton className="h-1 w-full mt-4" />
            {[...Array(2)].map((_, row) => (
              <div key={row} className="flex justify-between">
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            ))}
            <Skeleton className="h-1 w-full mt-4" />
            <Skeleton className="h-5 w-1/2 mt-4" />
          </CardContent>
        </Card>

        {/* Modify Box */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-10 w-full rounded-md bg-red-400" />
          </CardContent>
        </Card>

        {/* Help Box */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-10 w-full rounded-md bg-cyan-400" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
