import { Skeleton } from '@/components/ui/skeleton';

function SettingProfileSkeleton() {
    return (
         <div className="bg-white rounded-lg shadow-md">
      <div className="px-7 py-5">
        <Skeleton className="h-8 w-48 mb-4" />
        <hr />
      </div>

      <div className="px-7 py-5">
        <div className="flex flex-col-reverse gap-5 lg:flex-row">
          <div className="flex-1 space-y-5">
            <div className="grid md:grid-cols-2 gap-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-14 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-14 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-14 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-14 w-full" />
            </div>

            <Skeleton className="h-10 w-40 rounded-full mt-5" />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
            <Skeleton className="rounded-full size-52" />
            <Skeleton className="w-32 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
    );
}

export default SettingProfileSkeleton;