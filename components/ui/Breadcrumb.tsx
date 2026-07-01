"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = React.forwardRef<
  HTMLDivElement,
  BreadcrumbProps
>(({ items, className }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 text-sm", className)}
    role="navigation"
    aria-label="Breadcrumb"
  >
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && (
          <ChevronRight
            className="h-4 w-4 text-slate-400"
            aria-hidden="true"
          />
        )}
        {item.href ? (
          <a
            href={item.href}
            onClick={item.onClick}
            className={cn(
              "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors",
              item.disabled &&
                "pointer-events-none text-slate-400 dark:text-slate-600"
            )}
          >
            {item.label}
          </a>
        ) : (
          <span
            className={cn(
              "text-slate-900 font-medium dark:text-slate-50",
              index === items.length - 1 &&
                "text-slate-500 dark:text-slate-400"
            )}
          >
            {item.label}
          </span>
        )}
      </React.Fragment>
    ))}
  </div>
));

Breadcrumb.displayName = "Breadcrumb";