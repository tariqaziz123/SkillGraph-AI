import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <p className="text-6xl font-bold text-cyan-400">404</p>

        <h1 className="mt-4 text-3xl font-bold">
          Developer not found
        </h1>

        <p className="mt-3 text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
        >
          Back to Developers
        </Link>
      </div>
    </main>
  );
}