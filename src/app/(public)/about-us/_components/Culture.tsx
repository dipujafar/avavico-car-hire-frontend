import Image from "next/image"
import Link from "next/link"
import CultureImage1 from "@/assets/images/culture_image_1.png"
import CultureImage2 from "@/assets/images/culture_image_2.png"
import CultureImage3 from "@/assets/images/culture_image_3.png"
import CultureImage4 from "@/assets/images/culture_image_4.png"
import Container from "@/components/shared/Container"
import AnimatedArrowUp from "@/components/animatedArrows/AnimatedArrowUp"

export default function Culture() {
  return (
    <Container >
      <div>
        <div className="grid grid-cols sm:grid-cols-3 2xl:gap-8 gap-4">
          {/* Hero Section */}
          <div className="relative  rounded-lg">
            <Image
              src={CultureImage1}
              alt="Office environment"
            
              className="object-cover w-full h-full  rounded-md"
              
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center xl:p-8 p-2 rounded-md ">
              <h2 className="text-white 2xl:text-2xl text-xl  font-bold mb-4 text-center">
                Your Journey, Our Commitment
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white px-6 py-2 rounded-md w-fit group"
              >
                Our Services
                <AnimatedArrowUp  />
              </Link>
            </div>
          </div>

          {/* Culture Description */}
          <div className="sm:py-8 py-3 sm:col-span-2">
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold mb-2">Our Culture</h2>
            <p className=" lg:mb-6 mb-4 max-w-[600px]">
              At our core, we believe in creating an environment where every team member feels empowered to contribute,
              grow, and thrive.
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-4 gap-2">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src={CultureImage2}
                  alt="Team member working at desk"
               
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src={CultureImage3}
                  alt="Team member in plant-filled office"
                
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src={CultureImage4}
                  alt="Team member working at computer"
                 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
