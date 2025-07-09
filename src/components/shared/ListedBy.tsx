import { MailIcon2, PhoneIcon2 } from "@/components/icons";
import Link from "next/link";
import { IUser } from "@/types";
import CustomAvatar from "@/components/shared/CustomeAvater";


export default function ListedBy({ data }: { data: IUser }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-xl font-bold  border-b py-2 text-[#101010]">
        Listed by
      </h3>

      <div className="mb-4 pt-2 flex items-center gap-3">
        <CustomAvatar
          img={data?.photo?.[0]}
          name={data?.firstName + " " + data?.lastName}
          fallbackClass="text-xl"
          className="size-12"
        ></CustomAvatar>

        <div>
          <p className="font-bold text-lg line-clamp-1">
            {data?.companyName || data?.firstName + " " + data?.lastName}
          </p>
          <p className="text-sm text-[#737373] line-clamp-1">
            {data?.location?.state} {data?.location?.city && ", "}{" "}
            {data?.location?.city}{" "}
          </p>
        </div>
      </div>
      <div className="space-y-5 pb-4">
        <div className="flex items-center gap-2">
          <PhoneIcon2></PhoneIcon2>
          <span>
            <span className="font-bold">Mobile:</span>{" "}
            <Link href={`tel:${data?.mobile}`}> {data?.mobile}</Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MailIcon2></MailIcon2>
          <span>
            <span className="font-bold">Email: </span>{" "}
            <Link href={`mailto:${data?.email}`}> {data?.email}</Link>
          </span>
        </div>
        {/* <div className="flex items-center gap-2">
          <MessageIcon></MessageIcon>
          <span>
            <span className="font-bold">WhatsApp: </span>{" "}
            <Link target="_blank" href={`https://wa.me/${whatsapp}`}>
              {" "}
              {whatsapp}{" "}
            </Link>
          </span>
        </div> */}
      </div>
    </div>
  );
}
