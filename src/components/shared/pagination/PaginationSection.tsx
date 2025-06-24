"use client";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Pagination } from "react-pagination-bar";

const PaginationSection = ({
  totalItems,
  className,
  id
}: {
  pagePostsLimit?: number;
  totalItems: number;
  className?: string;
  id: string;
}) => {
  const updateSearchParam = useUpdateSearchParams(id);
  const currentPage = useSearchParams()?.get("page");
  const pagePostsLimit = useSearchParams()?.get("limit");
  return (
    <div className={cn("mt-5 text-end", className)}>
      <Pagination
        currentPage={Number(currentPage) || 1}
        itemsPerPage={Number(pagePostsLimit)|| 9}
        onPageChange={(pageNumber) =>
          updateSearchParam("page", pageNumber?.toString())
        }
        totalItems={totalItems}
        pageNeighbours={1}
      />
    </div>
  );
};

export default PaginationSection;
