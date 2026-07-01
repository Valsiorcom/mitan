"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  items?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  onItemClick?: (href: string) => void;
  className?: string;
  ariaLabel?: string;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((
  { items, onItemClick, className, ariaLabel = "Sidebar navigation" },
  ref
) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const [focusedItem, setFocusedItem] = React.useState<string | null>(null);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
    label: string,
    hasItems: boolean
  ) => {
    if (hasItems && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      toggleItem(label);
    }
  };

  const renderItems = (items: SidebarItem[], depth: number = 0) => (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>
          {item.items ? (
            <button
              onClick={() => toggleItem(item.label)}
              onKeyDown={(e) => handleKeyDown(e, item.label, true)}
              onFocus={() => setFocusedItem(item.label)}
              onBlur={() => setFocusedItem(null)}
              aria-expanded={expandedItems.has(item.label)}
              aria-label={`${item.label} ${expandedItems.has(item.label) ? "expanded" : "collapsed"}`}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
                item.disabled
                  ? "text-slate-400 cursor-not-allowed"
                  : item.active
                  ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-slate-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                focusedItem === item.label && "ring-2 ring-slate-950 dark:ring-slate-50"
              )}
            >
              <span className="flex items-center gap-2">
                {item.icon && (
                  <span className="w-5 h-5" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  expandedItems.has(item.label) ? "rotate-180" : ""
                )}
                aria-hidden="true"
              />
            </button>
          ) : (
            <a
              href={item.href}
              onClick={() => item.href && onItemClick?.(item.href)}
              onFocus={() => setFocusedItem(item.label)}
              onBlur={() => setFocusedItem(null)}
              aria-current={item.active ? "page" : undefined}
              aria-disabled={item.disabled}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                item.disabled
                  ? "text-slate-400 cursor-not-allowed pointer-events-none"
                  : item.active
                  ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-slate-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                focusedItem === item.label && "ring-2 ring-slate-950 dark:ring-slate-50"
              )}
            >
              {item.icon && (
                <span className="w-5 h-5" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              {item.label}
            </a>
          )}

          {item.items && expandedItems.has(item.label) && (
            <div className={cn("ml-2 border-l border-slate-200 dark:border-slate-800")}>
              {renderItems(item.items, depth + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-4 p-4", className)}
      role="navigation"
      aria-label={ariaLabel}
    >
      {renderItems(items)}
    </div>
  );
});

Sidebar.displayName = "Sidebar";