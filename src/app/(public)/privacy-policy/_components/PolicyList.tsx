import { cn } from "@/lib/utils";

interface TermsListProps {
    items: string[];
    className?: string
  }
  
  export function PolicyList({ items, className }: TermsListProps) {
    return (
      <ul className={cn("list-disc pl-8 mb-4 space-y-1", className)}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
  