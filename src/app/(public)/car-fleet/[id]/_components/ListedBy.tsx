import Image from "next/image";
import { Phone, Mail, MessageSquare } from "lucide-react";
import logo from "@/assets/images/listed_section_image.png";
import { MailIcon2, MessageIcon, PhoneIcon2 } from "@/components/icons";
import Link from "next/link";

interface ListedByProps {
  companyName: string;
  location: string;
  logoSrc: string;
  mobile: string;
  email: string;
  whatsapp: string;
}

export default function ListedBy({
  companyName = "EuCarRental",
  location = "Las Vegas, USA",
  logoSrc = "/placeholder.svg?height=40&width=40",
  mobile = "1-222-333-4444",
  email = "sales@eucarrenal.com",
  whatsapp = "01857176432",
}: Partial<ListedByProps>) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-xl font-bold  border-b py-2 text-[#101010]">
      Listed by
      </h3>

      <div className="mb-4 pt-2 flex items-center gap-3">
        <Image
          src={logo}
          alt={`${companyName} logo`}
          className="object-cover max-w-[75px]"
        />

        <div>
          <p className="font-bold text-lg">{companyName}</p>
          <p className="text-sm text-[#737373]">{location}</p>
        </div>
      </div>
      <div className="space-y-5 pb-4">
        <div className="flex items-center gap-2">
          <PhoneIcon2></PhoneIcon2>
          <span>
            <span className="font-bold">Mobile:</span>{" "}
            <Link target="_blank" href={`tel:${mobile}`}>
              {" "}
              {mobile}
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MailIcon2></MailIcon2>
          <span>
            <span className="font-bold">Email: </span>{" "}
            <Link target="_blank" href={`mailto:${email}`}>
              {" "}
              {email}
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MessageIcon></MessageIcon>
          <span>
            <span className="font-bold">WhatsApp: </span>{" "}
            <Link target="_blank" href={`https://wa.me/${whatsapp}`}>
              {" "}
              {whatsapp}{" "}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
