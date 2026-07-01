"use client";

import { ReactNode } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
              Something went wrong
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {error.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={reset}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-950 px-6 py-2 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus:ring-slate-50"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}