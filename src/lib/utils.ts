import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeTitle(title: string): string {
  return title
      .toLowerCase() // convert to lowercase
      .trim() // remove leading/trailing spaces
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters except spaces and dashes
      .replace(/\s+/g, "-") // replace one or more spaces with a single dash
      .replace(/-+/g, "-"); // collapse multiple dashes into one
}
