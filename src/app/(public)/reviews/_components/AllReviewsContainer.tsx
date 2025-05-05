import Container from "@/components/shared/Container"
import { ReviewCard } from "./ReviewCard"
import { testimonials } from "@/lib/dummyData"



export function AllReviewsContainer() {
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
    </Container>
  )
}
