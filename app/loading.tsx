export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-950 dark:border-slate-800 dark:border-t-slate-50" />
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Loading...
        </p>
      </div>
    </div>
  );
}