"use client";
import Container from "@/components/shared/Container";
import { ReviewCard } from "./ReviewCard";
import { useGetAllReviewesQuery } from "@/redux/api/reviewsApi";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { useSearchParams } from "next/navigation";
import { IReview } from "@/types";
import ReviewCardSkeleton from "@/components/Skeletons/ReviewCardSkeleton";
import Empty from "@/components/ui/empty";

export function AllReviewsContainer() {
  const page = useSearchParams()?.get("page");
  const pagePostsLimit = 8;
  const query: Record<string, string | number> = {};
  query["limit"] = pagePostsLimit;
  query["page"] = Number(page) || 1;

  const { data: allReviews, isLoading } = useGetAllReviewesQuery(query);

  if (isLoading)
    return (
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(8)].map((_, i) => (
            <ReviewCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    );


  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        { allReviews?.data?.meta?.total > 0 ? allReviews?.data?.reviews?.map((testimonial: IReview) => (
          <ReviewCard
            key={testimonial.id}
            avatarSrc={testimonial.userId?.photo?.[0]}
            testimonial={testimonial?.comment}
            name={testimonial?.userId?.userName}
          />
        )) : <div className="flex justify-center items-center  min-h-[calc(100vh-400px)] w-full  md:col-span-2"><Empty message="No Feedbacks Found"></Empty></div>}
      </div>
      <PaginationSection
        totalItems={allReviews?.data?.meta?.total}
        pagePostsLimitProps={pagePostsLimit}
      />
    </Container>
  );
}
