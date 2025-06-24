import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function RentVehicleSkeleton() {
  return (
    <Card>
      <div className="text-xl font-bold px-4 py-2 border-b">
        <Skeleton className="h-6 w-40" />
      </div>

      <CardContent className="p-0 space-y-4">
        {/* Date section */}
        <div className="border-b space-y-4 pt-4">
          <div className="px-4 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full md:w-60" />
          </div>
          <div className="px-4 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full md:w-60" />
          </div>
          <div className="p-4 flex items-center justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Extras */}
        <div className="p-4 border-b space-y-3">
          <Skeleton className="h-4 w-32" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-4 w-10" />
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-4 border-b-2 space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16 bg-primary-cyan/30" />
          </div>
        </div>

        {/* Grand Total */}
        <div className="px-4 pt-4 flex justify-between items-center">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-20" />
        </div>
      </CardContent>

      {/* CTA */}
      <CardFooter className="px-4 pb-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}
