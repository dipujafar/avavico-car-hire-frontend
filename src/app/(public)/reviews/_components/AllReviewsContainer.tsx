"use client";
import Container from "@/components/shared/Container"
import { ReviewCard } from "./ReviewCard"
import { useGetAllReviewesQuery } from "@/redux/api/reviewsApi";
import { testimonials } from "@/lib/dummyData";
import PaginationSection from "@/components/shared/pagination/PaginationSection";

export function AllReviewsContainer() {
  const {data: allReviews, isLoading} = useGetAllReviewesQuery(undefined);
  console.log(allReviews);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <ReviewCard
            key={testimonial.id}
            avatarSrc={testimonial.avatarSrc}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
          />
        ))}
      </div>
      <PaginationSection totalItems={50}/>
    </Container>
  )
}
