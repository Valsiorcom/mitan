import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-950 dark:text-white">404</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Page not found
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button>Go Home</Button>
        </Link>
      </div>
    </main>
  );
}