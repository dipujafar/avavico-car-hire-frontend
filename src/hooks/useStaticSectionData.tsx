import { getYearsSince } from "@/lib/utils";
import { useGetAllStatsQuery } from "@/redux/api/statsApi";
import React from "react";

export default function useStaticSectionData() {
  const { data, isLoading } = useGetAllStatsQuery(undefined);
  const experience = getYearsSince("1 July 2025") || 1;

  const staticSectionData = [
    {
      _id: 1,
      number: data?.data?.completeOrders,
      title: "Completed Orders",
    },
    {
      _id: 2,
      number: data?.data?.happyCustomers,
      title: "Happy Customers",
    },
    {
      _id: 3,
      number: data?.data?.cars,
      title: "Vehicles Fleet",
    },
    {
      _id: 4,
      number: experience,
      title: "Years Experience",
    },
  ];
  return { staticSectionData, isLoading };
}
