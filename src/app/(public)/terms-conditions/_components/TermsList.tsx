interface TermsListProps {
    items: string[]
  }
  
  export function TermsList({ items }: TermsListProps) {
    return (
      <ol className="list-decimal pl-8 mb-4 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    )
  }
  