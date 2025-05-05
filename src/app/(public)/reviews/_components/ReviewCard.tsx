import { QuoteIcon } from "@/components/icons";
import CustomAvatar from "@/components/shared/CustomeAvater";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

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
  return (
    <div className="bg-white p-6 rounded-lg relative">
      <div className="flex justify-between items-start">
        <CustomAvatar
          img={avatarSrc}
          name={name}
          className="size-12"
        ></CustomAvatar>
        <QuoteIcon />
      </div>
      <div className="mt-4">
        <p className="text-[#2C2C2C] lg:text-xl leading-relaxed">"{testimonial}"</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold lg:text-xl">{name}</p>
      </div>
    </div>
  );
}
