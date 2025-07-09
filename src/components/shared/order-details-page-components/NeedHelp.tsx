"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";

interface NeedHelpProps {
  title?: string;
  buttonText?: string;
  phoneNumber?: string;
  email?: string;
  onContactClick?: () => void;
}

export function NeedHelp({
  title = "Need Help?",
  buttonText = "Contact Us",
  phoneNumber = "+1 234 567 8900",
  email = "support@avavico.com",
  onContactClick,
}: NeedHelpProps) {
  return (
    <div
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
      className="w-full bg-white rounded-lg  p-6"
    >
      <h2 className="text-xl font-medium  mb-4">{title}</h2>
      <Link href={"/contact-us"}>
        <Button
          className="w-full mb-4 bg-[#1EC1E2] hover:bg-sky-500 text-white group"
          onClick={onContactClick}
        >
          {buttonText} <AnimatedArrow></AnimatedArrow>
        </Button>
      </Link>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#4B5563] flex-wrap">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <Link
            href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
            className="hover:text-sky-500 transition-colors"
          >
            {phoneNumber}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <Link
            href={`mailto:${email}`}
            className="hover:text-sky-500 transition-colors"
          >
            {email}
          </Link>
        </div>
      </div>
    </div>
  );
}
