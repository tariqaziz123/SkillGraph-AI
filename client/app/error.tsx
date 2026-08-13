"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-red-400">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Unable to load this page
        </h1>

        <p className="mt-3 text-slate-400">
          We couldn't retrieve the requested information.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}