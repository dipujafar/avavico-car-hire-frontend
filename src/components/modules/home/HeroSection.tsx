import bgImage from "@/assets/images/hero_section_bg.png"
import Image from "next/image";

const HeroSection = () => {
    return (
        <div>
            <Image src={bgImage} alt="bgImage" className="max-h-screen object-cover"></Image>
        </div>
    );
};

export default HeroSection;