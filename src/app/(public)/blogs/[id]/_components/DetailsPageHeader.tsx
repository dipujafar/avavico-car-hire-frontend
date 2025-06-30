import CustomAvatar from "@/components/shared/CustomeAvater";
import SectionTitle from "@/components/shared/SectionTitle";
import { useFullUrl } from "@/hooks/useFullUrl";
import { formatDate } from "@/lib/utils";
import { IBlog } from "@/types";
import { Linkedin, PinIcon as Pinterest, Twitter } from "lucide-react";
import Link from "next/link";
import { ShareSocial } from "react-share-social";

const style = {
  root: {
    padding: "0px",
    margin: "0px",
    paddingBottom: "0px",
    paddingTot: "0px",
    borderRadius: "10px",
    
  },
};

export default function DetailsPageHeader({ data }: { data: IBlog }) {
  const { full } = useFullUrl();
  return (
    <div>
      <div className="space-y-6">
        <span className="font-medium text-[#333] bg-[#EFF3FF] p-2.5 rounded-md ">
          {data?.category?.[0]}
        </span>
        <div className=" mt-5">
          <SectionTitle
            title={data?.blogName}
            className="max-w-6xl"
          ></SectionTitle>
        </div>
        <div className="flex items-center gap-3">
          <CustomAvatar
            img={data?.author?.image}
            name={data?.author?.userName}
            className="size-12"
            fallbackClass="text-xl"
          ></CustomAvatar>

          <div className="text-[#4B5563]">
            <div>By {data?.author?.userName}</div>
            <div className="text-sm">{formatDate(data?.createdAt)}</div>
          </div>
        </div>

        <div className="flex gap-4">
          <ShareSocial
            url={full}
            socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
            style={style}
          />
        </div>
      </div>
    </div>
  );
}
