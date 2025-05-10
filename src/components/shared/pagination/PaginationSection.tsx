"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const PaginationSection = ({
  pagePostsLimit = 9,
  totalItems = 30,
  className,
}: {
  pagePostsLimit?: number;
  totalItems?: number;
  className?: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className={cn("mt-5 text-end", className)}>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={totalItems}
        pageNeighbours={1}
      />
    </div>
  );
};

export default PaginationSection;
