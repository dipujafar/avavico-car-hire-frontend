import { Skeleton } from "@/components/ui/skeleton";

export default function CarDetailsImages() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid h-full w-full lg:gap-4 sm:gap-2 gap-1 grid-cols-6 grid-rows-3">
        {/* Large image */}
        <Skeleton className="col-span-4 row-span-2 w-full xl:h-[450px] lg:h-[370px] md:h-[300px] h-[200px] rounded-md" />

        {/* Top right images */}
        <Skeleton className="col-span-2 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-2 row-span-1 w-full h-full rounded-md" />

        {/* Small grid blocks */}
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
        <Skeleton className="col-span-1 row-span-1 w-full h-full rounded-md" />
      </div>
    </div>
  );
}
