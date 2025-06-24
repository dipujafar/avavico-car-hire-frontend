import { Skeleton } from "@/components/ui/skeleton";

export default function ListedBySkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-4">
      {/* Header */}
      <Skeleton className="h-6 w-32" />

      {/* Company Info */}
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-[75px] w-[75px] rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 pb-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-44" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </div>
  );
}
