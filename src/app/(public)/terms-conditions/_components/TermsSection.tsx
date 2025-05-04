import { ReactNode } from "react";

type TermsSectionProps = {
    title: string
    children: ReactNode
  }

const TermsSection = ({ title, children }: TermsSectionProps) => {
    return (
        <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="text-gray-800">{children}</div>
      </section>
    );
};

export default TermsSection;