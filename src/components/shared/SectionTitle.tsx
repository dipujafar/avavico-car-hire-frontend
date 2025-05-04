import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-2",className)}>
      <h4 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">{title}</h4>
      <p className="lg:text-lg text-primary-gray max-w-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
