"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-slate-200 bg-white text-slate-950 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-800",
        primary:
          "bg-slate-950 text-white hover:bg-slate-900 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200",
        success:
          "border border-green-600 bg-green-50 text-green-900 dark:border-green-600 dark:bg-green-900/30 dark:text-green-300",
        destructive:
          "border border-red-600 bg-red-50 text-red-900 dark:border-red-600 dark:bg-red-900/30 dark:text-red-300",
        warning:
          "border border-yellow-600 bg-yellow-50 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300",
        info: "border border-blue-600 bg-blue-50 text-blue-900 dark:border-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
        outline:
          "border border-slate-200 text-slate-950 dark:border-slate-800 dark:text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };