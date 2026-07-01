import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Mitan",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
          Welcome to Mitan
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Production-ready Next.js application with Relume design system,
          accessibility, and performance optimizations.
        </p>

        <section className="mt-12" aria-labelledby="features-heading">
          <h2
            id="features-heading"
            className="text-2xl font-semibold text-slate-950 dark:text-white mb-6"
          >
            Key Features
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Next.js 14
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Latest App Router with streaming and optimizations
              </p>
            </li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                TypeScript
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Full type safety and IDE support
              </p>
            </li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Accessible
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                WCAG AA compliant components and interactions
              </p>
            </li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Performance
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Lighthouse 95+, optimized images and bundles
              </p>
            </li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Dark Mode
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Seamless dark mode with system preference detection
              </p>
            </li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Components
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                30+ accessible UI components ready to use
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}