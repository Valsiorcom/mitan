"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  actions?: React.ReactNode;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: (open: boolean) => void;
  className?: string;
}

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>((
  {
    logo,
    items = [],
    actions,
    mobileMenuOpen,
    onMobileMenuToggle,
    className,
  },
  ref
) => {
  const [isOpen, setIsOpen] = React.useState(mobileMenuOpen ?? false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsOpen(mobileMenuOpen ?? false);
  }, [mobileMenuOpen]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMobileMenuToggle?.(newState);
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <nav
      ref={ref}
      className={cn(
        "border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950",
        className
      )}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">{logo}</div>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-1"
          role="menubar"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              role="menuitem"
              aria-current={item.active ? "page" : undefined}
              aria-disabled={item.disabled}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-50",
                item.disabled
                  ? "text-slate-400 cursor-not-allowed"
                  : item.active
                  ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-slate-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              )}
              onClick={(e) => item.disabled && e.preventDefault()}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2" role="toolbar">
          {actions}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={menuButtonRef}
          onClick={handleToggle}
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-slate-50"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden border-t border-slate-200 dark:border-slate-800"
          role="navigation"
          aria-label="Mobile navigation"
          onKeyDown={handleMenuKeyDown}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                aria-disabled={item.disabled}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-50",
                  item.disabled
                    ? "text-slate-400 cursor-not-allowed"
                    : item.active
                    ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-slate-50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                )}
                onClick={(e) => item.disabled && e.preventDefault()}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div
            className="border-t border-slate-200 px-4 py-3 dark:border-slate-800"
            role="toolbar"
          >
            {actions}
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";