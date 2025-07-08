'use client';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonTableProps {
  rowCount?: number;
  columnCount?: number;
}

const TableSkeleton = ({ rowCount = 5, columnCount = 7 }: SkeletonTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Array.from({ length: columnCount }).map((_, i) => (
            <TableHead key={i}>
              <Skeleton className="h-4 w-24 rounded" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowCount }).map((_, rowIdx) => (
          <TableRow key={rowIdx}>
            {Array.from({ length: columnCount }).map((_, colIdx) => (
              <TableCell key={colIdx} className="py-4">
                <Skeleton className="h-4 w-full max-w-[150px] rounded" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
