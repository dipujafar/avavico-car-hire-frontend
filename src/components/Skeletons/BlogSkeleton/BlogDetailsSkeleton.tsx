import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailsSkeleton() {
  return (
    <div className="lg:space-y-5 sm:space-y-3.5 space-y-3">
      {/* Category */}
      <Skeleton className="h-4 w-24 rounded" />

      {/* Title */}
      <Skeleton className="h-6 md:w-3/4 rounded" />
      <Skeleton className="h-6 w-1/2 rounded" />

      {/* Author & Meta */}
      <div className="flex items-center gap-x-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid lg:h-[500px] h-[400px] w-full lg:gap-4 gap-2.5 grid-cols-4 grid-rows-5 rounded-lg animate-pulse">
          <div className="col-span-2 row-span-3">
            <Skeleton className="w-full h-full rounded-md" />
          </div>
          <div className="col-span-2 row-span-2">
            <Skeleton className="w-full h-full rounded-md" />
          </div>
          <div className="col-span-2 row-span-3">
            <Skeleton className="w-full h-full rounded-md" />
          </div>
          <div className="col-span-2 row-span-2">
            <Skeleton className="w-full h-full rounded-md" />
          </div>
        </div>
      </div>

      {/* description  */}
      <div className="space-y-1">
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded" />
        <Skeleton className="h-6 rounded" />
      </div>
    </div>
  );
}
