"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((
  { children, sidebar, header, footer, className },
  ref
) => (
  <div
    ref={ref}
    className={cn(
      "flex h-screen flex-col bg-white dark:bg-slate-950",
      className
    )}
  >
    {header && (
      <header className="border-b border-slate-200 dark:border-slate-800">
        {header}
      </header>
    )}

    <div className="flex flex-1 overflow-hidden">
      {sidebar && (
        <aside
          className="w-64 border-r border-slate-200 overflow-y-auto dark:border-slate-800"
          aria-label="Sidebar"
        >
          {sidebar}
        </aside>
      )}

      <main className="flex-1 overflow-y-auto" role="main">
        {children}
      </main>
    </div>

    {footer && (
      <footer className="border-t border-slate-200 dark:border-slate-800">
        {footer}
      </footer>
    )}
  </div>
));

Layout.displayName = "Layout";