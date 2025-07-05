import { Skeleton } from '@/components/ui/skeleton';

function AccountSettingSkeleton() {
    return (
     <div className="rounded-lg bg-white p-7 shadow-md">
      <Skeleton className="mb-4 h-8 w-56" /> {/* Title */}
      <hr className="mb-6" />

      <div className="flex flex-col-reverse gap-5 lg:flex-row">
        {/* Form Fields */}
        <div className="flex-1 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </div>
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-12 w-32 rounded-full bg-muted" /> {/* Save Changes button */}
        </div>

        {/* Avatar + Upload */}
        <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
          <Skeleton className="h-52 w-52 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" /> {/* Choose Image */}
        </div>
      </div>
    </div>
    );
}

export default AccountSettingSkeleton;