import { Construction } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function ShowMessage() {
  return (
    <Marquee
      className="bg-black"
      gradientColor={"#000"}
      gradient
      gradientWidth={150}
      speed={40}
    >
      <div className="flex gap-x-3 text-white text-xl uppercase ">
        <Construction className="w-5 h-5 mr-1" />
        <span>AVAVICO CAR Hire Coming Soon</span> <span>|</span>{" "}
        <span> Under Development</span>
      </div>
    </Marquee>
  );
}
