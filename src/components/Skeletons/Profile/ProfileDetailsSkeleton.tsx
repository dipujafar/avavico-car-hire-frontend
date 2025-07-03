import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export function ProfileDetailsSkeleton() {
    return (
         <div className="md:p-5 p-2 bg-white rounded-md shadow-sm">
      <div className="flex justify-end mb-2">
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="flex flex-col lg:flex-row gap-x-5">
        <Skeleton className="xl:size-60 md:size-52 size-32 mx-auto mb-5 lg:mb-0 rounded-full" />

        <div className="flex-1 md:space-y-4 space-y-3">
          <div className="grid md:grid-cols-2 gap-2">
            <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
            <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
          </div>

          <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
          <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
          <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
          <Skeleton className="h-10 w-full rounded bg-[#F8F9FA]" />
        </div>
      </div>
    </div>
    );
}

