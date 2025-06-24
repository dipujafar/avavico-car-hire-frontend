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
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

interface FilterSortProps {
  totalCars: number;
  limit: number;
}
export function FilterSort({ totalCars, limit }: FilterSortProps) {
  const updateSearchParam = useUpdateSearchParams();

  return (
    <div className="flex flex-row md:items-center justify-between w-full ">
      <div className="flex items-center md:gap-x-3 gap-x-1">
        <FiterIcons></FiterIcons>
        <div className="text-sm text-primary-gray font-bold truncate">
          {totalCars} items found
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center  border md:px-4 px-1 rounded-md">
          <span className="text-sm">Show:</span>
          <Select
            value={limit?.toString()}
            onValueChange={(value) => updateSearchParam("limit", value)}
          >
            <SelectTrigger className="h-8 w-[70px] border-none shadow-none focus-visible:ring-0 px-2 truncate">
              <SelectValue placeholder={limit?.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="18">18</SelectItem>
              <SelectItem value="24">24</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:flex items-center  border md:px-4 px-1 rounded-md hidden">
          <span className="text-sm truncate">Sort by:</span>
          <Select
            defaultValue="newest_post"
            onValueChange={(value) => updateSearchParam("sortBy", value)}
          >
            <SelectTrigger className="h-8 w-[150px] border-none shadow-none focus-visible:ring-0 px-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest_post">Newest Post</SelectItem>
              <SelectItem value="oldest_post">Oldest Post</SelectItem>
              <SelectItem value="most_popular">Most Popular</SelectItem>
              <SelectItem value="low_to_high">Price: Low to High</SelectItem>
              <SelectItem value="high_to_low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
