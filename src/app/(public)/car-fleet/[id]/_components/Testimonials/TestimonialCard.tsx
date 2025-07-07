"use client";
import { Star } from "lucide-react";
import { IReview } from "@/types";
import CustomAvatar from "@/components/shared/CustomeAvater";
import moment from "moment";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import StarRating from "@/components/shared/StarRating";

// Component for a single testimonial card
export function TestimonialCard({ testimonial }: { testimonial: IReview }) {
  const findTotalRating =
    testimonial?.accessibility +
    testimonial?.entertainment +
    testimonial?.services +
    testimonial?.support +
    testimonial?.safety +
    testimonial?.price;
  const averageRating = findTotalRating / 6;
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border-2 border-[#DDE1DE] rounded-lg p-4 mb-4">
        <div className="flex flex-wrap justify-between items-start mb-4 border-b pb-4">
          <div className="flex items-center lg:gap-3 gap-2">
            <CustomAvatar
              img={testimonial?.userId?.photo?.[0]}
              name={testimonial?.userId?.userName}
              className="sm:size-12"
              fallbackClass="text-2xl"
            ></CustomAvatar>
            <div>
              <h3 className="font-medium text-[#101010] sm:text-lg text-sm ">
                {testimonial.userId?.userName}
              </h3>
              <p className="sm:text-sm text-xs text-gray-500">
                {moment(testimonial.createdAt).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex">
            <StarRating rating={averageRating} />
          </div>
        </div>
        <p className="text-[#545454] sm:text-base text-sm">
          {testimonial?.comment?.substring(0, 200)}{" "}
          {testimonial?.comment?.length > 200 ? (
            <span
              className="text-primary-cyan font-bold cursor-pointer"
              onClick={() => setOpen(true)}
            >
              ...Read more
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
      <ViewFullReview
        open={open}
        setOpen={setOpen}
        testimonial={testimonial?.comment}
      />
    </>
  );
}

const ViewFullReview = ({
  open,
  setOpen,
  testimonial,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  testimonial: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        // @ts-ignore
        showCloseButton={false}
        className="text-lg"
      >
        {testimonial}
      </DialogContent>
    </Dialog>
  );
};
