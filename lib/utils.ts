import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines classnames using clsx and tailwind-merge
 * Handles class merging to prevent conflicting Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a memoized className combiner for repeated use
 */
export function createClassNameMemo(
  ...defaultClasses: ClassValue[]
) {
  const base = cn(...defaultClasses);
  return (...classes: ClassValue[]) => cn(base, ...classes);
}
