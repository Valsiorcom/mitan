"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Input } from "./Input";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  required?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>((
  { label, error, helper, required = false, className, disabled, ...props },
  ref
) => {
  const id = React.useId();

  return (
    <div className="w-full space-y-2">
      {label && (
        <Label
          htmlFor={id}
          className={cn(error && "text-red-600 dark:text-red-400")}
        >
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </Label>
      )}
      <Input
        id={id}
        ref={ref}
        disabled={disabled}
        className={cn(
          error &&
            "border-red-500 focus-visible:ring-red-500 dark:border-red-500"
        )}
        aria-invalid={!!error}
        aria-describedby={error || helper ? `${id}-message` : undefined}
        {...props}
      />
      {(error || helper) && (
        <p
          id={`${id}-message`}
          className={cn(
            "text-xs",
            error
              ? "text-red-600 dark:text-red-400"
              : "text-slate-500 dark:text-slate-400"
          )}
        >
          {error || helper}
        </p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";