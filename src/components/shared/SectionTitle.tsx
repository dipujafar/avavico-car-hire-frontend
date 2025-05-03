const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="space-y-2">
      <h4 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">{title}</h4>
      <p className="lg:text-lg text-primary-gray max-w-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
