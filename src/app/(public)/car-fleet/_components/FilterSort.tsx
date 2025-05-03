"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiterIcons } from "@/components/icons";

interface FilterSortProps {
  totalItems?: number;
  defaultShowCount?: number;
  defaultSortBy?: string;
  onShowCountChange?: (count: number) => void;
  onSortChange?: (sort: string) => void;
}

export function FilterSort({
  totalItems = 12,
  defaultShowCount = 12,
  defaultSortBy = "Newest Post",
  onShowCountChange,
  onSortChange,
}: FilterSortProps) {
  const [showCount, setShowCount] = useState<number>(defaultShowCount);
  const [sortBy, setSortBy] = useState<string>(defaultSortBy);

  const handleShowCountChange = (value: string) => {
    const count = Number.parseInt(value);
    setShowCount(count);
    if (onShowCountChange) {
      onShowCountChange(count);
    }
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  return (
    <div className="flex flex-row md:items-center justify-between w-full ">
      <div className="flex items-center md:gap-x-3 gap-x-1">
        <FiterIcons></FiterIcons>
        <div className="text-sm text-primary-gray font-bold truncate">
          {totalItems} items found
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center  border md:px-4 px-1 rounded-md">
          <span className="text-sm">Show:</span>
          <Select
            value={showCount.toString()}
            onValueChange={handleShowCountChange}
          >
             <SelectTrigger className="h-8 w-[70px] border-none shadow-none focus-visible:ring-0 px-2 truncate">
              <SelectValue placeholder={showCount.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="48">48</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:flex items-center  border md:px-4 px-1 rounded-md hidden">
          <span className="text-sm truncate">Sort by:</span>
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="h-8 w-[150px] border-none shadow-none focus-visible:ring-0 px-2">
              <SelectValue placeholder={sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Newest Post">Newest Post</SelectItem>
              <SelectItem value="Oldest Post">Oldest Post</SelectItem>
              <SelectItem value="Most Popular">Most Popular</SelectItem>
              <SelectItem value="Price: Low to High">
                Price: Low to High
              </SelectItem>
              <SelectItem value="Price: High to Low">
                Price: High to Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
