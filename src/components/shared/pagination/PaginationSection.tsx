"use client";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const PaginationSection = ({pagePostsLimit=9, totalItems=30}: {pagePostsLimit?: number, totalItems?: number}) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="mt-10 text-end ">
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
