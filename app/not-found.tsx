export default function NotFound() {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950 px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-slate-950 dark:text-white">
              404
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Page not found
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-950 px-6 py-2 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus:ring-slate-50"
            >
              Go Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}