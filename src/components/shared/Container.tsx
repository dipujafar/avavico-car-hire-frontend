import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string
}) => {
  return (
    <div
    id={id}
      className={cn(
        "mx-auto max-w-[1820px] px-4 md:px-10  xl:px-28 2xl:px-40",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
