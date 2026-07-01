"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 border-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        destructive:
          "border-red-600/50 bg-red-50 text-red-900 dark:border-red-600/50 dark:bg-red-900/20 dark:text-red-600",
        success:
          "border-green-600/50 bg-green-50 text-green-900 dark:border-green-600/50 dark:bg-green-900/20 dark:text-green-600",
        warning:
          "border-yellow-600/50 bg-yellow-50 text-yellow-900 dark:border-yellow-600/50 dark:bg-yellow-900/20 dark:text-yellow-600",
        info: "border-blue-600/50 bg-blue-50 text-blue-900 dark:border-blue-600/50 dark:bg-blue-900/20 dark:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  { className, variant, ...props },
  ref
) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-tight tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertIcon = ({
  variant,
  className,
}: {
  variant?: "default" | "destructive" | "success" | "warning" | "info";
  className?: string;
}) => {
  const icons = {
    default: <AlertCircle className={cn("h-4 w-4", className)} />,
    destructive: <XCircle className={cn("h-4 w-4", className)} />,
    success: <CheckCircle2 className={cn("h-4 w-4", className)} />,
    warning: <AlertCircle className={cn("h-4 w-4", className)} />,
    info: <Info className={cn("h-4 w-4", className)} />,
  };

  return icons[variant || "default"];
};

export { Alert, AlertTitle, AlertDescription, AlertIcon };