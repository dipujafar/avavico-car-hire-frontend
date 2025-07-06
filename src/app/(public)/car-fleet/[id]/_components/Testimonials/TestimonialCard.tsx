import { Star } from "lucide-react"
import { IReview } from "@/types"
import CustomAvatar from "@/components/shared/CustomeAvater"


// Component for a single testimonial card
export function TestimonialCard({ testimonial }: { testimonial: IReview }) {
  return (
    <div className="border-2 border-[#DDE1DE] rounded-lg p-4 mb-4">
      <div className="flex flex-wrap justify-between items-start mb-4 border-b pb-4">
        <div className="flex items-center lg:gap-3 gap-2">
         <CustomAvatar img={testimonial?.avatar} name={testimonial?.name} className="sm:size-12"></CustomAvatar>
          <div>
            <h3 className="font-medium text-[#101010] sm:text-lg text-sm ">{testimonial.name}</h3>
            <p className="sm:text-sm text-xs text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`sm:size-5 size-3 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
      </div>
      <p className="text-[#545454] sm:text-base text-sm">{testimonial.comment}</p>
    </div>
  )
}
