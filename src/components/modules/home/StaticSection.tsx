import CCountUp from "@/components/shared/CCountUp";
import Container from "@/components/shared/Container";

const staticSectionData = [
  {
    _id: 1,
    number: 12000,
    title: "Completed Orders",
  },
  {
    _id: 2,
    number: 7250,
    title: "Happy Customers",
  },
  {
    _id: 3,
    number: 235,
    title: "Vehicles Fleet",
  },
  {
    _id: 4,
    number: 8,
    title: "Years Experience",
  },
];

const StaticSection = () => {
  return (
    <div className="bg-[url('/static_section_bg.png')]  bg-cover origin-center py-20">
      <Container className="flex flex-col xl:flex-row gap-y-2 justify-between gap-x-10 text-white">
        <div className="flex-1">
          <h1 className=" text-[32px] font-bold max-w-2xl line">
            We offer customers a wide range of{" "}
            <span className="text-primary-cyan"> commercial cars </span> and{" "}
            <span className="text-primary-cyan"> luxury cars </span> for any
            occasion.
          </h1>
        </div>
        <p className="flex-1 font-medium text-lg">
          At our car rental company, we believe everyone deserves the joy of
          driving a reliable and comfortable vehicle no matter their budget. Our
          diverse fleet includes everything from sleek sedans to spacious SUVs,
          all carefully maintained and offered at competitive prices. With our
          fast and hassle-free booking process, you can easily reserve the
          perfect vehicle in just a few clicks.
        </p>
      </Container>

      <Container className="xl:mt-24 md:mt-20 mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8 gap-4 text-white">
        {staticSectionData.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center gap-x-4 bg-[#121212] px-16 py-8 rounded-lg"
          >
            <p className="text-[32px] text-primary-cyan font-bold">
              <CCountUp end={item?.number}  />+
            </p>
            <h3 className="font-medium">{item.title}</h3>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default StaticSection;
