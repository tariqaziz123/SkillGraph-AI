export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-4 w-32 animate-pulse rounded bg-slate-800" />

          <div className="mx-auto mt-5 h-12 max-w-2xl animate-pulse rounded-lg bg-slate-800" />

          <div className="mx-auto mt-4 h-6 max-w-xl animate-pulse rounded bg-slate-900" />

          <div className="mt-8 h-12 animate-pulse rounded-xl bg-slate-900" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-48 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/60"
            />
          ))}
        </div>
      </div>
    </main>
  );
}