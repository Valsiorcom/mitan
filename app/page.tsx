import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Mitan",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
          Welcome to Mitan
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Production-ready Next.js application with Relume design system
        </p>
      </div>
    </main>
  );
}