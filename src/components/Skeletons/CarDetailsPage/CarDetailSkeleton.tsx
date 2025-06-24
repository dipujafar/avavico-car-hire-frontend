import { Skeleton } from "@/components/ui/skeleton";

export default function CarDetailSkeleton() {
  return (
    <div className="space-y-6">
      {/* Title and rating */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-2/3 md:w-1/2 xl:w-1/3" />

        <div className="flex items-center gap-2 w-fit px-4 py-1 rounded-full bg-white border">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <Skeleton className="h-6 w-20 md:h-8 md:w-24" />
        <Skeleton className="h-4 w-12" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Specification Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 rounded-md bg-primary-cyan flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-full bg-white/30" />
            <Skeleton className="h-4 w-20 bg-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
