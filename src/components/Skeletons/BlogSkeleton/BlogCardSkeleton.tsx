import { Skeleton } from "@/components/ui/skeleton";

export default function BlogCardSkeleton({ ownBlog }: { ownBlog?: boolean }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
      <div className="relative">
        <Skeleton className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 space-y-6">
        <Skeleton className="h-5 w-3/4 rounded" />
        <hr />
        <div className="flex justify-between items-center mt-4 text-sm text-[#333]">
          <Skeleton className="h-4 w-1/4 rounded" />
          <span className="w-[30px] bg-[#8A8A8A] h-px"></span>
          {!ownBlog && <Skeleton className="h-4 w-1/4 rounded" />}
          {ownBlog && (
            <div className="flex gap-x-1">
              <Skeleton className="size-7 rounded-full" />
              <Skeleton className="size-7 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
