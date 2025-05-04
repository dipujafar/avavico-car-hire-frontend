import Image from "next/image";
import aboutPageImage from "@/assets/images/about_page_image.png";
const MissionVision = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 items-center">
        <div className="lg:space-y-8 space-y-5">
          <section className="lg:space-y-4">
            <h2 className="text-[32px] font-bold text-gray-900">Our Vision</h2>
            <p className="text-primary-gray leading-relaxed xl:text-xl">
              Pioneering a global standard in car rentals to ensure every
              journey is backed by trust, innovation, and unmatched service. We
              aim to create a seamless, accessible, and enjoyable experience for
              every customer, empowering them to explore the world with ease and
              confidence.
            </p>
          </section>

          <section className="lg:space-y-4">
            <h2 className="text-[32px] font-bold text-gray-900">Our Mission</h2>
            <p className="text-primary-gray leading-relaxed xl:text-xl">
              Our mission is to provide exceptional car rental services that
              make urban travel easy, affordable, and enjoyable. We aim to
              create a seamless experience by offering a diverse fleet of
              vehicles, flexible rental options, and outstanding customer
              support.
            </p>
          </section>
        </div>

        <div className="relative ">
          <Image
            src={aboutPageImage}
            alt="Business professionals discussing car rental services"
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
