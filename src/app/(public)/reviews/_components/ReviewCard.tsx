"use client";
import { QuoteIcon } from "@/components/icons";
import CustomAvatar from "@/components/shared/CustomeAvater";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
interface TestimonialCardProps {
  avatarSrc: string;
  testimonial: string;
  name: string;
}

export function ReviewCard({
  avatarSrc,
  testimonial,
  name,
}: TestimonialCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white p-6 rounded-lg relative">
        <div className="flex justify-between items-start">
          <CustomAvatar
            img={avatarSrc}
            name={name}
            className="size-12"
            fallbackClass="text-2xl"
          ></CustomAvatar>
          <QuoteIcon />
        </div>
        <div className="mt-4">
          <p className="text-[#2C2C2C] lg:text-xl leading-relaxed">
            "{testimonial.substring(0, 200)}{" "}
            {testimonial?.length > 200 ? (
              <span className="text-primary-cyan font-bold" onClick={() => setOpen(true)}>...Read more</span>
            ) : (
              ""
            )}{" "}
            "{" "}
          </p>
        </div>
        <div className="mt-4">
          <p className="font-semibold lg:text-xl">{name}</p>
        </div>
      </div>
      <ViewFullReview open={open} setOpen={setOpen} testimonial={testimonial} />
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
      showCloseButton={false} className="text-lg">{testimonial}</DialogContent>
    </Dialog>
  );
};
