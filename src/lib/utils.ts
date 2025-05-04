import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`
}
