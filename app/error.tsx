"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {error.message || "An unexpected error occurred"}
        </p>
        <Button onClick={reset} className="mt-8">
          Try again
        </Button>
      </div>
    </main>
  );
}