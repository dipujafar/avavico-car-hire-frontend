import { IOrderData } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getDate()}, ${date.getFullYear()}`;
}

export function getYearsSince(dateInput: string): number {
  const inputDate = new Date(dateInput);
  const now = new Date();

  // Validate input
  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date string.");
  }

  let years = now.getFullYear() - inputDate.getFullYear();

  // Adjust if the month/day hasn't occurred yet this year
  const hasHadBirthdayThisYear =
    now.getMonth() > inputDate.getMonth() ||
    (now.getMonth() === inputDate.getMonth() &&
      now.getDate() >= inputDate.getDate());

  if (!hasHadBirthdayThisYear) {
    years -= 1;
  }

  return years < 0 ? 0 : years;
}

export function findOutRunningOrders(data: IOrderData[])  {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to 00:00:00

  return data?.filter(({ pickUp, dropOff }) => {
    const start = new Date(pickUp);
    const end = new Date(dropOff);

    start.setHours(0, 0, 0, 0); // normalize start
    end.setHours(0, 0, 0, 0);   // normalize end

    return today >= start && today <= end;
  });
}
