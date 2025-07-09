import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function VendorOrderSkeleton() {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full md:w-1/2 h-32 md:h-auto relative px-2">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Info Section Skeleton */}
      <div className="w-full md:w-1/2 p-6 space-y-4">
        <CardHeader className="p-0 space-y-1">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </CardHeader>

        <CardContent className="p-0 space-y-3">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </CardContent>

        <div className="space-y-2 pt-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-40" />
        </div>

        <CardFooter className="p-0 pt-4">
          <Skeleton className="h-6 w-28 ml-auto" />
        </CardFooter>
      </div>
    </Card>
  );
}
