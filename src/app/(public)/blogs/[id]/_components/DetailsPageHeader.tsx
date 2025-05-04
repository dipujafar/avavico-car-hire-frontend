import CustomAvatar from "@/components/shared/CustomeAvater";
import SectionTitle from "@/components/shared/SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Facebook,
  Linkedin,
  PinIcon as Pinterest,
  Twitter,
} from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
  category: string;
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
}

export default function DetailsPageHeader({ data }: { data: BlogHeaderProps }) {
  return (
    <div>
      <div className="space-y-6">
        <span className="font-medium text-[#333] bg-[#EFF3FF] p-2.5 rounded-md ">
          {data?.category}
        </span>
        <div className=" mt-5">
          <SectionTitle title={data?.title} className="max-w-6xl" ></SectionTitle>
        </div>
        <div className="flex items-center gap-3">
         <CustomAvatar img={data?.author?.avatar} name={data?.author?.name} className="size-12"></CustomAvatar>

          <div className="text-[#4B5563]">
            <div>
              By {data?.author?.name}, {data?.author?.role}
            </div>
            <div className="text-sm">{data?.date}</div>
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <Link
            href="#"
            aria-label="Share on Facebook"
            className="text-gray-500 hover:text-gray-700 bg-white size-10 flex justify-center items-center rounded-full shadow-2xl"
          >
            <Facebook size={22} />
          </Link>
          <Link
            href="#"
            aria-label="Share on Twitter"
            className="text-gray-500 hover:text-gray-700 bg-white size-10 flex justify-center items-center rounded-full shadow-2xl"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="#"
            aria-label="Share on Pinterest"
             className="text-gray-500 hover:text-gray-700 bg-white size-10 flex justify-center items-center rounded-full shadow-2xl"
          >
            <Pinterest size={18} />
          </Link>
          <Link
            href="#"
            aria-label="Share on LinkedIn"
             className="text-gray-500 hover:text-gray-700 bg-white size-10 flex justify-center items-center rounded-full shadow-2xl"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
