"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-4",
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((
  { size = "md", className, ...props },
  ref
) => (
  <div
    ref={ref}
    role="status"
    aria-label="Loading"
    className={cn(
      "inline-block animate-spin rounded-full border-slate-300 border-t-slate-950 dark:border-slate-700 dark:border-t-slate-50",
      sizeClasses[size],
      className
    )}
    {...props}
  />
));

Spinner.displayName = "Spinner";