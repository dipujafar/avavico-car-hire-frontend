import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CarCardSkeleton() {
  return (
    <Card className="overflow-hidden border rounded-lg py-0 gap-0 hover:shadow-md duration-500 transition-all">
      <div className="relative w-full z-0">
        <Skeleton className="w-full aspect-video" />
      </div>

      <CardContent className="px-4 space-y-3 -translate-y-3 bg-white z-10 rounded-2xl">
        <div className="flex justify-end -translate-y-3">
          <Skeleton className="h-6 w-32 rounded-sm" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <hr />

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-8 w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
}
