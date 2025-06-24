import { Skeleton } from "@/components/ui/skeleton";

export default function InsuranceCoverageSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 p-5 bg-white shadow-sm space-y-4">
      {/* Checkbox and label */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-5 w-5 rounded-sm" />
        <Skeleton className="h-6 w-40 md:w-60" />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />

      {/* Alert box */}
      <div className="bg-[#FFFBEB] border-l-4 border-amber-500 p-4 rounded">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full bg-[#FACC15]" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      {/* CTA button */}
      <div className="w-full">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
