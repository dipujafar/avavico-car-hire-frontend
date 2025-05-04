import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import ExpertiseImageDisplay from "./ExpertiseImageDisplay";

const features = [
  {
    _id: 1,
    text: "Experienced Professionals You Can Trust",
  },
  {
    _id: 2,
    text: "Clear and Transparent Pricing: No Hidden Fees",
  },
  {
    _id: 3,
    text: "Effortless and Streamlined Selling Process",
  },
];

export default function Expertise() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-black bg-[#EFF3FF] px-6 py-3 w-fit rounded-md">
                Trusted Expertise
              </p>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight max-w-[700px]">
                Get the best deal for your next journey rent a car with us today
              </h1>
              <p className="text-[#737373] md:text-lg font-medium  max-w-[550px]">
              Get the best value for your trip with our simple and transparent car rental process.
              </p>
            </div>

            <div className="space-y-3">
              {features?.map((feature) => (
                <div key={feature?._id} className="flex items-start gap-2">
                  <div className="bg-[#1EC1E2] rounded-full p-1">
                    <Check className="h-4 w-4" color="#fff" />
                  </div>
                  <p className="text-[#333] font-semibold  text-base">{feature?.text}</p>
                </div>
              ))}
            </div>

            <Button className="bg-[#1EC1E2] hover:bg-[#1EC1E2]/90 text-white group ">
              Rent Now
             <AnimatedArrow></AnimatedArrow>
            </Button>
          </div>

          {/*  */}
          <ExpertiseImageDisplay></ExpertiseImageDisplay>
        </div>
      </Container>
    </section>
  );
}
